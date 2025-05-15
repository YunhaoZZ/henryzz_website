import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBlog, faBars, faClose, faProjectDiagram, faP, faProcedures, faList, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faRProject } from '@fortawesome/free-brands-svg-icons'
// import { useEffect, useState } from 'react'
// import Pic from '../../../../assets/images/profilepic.jpg'
import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import Pic from '../../../../assets/images/Default_pfp.svg.png'
import '../../../../ipv4'

const local = global.config.ipv4


const LeftSideBar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = local + "/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const [showNav, setShowNav] = useState(false);

    // console.log(user.profilePic=="")
    // console.log(typeof(user.profilePic))

    return (
        <div className='navBar'>
            <div className="top">
                {/* {user ? (
                    <Link className="link-profpic toplink" to="/blog-settings">
                        {user.profilePic === "" ? (<img
                            className="topImg"
                            // src={user.profilePic != ""? (PF+user.profilePic) : {Pic}}
                            // src = {PF+user.profilePic}
                            src={Pic}
                            alt=""
                        />) :
                            (<img
                                className="topImg"
                                // src={user.profilePic != ""? (PF+user.profilePic) : {Pic}}
                                src={PF + user.profilePic}
                                // src = {Pic}
                                alt=""
                            />)}
                    </Link>
                ) : (
                    <></>
                )}
                <i className="topSearchIcon fas fa-search toplink"></i> */}
            </div>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                {/* <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
                </NavLink> */}
                <NavLink exact="true" activeclassname="active" className="posts-link" to="/posts" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#CADF9E"
                    size="3x"
                    className='close-icon' />



            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bchenryzzz">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yunhao-zhang-henry/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/YunhaoZZ">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#CADF9E"
                size="3x"
                className='hamburger-icon' />
        </div>


    )
}



export default LeftSideBar;