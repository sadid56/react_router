import { Link } from "react-router-dom";

const Header = () => {
    return ( <nav className="flex justify-center">
        <ul>
        <Link to="./">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/header">Header</Link>
        </ul>
    </nav> );
}
 
export default Header;