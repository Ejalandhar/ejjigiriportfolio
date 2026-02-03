// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    navToggle.classList.toggle("nav-toggle--open");
  });

  nav.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      navToggle.classList.remove("nav-toggle--open");
    });
  });
}

// Smooth scroll enhancement (for older browsers)
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple demo handler for the contact form (no backend)
const contactForm = document.querySelector(".contact__form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out, your message has been recorded on this demo portfolio.");
    contactForm.reset();
  });
}

// Scroll reveal animations for sections and grids
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  // Fallback: show all content if IntersectionObserver is not supported
  revealElements.forEach((el) => el.classList.add("reveal--visible"));
}

// Subtle tilt animation for skill icons on cursor movement
const skillBoxes = document.querySelectorAll(".skills-icon-box");

skillBoxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "";
  });
});



// Register service worker for offline + Add to Home Screen (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      })
      .catch((err) => {
        console.warn('Service worker registration failed:', err);
      });
  });
}

