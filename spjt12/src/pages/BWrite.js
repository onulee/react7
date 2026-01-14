import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const BWrite = () => {

    const navigate = useNavigate();
    const [btitle,setBtitle] = useState('');
    const [bcontent,setBcontent] = useState('');

    const saveBtn = () =>{
        alert('게시글을 저장합니다.');
        axios.post('http://localhost:8000/customer/cwriteJson/',
            {'btitle':btitle,'bcontent':bcontent,'id':'aaa'}
        )
            .then(res =>{
                console.log(res.data);
                navigate('/board/bList/')
            })
    }

    return(
        <div className="root">
          <h2>BWrite 게시판글쓰기</h2>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">제목</label>
            <input type="text" onChange={(e)=>setBtitle(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요."/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">내용</label>
            <textarea onChange={(e)=>setBcontent(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label htmlFor="formFile" class="form-label">파일첨부</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" onClick={saveBtn} type="button">저장</button>
            <button class="btn btn-secondary" onClick={()=>navigate('/board/bList')} type="button">취소</button>
          </div>

        </div>
    )
}

export default BWrite;