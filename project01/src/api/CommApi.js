import React from "react";
import axios from "axios";

const API = axios.create({
 baseURL:'http://localhost:8181/',
});

export const get_boards = (search,page) => API.get(`customer/blist?search=${search}&page=${page}`);
export const get_board = (bno) => API.get(`customer/bview/${bno}`)
export const post_board = (data) => API.post(`customer/bwrite`,data)
export const put_board = (data) => API.put(`customer/bupdate`,data)
export const delete_board = (bno) => API.delete(`customer/bdelete`,bno)

export const get_members = () => API.get('member/mlist')
