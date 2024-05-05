const themeSelector = document.querySelector("#lightdark");
themeSelector.addEventListener("change", changeTheme);
function changeTheme() {
  let logo = document.querySelector(".logo");
  let body = document.querySelector("body");

  if (themeSelector.value === "dark") {
    body.classList.add("dark");
    logo.src = "byui-logo_white.png";
  } else {
    body.classList.remove("dark");
    logo.src = "byui-logo_blue.webp";
  }
}
themeSelector.addEventListener("click", changeTheme);
