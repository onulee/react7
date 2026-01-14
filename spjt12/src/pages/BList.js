import React,{ useState,useEffect } from "react";
import axios from 'axios';
import Spinner from "../comp/Spinner";
import { Link,useNavigate } from "react-router-dom";

const BList = () => {

    const navigate = useNavigate();
    // 게시판리스트 DB
    const [b_list,setB_list] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(
        () => {
            axios.get('http://localhost:8000/customer/clistJson')
            .then(res =>{
                console.log(res.data.list);
                setB_list(res.data.list);
                setLoading(false);
            })
        },[]
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

    const board_list = b_list.map((board)=>{
        return(
            <div className="card" key={board.bno}>
            <h5 className="card-header">번호 : {board.bno}</h5>
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/board/bList/${board.bno}`}>제목 : {board.btitle}</Link>
                </h5>
                <p className="card-text">{board.bcontent}</p>
                <button className="btn btn-primary">수정</button>
                <button onClick={()=>delBtn(board.bno)} className="btn btn-primary">삭제</button>
            </div>
          </div>
        )
    })



    return(
        <div className="root">
          <h2>BList 게시판리스트</h2>
          {/* 게시판리스트출력   */}
          {loading?<Spinner/>:board_list}
          

        </div>
    )
}

export default BList;