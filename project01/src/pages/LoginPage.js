import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { post_login,get_session } from "../api/CommApi";

const LoginPage = () => {
    const location = useLocation(); // state로 데이터 넘길시, 파라미터로 데이터 전달
    const {bno} = location.state || {}; //변수에 값이 없으면 빈공백처리(없으면 에러)
    const navigate = useNavigate(); // navigate사용
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');

    const getSession = async () => {
        const res = await get_session()
        return res.data;
    };

    const loginBtn = async () => {
        try {
            const res = await post_login({ id: id, pw: pw });

            if (res.data.trim() == "") {
                alert("아이디 또는 패스워드가 일치하지 않습니다.");
                navigate("/login");
            } else {
                alert("로그인이 되었습니다.");
                console.log("로그인 id:", res.data); // 이미 있음
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    

    return(
        <div className="root">
          <h2>로그인</h2>
          <form>
            <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label">아이디</label>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">패스워드</label>
                <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">아이디저장</label>
            </div>
            <button type="button" onClick={loginBtn} className="btn btn-primary">로그인</button>
          </form>
        </div>
    )
}

export default LoginPage;