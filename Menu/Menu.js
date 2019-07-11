const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  // console.log(menu); just testin
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => toggleMenu());

// TweenMax.to(".menu", 10, {x: 0, ease:Elastic.easeOut});

//Modal for adding articles
// Get the modal
const modal = document.querySelector(".modal");
// Get the button that opens the modal
const addArticle = document.querySelector(".addArticle");
// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks on the button, open the modal
addArticle.onclick = function() {
  modal.style.display = "block";
  menu.style.display = "none";
  console.log(addArticle);
  console.log(modal);
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
