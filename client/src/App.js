import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import ProductScreen from './components/ProductScreen'
import CartScreen from './components/CartScreen'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div style={{ backgroundImage: 'url(/images/ecommerce.png' }}>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
