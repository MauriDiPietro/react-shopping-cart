import React from 'react';
import formatCurrency from '../util'


function Products(props) {
    return (
        <div>
            <ul className='products'>
                {
                    props.products.map(product=>(
                        <li key={product.id}>
                             <div className='product'>
                                 <a href={'#' + product.id}>
                                     <img width='400px' height='400px' src={product.image} alt={product.title} />
                                     <p>{product.title}</p>
                                 </a>
                                 <div className='product-price'>
                                     <div>
                                         {formatCurrency(product.price)}
                                     </div>
                                     <button className='button-primary'>
                                         Add to Cart
                                     </button>
                                 </div>
                            </div>   
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products;