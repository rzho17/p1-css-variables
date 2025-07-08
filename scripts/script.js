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
