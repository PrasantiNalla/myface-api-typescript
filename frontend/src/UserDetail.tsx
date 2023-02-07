import { useContext, useEffect, useState } from "react";
import { UserModel, UserPostModel } from "../../src/models/api/userModel"
import { useParams } from "react-router-dom";

export function UserDetail() {
    const [myPosts, setMyPosts] = useState([]);
    const [myLikes, setMyLikes] = useState([]);
    const [myDislikes, setMyDislikes] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/users/${params.userId}`)
            .then(response => response.json())
            .then(data => setMyPosts(data.posts))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3001/users/${params.userId}`)
            .then(response => response.json())
            .then(data => setMyLikes(data.likes))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3001/users/${params.userId}`)
            .then(response => response.json())
            .then(data => setMyDislikes(data.dislikes))
    }, []);

    // don't know why li is complaining
    return (
        <>
            <div>
                <h3>Posts</h3>

                {myPosts.map((post: UserPostModel) => {
                    return (
                        <div>
                            <ul>
                                <li>

                                    <img src={post.imageUrl} />
                                    <br />
                                    {post.message}
                                    <br />
                                    {post.createdAt}

                                </li>
                            </ul>
                        </div>
                    )
                })
                }

            </div>

            <section>
                <h3>Likes</h3>

                {myLikes.map((like: UserPostModel) => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    <img src={like.imageUrl} /> <br/>
                                    {like.createdAt}<br />
                                    {like.message}
                                </li>
                            </ul>
                        </div>
                    )
                })
                }

            </section>

            <section>
                <h3>Dislikes</h3>

                {myDislikes.map((dislike: UserPostModel) => {
                    return (
                        <div>
                            <ul>
                                <li >
                                    <img src={dislike.imageUrl} />
                                    <br/>
                                    {dislike.message}
                                    <br />
                                    {dislike.createdAt}
                                </li>
                            </ul>
                        </div>
                    )
                })
                }

            </section>
        </>
    )

}
