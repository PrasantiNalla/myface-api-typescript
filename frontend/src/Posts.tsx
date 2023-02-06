import { useEffect, useState } from "react";
import {PostModel} from "../../src/models/api/postModel"
import {Page} from "../../src/models/api/page"

export function Posts(){
    const [myData, setMyData] = useState([])


    useEffect(()=>{
        fetch("http://localhost:3001/posts")
            .then(response => response.json())
            .then(data=>setMyData(data.results))
    },[]);

    return (
           <div>
                {myData.map((post: PostModel)=>{
                   console.log(post);
                   
                    return (
                        <ul>
                            <li>
                                {post.id}
                            </li>
                        </ul>
                    )
                })}
            </div>
    )

}
