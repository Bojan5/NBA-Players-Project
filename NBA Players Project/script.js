"use strict";

let form = document.getElementById("user-form");
let name = document.querySelector('[name="username"]');

form.addEventListener("submit", validate);
function validate(event) {
  event.preventDefault();
  console.log(name.value);

  if (name.value === "") {
    document.querySelector("span").innerText = "cannot be empty";
    return;
  }

  if (name.value.length < 3) {
    console.log("to small");
    document.querySelector("span").innerText =
      "Can not be smaller then 3 letters ";
    return;
  }
  form.submit();
}
