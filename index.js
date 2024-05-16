const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  document.getElementById("nav-menu").classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = header.offsetTop;
  if (window.pageYOffset > nav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
