import { createContext, useContext, useEffect, useState } from "react";
import { UserModel } from "../../src/models/api/userModel"
import { UserDetail } from "./UserDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function Users() {
    const [myData, setMyData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:3001/users/?page=${currentPage}&pageSize=10`)
            .then(response => response.json())
            .then(data => setMyData(data.results))
    }, [currentPage]);


    return (
        <div>
            <h2>All Users</h2>
            <div className="users-wrapper">
                {myData.map((user: UserModel) => {

                    return (


                        <li key={user.id} className="users-item">
                            <div>

                                <Link to={`/users/${user.id}`}>
                                    <img
                                        src={user.profileImageUrl}
                                        alt="This is an image"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "https://cdn-multicoat-com.sfo2.digitaloceanspaces.com/wp-content/uploads/2018/08/02232112/placeholder.jpg";
                                        }}
                                    />
                                    <div>{user.name}</div>
                                    <div>{user.username}</div>
                                </Link>
                            </div>

                        </li>
                    )

                })}
            </div>

            <div className="btn">
            <Link to={`/users/?page=${currentPage + 1}&pageSize=10`}
                onClick={() => (setCurrentPage(currentPage + 1))}>
                Next
            </Link>
            {/* add a condition to check for currentPage value before clicking previous */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/users/?page=${currentPage - 1}&pageSize=10`}
                onClick={() => (currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage)}>
                Previous
            </Link>
            </div>

        </div>
    )

}
