var toggle = document.querySelector(".top__toggle");
var menu = document.querySelector(".main-nav__bottom");

function hideOnMedia() {
  if (menu.classList.contains("visually-hidden")) {
    menu.classList.remove("visually-hidden");
    toggle.classList.add("top__toggle--close");
    menu.classList.toggle("open");

  } else {
    menu.classList.add("visually-hidden");
    toggle.classList.remove("top__toggle--close");
  }
}

toggle.addEventListener("click", hideOnMedia);
