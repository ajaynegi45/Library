import React from 'react';
import '../assets/styles/HomeSearch.css';
import blue from '../assets/svg/blue.svg';
import { NavLink } from 'react-router-dom';

const HomeSearch = () => {
  return (
    <>
    <div className="home-search">
      <div className="left-side">
        <h1>Your Gateway to a Universe of Books</h1>
        <p>Explore a vast collection of books</p>

        <div className="search-div" >
          <NavLink to={`/books`} className="search-btn">Search Book</NavLink> 
        </div>

      </div>

      <div className="right-side">
        <img src={blue} alt="" />
      </div>

    </div>
    </>
  );
};

export default HomeSearch;
