document.addEventListener("DOMContentLoaded", () => {
  // ===== Toggle menu mobile + aria =====
  const toggle = document.querySelector(".menu-toggle");
  const list = document.querySelector("nav ul");

  if (toggle && list) {
    toggle.addEventListener("click", () => {
      const isOpen = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Tutup menu setelah klik link
    for (const link of list.querySelectorAll("a")) {
      link.addEventListener("click", () => {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    }
  }

  // ===== Tandai link aktif berdasar halaman =====
  const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  for (const link of document.querySelectorAll("nav a")) {
    const href = (link.getAttribute("href") || "").toLowerCase();

    // Kalau file cocok, atau user di root "/" maka index aktif
    if (href === currentPage || 
        ((currentPage === "" || currentPage === "/") && href.includes("index"))) {
      link.classList.add("active");
    }
  }
});
