import React, { useEffect, useState } from "react";

const FetchBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("/data/books.json");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log("Failed to fetch books", error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  });

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong>by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchBook;
