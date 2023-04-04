// import { Router } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Sidebar from '../../components/SideBar';
import axios from "axios";
import './index.scss';
import { useEffect, useState } from 'react';
import '../../../../ipv4'

const local = global.config.ipv4

axios.defaults.baseURL = local + "/api/"
const Blog = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    // axios.defaults.baseURL = "http://localhost:5000/api/"

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/posts" + search);
          setPosts(res.data);
        };
        fetchPosts();
      }, [search]);
    return (
        <div className="blog-home">
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </div>

    )
}

export default Blog