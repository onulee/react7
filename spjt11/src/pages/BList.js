import Spinner from "../compents/Spinner";
import { selectBoards } from "../api/CommApi";
import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';

const BList = () =>{

    const [board,setBoard] = useState([]);
    const [loading,setLoading] = useState(true);

    //axios -> 서버에 데이터 요청함.
    useEffect( () => {
        selectBoards().then(res=>{
            console.log("Json데이터 : ",res.data);
            setBoard(res.data);
            setLoading(false);
        })

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res =>{
        //     console.log("Json데이터 : ",res.data);
        //     setBoard(res.data);
        //     setLoading(false);
        // })
    },[]);

    const delBtn = (id) => {
        if (window.confirm(`${id}번 게시글을 삭제하시겠습니까?`)){
            console.log(id);
        }
    }

    const b_list = board.map((b)=>{
        return(
            <div className="card" key={b.id}>
                <h5 className="card-header">번호 : {b.id}</h5>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/BList/${b.id}`}>제목 : {b.title}</Link>
                    </h5>
                    <p className="card-text">내용 : {b.body}</p>
                    <button className="btn btn-primary">수정</button>
                    <button onClick={()=>delBtn(b.id)} className="btn btn-primary">삭제</button>
                </div>
            </div>
        )
    })


    return(
        <div className="root">
            <h2>게시판리스트</h2>
            {loading?<Spinner/>:b_list}
        </div>
    )
}

export default BList;