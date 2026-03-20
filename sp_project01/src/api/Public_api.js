import React from "react";
import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:8181/",
});

export const getBoards = () => API.get("customer/api_list");
export const getBoard = () => API.get("customer/api_view");
