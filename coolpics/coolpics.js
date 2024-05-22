const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
  const clickedElement = event.target;
  const src = clickedElement.getAttribute("src").split("-");
  const newSrc = `${src[0]}-full.jpeg`;

  document.body.insertAdjacentHTML(
    "afterbegin",
    viewerTemplate(newSrc, clickedElement.getAttribute("alt"))
  );
  document
    .querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
}
