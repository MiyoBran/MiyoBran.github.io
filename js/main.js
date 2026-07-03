// Reveal on scroll — respeta prefers-reduced-motion
(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (el) { io.observe(el); });
})();
