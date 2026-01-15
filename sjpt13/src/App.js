import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './css/Style.css';
import Nav from './comp/Nav';
import Home from './pages/Home';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import UList from './pages/UList';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/BList' element={<BList/>} />
          <Route path='/BWrite' element={<BWrite/>} />
          <Route path='/UList' element={<UList/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
