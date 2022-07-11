import React from "react";

export const bookInfoContext = React.createContext({});

function BookInfoProvider(props) {
  const [bookInfo, setBookInfo] = React.useState({
    title: "",
    author: "",
    description: "",
    price: "",
    review: "",
  });
  return (
    <bookInfoContext.Provider value={{ bookInfo, setBookInfo }}>
      {props.children}
    </bookInfoContext.Provider>
  );
}

export default BookInfoProvider;
