import React,{ useState,useEffect } from "react";
import axios from 'axios';
import Spinner from "../comp/Spinner";
import { Link } from "react-router-dom";

const BList = () => {

    // 게시판리스트 DB
    const [b_list,setB_list] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res.data);
                setB_list(res.data);
                setLoading(false);
            })
        },[]
    )

    const board_list = b_list.map((board)=>{
        return(
            <div className="card">
            <h5 className="card-header">번호 : {board.id}</h5>
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/board/bList/${board.id}`}>제목 : {board.title}</Link>
                </h5>
                <p className="card-text">{board.body}</p>
                <button className="btn btn-primary">수정</button>
                <button className="btn btn-primary">삭제</button>
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