import { Link } from 'react-router-dom'

function NavBar() {
   const navStyle = {
       display: "inline-block",
       color : "white",
       marginRight: "0px",
       padding: "15px",
       fontFamily: "sans-serif",
       backgroundColor: "teal",
       fontWeight: "bold"

   }



    return(
        <div className="navbar">
          <nav>
            <Link to="/home" style={navStyle}>Home</Link>
            <Link to="/playlist"style={navStyle}>Playlists</Link>
            <Link to="/findvibe"style={navStyle}>Find a Vibe</Link>
          </nav>
        </div>
    )
}

export default NavBar

