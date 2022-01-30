import './App.css';
import Header from './components/Header'; 
import Home from './components/Home';
import Docs from './components/Docs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/docs' element={<Docs/>}/>
      </Routes>
    </Router>
  );
}

export default App;

