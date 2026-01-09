import React,{useState} from "react";
import MovieForm from '../comp/MovieForm';


const M_form = ({movies,setMovies}) => {
  const [editMovie, setEditMovie] = useState(null);
  
  



  //2. 영화추가,수정
  const addMovies = (movie,saveTxt) => { 
    if(saveTxt === '저장'){
      setMovies([movie,...movies]);  
    }else{
      console.log('영화추가(수정) : ',movie)
      console.log('수정되었습니다.');
      setMovies(
       movies.map((m)=>{
        return (m.no===movie.no?({...m,...movie}):m);
       })
      )
    }
  }



    return(
        <>
          <h2>영화등록</h2>
          <MovieForm addMovies={addMovies} editMovie={editMovie} />
        </>
    )
}

export default M_form;