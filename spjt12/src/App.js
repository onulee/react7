import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/Style.css';
import Nav from './comp/Nav';
import Home from './pages/Home';
import BList from './pages/BList';
import BView from './pages/BView';
import BWrite from './pages/BWrite';
import MList from './pages/MList';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* 네비게이션 */}
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/board/bList' element={<BList/>} />
          <Route path='/board/bList/:id' element={<BView/>} />
          <Route path='/board/bWrite' element={<BWrite/>} />
          <Route path='/member/mList' element={<MList/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
