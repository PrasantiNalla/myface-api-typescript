import { useEffect, useState } from "react";
import { PostModel } from "../../../src/models/api/postModel"
import { Link } from "react-router-dom";
import { like, dislike } from "../api/api";
import { createInteraction } from "../../../src/repos/interactionRepo"
import React from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function Posts() {
    const [myData, setMyData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [status, setStatus] = useState(false)
    const [error, setError] = useState("")
    const [PostId, setPostId] = useState(0)
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/posts/?page=${currentPage}&pageSize=9`)
            .then(response => response.json())
            .then(data => setMyData(data.results))
    }, [currentPage, status]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        like(PostId)
            .then(() => navigate("/posts"))
            .catch(e => { setError(e.message) })
        dislike(PostId)
            .then(() => navigate("/posts"))
            .catch(e => { setError(e.message) })
    }

    function errorMsg() {
        if (error.length > 0) {
            return error
        }
    }

    return (

        <main className="posts">
            <h2>All Posts</h2>
            <div className="posts-wrapper">
                {myData.map((post: PostModel) => {
                    return (
                        <div >
                            <ul className="posts" >
                                <li key={post.id} className="posts-item">

                                    <img src={post.imageUrl}
                                        alt="This is a post image"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                        }} />
                                    <div>{post.createdAt.toLocaleString()}</div>
                                    <div>{post.message}</div>
                                    <form onSubmit={(event) => handleSubmit(event)}>
                                        <button className="btn like" onClick={() => { like(post.id); setStatus(!status); setPostId(post.id); setAlert(!alert)}}>{post.likedBy.length} Like </button>&nbsp;&nbsp;
                                        <button className="btn dislike" onClick={() => { dislike(post.id); setStatus(!status); setPostId(post.id); setAlert(!alert) }}>{post.dislikedBy.length} Dislike  </button>
                                    </form>
                                </li>
                            </ul>

                        </div>
                    )

                })}</div>

            {/* interesting bug: if not currentPage +1, the first time we click next, the url will -1 */}
            <Link to={`/posts/?page=${currentPage + 1}&pageSize=10`}
                onClick={() => (setCurrentPage(currentPage + 1))}>
                Next
            </Link>
            {/* add a condition to check for currentPage value before clicking previous */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/posts/?page=${currentPage - 1}&pageSize=10`}
                onClick={() => (currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage)}>
                Previous
            </Link>
        </main>
    )

}

