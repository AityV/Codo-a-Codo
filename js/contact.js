const navbar = document.getElementById('navbar');
const main = document.getElementById('contact');
const button = document.getElementById('submit_button');

const navbar_height = navbar.offsetHeight;

window.onload = function () {
	main.style.height = `calc(100vh - ${navbar.offsetHeight}px)`;
};

button.addEventListener('click', function (event) {
	event.preventDefault();
});
