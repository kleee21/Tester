document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileLinks = document.getElementById('mobile-links');
  
    toggleBtn.addEventListener('click', () => {
      const icon = toggleBtn.querySelector('ion-icon');
      icon.name = icon.name === 'menu' ? 'close' : 'menu';
      mobileLinks.classList.toggle('hidden');
    });
  
    const track = document.getElementById("carousel-track");
    const slides = track.children;
    let index = 0;
  
    function updateCarousel() {
      const width = slides[0].clientWidth;
      track.style.transform = `translateX(-${index * width}px)`;
    }
  
    document.getElementById("next").addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });
  
    document.getElementById("prev").addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  
    setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel();
    }, 5000);
  
    window.addEventListener("resize", updateCarousel);
    updateCarousel(); // Initial position fix
  });

// Show first slide on load
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

  const animatedElements = document.querySelectorAll('.animate');

  function animateOnScroll() {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); // remove when out of view (scroll up)
      }
    });
  }

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[-100%]');
    navLinks.classList.toggle('top-[9%]');
  }

// js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase config (match your existing config)
const firebaseConfig = {
  apiKey: "AIzaSyCma1ih9TAjDcIk0rmnnB7djCtoxyox2J0",
  authDomain: "loginweb2122113.firebaseapp.com",
  projectId: "loginweb2122113",
  storageBucket: "loginweb2122113.appspot.com",
  messagingSenderId: "742053318572",
  appId: "1:742053318572:web:7c87faa7d96479e36f3409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const signInBtn = document.getElementById("sign-in-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

// Toggle dropdown visibility
window.toggleDropdown = function () {
  dropdownMenu.classList.toggle("hidden");
};

// Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    signInBtn.style.display = "none";
    profileDropdown.classList.remove("hidden");
    userEmail.textContent = user.email;
  } else {
    // No user signed in
    signInBtn.style.display = "block";
    profileDropdown.classList.add("hidden");
  }
});

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.reload(); // Refresh the page on logout
  }).catch((error) => {
    alert("Error signing out: " + error.message);
  });
});


      // Toggle mobile menu
      document.getElementById("menu-toggle").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("hidden");
      });

      // Carousel logic
      const track = document.getElementById("carousel-track");
      const slides = track.children.length;
      let index = 0;

      document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + slides) % slides;
        updateCarousel();
      });

      document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % slides;
        updateCarousel();
      });

      function updateCarousel() {
        const width = track.clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
      }

      window.addEventListener("resize", updateCarousel);

      
