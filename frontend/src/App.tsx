import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Posts } from './Posts'
import { Users } from "./Users"
import { UserDetail } from './UserDetail'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="*" element ={  
            <div>
              <Link to ="/posts">  Posts </Link>
              <Link to="/users">  Users </Link>
            </div>
          }/>

          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users /> } />
          <Route path="/users/:userId" element={<UserDetail/>}></Route>

        </Routes>
      </Router>
    </>
    
  )
}

export default App
