pragma solidity ^0.4.14;



/// @dev Models a uint -> address mapping where it is possible to iterate over all keys.
library IterableMapping {
    struct Map {
        mapping(address => IndexValue) data;
        KeyFlag[] keys;
        uint size;
    }
    struct IndexValue { uint keyIndex; uint value; }
    struct KeyFlag { address key; bool deleted; }

    function insert(Map storage self, address key, uint value) returns (bool replaced) {
        uint keyIndex = self.data[key].keyIndex;
        self.data[key].value = value;
        if (replaced = (keyIndex > 0)) {
        } else {
            keyIndex = self.keys.length++;
            self.data[key].keyIndex = keyIndex + 1;
            self.keys[keyIndex].key = key;
            self.size++;
        }
    }

    function remove(Map storage self, address key) returns (bool success) {
        uint keyIndex = self.data[key].keyIndex;
        if (keyIndex == 0)
            return false;
        
        delete self.data[key];
        self.keys[keyIndex - 1].deleted = true;
        self.size--;
    }

    function contains(Map storage self, address key) returns (bool) {
        return self.data[key].keyIndex > 0;
    }

    function iterateStart(Map storage self) returns (uint keyIndex) {
        return iterateNext(self, uint(-1));
    }

    function iterateValid(Map storage self, uint keyIndex) returns (bool) {
        return keyIndex < self.keys.length;
    }

    function iterateNext(Map storage self, uint keyIndex) returns (uint) {
        keyIndex++;
        while (keyIndex < self.keys.length && self.keys[keyIndex].deleted) {
            keyIndex++;
        }
        return keyIndex;
    }

    function iterateGet(Map storage self, uint keyIndex) returns (address key, uint value) {
        key = self.keys[keyIndex].key;
        value = self.data[key].value;
    }
}


/// @title Fundamental Contract
/// @dev The Fundamental contract contains useful functions and modifiers for other contracts to use.
contract Fundament {
    uint public creationTime = now;

    /// @dev requires that a condition is met
    modifier meets(bool condition) {
        require(condition);
        _;
    }

    /// @dev requires that a condition not be met
    modifier fails(bool condition) {
        require(!condition);
        _;
    }

    /// @dev If this modifier is used, it will prepend a check that only passes
    /// @dev if the function is called from the given address.
    modifier onlyby(address account) {
        require(msg.sender == account);
        _;
    }

    /// @dev If this modifier is used, it will prepend a check that only passes
    /// @dev if the function is not called from the given address.
    modifier notby(address account) {
        require(account != 0);
        _;
    }

    modifier isdefined(address value) {
        require(value != 0);
        _;
    }

    modifier isundefined(address value) {
        require(value == 0);
        _;
    }

/*    modifier isdefined(uint value) {
        require(value != 0);
        _;
    }

    modifier isundefined(uint value) {
        require(value == 0);
        _;
    }*/

    // Assure that the message came with enough to
    // cover the required amount
    modifier sentmorethan(uint amount) {
        require(msg.value >= amount);
        _;
    }

    // This modifier requires a certain
    // fee being associated with a function call.
    // If the caller sent too much, he or she is
    // refunded, but only after the function body.
    // This was dangerous before Solidity version 0.4.0,
    // where it was possible to skip the part after `_;`.
    modifier costs(uint amount) {
        require(msg.value >= amount);
        _;
        if (msg.value > amount)
        msg.sender.transfer(msg.value - amount);
    }

    // Modifiers can receive arguments:
    modifier requiresfunding(uint price) {
        require(msg.value >= price);
        _;
    }

    modifier onlyafter(uint timeInterval) {
        require(creationTime+timeInterval <= now);
        _;
    }

    function notBy(address a) internal notby(a) returns(bool) { return true; }
    function onlyBy(address a) internal onlyby(a) returns(bool) { return true; }
    function isDefined(address a) private isdefined(a) returns(bool) { return true; }
    function isUndefined(address a) private isundefined(a) returns(bool) { return true; }
    function onlyAfter(uint interval) private onlyafter(interval) returns(bool) { return true; }
}


/// @title Ownable Contract
/// @dev Base class for contracts that know who owns it.
contract Ownable is Fundament {
    modifier onlyowner {
        require(onlyBy(owner));
        _;
    }
    
    modifier notowner {
        require(notBy(owner));
        _;
    }

    modifier isowned {
        require(isOwned());
        _;
    }

    modifier isdisowned {
        require(isDisowned());
        _;
    }

    function isOwned() isdefined(owner) returns (bool) {return true;}
    function isDisowned() isundefined(owner) returns (bool) {return true;}

    address owner = msg.sender;
}


/// @title Mortal Contract
/// @dev A contract that is destroyed upon demand by the owner
contract Mortal is Ownable {
    /// If there is a serious problem, the owner my choose to destroy the contract.
    function destroy() onlyowner {
        selfdestruct(owner);
    }
}


/// @title Transferable Contract
/// @dev A contract that may be transferred to another owner
contract Transferable is Mortal {
    /// Make `newOwner` the new owner of this contract.
    function grantOwnership(address newOwner) onlyowner {
        owner = newOwner;
    }

    /// Erase ownership information.
    /// May only be called 2 weeks after
    /// the contract has been created.
    function disown() onlyowner onlyafter(2 weeks) {
        owner = 0;
    }

    /// Gain ownership.
    function takeOver() notowner isdisowned {
        owner = msg.sender;
    }
}


/// @title Account Registry
contract AccountRegistry is Transferable {
    function AccountRegistry(uint initialPrice) {
        if (initialPrice == uint(-1))
            price = 10 finney;
        else
            price = initialPrice;
    }

/*    modifier isregistered(address acct) {
        require(isRegistered(acct));
        _;
    }

    modifier isunregistered(address acct) {
        require(isUnregistered(acct));
        _;
    }*/
    
    modifier isregistered() {
        require(isRegistered(msg.sender));
        _;
    }
    
    modifier isunregistered() {
        require(isUnregistered(msg.sender));
        _;
    }
    
    function isRegistered(address acct) internal returns(bool) {
        return registry[acct];
    }

    function isUnregistered(address acct) internal returns(bool) {
        return !registry[acct];
    }

    /// Adds the sender's address to the registry
    function register() internal notowner isunregistered costs(price) {
        registry[msg.sender] = true;
    }

    /// Removes the sender's address from the registry
    function unregister() internal notowner isregistered costs(price) {
        registry[msg.sender] = false;
    }

    /// Allows the owner to modify the registration status of an account
    function registerAnother(address acct, bool ok) internal onlyowner {
        registry[acct] = ok;
    }

    /// Changes the price registry for new registrants.
    function changePrice(uint _price) onlyowner {
        price = _price;
    }

    uint price;
    mapping (address => bool) registry;
}


contract Guarded {
    bool _locked;
    modifier unsafe() {
        require(!_locked);
        _;
        assert(!_locked);
    }

    /// @dev re-entrant
    /// @dev uses _locked to protect against re-entry, _locked must never be allowed
    /// @dev to change in any other way.
    modifier reentrant() {
        require(!_locked);
        _locked = true;
        _;
        assert(_locked);
        _locked = false;
    }
}


/// @title Payments Event Emitter
contract PaymentModelEventEmitter {
    event LogPaymentSent(address from, address to, uint amount);
    event LogPaymentRecv(address from, address to, uint amount);
}


/// @title Payment Model
/// @dev Interface for contracts that implement a payment model with which a
/// payment of a certain amount may be sent to and received by another address.
contract PaymentModel is PaymentModelEventEmitter {
    
    /**
     * @dev Make a transfer or payment transfer safely.
     * @dev Used to make a payment of a certain amount to a certain address.
     * @dev A sender uses this to make payment, initiating the transaction
     * 
     * @param amount {uint} Amount of the payment (in wei)
     * @param to {address} Address of the recipient
     * @return receipt {uint} Receipt acknowledging the payment in the amount given
     * was sent to the given address
     */
    function pay(uint amount, address to) payable returns (uint receipt);

    /**
     * @dev Receive a transfer or payment made to you.
     * @dev Used to receive a payment that has been made to your address.
     * @dev A receiver uses this to receive a pending payment completing the transaction by withdrawal
     * 
     * @param from {address} Address of the payer
     * @return receipt {uint} Receipt acknowleging the payment was received
     */
    function recv(address from) returns (uint receipt);
}


/// @title Refundable Payments Event Emitter
contract RefundablePaymentModelEventEmitter {
    event LogPaymentCancelled(address indexed from, address indexed to, uint amount);
    event LogPaymentRefunded(address indexed from, address indexed to, uint amount);
}


/// @title Refundable Payments
contract RefundablePaymentModel is PaymentModel, RefundablePaymentModelEventEmitter {

    /// @dev sender cancels after pay(), but before recv(), completes the transaction by withdrawal
    function cancel(uint amount, address to) returns (uint receipt);
    
    /// @dev refund the payment (called by receiver), reverses the transaction making it available for withdrawal
    function refund(address from) returns (uint receipt);  

}


contract RefundablePayments is RefundablePaymentModel { }


/// @title Safe-Pay, the safe way to send your ether
contract SafePay is AccountRegistry(uint(-1)), RefundablePayments, Guarded {

    /// @dev The constructor takes an initial price for address registry
    function SafePay() {
        enableDonations = false;
    }

    // fallback function (succeeds only if donations are enabled)
    function() {
        require(enableDonations);
    }

    /// @dev convenience function used to calculate a receipt based on input data
    function genReceipt(
        address from,
        address to,
        uint amount,
        uint blockNumber,
        bool reversal
    )   public
        constant
        returns (uint)
    {
        require(block.number >= blockNumber);
        var pbh = uint(block.blockhash(blockNumber - 1));
        if (reversal)
            return ~uint(keccak256((~uint(to))^pbh) ^ keccak256((~uint(from))^pbh) ^ keccak256((~amount)^pbh));
        else
            return uint(keccak256(uint(to)^pbh) ^ keccak256(uint(from)^pbh) ^ keccak256(amount^pbh));
    } 

    /**
     * @dev Make a transfer or payment transfer safely.
     * @dev Used to make a payment of a certain amount to a certain address.
     * @dev A sender uses this to make payment, initiating the transaction
     * 
     * @param amount {uint} Amount of the payment (in wei)
     * @param to {address} Address of the recipient
     * @return receipt {uint} Receipt acknowledging the payment in the amount given
     * was sent to the given address
     */
    function pay(uint amount, address to) public payable costs(amount) returns (uint receipt) {
        address from = msg.sender; // the payment is being sent by msg.sender
        _pay(from, to, amount);
        receipt = genReceipt(from, to, amount, block.number, false);
    }

    /**
     * @dev Receive a transfer or payment made to you.
     * @dev Used to receive a payment that has been made to your address.
     * @dev A receiver uses this to receive a pending payment completing the transaction by withdrawal
     * 
     * @param from {address} Address of the payer
     * @return receipt {uint} Receipt acknowleging the payment was received
     */
    function recv(address from) public returns (uint receipt) {
        address to = msg.sender; // the payment is being received by msg.sender
        uint amount = qIn[from][to];

        require(amount > 0);
        assert(this.balance >= amount);

        _rcv(from, to, amount);
        receipt = genReceipt(from, to, amount, block.number, false);
    }

    // function recvAll() isregistered returns (uint[] Receipt) {
    //     if (registry[msg.sender]) {
    //         // TODO;
    //     }
    // }

    /**
     * @dev sender cancels after pay(), but before recv(), completes the transaction by withdrawal
     */
    function cancel(uint amount, address to) public returns (uint receipt) {
        address from = msg.sender; // the payment is being cancelled by msg.sender
        _cancel(from, to, amount);
        receipt = genReceipt(to, from, amount, block.number, true);
    }
    
    /**
     * @dev refund the payment (called by receiver), reverses the transaction making it available for withdrawal
     */
    function refund(address from) public returns (uint receipt) {
        address to = msg.sender; // the payment is being refunded by msg.sender
        uint amount = qIn[from][to];

        _refund(from, to, amount);

        // Finally log the success refund.
        LogPaymentRefunded(from, to, amount);
        receipt = genReceipt(to, from, amount, block.number, true);
    }

    /// @dev for a small fee an account can have payments automatically received
    /// @dev this is disabled by default so that payments can be cancelled if sent incorrectly
    function enableAutoReceive() public {
        super.register();
    }

    /// @dev for a small fee an account can have payments processed in a queue again (this is the default)
    function disableAutoReceive() public {
        super.unregister();
    }

    /* public
     */

    /// @title SafePay version number
    string public version = "0.9.1a";

    /// @title SafePay friendly name
    string public friendlyName = "SafePay";
    
    
    // internal
    bool private enableDonations;

    // private
    using IterableMapping for IterableMapping.Map;

    /// @dev a mapping between sender, receivers and amount sent
    mapping (address => mapping(address => uint)) private qIn;

    // @dev a mapping between receivers, senders and amount sent
    mapping (address => IterableMapping.Map) private qOut;

    /// @dev implementation of pay
    function _pay(address from, address to, uint amount) private reentrant {
        require(qIn[from][to] == 0);
        uint pending = qOut[to].data[from].value;

        if (registry[to]) {
            to.transfer(amount);
            LogPaymentSent(from, to, amount);
            LogPaymentRecv(from, to, amount);
        } else {
            qIn[from][to] = amount;
            qOut[to].insert(from, amount+pending);
            LogPaymentSent(from, to, amount);
        }
    }

    /// @dev implementation of recv
    function _rcv(address from, address to, uint amount) private reentrant {
        uint pending = qOut[to].data[from].value;
        require(pending >= amount);
        require(qIn[from][to] >= amount);

        pending -= amount;
        qIn[from][to] -= amount;
        qOut[to].insert(from, pending);

        to.transfer(amount);
        LogPaymentRecv(from, to, amount);
    }

    /// @dev from and to correspond to the original payment that's being cancelled
    function _cancel(address from, address to, uint amount) private reentrant {
        uint pending = qOut[to].data[from].value;
        require(pending >= amount);
        require(qIn[from][to] >= amount);

        pending -= amount;
        qIn[from][to] -= amount;
        qOut[to].insert(from, pending);

        from.transfer(amount);
        LogPaymentCancelled(from, to, amount);
    }

    /// @dev from and to correspond to the original payment that's being refunded
    function _refund(address from, address to, uint amount) private reentrant {
        uint pending = qOut[to].data[from].value;
        require(pending >= amount);
        require(qIn[from][to] >= amount);

        from.transfer(amount);
        qIn[from][to] -= amount;
        pending -= amount;
        qOut[to].insert(from, pending);

        LogPaymentRefunded(from, to, amount);
        LogPaymentSent(to, from, amount);
        LogPaymentRecv(to, from, amount);
    }
    
    // function _reducePending(address from, address to, uint amount) {
    // }
}



