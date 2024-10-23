// common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

// main
import Home from './components/main/Home';

// sub
import AboutAvallion from './components/sub/AboutAvallion';

// routes
import { Route, Routes, useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  
  return (
    <>
    <Header />
      <Routes location={location} key ={location.pathname}>
        <Route path='/' element={<Home/ >}/>
        <Route path='/aboutAvallion' element={<AboutAvallion/>}/>
      </Routes>
    <Footer />
    </>
  ) 
}
