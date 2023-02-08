import { FormEvent, useState } from "react";
import { createPostApi } from "./api/api";
import "./CreatePost.scss"

export function CreatePost() {

    const [message, setMessage] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [alert, setAlert] = useState(false);


    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const apiResponse = await createPostApi(message, imageUrl);
    }

    return (
        <>
            <h2>Create a new post</h2>
            
            <p className={alert?"alert-appear":"alert-disappear"}>
                Thank you! Your post has been created successfully!
            </p>
            
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