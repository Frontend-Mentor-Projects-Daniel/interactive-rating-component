// SUDO CODE

// High Level
// when the submit button is clicked on, the user will be redirected to the thankyou.html page
// on thankyou page, show what user has selected

// Low Level
// add event listener to button -> onClick -> window.location.replace("thankyou.html");
//

// GLOBAL VARIABLES
const btnOrange = document.querySelector('[data-btn--orange]');

// EVENT LISTENERS
btnOrange.addEventListener('click', handleSubmit);

// FUNCTIONS
function handleSubmit() {
  window.location.replace('../../develop/pages/thank-you.html');
}
