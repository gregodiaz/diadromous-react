import create from 'zustand';

const loggedInStore = create(set => ({
  loggedIn: false,

  setLoggedIn: newState => set({ loggedIn: newState }),
}));

export default loggedInStore;

