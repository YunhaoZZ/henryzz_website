import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from '../../components/AnimatedLetters'
import "./index.scss";
// import EyeIcon from "../../components/icons/EyeIcon";
// import HeartIcon from "../../components/icons/HeartIcon";
// import CommentIcon from "../../components/icons/CommentIcon";
// import { superagent } from "superagent";
// import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const getPosts = async () => {
        const DEV_TO_URL = "https://dev.to/api/articles"

        try {
            const result = await fetch(DEV_TO_URL + "?username=yunhaozz")
                .then(res => res.json())
                .then((res) => {
                    return res;
                })
            return result
        } catch (error) {
            console.log("WE HAVE FETCH POST ERROR", error)
        }
    }

    useEffect(() => {
        getPosts().then(res => {
            // I like to print so I know where things are happening
            console.log("IN USE-EFFECT", res)
            // Set the state using hooks syntax 
            setPosts(res)

            // Set loading to false
            //   setLoading(false)
        })
    }, [])



    // console.log(posts);
    const renderPosts = (posts) => {
        return (
            <div className="post-container">
                {
                    posts.map((post, idx) => {
                        return (
                            <div className="blog-card" key={idx}>
                                <div className="meta">
                                    <img className="photo"
                                        alt={post.title}
                                        src={post.cover_image} />
                                    <ul className="details">
                                        <li className="author"><a href="https://dev.to/yunhaozz">{post.user.username}</a></li>
                                        <li className="date">{post.readable_publish_date}</li>
                                        {/* <li className="tags">
                                  <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                  </ul>
                                </li> */}
                                    </ul>
                                </div>
                                <div className="description">
                                    <h1>{post.title}</h1>
                                    <h2>{post.description}</h2>
                                    {/* <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p> */}
                                    <p className="read-more">
                                        <a href={post.url}>Read More</a>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <p>{process.env.REACT_APP_PUBLIC_URL}</p> */}
            </div>
        );
    }

    return (
        <>
            <div className="container projects-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Posts".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPosts(posts)}</div>
            </div>
            <Loader type="square-spin" />
        </>
    );
}

export default Posts