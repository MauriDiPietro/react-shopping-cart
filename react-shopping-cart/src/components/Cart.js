import React from 'react';

function Cart(props) {
    return (
        <div>
        <div>
            {props.cartItems.length === 0 ? (
                <div className='cart cart-header'>Carrito vacío</div>
            ):(
                <div className='cart cart-header'>{props.cartItems.length} productos en el carrito{" "}</div>
            )
            }
        </div>
        <div>
            <div className='cart'>
                <ul className='cart-items'>
                    {props.cartItems.length ? props.cartItems.map(item=>(
                        <li key={item._id}>
                            <div>
                                <img src={props.cartItems.image} alt={item.title}></img>
                            </div>
                            <div>
                                <div>
                                    {item.title}
                                </div>
                                <button onClick={props.removeFromCart(item)}>
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))
                :
                <div>
                    <p></p>
                </div>
                }
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Cart;