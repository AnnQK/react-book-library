import React from 'react';
import { useSelector } from 'react-redux';
import Aside from './components/layout/Aside';
import Header from './components/layout/Header';
import './scss/app.scss';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import AddBookModal from './components/AddBook/AddBookModal';

function App() {
  const addBookIsShown = useSelector((state) => state.ui.addBookModal);
  return (
    <>
      <Header />
      <main className="main">
        <Aside />
        {addBookIsShown && <AddBookModal />}
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
