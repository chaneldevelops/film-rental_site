// get all filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

// get all equipment images
const equipmentImages = document.querySelectorAll('#equipment .row div.col-lg-3');

// add click event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    // remove active class from all filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // add active class to clicked filter button
    this.classList.add('active');

    // filter images based on button data-filters
    const filterValue = this.dataset.filters;
    equipmentImages.forEach(img => {
      if (img.querySelector('img').dataset.filters.includes(filterValue) || filterValue === 'all') {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

// burger menu functionality
const burger = document.querySelector('.burger');
const navBtns = document.querySelector('.nav-btns');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navLinks = document.querySelectorAll('.dropdown-menu ul li a'); // collection of the links in the menu


// Toggle drop down menu
burger.addEventListener('click', () => {
  navBtns.classList.toggle('show');
  dropdownMenu.classList.toggle('show');
});

// Hide menu when selection is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBtns.classList.remove('show');
    dropdownMenu.classList.remove('show');
  });
});



// THE SCROLL UP BUTTON //

// Get a reference to the scroll-up button element
const scrollUpButton = document.querySelector('.scroll-up');

// Add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  // This checks if someone has scrolled beyond a certain point (100 pixels)
  if (window.pageYOffset > 100) {
    // If somoene has scrolled beyond the threshold, show the scroll-up button by setting its display property to block
    scrollUpButton.style.display = 'block';
  } else {
    // If someone has not scrolled beyond the threshold, hide the scroll-up button by setting its display property to none
    scrollUpButton.style.display = 'none';
  }
});
