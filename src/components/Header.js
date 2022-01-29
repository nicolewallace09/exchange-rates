import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"; 

const Header = () => {
    return (
        <Nav>
            <Nav.Item>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                    <Nav.Link as={Link} to='/docs'>Docs</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header;


<Header/>

