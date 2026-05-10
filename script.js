document.addEventListener("DOMContentLoaded", () => {
  const menuTrigger = document.getElementById("menu-trigger");
  const closeMenu = document.getElementById("close-menu");
  const sidebarShell = document.getElementById("sidebar-shell");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");

  function openSidebar() {
    sidebarShell.classList.add("open");
    sidebarBackdrop.classList.add("open");
    menuTrigger.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebarShell.classList.remove("open");
    sidebarBackdrop.classList.remove("open");
    menuTrigger.setAttribute("aria-expanded", "false");
  }

  menuTrigger.addEventListener("click", openSidebar);
  closeMenu.addEventListener("click", closeSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);
});
