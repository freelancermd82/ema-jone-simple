
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart; //1 number system
    // 2 number system 
    // const {cart} = props;
    // console.log(cart)
    console.log(cart);
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total shipping: $ {totalShipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;