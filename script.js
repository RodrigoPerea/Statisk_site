/* burgermenu */

document.addEventListener("DOMContentLoaded", nav);

function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar-menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
    /* body.classList.add("noScroll"); */
    /*  body.classList.remove("noScroll"); */
  });
}

let folder = document.getElementsByClassName("folder_menu");
let i;

for (i = 0; i < folder.length; i++) {
  folder[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let info = this.nextElementSibling;
    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
    if (info.style.maxHeight) {
      info.style.maxHeight = null;
    } else {
      info.style.maxHeight = info.scrollHeight + "px";
    }
  });
}
