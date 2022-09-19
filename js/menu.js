(() => {
  const refs = {
    openMenuBtn: document.querySelector(".burger-btn"),
    closeMenuBtn: document.querySelector(".mob-btn-close"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("mob-is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();