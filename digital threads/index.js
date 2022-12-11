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
