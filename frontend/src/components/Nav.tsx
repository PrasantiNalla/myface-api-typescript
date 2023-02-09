import { Link } from "react-router-dom"

export function Nav (){
    return (
        <nav className="navbar"> 
        <div className="nav-items">
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/posts">  Posts </Link></li>
          <li><Link to="/users">  Users </Link></li>
          <li><Link to="/users/create">  + New User </Link></li>
          <li><Link to="/posts/create">  + New Post </Link></li>
        </div>
        </nav>
    )
}