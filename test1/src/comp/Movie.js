import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
const Movie = ({movie,delMovies,uFormMovies,openModal}) =>{
    const navigate = useNavigate();
    
    const edMovie = (no,title,year)=>{
        navigate(`/mform/${no}`,{
            state:{
                no:no,
                title:title,
                year:year
            }
        })
    }

    const delBtn = (no) => {
        // if (window.confirm(no+"번 게시글을 삭제하시겠습니까?")) {
        //     console.log("게시글을 삭제했습니다.");
        // }
        openModal(no);
        console.log("no : ",no)
        //delMovies(no);
    }

    return(
        <div className="card" >
            <h5 className="card-header">{movie.no}</h5>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.year}</p>
                <button onClick={()=>edMovie(movie.no,movie.title,movie.year)}  className="btn btn-primary">수정</button>
                <button onClick={()=>delBtn(movie.no)} data-bs-target="#exampleModal" data-bs-toggle="modal" className="btn btn-primary">삭제</button>
            </div>
        </div>
        
        
    );
}

export default Movie;