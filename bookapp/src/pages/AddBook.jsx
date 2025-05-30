import React from "react";
import BookForm from "../components/BookForm";
import { postBook } from "../api/bookApi";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const onSubmit = (bookData) => {
    postBook(bookData).then((data) => {
      console.log("날짜 수정", data);
      navigate("/");
    });
  };

  return (
    <div>
      <h1 className="text-[32px]">Add New Book</h1>
      <BookForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddBook;
