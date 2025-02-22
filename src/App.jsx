
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Calculator from './pages/Calculator'
import StartPage from './pages/StartPage'

function App() {

  return (
    <>
    <Header/>
    <Routes>

    <Route path={"/"} element={<Home/>}/>
    <Route path={'/aboutus'} element={<Aboutus/>}/>
    <Route path={'/calculator'} element={<Calculator/>}/>
    <Route path={'/Startpage'} element={<StartPage/>}/>



</Routes>
    <Footer/>

      
    </>
  )
}

export default App
