document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
  
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Change navbar style on hover
    var menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
        this.style.color = '#FFD700'; // Change the color on hover
      });
  
      item.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Reset the color on mouseout
      });
    });
  });
  