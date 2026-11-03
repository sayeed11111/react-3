import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header search={search} setSearch={setSearch} cartCount={cart.length} />
      <Main search={search} onAddToCart={addToCart} />
      <Footer />
    </div>
  )
}

export default App