pragma solidity ^0.4.14;


import "./Fundament.sol";
import "./PaymentModel.sol";


/// @title Safe-Pay, the safe way to send your ether
contract SafePay is AccountRegistry, RefundablePayments, Guarded {

    /// @dev The constructor takes an initial price for address registry
    function SafePay(uint initialPrice) AccountRegistry(initialPrice) {
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
    function pay(uint amount, address to) payable costs(amount) returns (uint receipt) {
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
    function recv(address from) returns (uint receipt) {
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
    function cancel(uint amount, address to)  returns (uint receipt) {
        address from = msg.sender; // the payment is being cancelled by msg.sender
        _cancel(from, to, amount);
        receipt = genReceipt(to, from, amount, block.number, true);
    }
    
    /**
     * @dev refund the payment (called by receiver), reverses the transaction making it available for withdrawal
     */
    function refund(address from) returns (uint receipt) {
        address to = msg.sender; // the payment is being refunded by msg.sender
        uint amount = qIn[from][to];

        _refund(from, to, amount);

        // Finally log the success refund.
        LogPaymentRefunded(from, to, amount);
        receipt = genReceipt(to, from, amount, block.number, true);
    }

    /// @dev for a small fee an account can have payments automatically received
    /// @dev this is disabled by default so that payments can be cancelled if sent incorrectly
    function enableAutoReceive() {
        super.register();
    }

    /// @dev for a small fee an account can have payments processed in a queue again (this is the default)
    function disableAutoReceive() {
        super.unregister();
    }

    /* public
     */

    /// @title SafePay version number
    string public version = "0.9a";

    /// @title SafePay friendly name
    string public friendlyName = "SafePay";
    
    
    // internal
    bool private enableDonations;

    // private
    using IterableMapping for IterableMapping.Map;

    mapping (address => mapping(address => uint)) private qIn;
    // mapping (address => address[]) private qOut;
    mapping (address => IterableMapping.Map) private qOut;

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

