
import './App.scss'
// import './Posts.scss'
import './Users.scss'
import './UserDetail.scss'
import { Posts } from './Posts'
import { Users } from "./Users"
import { UserDetail } from './UserDetail'
import { CreateUser } from './CreateUser'
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
            </div>
          } />

          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/users/create" element={<CreateUser />} />

        </Routes>
      </Router>
    </>

  )
}

export default App
