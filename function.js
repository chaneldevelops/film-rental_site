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
