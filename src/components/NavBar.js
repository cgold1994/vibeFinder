import { Link } from 'react-router-dom'

function NavBar() {
    return(
        <div classname="navbar">
          
           <Link to="/home">Home</Link>
           <Link to="/findvibe">Find a Vibe</Link>
           <Link to="/playlist">Playlists</Link>

        </div>
    )
}

export default NavBar

