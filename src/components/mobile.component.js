import { Routes, Route } from 'react-router-dom'
import LayoutMobile from './Mobile/LayoutMobile'


export const Mobile = () => {

    return (

        <Routes>
            <Route path='/' element={<LayoutMobile />} />
        </Routes>

    );
}

