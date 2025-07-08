// sets light and dark mode
const changeBtn = document.querySelector("#change-theme");

changeBtn.addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme");

  if (theme === null) {
    document.body.setAttribute("data-theme", "dark");
    changeBtn.innerHTML = "Set Light";
  } else {
    document.body.removeAttribute("data-theme");
    changeBtn.innerHTML = "Set Dark";
  }
});

// mobile nav bar toggle
const menuBtn = document.querySelector("#site-nav button");
const nav = document.querySelector("#site-nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("toggled");
});
