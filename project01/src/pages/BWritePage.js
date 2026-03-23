import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { post_board,get_board,put_board } from "../api/CommApi";

const BWritePage = () => {
    const location = useLocation(); // state로 데이터 넘길시, 파라미터로 데이터 전달
    const {bno} = location.state || {}; //변수에 값이 없으면 빈공백처리(없으면 에러)
    const navigate = useNavigate(); // navigate사용
    const [btitle,setBtitle] = useState('');
    const [bcontent,setBcontent] = useState('');
    const [id,setId] = useState('aaa'); //로그인을 적용해서 session,token id를 가져옴.  

    // 글수정
    useEffect(
        () =>{
           //axios -> setBoards() : 파라미터로 전달 params추가
           if(bno){
               get_board(bno)
                .then(res=>{
                    console.log("넘어온 데이터 board : ",res.data);
                    console.log("넘어온 데이터 member_id : ",res.data.memberDto?.id);
                    setBtitle(res.data.btitle);
                    setBcontent(res.data.bcontent);
                    setId(res.data.memberDto?.id);
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
            put_board({'bno':bno,'id':id,'btitle':btitle,'bcontent':bcontent})
            .then(res=>{
                alert('게시글을 수정합니다.');
                navigate('/BList');
            })
        }else{
            post_board({'id':id,'btitle':btitle,'bcontent':bcontent})
            .then(res=>{
                alert('게시글을 저장합니다.');
                navigate('/blist');
            })
        }
    }

    const cancelBtn = () => [
        navigate('/blist')
    ]

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
            <button class="btn btn-primary" type="button" onClick={cancelBtn}>취소</button>
          </div>
        </div>
    )
}

export default BWritePage;