import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Layout from "./components/Layout";

// http://localhost:5173/ => home
// http://localhost:5173/add => AddBook
// http://localhost:5173/edit/1 => EditBook
// http://localhost:5173/books/1 => BookDetails

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
