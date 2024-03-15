import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>
            find your book of choice.
          </h2><br />It's a waste of a target in feather
          <p className='header-text fs-18 fw-3'>
            We don't choose to read. We read to choose.<br />
            Choose a life that delights us, and the dreams that come true.<br />
          </p>
          <SearchForm />
          

        </div>
      </header>
    </div>
  )
}

export default Header;
