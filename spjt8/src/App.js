import logo from './logo.svg';
import './css/Style.css';
import Movies from './comp/Movies';
import {useState,useEffect} from 'react';

function App() {

  const [movies,setMovies] = useState(
    [
      {'no':4,'title':'아바타4','year':2008},
      {'no':3,'title':'아바타3','year':2006},
      {'no':2,'title':'아바타2','year':2004},
      {'no':1,'title':'아바타1','year':2002},
    ]
  );
  //반복문 : map()
  // map()함수는 배열에 있는 데이터를 1개씩 가져와서 함수를 적용시켜줌.
  const renderMovies = movies.map( (movie)=>{
    return( <Movies movie={movie} key={movie.no} />  )
  });


  return (
    <div className="root">
      <h2>메인페이지</h2>
      {/* 영화리스트 */}
      {renderMovies}
      
      
      
    </div>
  );
}

export default App;
