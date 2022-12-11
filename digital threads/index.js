/**********************************/
/********* Sticky Navbar **********/
/**********************************/

const homeContainer = document.querySelector(".home-container");
navbar = document.querySelector(".navbar");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      navbar.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      navbar.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "100px",
  }
);
observer.observe(homeContainer);

/**********************************/
/********* Smooth Scroll **********/
/**********************************/

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
});
