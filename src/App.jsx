import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path={'*'} element={<Books/>}/>
        </Routes>
    </>
  )
}

export default App