import React,{useState,useEffect} from "react";


const MovieForm = ({addMovies}) =>{

    const [no,setNo] = useState();
    const [title,setTitle] = useState('');
    const [year,setYear] = useState('');
    const [count,setCount] = useState(4);

    const saveBtn = (e) => {
        e.preventDefault();
        if (year.trim()==''){
        alert('데이터를 입력해야 저장이 가능합니다.');
        return;
        }
        addMovies({'no':count,'title':title,'year':year});
        alert("영화정보를 저장합니다.");
        setCount(count + 1);
        console.log("count : ",count);

        //inputbox 초기화
        setTitle('');
        setYear('');
    }

    const onKeyUp = (e) => {
        if(e.keyCode == 13){
        console.log("엔터키 입력됨.")
        if(year=='') return;
        saveBtn(e);
        }
    }

    return(
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">제목</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">제목을 입력하세요.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">년도</label>
            <input type="text" className="form-control" onKeyUp={onKeyUp} value={year} onChange={e=>setYear(e.target.value)} id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">아이디 저장</label>
          </div>
          <button type="button" className="btn btn-primary" onClick={saveBtn}>저장</button>
        </form>
    )
}

export default MovieForm;