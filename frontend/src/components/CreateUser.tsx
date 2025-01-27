// Bugs: when error message displayed, the input box will expand

import { FormEvent, useState } from "react";
import { createUserApi } from "../api/api";
import "../styles/CreatePost.scss"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function CreateUser() {
    const [name, setName] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [profileImage, setProfileImage] = useState<string>("");
    const [coverImage, setCoverImage] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        createUserApi(name, userName, email, profileImage, coverImage)
            .then(()=>navigate("/users/success"))
            .catch(e=>{setError(e.message)})
    }

  
    return (
        <>
            <h2>Create a New User</h2>
            <p className="error">{error.length > 0? error:""}</p> 
            <form className="form create-user" onSubmit={(event) => handleSubmit(event)}>
                <label>Name: 
                    <input
                        type="text"
                        name="name"
                        id="name"
                        //required
                        onChange={e => setName(e.target.value)}
                         />
                </label>
                <br /><br />
                <label>Username: 
                    <input
                        type="text"
                        name="username"
                        id="username"
                        // required
                        onChange={e => setUserName(e.target.value)}
                     />

                </label>
                <br /><br />
                <label> Email: 
                    <input
                        type="email"
                        name="email"
                        id="email"
                        // required
                        onChange={e => setEmail(e.target.value)}
                         />
                </label>
                <br /><br />
                <label> Profile Image:
                    <input type="url"
                        name="profile-image"
                        id="profile-image"
                       //required
                        onChange={e => setProfileImage(e.target.value)}
                         />
                </label>
                <br /><br />
                <label> Cover Image:
                    <input type="url"
                        name="cover-image"
                        id="cover-image"
                        // required 
                        onChange={e => setCoverImage(e.target.value)}
                        />
                </label>
                <br /><br />
                <button className="btn create-post" type="submit" >Create User</button>
            </form>
        </>
    )
}