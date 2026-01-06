import { useState, useEffect } from 'react';
import './App.css';
import './css/Style.css';
import Movie from './comp/Movie';
import Nav from './comp/Nav';
import MovieForm from './comp/MovieForm';


function App() {

  //원본 데이터
  const [movies,setMovies] = useState(
    [
      {'no':3,'title':'아이언맨3','year':'2024'},
      {'no':2,'title':'아이언맨2','year':'2023'},
      {'no':1,'title':'아이언맨1','year':'2022'},
    ]
  )

  // 영화추가
  const addMovies = (movie) => { setMovies([movie,...movies]);  }
  // 영화삭제
  const delMovies = (no) => {
    setMovies(
      movies.filter(movie => {
        return movie.no != no;
      })
    )
  }

  //영화리스트 출력
  const renderMovies = movies.map(movie =>{
    return (
       <Movie movie={movie} delMovies={delMovies} key={movie.no} />
    );
  })


  return (
    <div>
      {/* 네이게이션 */}
      <Nav />
      {/* 메인페이지 */}
      <div className='main'>
        <h2>영화리스트</h2>
        <MovieForm addMovies={addMovies} />
        {/* 출력부분 */}
        {renderMovies}
      </div>
    </div>
  );
}

export default App;
