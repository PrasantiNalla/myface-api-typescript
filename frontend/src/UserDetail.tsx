import { useEffect, useState } from "react";
import { UserModel } from "../../src/models/api/userModel"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function UserDetail() {
    const [myData, setMyData] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:3001/users/:userId")
            .then(response => response.json())
            .then(data => setMyData(data.results))
    }, []);

    return (
        <>
            <section>
                <h3>Posts</h3>
                {myData.id}
            </section>

            <section>
                <h3>Likes</h3>
            </section>

            <section>
                <h3>Dislikes</h3>

            </section>
        </>
    )

}
