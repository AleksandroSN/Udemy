const btn = document.getElementById("mobile-menu-btn");

btn.addEventListener("click", () => {
  const idMobileMenu = btn.dataset.collapseToggle;
  const mobileMenu = document.getElementById(idMobileMenu);
  return mobileMenu.classList.toggle("hidden");
});
