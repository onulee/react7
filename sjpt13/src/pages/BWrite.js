import React from "react";

const BWrite = () => {
    return(
        <div className="root">
          <h2>BWrite 게시글등록</h2>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">게시글 제목</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요."/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">내용</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">Button</button>
            <button class="btn btn-primary" type="button">Button</button>
          </div>
        </div>
    )
}

export default BWrite;