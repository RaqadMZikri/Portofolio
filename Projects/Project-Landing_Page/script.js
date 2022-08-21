function myFunction(x) {
  x.classList.toggle("change");
}

const menu = document.querySelector('.hamburger-menu');
const drawer = document.querySelector('.navigation');

menu.addEventListener('click', function() {
  drawer.classList.toggle("change");


 });

// $(document).ready.(function () {
//     
//     console.log('active');
// });