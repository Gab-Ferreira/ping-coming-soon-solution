const labelError = document.getElementById("error-label");
const form = document.querySelector("form");
const inputEmail = document.getElementById("email-input");
let emailRegex =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

form.addEventListener("submit", (e) => {
  let inputValue = inputEmail.value.trim();
  let inputValuesanstrim = inputEmail.value;

  if (inputValue == "") {
    e.preventDefault();
    labelError.innerHTML = "*Email cannot be empty";
    labelError.classList.add("error-style");
    inputEmail.style.border = "solid var(--red) 1px";
  } else if (emailRegex.test(inputValuesanstrim) == false) {
    labelError.innerHTML = "Please provide a valid email address";
    labelError.classList.add("error-style");
    inputEmail.style.border = "solid var(--red) 1px";
    e.preventDefault();
  }
});
