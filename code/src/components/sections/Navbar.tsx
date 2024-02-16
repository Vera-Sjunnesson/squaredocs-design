import React from 'react';
import useAuthStore from '../../stores/authStore';
import usePopupStore from '../../stores/popupStore';
import { SunIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Searchbar from './Searchbar';
import { BlueButton } from '../ui/Buttons';

//Component for header navbar
const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { showPopup } = usePopupStore();
  //On button click, the user will be logged out if there is a user object in the store present, if not a popup window will show
  const handleAction = () => {
    if (user) {
      logout();
    } else {
      showPopup();
    }
  };

  return (
    <nav className="w-full h-12 flex justify-between items-center px-4 rounded-2xl shadow-3xl z-30">
      <span className="flex items-center gap-2">
        <img
          src={`${process.env.PUBLIC_URL}/squaredocslogo.png`}
          alt="Squaredocs logo"
          className="h-5 w-5" />
        <h3 className="text-xs text-primary-black font-semibold tracking-tight">
          SquareDocs
        </h3>
      </span>
      <Searchbar />
      <span className="flex items-center gap-5">
        <MagnifyingGlassIcon className="h-4 w-4 text-dark-grey font-bold z-50 hidden sm:block" />
        <SunIcon className="h-5 w-5 text-dark-grey cursor-pointer hover:text-primary-black sm:hidden" />
        <BlueButton
          width="w-20"
          buttontype="button"
          onButtonClick={handleAction}
          text={user ? 'Log out' : "Log in"} />
      </span>
    </nav>
  );
}

export default Navbar;