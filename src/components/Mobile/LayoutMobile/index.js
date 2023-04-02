import './index.scss';
import TopBarMobile from '../TopBarMobile';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App-SmallScreen">
            <TopBarMobile />
            <div className="page">
                <span className="tags top-tags" >&lt;body&gt;</span>

                <Outlet />

                <span className="tags btm-tags" >
                    &lt;/body&gt;
                    <br />
                    <span className = "bottom-tag-html">&lt;html&gt;</span>
                </span>
                
            </div>
        </div>
    );
}

export default Layout;