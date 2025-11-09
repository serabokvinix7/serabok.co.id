// RESPONSIVITAS TOMBOL MENU NAVIGASI TAMPILAN MOBILE
const menuButton = document.getElementById("nav-menu-button");
const navMenu = document.getElementById("nav-header-menu");
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuButton.classList.toggle("active");
})

// SECTION LAYANAN SERABOK BERGERAK DARI KANAN KE KIRI
const scrollLeft = document.getElementById("scroll-content");
scrollLeft.innerHTML += scrollLeft.innerHTML;

// SECTION LAYANAN
const tabButtons = document.querySelectorAll(".tab-slides-button button");
const layananTab = document.querySelector(".tab-content-layanan");
const serabutanTab = document.querySelector(".tab-content-serabutan");

layananTab.style.display = "flex";
serabutanTab.style.display = "none";
tabButtons[0].classList.add("active");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    
    if (button.classList.contains("slides-btn-layanan"))
    {
      layananTab.style.display = "flex";
      serabutanTab.style.display = "none";
    }
    else if (button.classList.contains("slides-btn-serabutan"))
    {
      serabutanTab.style.display = "flex";
      layananTab.style.display = "none";
    }
  });
});

// SECTION TESTIMONI
const container = document.querySelector(".testimonial_slides_wrapper");
const cards = document.querySelectorAll(".testimonial_card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const totalCards = cards.length;
const gap = 20;

function getVisibleCards() {
  if (window.innerWidth >= 1024) return 3;
  return 1;
}

function updateSlide() {
  const visibleCards = getVisibleCards();
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  let moveX = 0;

  if (visibleCards === 3) {
    moveX = index * 1110;
  } else {
    moveX = index * (cardWidth + gap);
  }

  const maxIndex = Math.ceil(totalCards / visibleCards) - 1;
  if (index > maxIndex) { index = maxIndex; }

  container.style.transform = `translateX(-${moveX}px)`;
}

nextBtn.addEventListener("click", () => {
  const totalGroups = Math.ceil(totalCards / getVisibleCards());
  if (index < totalGroups - 1) {
    index++;
    updateSlide();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlide();
  }
});

updateSlide();
window.addEventListener('resize', () => {
  index = 0;
  updateSlide();
});

// SECTION FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = answer.classList.contains('active');

    document.querySelectorAll('.faq-answer').forEach((el) => el.classList.remove('active'));

    if (!isActive) {
      answer.classList.add('active');
    }
  });
});

// SECTION BERITA 
const fadeElements = document.querySelectorAll('.fade-in');

function showOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll(); 

const btnCardLayanan1 = document.getElementById('btnCardLayanan1');
btnCardLayanan1.addEventListener('click', () => {
  alert('Fitur selengkapnya sedang dikembangkan 🌿');
});

const btnCardLayanan2 = document.getElementById('btnCardLayanan2');
btnCardLayanan2.addEventListener('click', () => {
  alert('Fitur selengkapnya sedang dikembangkan 🌿');
});

const btnCardSerabutan1 = document.getElementById('btnCardSerabutan1');
btnCardSerabutan1.addEventListener('click', () => {
  alert('Fitur selengkapnya sedang dikembangkan 🌿');
});

const btnCardSerabutan2 = document.getElementById('btnCardSerabutan2');
btnCardSerabutan2.addEventListener('click', () => {
  alert('Fitur selengkapnya sedang dikembangkan 🌿');
});

const btnSelengkapnya = document.getElementById('btnSelengkapnya');
btnSelengkapnya.addEventListener('click', () => {
  alert('Fitur selengkapnya sedang dikembangkan 🌿');
});