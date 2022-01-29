import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import Header from './components/Header'; 
import Home from './components/Home';
import Docs from './components/Docs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
    </>
  );
}

export default App;
