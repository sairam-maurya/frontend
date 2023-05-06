// import logo from './logo.svg';
import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import EventHandling from './components/EventHandling';
import UserManager from './components/UserManager';


function App() {
  return (
    <div >
    
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={ <Navigate to="/home"/> } />
      <Route path="home" element={ <Home/> } /> 
      <Route path="login" element={ <Login/> } />
      <Route path="Signup" element={ <Signup/> } />
      <Route path="event" element={ <EventHandling/> } />
      <Route path="manager" element={<UserManager/>}/>




    </Routes>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
