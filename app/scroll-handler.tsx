'use client';

export default function ScrollHandler() {
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
      document.documentElement.classList.remove('scroll-smooth');
      requestAnimationFrame(() => {
        document.documentElement.classList.add('scroll-smooth');
      });
    });
  }
  return null;
}
