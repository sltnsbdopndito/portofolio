const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("change");
});

const typedTextSpan = document.getElementById("typed-text");
const textArray = ["Sultan Sabdo Pandito"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".next-button button");

  nextButton.addEventListener("click", function () {
    const portofolioSection = document.getElementById("portofolio");
    portofolioSection.scrollIntoView({ behavior: "smooth" });
  });
});

const portofolioItems = document.querySelectorAll("#portofolio .portofolio-item");

portofolioItems.forEach((item) => {
  item.style.opacity = "0";
});

function fadeInElements() {
  portofolioItems.forEach((item, index) => {
    const delay = index * 200;

    setTimeout(() => {
      item.classList.add("fade-in");
    }, delay);
  });
}

window.addEventListener("load", fadeInElements);

document.addEventListener("DOMContentLoaded", function () {
  const portofolioLink = document.querySelector(".nav-links li:nth-child(2) a");
  const portofolioSection = document.getElementById("portofolio");

  portofolioLink.addEventListener("click", function (event) {
    event.preventDefault();

    portofolioSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector(".nav-links li:nth-child(3) a");

  contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    const contactSection = document.getElementById("kontak");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  scrollToTop();

  alert("Pesan Anda telah terkirim!");
});
