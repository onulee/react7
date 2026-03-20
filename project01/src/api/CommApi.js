import React from "react";
import axios from "axios";

const API = axios.create({
 baseURL:'http://localhost:8181/',
});

export const board_list = (search,page) => API.get(`customer/blist?search=${search}&page=${page}`);
export const board_view = (bno) => API.get(`customer/bview/${bno}`)
export const board_delete = (bno) => API.delete(`customer/bdelete/${bno}`)

export const member_list = () => API.get('member/mlist')
