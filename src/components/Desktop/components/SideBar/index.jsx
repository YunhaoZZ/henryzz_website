import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from 'axios'
import '../../../../ipv4'

const local = global.config.ipv4

axios.defaults.baseURL = "http://" + local + ":5000/api/"

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  // axios.defaults.baseURL = "http://localhost:5000/api/"

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      
    </div>
  );
}