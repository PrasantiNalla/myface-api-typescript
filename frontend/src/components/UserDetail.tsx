import { useContext, useEffect, useState } from "react";
import { UserModel, UserPostModel } from "../../../src/models/api/userModel"
import { Link, useParams } from "react-router-dom";



export function UserDetail() {
    const [myProfile, setMyProfile] = useState({} as UserModel)
    const [myPosts, setMyPosts] = useState([]);
    const [myLikes, setMyLikes] = useState([]);
    const [myDislikes, setMyDislikes] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/users/${params.userId}`)
            .then(response => response.json())
            .then(data => {
                setMyProfile(data)
                setMyPosts(data.posts)
                setMyLikes(data.likes)
                setMyDislikes(data.dislikes)
            })
    }, [params.userId]);

    const postsList= myPosts.slice(0,6);
    const likesList = myLikes.slice(0,6);
    const dislikesList = myDislikes.slice(0,6);

    // don't know why li is complaining
    return (
        <>
            <section className="user-proflie">
                <img className="cover-image"
                    src={myProfile.coverImageUrl}
                    alt="This is a cover image"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                    }}
                />

                <img className="profile-image"
                    src={myProfile.profileImageUrl}
                    alt="This is a profile image"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                    }}
                />

                <div className="profile-info">
                    <div id="name">{myProfile.name}</div>
                    <div>{myProfile.username}</div>
                    <div>{myProfile.email}</div>
                </div>
            </section>


            <section className="user">
                <h3>Posts</h3>
                <div className="user-wrapper">
                    {postsList.map((post: UserPostModel) => {
                        return (
                            <div>
                                <ul>
                                    
                                    <li className="user-item">
                                        <>
                                        <img src={post.imageUrl}
                                            alt="This is a post image"
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                            }} />
                                        <br />
                                        {post.createdAt.toLocaleString().slice(0,10)}
                                        <br />
                                        {post.message}
                                        </>
                                    </li>
                                    
                                </ul>
                            </div>
                        )
                    })
                    }
                </div>

            </section>

            <section className="user">
                <h3>Likes</h3>
                <div className="user-wrapper">
                    {likesList.map((like: UserPostModel) => {
                        return (
                            <div>
                                <ul >
                                    <li className="user-item">
                                        <>
                                        <img src={like.imageUrl}
                                            alt="This is a post image"
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                            }} /> <br />
                                        {like.createdAt.toLocaleString().slice(0,10)}<br />
                                        {like.message}
                                        </>
                                    </li>
                                    
                                </ul>
                            </div>
                        )
                    })
                    }
                </div>
            </section>

            <section className="user">
                <h3>Dislikes</h3>
                <div className="user-wrapper">
                    {dislikesList.map((dislike: UserPostModel) => {
                        return (
                            <div >
                                <ul>
                                    <li className="user-item">
                                        <>
                                        <img src={dislike.imageUrl}
                                            alt="This is a post image"
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                            }} />
                                        <br />
                                        {dislike.createdAt.toLocaleString().slice(0,10)}
                                        <br />
                                        {dislike.message}
                                        </>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )

}
