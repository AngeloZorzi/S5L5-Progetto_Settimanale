window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  if (window.scrollY > 250) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
