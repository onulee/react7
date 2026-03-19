import React from "react";
import axios from "axios";

const API = axios.create({
 baseURL:'http://localhost:8181/customer/',
});

export const selectList = (search,page) => API.get(`api_list?search=${search}&page=${page}`);
export const selectview = (bno) => API.get(`api_view/${bno}`)
export const deleteCustomer = (bno) => API.get(`api_delete/${bno}`)

export const selectUsers = () => API.get('users')
