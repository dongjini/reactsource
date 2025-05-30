import React, { useEffect, useState } from "react";
import { getBook, removeBook } from "../api/bookApi";
import Loading from "./Loading";
import { getBookEmoji, renderStars } from "../util";
import { useNavigate } from "react-router-dom";
import useCustomMove from "../hooks/useCustomMove";

const BookDetail = ({ id }) => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const { moveToEdit } = useCustomMove();

  useEffect(() => {
    getBook(id).then((data) => {
      console.log(data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  // delete 버튼 클리 시
  const handleDelete = () => {
    const confirmed = confirm("Delete this book?");

    if (!confirmed) return;

    // 삭제
    removeBook(id).then((data) => {
      console.log(data);
      // 삭제 후 home 이동
      navigate("/");
    });
  };

  return (
    <>
      <section className="flex mt-6 p-5 border-t border-neutral-200">
        <div className="first:grow-1">
          <h2 className="text-2xl mb-2.5">{book.title}</h2>
          <p className="my-[5px]">
            <strong>Author : {book.author}</strong>
          </p>
          <p>
            <strong>Genre : {book.genreName}</strong>
          </p>
          <p>
            <strong>Published date : {book.publishedDate}</strong>
          </p>
          <p>
            <strong>Rating : </strong>
            <span>{renderStars(book.rating)}</span>
          </p>
          <p>
            <strong>Available : {book.available ? "Available" : "Unavailable"}</strong>
            <span></span>
          </p>
        </div>
        <div className="text-[8.6em]">{getBookEmoji(book.genreName)}</div>
      </section>
      <div className="text-center p-2">
        <button
          onClick={() => moveToEdit(book.id)}
          type="submit"
          className="mx-1  my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700"
        >
          Edit Book
        </button>
        <button
          onClick={handleDelete}
          type="button"
          className="mx-1  my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white rounded-[3px] text-center hover:bg-red-700"
        >
          Delete Book
        </button>
      </div>
    </>
  );
};

export default BookDetail;
