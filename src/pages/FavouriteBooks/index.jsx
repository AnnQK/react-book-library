import React from "react";
import SearchForm from "../../components/SearchForm";

function FavouriteBooks(props) {
  return (
    <section className="main__section">
      <h1 className="section__category-title">Favourite Books</h1>
      <div className="section__get-info">
        <SearchForm />
      </div>
    </section>
  );
}

export default FavouriteBooks;
