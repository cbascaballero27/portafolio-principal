// responsive navbar
export default function ativaMenu() {
  $(".menu-btn i").on("click", function menuActive() {
    const menu = $(".navbar ul"),
      classActive = "active",
      classClose = "fa-times";
    if (menu) {
      menu.toggleClass(classActive);
      $(this).toggleClass(classClose);
    }
  });
}
