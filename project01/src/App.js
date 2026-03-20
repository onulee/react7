import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './css/Style.css';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import BListPage from './pages/BListPage';
import BWritePage from './pages/BWritePage';
import MListPage from './pages/MListPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/blist' element={<BListPage/>} />
          <Route path='/bwrite' element={<BWritePage/>} />
          <Route path='/mlist' element={<MListPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;