function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls > input"),
  createBtn: document.querySelector("#controls [data-create]"),
  destroyBtn: document.querySelector("#controls [data-destroy]"),
  divList: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", handleClick);
refs.destroyBtn.addEventListener("click", handleClick);

function handleClick(e) {
  const action = e.target.textContent;

  switch (action) {
    case "Create":
      createBoxes(refs.input.value);
      break;

    case "Destroy":
      destroyBoxes();
      break;
    default:
      break;
  }
}

function createBoxes(amount) {
  let height = 30;
  let width = 30;

  const boxArray = new Array(Number(amount)).fill(1);

  const boxItems = boxArray.map((item) => {
    width += 10;
    height += 10;
    item = document.createElement("div");
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${width}px`;
    item.style.height = `${height}px`;
    return item;
  });
  refs.divList.append(...boxItems);
  refs.input.value = "";
}

function destroyBoxes() {
  refs.divList.innerHTML = "";
}
