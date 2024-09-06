import { Route, Routes } from 'react-router-dom'
import './App.css'
import List from './components/List/List'
import Navbar from './components/Navbar/Navbar'
import { About, Contact, Home } from "./components/Pages"
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
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <h1>Internal API test</h1>
          <List />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
