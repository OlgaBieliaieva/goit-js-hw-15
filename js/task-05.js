const refs = {
  inputField: document.querySelector("#name-input"),
  outputField: document.querySelector("#name-output"),
};

refs.inputField.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.trim() === ""
    ? (refs.outputField.textContent = "Anonymous")
    : (refs.outputField.textContent = event.currentTarget.value);
}
