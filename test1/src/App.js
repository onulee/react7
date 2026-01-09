import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import './css/Style.css';
import Nav from './comp/Nav';
//페이지
import Home from './page/Home';
import M_list from './page/M_list';
import M_form from './page/M_form';
import Users from './page/Users';


function App() {
  //원본 데이터
  const [movies,setMovies] = useState(
    [
      {'no':3,'title':'아이언맨3','year':'2024'},
      {'no':2,'title':'아이언맨2','year':'2023'},
      {'no':1,'title':'아이언맨1','year':'2022'},
    ]
  )

  //3. 수정폼
  const uFormMovies = (no) =>{
    console.log("no : ",no);
    //해당데이터 가져오기
    // const m_movie = movies.filter(movie => {
    //     return movie.no == no;
    // });
    const m_movie = movies.find(movie => movie.no === no);
    console.log("m_movie : ",m_movie);
    setEditMovie(m_movie);
    alert('수정을 진행합니다.');
  }
  

  useEffect(
    ()=>{
      axios.get('https://jsonplaceholder.typicode.com/users',{'no':1})
           .then((response  =>{
            console.log(response); 
            
          }))


    },[]
  )

//-----------------------------------------------------------------------
// page
//-----------------------------------------------------------------------
  return (
    <>
      <BrowserRouter>
      
      {/* 네이게이션 */}
      <Nav />
      {/* 메인페이지 */}
      <div className='main'>
        {/* 출력부분 */}
        
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mlist" element={<M_list movies={movies} setMovies={setMovies} />} />
        <Route path="/mform" element={<M_form movies={movies} setMovies={setMovies}  />} />
        <Route path="/users" element={<Users />} />
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
