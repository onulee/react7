import React,{useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Movie from '../comp/Movie';

const M_list = ({movies,setMovies}) =>{
  
  const navigate = useNavigate();
  const selectNoRef = useRef();
  
  const [show,setShow] = useState(false);
  const openModal = (no) => {
      setShow(true); // useState 때문에 no가 초기화 되어 ref변수에 저장
      selectNoRef.current = no;
  }

  
  //3. 영화삭제
  const delMovies = (no) => {
    setMovies(
      movies.filter(movie => {
        return movie.no !== selectNoRef.current; // 모달창때문에 no데이터가 초기화됨.
      })
    )
    setShow(!show);
  }

  
  
  
  //* 데이터가 없습니다.
  let nonExist = (
    <div className="card" >
            <h5 className="card-header"></h5>
            <div className="card-body">
                <h5 className="card-title">데이터가 없습니다.</h5>
            </div>
    </div>
  );


  //1. 영화리스트 출력
  const renderMovies = movies.length?movies.map(movie =>{
    return (
       <Movie movie={movie} key={movie.no} openModal={openModal} />
    );
  }): nonExist;

  



    return(
        <>
          <h2>영화리스트</h2>
          {renderMovies}
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
        
    )
}

export default M_list;