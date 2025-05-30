import axios from "axios";
export const API_SERVER_HOST = "http://localhost:8080/api/books";

export const getList = async (pageParam) => {
  const { page, size, genre, keyword } = pageParam;
  const res = await axios.get(API_SERVER_HOST, { params: { page: page, size: size, genre: genre, keyword: keyword } });
  return res.data;
};
export const getBook = async (id) => {
  const res = await axios.get(`${API_SERVER_HOST}/${id}`);
  return res.data;
};

export const putAvailableBook = async (bookObj) => {
  const res = await axios.put(`${API_SERVER_HOST}/${bookObj.id}`, bookObj);
  return res.data;
};

export const removeBook = async (id) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return res.data;
};

export const putBook = async (bookObj) => {
  const res = await axios.put(`${API_SERVER_HOST}/edit/${bookObj.id}`, bookObj);
  return res.data;
};

export const postBook = async (bookObj) => {
  const res = await axios.put(`${API_SERVER_HOST}/add`, bookObj);
  return res.data;
};
