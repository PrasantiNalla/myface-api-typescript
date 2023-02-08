
import './App.scss'
import '../src/styles/Posts.scss'
import '../src/styles/Users.scss'
import '../src/styles/UserDetail.scss'
import '../src/styles/CreatePost.scss'

import { Posts } from './components/Posts'
import { Users } from "./components/Users"
import { UserDetail } from './components/UserDetail'
import { CreateUser } from './components/CreateUser'
import { CreatePost } from './components/CreatePost'
import { NewUserMsg } from './components/NewUserMsg'
import { NewPostMsg } from './components/NewPostMsg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={
            <div>
              <Link to="/posts">  Posts </Link>
              <Link to="/users">  Users </Link>
              <Link to="/users/create">  + New User </Link>
              <Link to="/posts/create">  + New Post </Link>
            </div>
          } />

          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/success" element={<NewPostMsg />} />
          <Route path="/users/success" element={<NewUserMsg />} />

        </Routes>
      </Router>
    </>

  )
}

export default App
