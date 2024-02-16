import { create } from 'zustand';

interface User {
  email: string;
  first_name: string;
  last_name: string;
  max_meeting: string;
  picture: string;
  used_this_month: string;
  user_plan: string;
}

interface AuthStore {
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  // The initial state of the store with the 'user' property set to null
  user: null,
  // Async function to handle user login
  login: async (email: string) => {
    try {
      // Get the authentication URL from environment variables
      const auth_url = process.env.REACT_APP_LOGIN_URL
      if (!auth_url) {
        throw new Error('REACT_APP_LOGIN_URL is not defined');
      }
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
        console.log(userData);
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