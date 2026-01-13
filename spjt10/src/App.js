import './App.css';
import './css/Style.css';
import Nav from './compents/Nav';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <div className="root">
        <h2>메인페이지</h2>
      </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;
