document.addEventListener("DOMContentLoaded", () => {
    // Loader
    window.addEventListener("load", () => {
      const loader = document.querySelector(".loader");
      loader.style.display = "none";
    });
  
    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");
  
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  
    // Service Cards Animation
    const serviceCards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    serviceCards.forEach((card) => {
      observer.observe(card);
    });
  
    function fillServiceRequest(serviceName) {
        document.getElementById("service-request").value = serviceName;
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      }
    // Fill Service Request
    const serviceInput = document.getElementById("service-request");
    serviceCards.forEach((card) => {
      card.addEventListener("click", () => {
        const serviceName = card.querySelector("h3").innerText;
        serviceInput.value = serviceName;
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Form Submission
    document.getElementById("contact-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Thank you for reaching out! We will get back to you soon.");
      document.getElementById("contact-form").reset();
    });
  
    // Email Validation
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    // Hero Section Image Interaction
    const heroImage = document.querySelector(".hero-section img");
  
    if (heroImage) {
      heroImage.addEventListener("mousemove", (e) => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = heroImage;
  
        const xPos = (offsetX / offsetWidth - 0.5) * 20; // Tilt effect
        const yPos = (offsetY / offsetHeight - 0.5) * 20;
  
        heroImage.style.transform = `perspective(1000px) rotateX(${yPos}deg) rotateY(${xPos}deg) scale(1.05)`;
      });
  
      heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      });
    }
  });

  function fillServiceRequest(serviceName) {
    document.getElementById("service-request").value = serviceName;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  // Existing JavaScript remains the same

// Why We Are Best From Others Section Animation
const whyUsCards = document.querySelectorAll("#why-us .service-card");
const whyUsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.5 }
);

whyUsCards.forEach((card) => {
  whyUsObserver.observe(card);
});

document.addEventListener("DOMContentLoaded", () => {
    // Existing code...
  
    // Why Us Section Scroll Animation
    const whyUsSection = document.getElementById("why-us");
    const whyUsCards = document.querySelectorAll("#why-us .text-center");
    let currentIndex = 0;
  
    function updateVisibleCard() {
      whyUsCards.forEach((card, index) => {
        if (index === currentIndex) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    }
  
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const sectionTop = whyUsSection.offsetTop;
      const sectionHeight = whyUsSection.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const scrollProgress = (scrollPosition - sectionTop) / sectionHeight;
        currentIndex = Math.min(Math.floor(scrollProgress * whyUsCards.length), whyUsCards.length - 1);
        updateVisibleCard();
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    // Initial update to show the first card
    updateVisibleCard();
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Existing code...
  
    // Why Us Section Auto-Scroll Animation
    const whyUsSection = document.getElementById("why-us");
    const whyUsCards = document.querySelectorAll("#why-us .text-center");
    let currentIndex = 0;
    let intervalId = null;
  
    function updateVisibleCard() {
      whyUsCards.forEach((card, index) => {
        if (index === currentIndex) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    }
  
    function startAutoScroll() {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % whyUsCards.length; // Cycle through topics
        updateVisibleCard();
      }, 5000); // Change topic every 5 seconds (adjust as needed)
    }
  
    function stopAutoScroll() {
      clearInterval(intervalId);
    }
  
    // Start auto-scroll when the user enters the "Why Us" section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAutoScroll();
          } else {
            stopAutoScroll();
          }
        });
      },
      { threshold: .5 } // Trigger when 50% of the section is visible
    );
  
    observer.observe(whyUsSection);
  
    // Initial update to show the first card
    updateVisibleCard();
  });