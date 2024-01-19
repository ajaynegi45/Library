import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ScrollToTopButton"; // Import the ScrollToTop component
import SingleBook from "./pages/SingleBook.jsx";
import Login from "./pages/Login.jsx";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id/:readLink" element={<SingleBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop /> {/* Add the ScrollToTop component */}
    </>
  );
}

export default App;
