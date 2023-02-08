
import './App.scss'
// import './Posts.scss'
import './Users.scss'
import './UserDetail.scss'
import { Posts } from './Posts'
import { Users } from "./Users"
import { UserDetail } from './UserDetail'
import { CreateUser } from './CreateUser'
import { CreatePost } from './CreatePost'
import { NewUserMsg } from './NewUserMsg'
import { NewPostMsg } from './NewPostMsg'
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
