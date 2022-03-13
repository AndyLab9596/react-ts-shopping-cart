import React from 'react'
import { CartType } from '../../StateManagement/reducer'

const CartItem: React.FC<CartType> = ({ id, img, title, price, amount }) => {
    return (
        <article className='cart__item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='cart__item__price'>${price}</h4>
                {/* remove button */}
                <button className='cart__item__remove'>
                    remove
                </button>
            </div>
            <div>
                {/* increase amount */}
                <button className='cart__item-adjust'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                {/* amount */}
                <p className='cart__item__amount'>{amount}</p>
                {/* decrease amount */}
                <button className='cart__item-adjust'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default CartItem