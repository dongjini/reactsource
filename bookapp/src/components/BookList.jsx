import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import { renderStars } from "../util";
import { getBookEmoji } from "../util";

import PageComponent from "./PageComponent";

const BookList = ({ moveState }) => {
  const { moveToDetail, moveToList } = moveState;

  const { data, loading, error, toggleAvailable } = useFetch(moveState);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <section className="p-0">
        {data.dtoList.map((book) => (
          <article className="flex items-center border-2 border-stone-200-[5px] p-4 mb-2.5 bg-white" key={book.id}>
            <div className="first:text-5xl pr-4">{getBookEmoji(book.id)}</div>
            <div className="grow-1">
              <h3>{book.title}</h3>
              <p>
                {book.author} / {book.genreName}
              </p>
              <p>{renderStars(book.rating)}</p>
            </div>
            <div className="flex flex-col text-[0.9em] ">
              <button
                onClick={() => toggleAvailable(book.id, book.available)}
                className={
                  `w-[100px] m-1 py-2.5 bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700` +
                  (book.available ? "" : ` opacity-33`)
                }
              >
                {book.available ? "Available" : "Unavailable"}
              </button>
              <a
                href=""
                className="w-[100px] m-1 px-1.5 py-3 bg-stone-100 rounded-[3px] text-center"
                onClick={() => moveToDetail(book.id)}
              >
                Details
              </a>
            </div>
          </article>
        ))}
      </section>
      <PageComponent data={data} movePage={moveToList} />
    </>
  );
};

export default BookList;
