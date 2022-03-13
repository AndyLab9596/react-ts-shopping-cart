import React from 'react'
import { useShopContext } from '../../StateManagement/context'
import CartItem from '../Sub/CartItem'

const CartContainer = () => {
  const { clearCart, shopValue } = useShopContext();
  if (shopValue.cart.length === 0) {
    return (
      <section className='cart'>
        {/* header */}
        <header>
          <h2>your bag</h2>
          <h4 className='cart__empty' >
            is currently empty
          </h4>
        </header>
      </section>
    )
  }


  return (
    <section className='cart'>
      {/* header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* Cart items */}
      <div>
        {shopValue.cart.map((c) => (
          <CartItem key={c.id} {...c} />
        ))}
      </div>
      {/* Cart footer */}
      <footer>
        <hr />
        <div className='cart__total'>
          <h4>
            total <span>{shopValue.total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart} >
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer