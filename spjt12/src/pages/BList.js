import React,{ useState,useEffect } from "react";
import axios from 'axios';

const BList = () => {

    // 게시판리스트 DB
    const [b_list,setB_list] = useState([]);
    
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res.data);
            })
        },[])

    return(
        <div className="root">
          <h2>BList 게시판리스트</h2>
          {/* 게시판리스트출력   */}
          
        </div>
    )
}

export default BList;