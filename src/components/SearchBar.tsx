import React from 'react';
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className='search'>
      <form action="" className="search__form">
        <input type="text" placeholder="Search your course here...." className="search__input" />
      </form>
    </div>
  )
}

export default SearchBar