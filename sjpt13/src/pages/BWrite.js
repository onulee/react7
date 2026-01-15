import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

const BWrite = () => {
    const location = useLocation(); // 선언
    const {bno} = location.state || {};

    const navigate = useNavigate();
    const [btitle,setBtitle] = useState('');
    const [bcontent,setBcontent] = useState('');
    const [id,setId] = useState('aaa'); //로그인을 적용해서 session,token id를 가져옴.

    

    // 글수정
    useEffect(
        () =>{
           //axios -> setBoards() : 파라미터로 전달 params추가
           if(bno){
               axios.get(`http://localhost:8000/customer/cviewJson/${bno}/`,
                    {params:{'id':'aaa','page':1}}
                )
                .then(res=>{
                    console.log("넘어온 데이터 board : ",res.data.board);
                    console.log("넘어온 데이터 member_id : ",res.data.board.member_id);
                    setBtitle(res.data.board.btitle);
                    setBcontent(res.data.board.bcontent);
                    setId(res.data.board.member_id);
                })
           }else{
            setBtitle('');
            setBcontent('');
            
           } 
        },[bno]
    )

    const saveBtn = () =>{
        //axios -> 게시글저장 : post방식 {}객체형태로 전송
        if(bno){
            axios.put('http://localhost:8000/customer/cupdateJson/',{'bno':bno,'id':id,'btitle':btitle,'bcontent':bcontent})
            .then(res=>{
                alert('게시글을 저장합니다.');
                navigate('/BList');
            })
        }else{
            axios.post('http://localhost:8000/customer/cwriteJson/',{'id':id,'btitle':btitle,'bcontent':bcontent})
            .then(res=>{
                alert('게시글을 저장합니다.');
                navigate('/BList');
            })
        }
    }


    return(
        <div className="root">
          <h2>{bno?'게시글수정':'BWrite 게시글등록'}</h2>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">게시글 제목</label>
            <input type="text" value={btitle} onChange={(e)=>setBtitle(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요."/>
            </div>
            <div class="mb-3">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">내용</label>
            <textarea value={bcontent} onChange={(e)=>setBcontent(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={saveBtn} class="btn btn-primary me-md-2" type="button">{bno?'수정':'저장'}</button>
            <button class="btn btn-primary" type="button">취소</button>
          </div>
        </div>
    )
}

export default BWrite;