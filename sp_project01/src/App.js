import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import BoardForm from './component/BoardForm';
import Header from './component/Header';
import { getBoards } from './api/Public_api';

function App() {
  // 스프링 boardList와 연결
  const [boards,setBoards] = useState(
    [
      {bno:1,btitle:"게시글제목1",bcontent:"게시글내용1"},
      {bno:2,btitle:"게시글제목2",bcontent:"게시글내용2"},
      {bno:3,btitle:"게시글제목3",bcontent:"게시글내용3"},
    ]
  )

  useEffect( () => {
    loadBoards();
  },[]
  );

  //공통영역 api로 진행
  const loadBoards = () =>{
    getBoards().then(response => {
      console.log("데이터 : ",response.data.list);
      setBoards(response.data.list);
    })
  }
  
  //axios실행 - 각페이지별 axios 호출을 해야 함. 공통영역에서 관리
  // useEffect( ()=>{
  //   axios.get('http://localhost:8181/customer/api_list')
  //   .then((response) => {
  //     console.log("데이터 : ",response.data.list);
  //     //setBoards(response.data.list);
  //   },[])
  // }


  
  //반복문 실행 : boards태그로 변경해서 적용
  const renderBoards = boards.map(board=>{
    return (
        <div className="card" key={board.bno}>
          <h5 className="card-header">{board.bno}</h5>
          <div className="card-body">
            <h5 className="card-title">{board.btitle}</h5>
            <p className="card-text">{board.bcontent}</p>
            <button type="button" class="btn btn-primary">수정</button>
            <button type="button" class="btn btn-secondary">삭제</button>
          </div>
        </div>
    );
  })


  return (
    <div className="App">
      <h2>메인페이지</h2>
      <h3>상단메뉴</h3>
      {/* 네비게이션 */}
      <Header/>
      {/* 입력창 */}
      <BoardForm/>
      {/* 주석 : 리스트 시작 */}
      <h3>게시글리스트</h3>
      {renderBoards}
      {/* 주석 : 리스트 끝 */}
    </div>
  );
}

export default App;
