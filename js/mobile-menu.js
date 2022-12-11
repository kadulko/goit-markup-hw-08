(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[mobile-menu-open]"),
    closeMobileMenuBtn: document.querySelector("[mobile-menu-close]"),
    mobileMenu: document.querySelector("[mobile-menux]"),
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle("mobile-menu--is-hidden");
  }
})();
