"use strict";

var toggle = document.querySelector(".top__toggle");
var menu = document.querySelector(".main-nav__bottom");

var BREAKPOINTS = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1150px"
};

function hideOnMedia(e) {
  if (e.matches) {
    menu.classList.remove("visually-hidden");
  } else {
    menu.classList.add("visually-hidden");
    toggle.classList.remove("top__toggle--close");
  }
}

menu.classList.add("visually-hidden");

var mediaEvent = window.matchMedia("(min-width: " + BREAKPOINTS.tablet.toString() + ")");
hideOnMedia(mediaEvent);
mediaEvent.addListener(hideOnMedia);

toggle.addEventListener("click", function() {
    menu.classList.toggle("visually-hidden");
    toggle.classList.toggle("top__toggle--close");
});
