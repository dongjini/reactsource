import { useEffect, useState } from "react";
import { getList, putAvailableBook } from "../api/bookApi";

const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextPage: 0,
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};

export const useFetch = (moveState) => {
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { moveToList, page, size, genre, keyword, refresh } = moveState;

  const toggleAvailable = (id, curAvailable) => {
    putAvailableBook({ id: id, available: !curAvailable }).then((data) => {
      console.log(data);
      moveToList({ page, size, genre, keyword });
    });
  };

  // 전체 리스트
  useEffect(() => {
    getList({ page, size, genre, keyword })
      .then((result) => {
        console.log(result);

        setData(result);

        setLoading(false);
      })
      .catch((e) => setError(e.message));
  }, [page, size, genre, keyword, refresh]);

  return { data, loading, error, toggleAvailable };
};
