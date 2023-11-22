import React from 'react';
import {
  SunIcon
} from "@heroicons/react/20/solid";
import Searchbar from '../lib/Searchbar';

const Navbar = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center absolute top-0 left-0 p-6 rounded-2xl shadow-3xl">
      <h3 className="text-black font-bold">
        SquareDocs
      </h3>
      <Searchbar />
      <div className="flex items-center  gap-4">
        <SunIcon className="h-5 w-5 text-dark-grey" />
        <button className="text-white bg-primary-blue px-4 py-2 rounded-lg">
          Get Template
        </button>
      </div>
    </div>
  );
}

export default Navbar;