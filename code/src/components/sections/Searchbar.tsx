import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <label
      htmlFor="seach"
      className="w-1/3 h-7 max-w-sm bg-light-grey relative flex justify-between items-center px-3 py-2 rounded-lg sm:hidden">
      <MagnifyingGlassIcon className="h-4 w-4 absolute text-dark-grey z-50" />
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search..."
        className="w-full h-full max-w-sm absolute bg-light-grey text-xxs text-dark-grey font-semibold rounded-lg left-10 focus:outline-none" />
    </label>
  );
}

export default Searchbar;