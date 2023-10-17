const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputRef.classList.remove("valid", "invalid");
  const inputValue = event.currentTarget.value.trim();
  inputValue.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}
