import React, { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import { getBook } from "../api/bookApi";
import { postBook } from "../api/bookApi";
import { putBook } from "../api/bookApi";
import { useParams } from "react-router-dom";
import Loading from "./../components/Loading";

const EditBook = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(id).then((data) => {
      console.log("도착", data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  const onSubmit = (bookData) => {
    putBook(bookData).then((data) => {
      console.log("날짜 수정", data);
    });
  };

  return (
    <div>
      <h1 className="text-[32px]">Edit Book</h1>
      <BookForm initialData={book} onSubmit={onSubmit} />
    </div>
  );
};

export default EditBook;
