import React from 'react'
import CartItem from '../Sub/CartItem'

const CartContainer = () => {


  // return (
  //   <section className='cart'>
  //     {/* header */}
  //     <header>
  //       <h2>your bag</h2>
  //       <h4 className='cart__empty' >
  //         is currently empty
  //       </h4>
  //     </header>
  //   </section>
  // )

  return (
    <section className='cart'>
      {/* header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* Cart items */}
      <div>
        <CartItem />
      </div>
      {/* Cart footer */}
      <footer>
        <hr />
        <div className='cart__total'>
          <h4>
            total <span>4</span>
          </h4>
        </div>
        <button className='btn clear-btn'>
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer