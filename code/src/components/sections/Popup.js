
import React, { useState } from 'react';
import useAuthStore from '../../stores/authStore';
import { useForm } from 'react-hook-form';
import usePopupStore from '../../stores/popupStore';
import { BlueButton } from '../ui/Buttons';
import { XMarkIcon } from "@heroicons/react/24/outline";

//Popup window with a submission form to login with email (validation based on required and type) + two cancel buttons
const Popup = () => {
  const { login } = useAuthStore();
  const { popup, hidePopup } = usePopupStore(); 
  const [email, setEmail] = useState('');
  // Using React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  // On submission with email, the user is logged in and user data can be retrieved from the store, the popup hides and email is set to its initial state
  const handleLogin = async () => {
    await login(email);
    reset();
    setEmail('');
    hidePopup();
  };
  // On cancel click the popup hides and the error resets
  const handleHidePopup = () => {
    hidePopup();
    reset();
  };

  return (
    <>
      {popup
        && (
          <div className="w-5/12 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-white flex flex-col justify-start items-center gap-10 m-auto rounded-4xl shadow-3xl z-30 p-5 sm:w-10/12 lg:w-8/12">
            <button
              type="button"
              onClick={handleHidePopup}
              className="h-4 w-4 text-dark-grey self-end cursor-pointer hover:text-primary-black">
              <XMarkIcon />
            </button>
            <h2 className="text-m text-primary-black font-bold">
              Log in
            </h2>
            <form
              className="w-3/4 h-full flex flex-col justify-start items-center gap-3 group"
              onSubmit={handleSubmit(handleLogin)}
              noValidate>
              <label
                htmlFor="email"
                className="w-5/6 h-20 flex flex-col gap-1 text-xxs text-primary-black font-semibold mb-1">
                E-mail:
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your e-mail..."
                  {...register('email', { 
                    required: "* Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "* Please enter a valid email"
                    }
                  })} 
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full h-10 max-w-sm text-xs bg-light-grey px-3 rounded-lg text-xxs text-dark-grey font-semibold focus:outline-none" />
                  {errors.email
                    && 
                    <span className="text-red-500 font-medium">
                      {errors.email.message}
                  </span>}
              </label>
              <span className="w-full flex flex flex-col items-center gap-5">
                <BlueButton
                  type="submit"
                  text="Log in"
                  width="w-5/6"
                  height="h-10" />
                <BlueButton
                  type="button"
                  text="Cancel"
                  width="w-5/6"
                  height="h-10"
                  onButtonClick={handleHidePopup} />
              </span>
            </form>
            <p className="text-xxs text-dark-grey font-semibold self-end cursor-pointer hover:text-primary-black">
              Forgot your e-mail?
            </p>
          </div>
        )}
    </>
  );
};

export default Popup;
