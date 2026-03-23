import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get_boards,get_board,delete_board } from "../api/CommApi";

const BViewPage = () => {
    const navigate = useNavigate(); //navigate연결
    const [flag,setFlag] = useState(false);
    const {bno} = useParams();
    console.log("bno : "+bno)
    const [board, setBoard] = useState({ memberDto: {} }); //빈 객체일때 에러남
    // const [board, setBoard] = useState(); //빈 객체일때 에러남

    useEffect(
        () =>{
            get_board(bno)
            .then(res=>{
                console.log("넘어온 데이터 list data : ",res.data);
                if(res.data != null) setBoard(res.data);
            })
        },[bno]
    )
    
    const deleteBtn = (bno) =>{
        if(window.confirm(`${bno}번 게시글을 삭제하시겠습니까?`)){
            delete_board(bno)
            .then(res=>{
                alert(`${bno}번 게시글을 삭제했습니다.`);
                navigate('/blist');
                setFlag(!flag);
            })
        }
    }

    const updateBtn = (bno) =>{
        navigate('/bwrite',{state:{'bno':bno}})  //state 값전달
    }

    
    const writeBtn = () =>{
        navigate('/bwrite')
    }

    return(
        <div className="root">
            <h2>BViewPage 게시글 상세보기</h2>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={writeBtn} class="btn btn-primary me-md-2" type="button">글쓰기</button>
            </div>
            <div class="card">
                <h5 class="card-header">번호 : {board.bno}</h5>
                <div class="card-body">
                    <h5 class="card-title">제목 : {board.btitle}</h5>
                    <p class="card-text">{board.bcontent}</p>
                    <p class="card-text">{board.memberDto.id}</p>
                    <button onClick={()=>updateBtn(board.bno)} class="btn btn-primary">수정</button>
                    <button onClick={()=>deleteBtn(board.bno)} class="btn btn-primary">삭제</button>
                </div>
            </div>
        </div>
    )
}
export default BViewPage;