const refs = {
  inputRange: document.querySelector("#font-size-control"),
  spanTest: document.querySelector("#text"),
};

refs.inputRange.addEventListener("click", onInputRangeClick);

function onInputRangeClick(event) {
  refs.spanTest.style.fontSize = `${event.currentTarget.value}px`;
}
