import React from 'react';
import useAuthStore from '../../stores/authStore';
import usePopupStore from '../../stores/popupStore';
import {
  SunIcon
} from "@heroicons/react/20/solid";
import Searchbar from '../lib/Searchbar';

const Navbar = () => {
  const { user } = useAuthStore();
  const { showPopup } = usePopupStore();

  const handleShowPopup = () => {
    showPopup();
  };

  return (
    <div className="w-full h-10 flex justify-between items-center px-4 rounded-2xl shadow-3xl z-40">
      <h3 className="text-black font-bold">
        SquareDocs
      </h3>
      <Searchbar />
      <div className="flex items-center  gap-4">
        <SunIcon className="h-5 w-5 text-dark-grey" />
        <button
          onClick={handleShowPopup}
          className="text-xs font-bold text-primary-white bg-primary-blue px-2.5 py-1.5 rounded-lg">
          {user ? 'Log Out' : "Log In"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;