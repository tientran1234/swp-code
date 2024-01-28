import create from 'zustand';

const useScrollY = create((set) => ({
  scrollY: 0,
  setScrollY: (value) => set({ scrollY: value }),
  handleScrollY: () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    set({ scrollY });
  },
  init: () => {
    set({ scrollY: window.scrollY || document.documentElement.scrollTop });
  },
  subscribe: () => {
    window.addEventListener('scroll', useScrollY.getState().handleScrollY);
  },
  unsubscribe: () => {
    window.removeEventListener('scroll', useScrollY.getState().handleScrollY);
  },
}));

export default useScrollY;