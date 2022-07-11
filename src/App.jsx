import React from "react";
import { Routes, Route } from "react-router-dom";
import BookInfoProvider from "./context/BookInfoContext";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import NowReading from "./pages/NowReading";
import BuyBooks from "./pages/BuyBooks";
import FavouriteBooks from "./pages/FavouriteBooks";
import WishList from "./pages/WishList";
import History from "./pages/History";
import BookFull from "./components/BookItem/BookFull";
import Error from "./pages/Error/Error";
import IntroPage from "./pages/IntroPage/IntroPage";

function App() {
  return (
    <BookInfoProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<IntroPage />} />
          <Route path="reading" element={<NowReading />} />
          <Route path="browse" element={<Browse />} />
          <Route path="shop" element={<BuyBooks />} />
          <Route path="favourite" element={<FavouriteBooks />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BookInfoProvider>
  );
}

export default App;
