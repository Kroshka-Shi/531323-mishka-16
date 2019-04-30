var btn = document.querySelector(".js-modal-btn");
var modal = document.querySelector(".modal");

function showModal() {
  modal.classList.remove("hidden");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  if (modal.classList.contains("open")) {
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
          document.body.style.overflow = "visible";
          modal.classList.add("hidden");
          modal.classList.remove("open");
      }
    });
  }
}

btn.addEventListener("click", showModal);
