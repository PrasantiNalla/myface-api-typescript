
import './App.scss'
import '../src/styles/Posts.scss'
import '../src/styles/Users.scss'
import '../src/styles/UserDetail.scss'
import '../src/styles/CreatePost.scss'
import { Nav } from './components/Nav'
import { Posts } from './components/Posts'
import { Users } from "./components/Users"
import { UserDetail } from './components/UserDetail'
import { CreateUser } from './components/CreateUser'
import { CreatePost } from './components/CreatePost'
import { NewUserMsg } from './components/NewUserMsg'
import { NewPostMsg } from './components/NewPostMsg'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
       <Nav />
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to MyFace!</h1>
                <h3>Get started by creating a new user!</h3>
              </>
            } />
            
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/success" element={<NewPostMsg />} />
            <Route path="/users/success" element={<NewUserMsg />} />

          </Routes>
         
          </BrowserRouter>
      </>

  )
}

export default App
