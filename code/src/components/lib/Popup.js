
import React, { useState } from 'react';
import useAuthStore from '../../stores/authStore';
import usePopupStore from '../../stores/popupStore';

const Popup = () => {
  const { login } = useAuthStore();
  const { popup, hidePopup } = usePopupStore(); 

  const [email, setEmail] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    await login(email);
    hidePopup();
  };

  const handleHidePopup = () => {
    hidePopup();
  };

  console.log('user',email)
  return (
    <>
      {popup
      && (
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-white flex flex-col justify-start items-center m-auto w-4/12 h-2/5 rounded-4xl shadow-3xl z-30 gap-5 p-5">
          <h2 className="text-primary-black text-m font-bold">Log in</h2>
          <label htmlFor="email" className="w-4/6 text-xxs text-primary-black mb-1 flex flex-col gap-1">
            Log in with your e-mail:
            <input
              type="text"
              id="email"
              placeholder="E-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-xs h-8 bg-light-grey rounded-lg left-12 focus:outline-none w-full px-2 max-w-sm" />
            </label>
          <span className="w-full flex flex-col items-center gap-3">
            <button className="text-xs font-bold text-primary-white bg-primary-blue px-2.5 py-1.5 rounded-lg w-3/6" onClick={(e) => handleLogin(e)}>Log In</button>
            <button className="text-xs font-bold text-primary-white bg-primary-blue px-2.5 py-1.5 rounded-lg w-3/6" onClick={handleHidePopup}>Cancel</button>
          </span>
        </form>
      )}
    </>
  );
};

export default Popup;
