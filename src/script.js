const sunBtn = document.getElementById("sun");
const moonBtn = document.getElementById("moon");
const html = document.getElementById("html");
const changeThemeBtn = document.getElementById("change-theme");

if (!localStorage.theme) {
  localStorage.setItem("theme", "");
}

changeThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    html.classList.add(localStorage.theme);
    html.classList.remove("dark");
    moonBtn.classList.remove("hidden");
    sunBtn.classList.add("hidden");
  } else {
    localStorage.theme = "dark";
    html.classList.add(localStorage.theme);
    html.classList.remove("light");
    moonBtn.classList.add("hidden");
    sunBtn.classList.remove("hidden");
  }
});

html.classList.add(localStorage.theme);

if (localStorage.theme === "dark") {
  moonBtn.classList.add("hidden");
  sunBtn.classList.remove("hidden");
} else {
  moonBtn.classList.remove("hidden");
  sunBtn.classList.add("hidden");
}
