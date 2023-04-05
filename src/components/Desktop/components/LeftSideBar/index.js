import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { useEffect, useState } from 'react'
// import Pic from '../../../../assets/images/profilepic.jpg'
import { Link } from "react-router-dom";
import { useContext } from 'react'
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

    // console.log(user.profilePic=="")
    // console.log(typeof(user.profilePic))

    return (
        <div className='navBar-bigScreen'>
            <div className="top">
                {user ? (
                    <Link className="link-profpic toplink" to="/blog-settings">
                        {user.profilePic === ""? (<img
                            className="topImg"
                            // src={user.profilePic != ""? (PF+user.profilePic) : {Pic}}
                            // src = {PF+user.profilePic}
                            src = {Pic}
                            alt=""
                        />):
                        (<img
                            className="topImg"
                            // src={user.profilePic != ""? (PF+user.profilePic) : {Pic}}
                            src = {PF+user.profilePic}
                            // src = {Pic}
                            alt=""
                        />)}
                    </Link>
                ) : (
                    <></>
                )}
                <i className="topSearchIcon fas fa-search toplink"></i>
            </div>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
                    <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="bl blog-write-link" to="/blog-write">
                    Write
                </NavLink>
                {!user ? (<><NavLink exact="true" activeclassname="active" className="bl blog-login-link" to="/blog-login">
                    Login
                </NavLink>
                    <NavLink exact="true" activeclassname="active" className="bl blog-register-link" to="/blog-register">
                        Register
                    </NavLink></>) : (<>
                        {/* <NavLink exact="true" activeclassname="active" className="bl blog-settings-link" to="/blog-settings">
                            Setting
                        </NavLink> */}
                        {/* <NavLink exact="true" activeclassname="active" className=" blog-single-link" to="/blog-single">
                            Single
                        </NavLink> */}

                    </>)}
                
                {user && <NavLink onClick={handleLogout} className="bl blog-logout-link" to="/blog-login">
                    Log out
                </NavLink>}


            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yunhao-zhang-henry/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/YunhaoZZ">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>


    )
}



export default LeftSideBar;