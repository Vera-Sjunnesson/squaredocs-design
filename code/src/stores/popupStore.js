import { create } from 'zustand';

const usePopupStore = create((set) => ({
  popup: false,
  showPopup: () => {
    set({ popup: true });
  },
  hidePopup: () => {
    set({ popup: false });
  },
}));

export default usePopupStore;