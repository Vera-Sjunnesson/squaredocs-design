import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  login: async (email) => {
    try {
      const response = await fetch('https://blue.wudpecker.io/profile/mock-signin/', {
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