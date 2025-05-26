// 서버로 요청 보내기
import axios from "axios";

// ajax => 1) fetch(): 브라우저 함수 (바로 사용 가능)
//         2) jquery 이용 : jquery 라이브러리 필요(설치 필요)
//         3) axios : axios 라이브러리 필요 (설치 필요)

// fetch("경로", { method: "post", body: {}, headers: {} })
//         .then(도착한 데이터 확인, 도착한 데이터를 적절한 타입으로 변환)
//         .then(화면에 나타내기);

// 기본방법
// fetch("경로", {
//   method: "post",
//   body: JSON.stringify({}),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => {
//     if (!res.ok) throw new Error("에러");
//     return res.json();
//   })
//   .then((data) => {
//     // 화면에 뿌러주기
//   });

// const fetchData = async () => {
//   const res = await fetch("경로");
//   const data = await res.json();
// };

// axios.get("경로").then((res) => res.data);

export const API_SERVER_HOST = "http://localhost:8080/todos";

export const getList = async () => {
  const res = await axios.get(API_SERVER_HOST);
  return res.data;
};

export const postTodo = async (todoObj) => {
  const res = await axios.post(`${API_SERVER_HOST}/add`, todoObj);
  return res.data;
};

export const putTodo = async (todoObj) => {
  const res = await axios.put(`${API_SERVER_HOST}/${todoObj.id}`, todoObj);
  return res.data;
};

export const removeTodo = async (id) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return res.data;
};
