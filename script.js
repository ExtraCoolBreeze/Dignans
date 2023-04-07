/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the carousel container
const carouselContainer = document.querySelector('.carousel-container');

// Clone the first carousel item and append it to the end
const firstItem = carouselContainer.children[0];
carouselContainer.appendChild(firstItem.cloneNode(true));

// Start the animation when the page is loaded
window.onload = function() {
  carouselContainer.style.animationPlayState = 'running';
};

/*Print Button Code below

const printButton = document.getElementById('print-button');
const pdfContainer = document.getElementById('pdf-container');

printButton.addEventListener('click', () => {
  window.print();
});

function printPDF() {
  let originalContents = document.body.innerHTML;
  let printContents = pdfContainer.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
*/
