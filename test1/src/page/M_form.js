import React,{useState,useEffect} from "react";
import MovieForm from '../comp/MovieForm';
import { useParams, useNavigate, useLocation } from "react-router-dom";


const M_form = ({movies,setMovies}) => {
  const navigate = useNavigate();
  const [editMovie, setEditMovie] = useState(null);
  const { no } = useParams(); // 있으면 수정, 없으면 쓰기
  const isEdit = !!no; // true / false
  const location = useLocation();
  const editData = location.state || {}; //전달데이터
  
  useEffect( () => {
      console.log("no : ",no)
      console.log("isEdit : ",isEdit);
      if(isEdit){
        // axios 서버에서 1개의 데이터 가져오기
        uFormMovies(no,editData.title,editData.year);
         
      }
    },[isEdit]
  );


  
  
  //3. 수정폼
  const uFormMovies = (no,title,year) =>{
    console.log("u no : ",no,title,year); // 리스트페이지에서 값 전달받음
    setEditMovie({'no':no,'title':title,'year':year});
    //alert('수정을 진행합니다.');
    
    
    //해당데이터 가져오기
    // const m_movie = movies.filter(movie => {
    //     return movie.u_no == u_no;
    // });
    //const m_movie = movies.find(movie => movie.no === no);
    //console.log("m_movie : ",m_movie);
    //setEditMovie(m_movie);
  }



  //2. 영화추가,수정
  const addMovies = (movie,saveTxt) => { 
    console.log('addMovies 영화추가(수정) : ',movie)
    if(saveTxt === '저장'){
      setMovies([movie,...movies]);  
    }else{
      console.log('수정되었습니다.');
      setMovies(
       movies.map((m)=>{
        return (m.no===movie.no?({...m,...movie}):m);
       })
      )
      navigate('/mlist');
    }
  }



    return(
        <>
          <h2>{isEdit?'영화수정':'영화등록'}</h2>
          <MovieForm movies={movies} addMovies={addMovies} editMovie={editMovie} />
        </>
    )
}

export default M_form;