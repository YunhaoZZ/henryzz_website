import { Link } from "react-router-dom";
import "./index.scss";
import '../../../../ipv4'

const local = global.config.ipv4

// axios.defaults.baseURL = "http://" + local + ":5000/api/"

export default function Post({ post }) {
    const PF = local + "/images/";
    const PostCat = "/posts?cat=";
    return (
        <div className="post">
            {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <Link className="link" to={PostCat+c.name}>
                            <span className="postCat">{c.name}</span>
                        </Link>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toLocaleTimeString()}
                    <br />
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>

            <p className="postDesc">{post.desc}</p>

        </div>
    );
}