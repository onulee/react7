import React,{useState} from "react";

const MovieForm = ({movies,setMovies}) => {

    const [no,setNo] = useState(''); 
    const [title,setTitle] = useState(''); 
    const [year,setYear] = useState(''); 



    const saveBtn = () => {
        alert('데이터를 저장합니다.');
        //데이터 추가
        setMovies( [{'no':no,'title':title,'year':year},...movies] )
        //input 초기화
        setNo('');
        setTitle('');
        setYear('');

    }


    return(
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">번호</label>
          <input type="text" value={no} onChange={(e)=>setNo(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle1" className="form-label">제목</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputTitle1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">년도</label>
          <input type="text" value={year} onChange={(e)=>setYear(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="button" onClick={saveBtn} className="btn btn-primary">저장</button>
        <button type="button" className="btn btn-primary">취소</button>
      </form>
    )
}

export default MovieForm;