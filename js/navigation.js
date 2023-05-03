const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    // Animate links function
    const animateLinks = () => {
      navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      });
    };
  
    burger.addEventListener("click", () => {
      // Toggle navbar
      nav.classList.toggle("nav-active");
  
      // Animate Links
      if (nav.classList.contains("nav-active")) {
        animateLinks();
      } else {
        navLinks.forEach((link) => (link.style.animation = ""));
      }
  
      // Burger Animation
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();