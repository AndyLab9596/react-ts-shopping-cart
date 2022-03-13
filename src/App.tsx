import React from 'react'
import Navbar from './components/Main/Navbar'
import CartContainer from './components/Main/CartContainer'
import { useShopContext } from './StateManagement/context'

const App = () => {
  const { shopValue } = useShopContext();

  if (shopValue.loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App