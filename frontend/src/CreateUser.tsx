import { FormEvent, useState } from "react";
import { createUserApi } from "./api/api";
import "./CreatePost.scss"

export function CreateUser() {
    const [name, setName] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [profileImage, setProfileImage] = useState<string>("");
    const [coverImage, setCoverImage] = useState<string>("");

    const [alert, setAlert] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createUserApi(name, userName, email, profileImage, coverImage);
    }

    return (
        <>
            <h2>Create a new user</h2>

            <p className={alert ? "alert-appear" : "alert-disappear"}>
                Thank you! User has been created successfully!
            </p>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        onChange={e => setName(e.target.value)}
                         />
                </label>
                <br /><br />
                <label>Username
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required
                        onChange={e => setUserName(e.target.value)}
                     />

                </label>
                <br /><br />
                <label> Email
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={e => setEmail(e.target.value)}
                         />
                </label>
                <br /><br />
                <label> Profile Image
                    <input type="url"
                        name="profile-image"
                        id="profile-image"
                        required
                        onChange={e => setProfileImage(e.target.value)}
                         />
                </label>
                <br /><br />
                <label> Cover Image
                    <input type="url"
                        name="cover-image"
                        id="cover-image"
                        required 
                        onChange={e => setCoverImage(e.target.value)}
                        />
                </label>
                <br /><br />
                <button type="submit" onClick={() => setAlert(!alert)}>Create User</button>
            </form>
        </>
    )
}