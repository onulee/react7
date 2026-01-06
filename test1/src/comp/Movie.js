import React,{useState,useEffect} from 'react';

const Movie = ({movie,delMovies}) =>{

    const delBtn = (no) => {
        if (window.confirm(no+"번 게시글을 삭제하시겠습니까?")) {
            console.log("게시글을 삭제했습니다.");
            delMovies(no);
        }
    }

    return(
        <div className="card" >
            <h5 className="card-header">{movie.no}</h5>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.year}</p>
                <a href="#" className="btn btn-primary">수정</a>
                <a onClick={()=>delBtn(movie.no)} className="btn btn-primary">삭제</a>
            </div>
        </div>
    );
}

export default Movie;