import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { get_boards,get_board,delete_board } from "../api/CommApi";

const BViewPage = () => {
    const navigate = useNavigate(); //navigate연결
    const [flag,setFlag] = useState(false);
    const [boards,setBoards] = useState([]);

    useEffect(
        () =>{
            get_boards("검색내용",1)
            .then(res=>{
                console.log("넘어온 데이터 list",res.data.list);
                setBoards(res.data.list);
            })
        },[flag]
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

    //게시판리스트 출력함수 - map사용시 key입력
    const board_list = boards.map( (board) => {
        return(
            <div class="card" key={board.bno}>
                <h5 class="card-header">번호 : {board.bno}</h5>
                <div class="card-body">
                    <h5 class="card-title">제목 : {board.btitle}</h5>
                    <p class="card-text">{board.bcontent}</p>
                    <button onClick={()=>updateBtn(board.bno)} class="btn btn-primary">수정</button>
                    <button onClick={()=>deleteBtn(board.bno)} class="btn btn-primary">삭제</button>
                </div>
            </div>
        )
    })

    const writeBtn = () =>{
        navigate('/bwrite')
    }

    return(
        <div className="root">
            <h2>BList 게시판리스트</h2>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={writeBtn} class="btn btn-primary me-md-2" type="button">글쓰기</button>
            </div>
            {board_list}
        </div>
    )
}
export default BList;