import { useState, useRef } from 'react';
import './App.css';
import './css/Style.css';
import Movie from './comp/Movie';
import Nav from './comp/Nav';
import MovieForm from './comp/MovieForm';


function App() {

  const selectNoRef = useRef();
  const [editMovie, setEditMovie] = useState(null);
  const [show,setShow] = useState(false);
  const openModal = (no) => {
      setShow(true); // useState 때문에 no가 초기화 되어 ref변수에 저장
      selectNoRef.current = no;
  }

 

  //원본 데이터
  const [movies,setMovies] = useState(
    [
      {'no':3,'title':'아이언맨3','year':'2024'},
      {'no':2,'title':'아이언맨2','year':'2023'},
      {'no':1,'title':'아이언맨1','year':'2022'},
    ]
  )

  //2. 영화추가,수정
  const addMovies = (movie,saveTxt) => { 
    if(saveTxt === '저장'){
      setMovies([movie,...movies]);  
    }else{
      console.log('영화추가(수정) : ',movie)
      console.log('수정되었습니다.');
      setMovies(
       movies.map((m)=>{
        return (m.no==movie.no?({...m,...movie}):m);
       })
      )
    }
  }
  //3. 영화삭제
  const delMovies = (no) => {
    setMovies(
      movies.filter(movie => {
        return movie.no != selectNoRef.current; // 모달창때문에 no데이터가 초기화됨.
      })
    )
    setShow(!show);
  }

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
 
  //1. 영화리스트 출력
  const renderMovies = movies.length?movies.map(movie =>{
    return (
       <Movie movie={movie} openModal={openModal} delMovies={delMovies} uFormMovies={uFormMovies} key={movie.no} />
    );
  }): nonExist;
  
  //* 데이터가 없습니다.
  let nonExist = (
    <div className="card" >
            <h5 className="card-header"></h5>
            <div className="card-body">
                <h5 className="card-title">데이터가 없습니다.</h5>
            </div>
    </div>
  );



//-----------------------------------------------------------------------
  return (
    <>
      {/* 네이게이션 */}
      <Nav />
      {/* 메인페이지 */}
      <div className='main'>
        <h2>영화리스트</h2>
        <MovieForm addMovies={addMovies} editMovie={editMovie} />
        {/* 출력부분 */}
        {renderMovies}
      </div>
      {show && (
        <div className="modal d-block bg-dark bg-opacity-50" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5>삭제 확인</h5>
                <button onClick={() => setShow(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                {selectNoRef.current}번 게시글을 삭제하시겠습니까?
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShow(false)}>취소</button>
                <button className="btn btn-danger" onClick={delMovies}>
                  삭제
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
