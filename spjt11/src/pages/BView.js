import React,{useState,useEffect} from "react";
import axios from "axios";
import { selectBoard,deleteBoard } from "../api/CommApi";
import { useParams,useNavigate } from "react-router-dom";
import Spinner from "../compents/Spinner";


const BView = () =>{

    const {id} = useParams();
    const navigate = useNavigate();
    const [boardOne,setBoardOne] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect( () => {
        selectBoard(id).then( res => {
                console.log(res.data);
                setBoardOne(res.data);
                setLoading(false);
            }
        )
    },[id]);

    const deleteHandler = (id) => {
        if (window.confirm("삭제하시겠습니까?")) {
            console.log("확인")
            deleteBoard(id).then(() => {
                alert('삭제가 되었습니다.');
                navigate('/BList');
            });
        }
    }


    return(
         <div className="root">
            <h2>게시판상세보기</h2>
            {loading && <Spinner/>}
            {!loading && (
                <>
                <div className="card">
                    <h5 className="card-header">번호 : {boardOne.id}</h5>
                    <div className="card-body">
                        <h5 className="card-title">User Id : {boardOne.userId}</h5>
                        <p className="card-text">제목 : {boardOne.title}</p>
                        <p className="card-text">내용 : {boardOne.body}</p>
                    </div>
                </div>
                <button type="button" onClick={() => navigate(`/BWrite/${id}`)} className="btn btn-primary">수정</button>
                <button type="button" onClick={deleteHandler} className="btn btn-primary">삭제</button>
                <button type="button" onClick={() => navigate("/")} className="btn btn-primary">목록</button>
                </>
            )}

        </div>
    )
}

export default BView;