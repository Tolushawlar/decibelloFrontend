export const useScrollTo = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Get the navbar height
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar?.offsetHeight || 80;

    // Get element's distance from the top of the page
    const elementTop = element.getBoundingClientRect().top;
    const bodyTop = document.body.getBoundingClientRect().top;
    const absoluteElementTop = elementTop - bodyTop;

    // Calculate final position with offset
    const scrollPosition = absoluteElementTop - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  return scrollTo;
};
