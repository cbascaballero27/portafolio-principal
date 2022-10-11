export default function smoothScroll() {
  const linksElements = document.querySelectorAll("[data-smooth]"),
    menuMoblie = document.querySelector("ul"),
    menuBtn = document.querySelector(".menu-btn i");

  if (linksElements && menuMoblie && menuBtn) {
    const initSmooth = (event) => {
      event.preventDefault();
      const { target } = event,
        href = target.getAttribute("href"),
        sectionTop = document.querySelector(href).offsetTop - 71;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      menuMoblie.classList.remove("active");
      menuBtn.classList.remove("fa-times");
    };
    linksElements.forEach((link) => {
      link.addEventListener("click", initSmooth);
    });
  }
}
