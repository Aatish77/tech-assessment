import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router,  Switch, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element ={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
