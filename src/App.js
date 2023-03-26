// import logo from './logo.svg';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div >
      <h1 style={{color:'red', backgroundColor:'yellow'}}>using react</h1>
    <p className='mytags'>Awesome</p>
    <hr />
    
    <BrowserRouter>
    <Routes>
      <Route path="home" element={ <Home/> } /> 
      <Route path="login" element={ <Login/> } />


    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
