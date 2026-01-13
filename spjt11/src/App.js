import './App.css';
import './css/Style.css';
import Nav from './compents/Nav';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import BView from './pages/BView';
import UserList from './pages/UserList';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/BList' element={<BList/>} />
        <Route path='/BWrite' element={<BWrite/>} />
        <Route path='/BView' element={<BView/>} />
        <Route path='/UserList' element={<UserList/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
    
  );
}

export default App;
