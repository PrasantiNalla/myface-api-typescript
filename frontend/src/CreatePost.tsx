import { FormEvent, useState } from "react";
import { createPostApi } from "./api/api";
import { useNavigate } from "react-router-dom";
import "./CreatePost.scss"

export function CreatePost() {

    const [message, setMessage] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [alert, setAlert] = useState(false);

    const navigate = useNavigate();


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("/posts");
        createPostApi(message, imageUrl);
    }

    return (
        <>
            <h2>Create a new post</h2>
            
          
            
            <form onSubmit={(event) => handleSubmit(event)}>
              
                <label>Message:
                    <input
                        type="text"
                        name="message"
                        id="message"
                        required
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>
                <label>Image URL:
                    <input type="url"
                        id="imageUrl"
                        name="imageUrl"
                        required
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </label>
                <button type="submit" onClick={()=>setAlert(!alert)}>Create Post</button>
            </form>
        </>
    )
}