const form = document.getElementById("form");

const firstnameInput = document.getElementById("firstname");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("tel");

form.addEventListener("submit", function(event) {
    let valid = true;

    // Validación del nombre
    if (firstnameInput.value === "") {
        firstnameInput.classList.toggle("error");
        firstnameInput.setAttribute("placeholder","Por favor, ingrese su nombre.");
        valid = false;
    } 

    // Validación del apellido
    if (surnameInput.value === "") {
        surnameInput.classList.toggle("error");
        surnameInput.setAttribute("placeholder","Por favor, ingrese su apellido.");
        valid = false;
    } 

    // Validación del email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.toggle("error");
            emailInput.value = "";
            emailInput.setAttribute("placeholder","Por favor, ingrese un email válido.");
            valid = false;
        } else {
            emailInput.classList.toggle("error");
            emailInput.removeAttribute("placeholder");
        }

    // Validación del telefono
    if (telInput.value === "") {
        telInput.classList.toggle("error");
        telInput.setAttribute("placeholder","Por favor, ingrese su telefono.");
        valid = false;
    } 

    if (!valid) {
        event.preventDefault(); // Evita el envío del formulario si hay errores.
    }
});