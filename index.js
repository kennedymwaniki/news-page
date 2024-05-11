const open = document.querySelector(".hamburger");
const close = document.querySelector(".closenav");
const nav = document.querySelector(".navs");

open.addEventListener("click", function () {
  console.log("clicked");
  if (nav.style.display == "none") {
    nav.style.display = "block";
    // close.style.display = "block";
  }
});

close.addEventListener("click", function () {
  console.log("clicked");
  nav.style.display = "none";
});
