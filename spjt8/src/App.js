import {useState,useEffect} from 'react';
import './css/Style.css';
import Movies from './comp/Movies';
import MovieForm from './comp/MovieForm';

function App() {

  const [movies,setMovies] = useState(
    [
      {'no':3,'title':'아바타3','year':2006},
      {'no':2,'title':'아바타2','year':2004},
      {'no':1,'title':'아바타1','year':2002},
    ]
  );


  // 2. 데이터 삭제 : filter() / 삭제할 pk키 - no를 받아서 전달함.
  const delMovie = (no) =>{
    //결과를 충족한 데이터만 return 전달됨. 
    setMovies( movies.filter( (movie) => { return( movie.no != no ) }) )
  }

  // 1.리스트 출력 : 반복문 map() 사용
  // map()함수는 배열에 있는 데이터를 1개씩 가져와서 함수를 적용시켜줌.
  // 삼항식 - (조건)?맞으면:틀리면
  const renderMovies = 
  //삼항식
  movies.length?
  movies.map( (movie)=>{
    return( <Movies movie={movie} delMovie={delMovie} key={movie.no}  />  )
  })
  :
  <div className="card">
      <h5 className="card-header"></h5>
      <div className="card-body">
        <h5 className="card-title">데이터가 없습니다.</h5>
      </div>
  </div>
  ;

  

  // 3. 데이터 추가 : [...movies,{'no':5,'title':'아바타5','year':2022}]

  return (
    <div className="root">
      <h2>영화등록</h2>
      <MovieForm movies={movies} setMovies={setMovies} />


      {/* 영화리스트 */}
      <h2>영화리스트</h2>
      {renderMovies}
      
      
      
    </div>
  );
}

export default App;
