import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Aside from "../components/layout/Aside";
import Header from "../components/layout/Header";
import "../scss/app.scss";
import Footer from "../components/layout/Footer";
import AddBookModal from "../components/AddBook/AddBookModal";
import BookFull from "../components/BookItem/BookFull";
import Error from "./Error/Error";

function Home() {
  const addBookIsShown = useSelector((state) => state.ui.addBookModal);
  const bookInfoIsShown = useSelector((state) => state.ui.bookInfoModal);
  return (
    <>
      <Header />
      <main className="main">
        <Aside />
        {addBookIsShown && <AddBookModal />}
        {bookInfoIsShown && <BookFull />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Home;
