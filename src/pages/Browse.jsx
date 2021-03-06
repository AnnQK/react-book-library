import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "../components/BookItem/Skeleton";
import BookItem from "../components/BookItem";
import Sort from "../components/Sort";
import SearchForm from "../components/SearchForm";
import { fetchBooks } from "../redux/store/async-actions/fetchBooks";

function Browse() {
  const { selectedTag, sortType, searchValue } = useSelector(
    (state) => state.filter
  );
  const items = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();

  const books = items.map((book) => {
    return <BookItem key={book.id} {...book} />;
  });

  const skeletons = [...new Array(7)].map((_, idx) => {
    return <Skeleton key={idx} />;
  });

  React.useEffect(() => {
    dispatch(fetchBooks(sortType.type, selectedTag.type, searchValue));
  }, [dispatch, sortType, selectedTag, searchValue]);

  return (
    <section className="main__section">
      <h1 className="section__category-title">Browse Available Books</h1>
      <div className="section__get-info">
        <Sort />
        <SearchForm />
      </div>
      <section className="section__books">
        {isLoading ? skeletons : books}
      </section>
      ;
    </section>
  );
}

export default Browse;
