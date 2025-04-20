document.getElementById("themeCheckbox").addEventListener('change', switchTheme, false);
if (document.documentElement.getAttribute("data-theme") == "dark"){
  document.getElementById("themeCheckbox").checked = true;
  if(localStorage.getItem("lang") == "en") {
    document.getElementById("tmText").innerHTML = "Dark";
  }else
  if(localStorage.getItem("lang") == "he") {
    document.getElementById("tmText").innerHTML = "כהה";
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.getElementById("tmText").innerHTML = "Темный";
  }
  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0f1d');
};