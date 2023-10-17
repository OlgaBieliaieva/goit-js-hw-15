const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formDataObj = {};

  if (email.value.length && password.value.length !== 0) {
    formDataObj.email = email.value;
    formDataObj.password = password.value;
    console.log(formDataObj);
  } else {
    alert(`Fill in all fields, please`);
  }

  form.reset();
}
