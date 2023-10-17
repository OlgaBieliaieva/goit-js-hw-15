function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
}
