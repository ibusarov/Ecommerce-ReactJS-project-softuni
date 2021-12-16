import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import ProductScreen from './components/ProductScreen'
import CartScreen from './components/CartScreen'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Annoucement from './components/Announcement'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import Profile from './components/Profile'
import Shipping from './components/Shipping'
import Payment from './components/Payment'
import PlaceOrder from './components/PlaceOrder'

function App() {
  return (
    <div style={{ backgroundImage: 'url(/images/ecommerce.png' }}>
      <Annoucement />
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/placeorder' element={<PlaceOrder />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
