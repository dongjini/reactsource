import React from "react";
import BookList from "../components/BookList";
import useCustomMove from "./../hooks/useCustomMove";
import { genres } from "../util";

const Home = () => {
  const moveState = useCustomMove();

  const { size, genre, keyword, moveToList } = moveState;

  return (
    <div>
      <header className="flex mb-6">
        <h1 className="grow-1 text-[32px]">Book List</h1>
        <div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => moveToList({ page: 1, genre: genre, keyword: e.target.value })}
            placeholder="Search by title or author"
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm w-[200px] text-[.9em] leading-tight"
          />
          <select
            value={genre}
            name="genre"
            onChange={(e) => moveToList({ page: 1, genre: e.target.value, keyword: keyword })}
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm ml-2 text-[.9em] leading-tight"
          >
            <option value="">All Genres</option>
            {genres.map((genre, idx) => (
              <option key={idx} value={idx + 1}>
                {genre}
              </option>
            ))}
            <option value=""></option>
          </select>
        </div>
      </header>
      <BookList moveState={moveState} />
    </div>
  );
};

export default Home;
