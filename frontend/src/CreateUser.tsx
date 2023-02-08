import { FormEvent, useState } from "react";
import { createPostApi } from "./api/api";
import "./CreatePost.scss"

export function CreateUser() {
    const [name, setName] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [profileImage, setProfileImage] = useState<string>("");
    const [coverImage, setCoverImage] = useState<string>("");

    const [alert, setAlert] = useState(false);

    return (
        <>
            <form method="post" action="/users/create">
                <label>Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={e => setName(e.target.value)}
                        required/>
                </label>

                <label>Username
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={e => setUserName(e.target.value)}
                        required />

                </label>
                <label> Email
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        required/>
                </label>
                <label> Profile Image
                    <input type="url"
                        name="profile-image"
                        id="profile-image"
                        onChange={e => setProfileImage(e.target.value)}
                        required />
                </label>
                <label> Cover Image
                    <input type="url"
                        name="cover-image"
                        id="cover-image"
                        onChange={e => setCoverImage(e.target.value)}
                        required />
                </label>
                <label> Create User
                    <button type="submit" />
                </label>
            </form>
        </>
    )
}