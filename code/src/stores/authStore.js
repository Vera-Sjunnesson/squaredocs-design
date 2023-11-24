import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // The initial state of the store with the 'user' property set to null
  user: null,
  // Async function to handle user login
  login: async (email) => {
    try {
      // Get the authentication URL from environment variables
      const auth_url = process.env.REACT_APP_LOGIN_URL
      // Send a POST request with the user's email for login
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
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('user');
  }
}));

export default useAuthStore;