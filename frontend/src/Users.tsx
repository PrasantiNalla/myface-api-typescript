import { createContext,useContext, useEffect, useState } from "react";
import {UserModel} from "../../src/models/api/userModel"

import { UserDetail } from "./UserDetail";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";




// const MyContext = createContext({
//     userId: ,
// })


export function Users(){
    const [myData, setMyData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data=>setMyData(data.results))
    },[]);

    // not sure how to fetch user.id within MyContext
    return (
       
           <div>
            {myData.map((user: UserModel) => {
        //    <MyContext.Provider value={{userId: {user.id}}}></MyContext.Provider>
//`/users/${user.id}`
                    return (
                        
                        <li key={user.id}>
                          
                            <div>
                               
                                <Link to = {`/users/${user.id}`}>  
            
                                    {user.id}
                                    <img src={user.coverImageUrl}/>
                                    <div>{user.name}</div>
                                    <div>{user.username}</div>
                                </Link>
                            </div> 
                   
                        </li>
                )
                // </MyContext.Provider>
                })}
            </div>
          
    )

}
