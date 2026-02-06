
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Header = ({title}) =>{

        const {isAuthenticated,setIsAuthenticated} = useAuth()
    return (
        <header style={{padding:"0.5rem",backgroundColor:"rosybrown",position:"sticky",top:"0",zIndex:"1",display:"flex",justifyContent:"space-between"}}>

            <h1>{title}</h1>

        <nav>

            <Link to="/" style={{marginRight:"1rem",color:"white"}} > 
            Dashboard 
            </Link>
            <Link to="/logs" style={{marginRight:"1rem",color:"white"}} > 
            Logs 
            </Link>
            {isAuthenticated ? <button onClick={()=>setIsAuthenticated(false)}> logout </button> :
            <Link to="/login" style={{marginRight:"1rem",color:"white"}} > 
            Login
            </Link>}
            

        </nav>

        </header>
    )

}


export default Header;