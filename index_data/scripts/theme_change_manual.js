const toggleSwitch = document.querySelector('#themeCheckbox input[type="checkbox"]');
function switchTheme() {
  if (document.getElementById("themeCheckbox").checked) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
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
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("themeCheckbox").checked = false;
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("tmText").innerHTML = "Bright";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("tmText").innerHTML = "בהיר";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("tmText").innerHTML = "Светлый";
    }
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f5f6fb');
  }
  loadIcon();
};