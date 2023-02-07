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
            .then(data => {
                setMyPosts(data.posts)
                setMyLikes(data.likes)
                setMyDislikes(data.dislikes)
            })
    }, [params.userId]);



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

                                    <img src={post.imageUrl}
                                        alt="This is a post image"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                        }} />
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
                                    <img src={like.imageUrl}
                                        alt="This is a post image"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                        }} /> <br />
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
                                    <img src={dislike.imageUrl}
                                        alt="This is a post image"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                        }} />
                                    <br />
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
