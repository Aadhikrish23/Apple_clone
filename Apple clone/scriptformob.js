function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const bars = hamburgerMenu.querySelectorAll('.bar');
    
    if (mobileMenu.style.maxHeight === '0px') {
      mobileMenu.style.maxHeight = '100vh';
      hamburgerMenu.classList.add('open'); 
    } else {
      mobileMenu.style.maxHeight = '0px';
      hamburgerMenu.classList.remove('open'); 
    }
  }