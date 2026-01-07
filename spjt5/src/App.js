import logo from './logo.svg';
import React,{useRef, useState} from 'react';
import './App.css';
import './css/Style.css';

function App() {

  //useState변수 : 값변경시 리로딩
  const [cnt,setCnt] = useState(0);
  const [inputNum,setInputNum] = useState('');
  //useRef변수 - focus() : 값변경시 리로딩을 하지 않음.
  const numRef = useRef();

  //함수선언
  const countBtn = () =>{
    setCnt(cnt+1);
  }

  const upBtn = () =>{
    // '0' == 0  '0' === 0
    if (inputNum.trim() === "") {
      alert("숫자를 입력하세요!");
      numRef.current.focus(); //포커스이동
      return;
    }
    setCnt(parseInt(inputNum));
    setInputNum('');
  }

  const onKeyUp = (e) => {
    if(e.keyCode == 13){ upBtn(); }
  }

  return (
    <div className="root">
     <h2>메인페이지</h2>
     <div className='txt'>{cnt}</div>
     <input ref={numRef} type='text' placeholder='숫자를 입력하세요.' value={inputNum}
      onChange={(e)=>setInputNum(e.target.value)}
      onKeyUp={onKeyUp}
     /><br/>
     <button onClick={countBtn}>숫자증가</button>
     <button onClick={upBtn}>input확인</button>
     <hr />
     <h2>로그인</h2>
     <div className='txt'></div>
     <input type='text' placeholder='아이디를 입력하세요.' /><br/>
     <input type='text' placeholder='이름을 입력하세요.' /><br/>
     <button>로그인</button>
    </div>
  );
}

export default App;
