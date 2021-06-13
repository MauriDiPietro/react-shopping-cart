import React from 'react';

function Cart({cartItems}) {
    return (
        <div>
            {cartItems.length === 0 ?<div className='cart cart-header'>Cart is empty</div>
            :
            <div className='cart cart-header'>
                {cartItems.length} in the cart{' '}
            </div>
            } 
        </div>
    )
}

export default Cart;