(function () {
  // Année auto (si présent)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Dropdown langue
  const lang = document.querySelector(".lang");
  if (lang) {
    const btn = lang.querySelector(".lang__btn");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      lang.classList.toggle("is-open");
    });
    document.addEventListener("click", () => lang.classList.remove("is-open"));
  }

  // Active link (supporte espaces + accents)
  const currentFile = decodeURIComponent(
    (location.pathname.split("/").pop() || "Index.html")
  );

  document.querySelectorAll(".nav a[data-page]").forEach((a) => {
    const page = a.getAttribute("data-page");
    if (page === currentFile) a.classList.add("is-active");
  });

  // Mini “slider” (si plusieurs data-slide)
  const slides = Array.from(document.querySelectorAll("[data-slide]"));
  if (slides.length > 1) {
    let i = 0;
    slides.forEach((s, idx) => (s.style.display = idx === 0 ? "block" : "none"));
    setInterval(() => {
      slides[i].style.display = "none";
      i = (i + 1) % slides.length;
      slides[i].style.display = "block";
    }, 4500);
  }

  // Form contact (démo)
  window.handleContactSubmit = function (e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value?.trim() || "";
    alert(`Merci ${name ? name : ""} ! Message envoyé (démo).`);
    form.reset();
    return false;
  };
})();

