import React from 'react';
import useAuthStore from '../../stores/authStore';
import usePopupStore from '../../stores/popupStore';
import {
  SunIcon
} from "@heroicons/react/20/solid";
import Searchbar from '../lib/Searchbar';


const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { showPopup } = usePopupStore();

  const handleAction = () => {
    if (user) {
      logout();
    } else {
    showPopup();
  }
  };

  return (
    <div className="w-full h-10 flex justify-between items-center px-4 rounded-2xl shadow-3xl z-30">
      <span className="flex items-center gap-2">
        <img
          src={`${process.env.PUBLIC_URL}/squaredocs-logo.png`}
          alt="squaredocs logo"
          className="h-4 w-4" />
        <h3 className="text-primary-black">
          SquareDocs
        </h3>
      </span>
      <Searchbar />
      <div className="flex items-center  gap-4">
        <SunIcon className="h-5 w-5 text-dark-grey" />
        <button
          onClick={handleAction}
          className="text-xs font-bold text-primary-white bg-primary-blue px-2.5 py-1.5 rounded-lg">
          {user ? 'Log Out' : "Log In"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;