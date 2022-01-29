import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"; 
import Home from '../components/Home';
import Docs from '../components/Docs';

const Header = () => {
    return (
        <Router>
            <Nav>
                <Nav.Item>
                     <Nav.Link as={Link} to='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                     <Nav.Link as={Link} to='/docs'>Docs</Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/docs' element={<Docs/>}/>
            </Routes>
        </Router>
    )
}

export default Header;


<Header/>

