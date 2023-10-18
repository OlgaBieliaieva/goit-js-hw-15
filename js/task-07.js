const refs = {
  inputRange: document.querySelector("#font-size-control"),
  spanTest: document.querySelector("#text"),
};

refs.spanTest.style.fontSize = `${refs.inputRange.value}px`;
refs.inputRange.addEventListener("input", onInputRangeClick);

function onInputRangeClick(event) {
  refs.spanTest.style.fontSize = `${event.currentTarget.value}px`;
}
