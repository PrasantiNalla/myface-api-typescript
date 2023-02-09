import { FormEvent, useState } from "react";
import { createPostApi } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/CreatePost.scss"

export function CreatePost() {

    const [message, setMessage] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [alert, setAlert] = useState(false);

    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        createPostApi(message, imageUrl)
            .then(()=>navigate("/posts/success"))
            .catch(e=>{setError(e.message)})
    }

    return (
        <>
            <h2>Create a New Post</h2>

            <p className="error">{error.length > 0? error:""}</p>
            <form onSubmit={(event) => handleSubmit(event)}>
              
                <label>Message:
                    <input
                        type="text"
                        name="message"
                        id="message"
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>

                {/* can we check type from backend? */}
                <label>Image URL:
                    <input type="url"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </label>
                <button type="submit" onClick={()=>setAlert(!alert)}>Create Post</button>
            </form>
        </>
    )
}