import { create } from 'zustand';

const usePopupStore = create((set) => ({
  // The initial state of the store with the 'popup' property set to false
  popup: false,
  showPopup: () => {
    set({ popup: true });
  },
  hidePopup: () => {
    set({ popup: false });
  },
}));

export default usePopupStore;