const navDropdown = document.querySelectorAll(".nav-item.dropdown");
const drawerDropdown = document.querySelectorAll(".drawer-list.dropdown");
const drawerOverlay = document.querySelector(".drawer-overlay");
const drawerCloseicon = document.querySelector(".drawer-closeicon");
const drawer = document.getElementById("drawer");
const navTrigger = document.getElementById("nav-trigger");

navDropdown.forEach((item) => {
  item.addEventListener("click", (evt) => {
    const el = evt.currentTarget;
    el.classList.toggle("active");
  });
});

drawerDropdown.forEach((item) => {
  item.addEventListener("click", (evt) => {
    const el = evt.currentTarget;
    el.classList.toggle("active");
  });
});

document.addEventListener("mouseup", (evt) => {
  navDropdown.forEach((item) => {
    if (!item.contains(evt.target)) {
      item.classList.remove("active");
    }
  });
});

navTrigger.addEventListener("click", () => {
  drawer.classList.add("active");
});
drawerCloseicon.addEventListener("click", () => {
  drawer.classList.remove("active");
});
