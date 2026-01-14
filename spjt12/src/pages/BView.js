import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const BView = () =>{

    const {bno} = useParams();
    const navigate = useNavigate(); //페이지 이동
    const [board,setBoard] = useState({});
    console.log("넘어온 id : ",bno);

    useEffect( () => {
        axios.get(`http://localhost:8000/customer/cviewJson/${bno}/`)
        .then(res => {
            console.log("BView : ",res.data);
            setBoard(res.data.board); //useState변수에 입력
        })
    },[bno]
    )

    const delBtn = (bno)=>{
        if(window.confirm(`${bno}번 게시글을 삭제하시겠습니까?`)){
            axios.delete(`http://localhost:8000/customer/cdeleteJson/${bno}/`,
                {data :{name:'홍길동'} })
            .then(res =>{
                console.log(res.data);
            })
            alert('게시글이 삭제 되었습니다.')
            navigate('/board/bList')
        }
    }

    return(
        <div className="root">
          <h2>BView 상세보기</h2>
          <div className="card" >
            <img src="/images/nct1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">제목 : {board.btitle}</h5>
                <p className="card-text">{board.bcontent}</p>
            </div>
          </div>
          <button type="button"  class="btn btn-primary">수정</button>
          <button type="button" onClick={()=>delBtn(board.bno)} class="btn btn-secondary">삭제</button>
          <button type="button" onClick={()=>navigate('/board/bList')} class="btn btn-success">목록</button>
          

        </div>
    )
}

export default BView;