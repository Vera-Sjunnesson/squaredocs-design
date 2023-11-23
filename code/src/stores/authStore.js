import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
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