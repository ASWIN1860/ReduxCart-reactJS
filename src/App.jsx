import './App.css'
import {Route,Routes} from 'react-router-dom'
import Landing from './pages/Landing'
import Details from './pages/Details'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='details/:id' element={<Details/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
