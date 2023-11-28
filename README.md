# wudpecker-task

## The task

This project is a recreation of a specific, chosen design using Tailwind CSS, focusing on state management with Zustand and creating login functionalities.

## The process

1. I chose Zustand over Redux because I want to to learn about its advantages and syntax. I started off by researching it.
2. Set up React App and planned a basic structure, thinking of what functionality and styling each component should have
3. Focused on building and styling the fundamental parts and played around with different features in Tailwind CSS to decide on suitable themes
4. Utilized nested maps within the Sidebar component to display the hierarchical menu lists to more easily style them
5. Then moved on to the main section, breaking it down to 3 components and concentrated on individually styling each part
6. Once the styling was in a good place, I created an "authStore", making a POST request to the provided API
7. Found Zustand's syntax straightforward while implementing actions in the created popup component
8. Created another store for managing the popup window state
9.  Used state functionality for toggling between the "log in" and "log out" button states
10. Retrieved user data such as "name" and "email" to be presented in the sidebar
11. Detected bugs, redesigned the logo in Figma and made hover states for buttons and links
12. Installed React Hook Form to validate the user email input in the popup form 
13. Worked with validation in the email input login form (based on required and type) and created error messages
14. Explored media queries within Tailwind CSS\

If I had more time I would present the response error message from the API if the user is not registered/found and add the following code to the authStore.js:

```javascript
const useAuthStore = create((set) => ({
  // The initial state of the store with the 'user' and 'errorMessage' properties set to null
  user: null,
  errorMessage: null,

  // Async function to handle user login
  login: async (email) => {
    try {
      const auth_url = process.env.REACT_APP_LOGIN_URL
      const response = await fetch(auth_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        const userData = await response.json();
        set({ user: userData });
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        const errorData = await response.json();
        // Get response error message
        throw new Error(errorData.error || 'Login failed');
      }
    } catch (error) {
      // Set the errorMessage property in store to response error message
      set({ errorMessage: '* ' + error.message });
      console.error('Login error:', error);
    }
  },
  // Reset the errorMessage property in store to null
  resetErrorMessage: () => {
    set({ errorMessage: null });
    localStorage.removeItem('errorMessage');
  },
  logout: () => {
    set({ user: null, errorMessage: null });
    localStorage.removeItem('user');
  }
}));
```
And I would adjust the Popup.js component as follows:
```javascript
  // On submission with a valid email, the user is logged in and user data can be retrieved from the store
  const handleLogin = async () => {
    resetErrorMessage();
    await login(email);
    reset();
    setEmail('');
  };

  // If there is a user present in the store the popup hides
  useEffect(() => {
    if (user) {
      hidePopup();
    }
  }, [hidePopup, user]);
  
  // On cancel click the popup hides and the errors resets
  const handleHidePopup = () => {
    hidePopup();
    reset();
    resetErrorMessage();
    setEmail('');
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
                    },
                  })} 
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full h-10 max-w-sm text-xs bg-light-grey px-3 rounded-lg text-xxs text-dark-grey font-semibold focus:outline-none" />
                  {errors.email
                    && 
                      <span className="text-red-500 font-medium">
                        {errors.email.message}
                      </span>}
                  {/* Show errorMessage from store / API response */}
                  {errorMessage && !errors.email
                    && 
                      <span className="text-red-500 font-medium">
                        {errorMessage} 
                      </span>}
              </label>
  ...
  )})
``` 
<img width="403" alt="Skärmavbild 2023-11-26 kl  18 33 13" src="/code/public/readme-demo.png">

## Technologies, dependencies and tools used

- React
- Zustand
- Tailwind CSS
- React Hook Form
- Postman
- Figma

## View it live

https://wudpecker-task-vera.netlify.app
