(function () {
  // Année
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Lang dropdown
  const lang = document.querySelector(".lang");
  if (lang) {
    const btn = lang.querySelector(".lang__btn");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      lang.classList.toggle("is-open");
    });
    document.addEventListener("click", () => lang.classList.remove("is-open"));
  }

  // Active link
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === file) a.classList.add("is-active");
  });

  // Contact form (démo)
  window.handleContactSubmit = function (e) {
    e.preventDefault();
    alert("Merci ! Message envoyé (démo).");
    e.currentTarget.reset();
    return false;
  };
})();
// HERO SLIDER
(function(){
  const slides = document.querySelectorAll('.hero-slide');
  if(!slides.length) return;

  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, 5000); // 5 secondes
})();
