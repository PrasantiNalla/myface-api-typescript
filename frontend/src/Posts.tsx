import { useEffect, useState } from "react";
import { PostModel } from "../../src/models/api/postModel"
import { Link } from "react-router-dom";
import { Page } from "../../src/models/api/page"

export function Posts() {
    const [myData, setMyData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:3001/posts/?page=${currentPage}&pageSize=10`)
            .then(response => response.json())
            .then(data => setMyData(data.results))
    }, [currentPage]);

    return (
        <div>
            {myData.map((post: PostModel) => {
                return (
                    <>
                        <ul>
                            <li key={post.id}>
                                <img src={post.imageUrl} />
                                <div>{post.createdAt.toLocaleString()}</div>
                                <div>{post.message}</div>
                            </li>
                        </ul>

                    </>
                )
            })}

            <Link to={`/posts/?page=${currentPage}&pageSize=10`}
                onClick={() => (setCurrentPage(currentPage+1))}>
                Next
            </Link>
            
            <Link to={`/posts/?page=${currentPage}&pageSize=10`}
                onClick={() => (setCurrentPage(currentPage-1))}>
                Previous
            </Link>
        </div>
    )

}

