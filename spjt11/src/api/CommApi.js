import React from "react";
import axios from "axios";

const API = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com/',
});

export const selectBoards = () => API.get('posts')
export const selectBoard = (id) => API.get(`posts/${id}`)
// export const selectBoard = (id) => API.get(`posts/bview/${id}`)
export const deleteBoard = (id) => API.get(`posts`)
// export const deleteBoard = (id) => API.get(`posts/bdelete/${id}`)

export const selectUsers = () => API.get('users')