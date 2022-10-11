export default function animaScroll() {
  const initAnima = () => {
    const allSections = document.querySelectorAll("[data-anima]"),
      scrollTop = window.pageYOffset,
      className = "active";

    if (allSections.length && scrollTop) {
      allSections.forEach((section) => {
        scrollTop > section.offsetTop - 400
          ? section.classList.add(className)
          : section.classList.remove(className);
      });
    };
  };
  window.addEventListener("scroll", initAnima);
};
