import react,{Component} from "react"
import {Link} from "react-router-dom"
import "./App.css"
class NavBar extends Component{
    render(){
        return(
            <nav>
                <ul className ="link">
                    <Link to="/" className ="link">
                        <li><b>MUSIC APP</b></li>
                    </Link>
                    <Link to="/showSong" className ="link">
                        <li>GET SONG LIST</li>
                    </Link>
                    <Link to="/addSong" className ="link">
                        <li>ADD SONG</li>
                    </Link>
                </ul>               
            </nav>
        )
    }
}
export default NavBar;