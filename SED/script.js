document.addEventListener("DOMContentLoaded", function () {

  const text = "Sed Works";
  const typingText = document.getElementById("typing-text");

  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (isDeleting) {
      typingText.textContent = text.substring(0, index--);
    } else {
      typingText.textContent = text.substring(0, index++);
    }

    if (!isDeleting && index > text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      setTimeout(typeLoop, 300);
    } else {
      setTimeout(typeLoop, isDeleting ? 100 : 150);
    }
  }

  typeLoop();


  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const featuresSection = document.getElementById("features");

  if (learnMoreBtn && featuresSection) {
    learnMoreBtn.addEventListener("click", function () {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    });
  }


  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".section, .hero").forEach(section => {
  observer.observe(section);
});
function scrollGallery(direction) {
  const gallery = document.querySelector('.pc-gallery');
  const scrollAmount = gallery.offsetWidth * 0.5;

  gallery.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}


