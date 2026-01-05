import { useState } from 'react';
import './css/Style.css';

function App() {

  //자바스크립트 변수선언
  let id = 'aaa';

  //useState변수 선언
  // 변수가 2개지정, 1개는 변수,1개는 값을 변경할때 쓰는 함수
  const [userId,setUserId] = useState('abc');

  // 내부함수선언
  const loginBtn = () =>{
    alert('변수의 값 변경!!');
    //id = 'bbb';
    //console.log("aaa 변수값 변경 : ",id);
    setUserId('bbb');
    console.log('abc useState변수 : ',userId);


  }

  const loginBtn2 = function(){
    alert('loginBtn2 버튼 클릭');

  }

  function loginBtn3(){
    alert('loginBtn3 버튼 클릭');
  }



  return (
    <div className="App">
      <h2>메인페이지</h2>
      <div className='txt'>{userId}</div>
      <input type='text' placeholder='아이디를 입력하세요.'/>
      <br/>
      <button onClick={loginBtn}>로그인</button>
    </div>
  );
}

export default App;
