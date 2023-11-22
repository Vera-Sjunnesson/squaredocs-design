import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <label htmlFor="seach" className="bg-light-grey w-1/3 h-8 flex justify-between items-center px-4 py-2 rounded-lg relative max-w-sm">
      <MagnifyingGlassIcon className="h-5 w-5 text-dark-grey absolute z-50" />
      <input
        type="text"
        id="search"
        placeholder="Search..."
         className="h-full absolute bg-light-grey rounded-lg left-12 focus:outline-none w-full max-w-sm" />
    </label>
  );
}

export default Searchbar;