
import React, { useState } from 'react';
import useAuthStore from '../../stores/authStore';
import usePopupStore from '../../stores/popupStore';

const Popup = () => {
  const { login } = useAuthStore();
  const { popup, hidePopup } = usePopupStore(); 

  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    await login(email);
  };

  const handleHidePopup = () => {
    hidePopup();
  };

  return (
    <>
      {popup
      && (
        <div className="absolute bg-primary-white flex flex-col justify-center items-center m-auto w-6/12 h-3/5 rounded-4xl shadow-3xl gap-10">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-8 bg-light-grey rounded-lg left-12 focus:outline-none w-2/6 px-2 max-w-sm" />
          <button className="text-xs font-bold text-primary-white bg-primary-blue px-2.5 py-1.5 rounded-lg w-1/6" onClick={handleLogin}>Log In</button>
          <button className="text-xs font-bold text-primary-white bg-primary-blue px-2.5 py-1.5 rounded-lg w-1/6" onClick={handleHidePopup}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default Popup;
