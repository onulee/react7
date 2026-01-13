import React,{useState,useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const MovieForm = ({movies,addMovies,editMovie}) =>{
    const navigate = useNavigate();
    const [saveTxt,setSaveTxt] = useState('저장');
    console.log("전체데이터 MovieForm movies : ",movies);

    useEffect(() => {
      if (editMovie) {
        setNo(editMovie.no);
        setTitle(editMovie.title);
        setYear(editMovie.year);
        setSaveTxt('수정');
      }
    }, [editMovie]);

    const now = new Date();
    const noRef = useRef(4);
    const [no,setNo] = useState('');
    const [title,setTitle] = useState('');
    const [year,setYear] = useState('');
    
    // 날짜출력함수
    const nowDay = () =>{
      const myear = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return `${myear}-${month}-${day}`;
    }
    
    // 저장버튼함수 
    const saveBtn = (e) => {
        e.preventDefault();
        if (year.trim()===''){
        alert('데이터를 입력해야 저장이 가능합니다.');
        return;
        }
        if(saveTxt === '저장'){
          addMovies({'no':noRef.current,'title':title,'year':year},saveTxt);
          noRef.current += 1;
          console.log("no.current : ",noRef);
        }else{
          addMovies({'no':parseInt(no),'title':title,'year':parseInt(year)},saveTxt);
        }
        alert(`영화정보를 ${saveTxt}합니다.`);
        //inputbox 초기화
        console.log(nowDay());
        clearTxt();
        

    }

    const cancelBtn = () =>{
      //inputbox 초기화
      clearTxt();
      if (saveTxt === '수정') setSaveTxt('저장') ;
      navigate('/mlist');
    }

    // inputbox 초기화
    const clearTxt = () => {
        setSaveTxt('저장');
        setTitle('');
        setYear('');
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13){
        console.log("엔터키 입력됨.")
        if(year==='') return;
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
          
          <button type="button" className="btn btn-primary" onClick={saveBtn}>{saveTxt}</button>
          <button type="button" className="btn btn-primary" onClick={cancelBtn}>취소</button>
        </form>
    )
}

export default MovieForm;