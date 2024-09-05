import { Route, Routes } from 'react-router-dom'
import './App.css'
import List from './components/List/List'
import Navbar from './components/Navbar/Navbar'
import Rest from './components/Rest/Rest'
import { About, Contact, Home } from "./components/Pages"

const App = () => {

  return (
    <div className='bigwall'>
      <Navbar />
      <div className='wall'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1>Internal API test</h1>
        <List />
      </div>
    </div>
  )
}

export default App
