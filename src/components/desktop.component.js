import { Routes, Route } from 'react-router-dom'
import Layout from './Desktop//Layout'
import Home from './Desktop/pages/Home'
import About from './Desktop/pages/About'
import Contact from './Desktop/pages/Contact'
import Blog from './Desktop/pages/Blog/'
import Write from './Desktop/pages/Write'
import Settings from './Desktop/pages/Setting'
import Login from './Desktop/pages/Login'
import Single from './Desktop/pages/Single'
import Register from './Desktop/pages/Register'



export const Desktop = () => {
    const currentUser = false;
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />      {/* default route */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
                <Route path="post" element={<Blog />} />
                <Route path="post/:id" element={<Single />} />
                <Route path="blog-login" element={currentUser ? <Blog /> : <Login />} />
                <Route path="blog-write" element={currentUser ? <Write /> : <Login />} />
                <Route path="blog-settings" element={currentUser ? <Settings /> : <Login />} />
                <Route path="blog-register" element={currentUser ? <Blog /> : <Register />} />
            </Route>
        </Routes>

    );
}


