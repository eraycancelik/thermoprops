import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { About, UnitConverter, Calculator } from "./components/Pages"
import Icon from './components/Navbar/Icon'
import Footer from './components/Footer/Footer'
const App = () => {

  return (
    <div className='bigwall'>
      <div className='header'>
        <Icon />
        <Navbar />
      </div>
      <div className='wall'>
        <div className="conta">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/home" element={<Calculator />} />
            <Route path="/unit_converter" element={<UnitConverter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
