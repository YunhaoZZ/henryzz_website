import './App.scss';
import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import LayoutMobile from './components/LayoutMobile'
// import { Desktop } from './components/desktop.component'
// import { Mobile } from './components/mobile.component'
// import { useMediaQuery } from 'react-responsive'
import React, { useContext } from 'react'

// import { Routes, Route } from 'react-router-dom'
import Layout from './components/Desktop//Layout'
import Home from './components/Desktop/pages/Home'
import About from './components/Desktop/pages/About'
import Contact from './components/Desktop/pages/Contact'
import Blog from './components/Desktop/pages/Blog/'
import Write from './components/Desktop/pages/Write'
import Settings from './components/Desktop/pages/Setting'
import Login from './components/Desktop/pages/Login'
import Single from './components/Desktop/pages/Single'
import Register from './components/Desktop/pages/Register'
import { Context } from './components/Desktop/context/Context';



function App() {

  const {user} = useContext(Context);
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />      {/* default route */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>

    );
  
}

export default App;
