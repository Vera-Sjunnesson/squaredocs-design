import { create } from 'zustand';

interface PopUpStore {
  popup: boolean;
  showPopup: () => void;
  hidePopup: () => void;
}

const usePopupStore = create<PopUpStore>((set) => ({
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