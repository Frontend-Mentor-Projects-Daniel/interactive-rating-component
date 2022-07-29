// GLOBAL VARIABLES
const btnOrange = document.querySelector('[data-btn--orange]') || null;
const ratings = document.querySelectorAll('[data-rating]') || null;
const userRating = document.querySelector('[data-rating-selection]') || null;

// PROCEDURAL CODE
ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    if (rating.firstElementChild.checked) {
      const jsonRating = JSON.stringify(
        rating.firstElementChild.nextElementSibling.innerText
      );

      localStorage.setItem('rating', jsonRating);
    }
  });
});

if (userRating != null) {
  let parsedRating = JSON.parse(localStorage.getItem('rating'));
  userRating.textContent = parsedRating;
}

// EVENT LISTENERS
if (btnOrange) {
  btnOrange.addEventListener('click', handleSubmit);
}

// FUNCTIONS
function handleSubmit() {
  window.location.replace('../../develop/pages/thank-you.html');
}
