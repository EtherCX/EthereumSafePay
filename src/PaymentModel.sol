pragma solidity ^0.4.14;


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


contract RefundablePayments is RefundablePaymentModel {    
}
