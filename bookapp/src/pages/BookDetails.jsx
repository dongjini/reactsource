import React from "react";
import BookDetail from "../components/BookDetail";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  // /edit/321
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-[32px]">Book Details</h1>
      <BookDetail id={id} />
    </div>
  );
};

export default BookDetails;
