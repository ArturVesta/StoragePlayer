function checkBrowserCodeName() {
  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("setoneusetrue").style.display = "block";
    document.getElementById("autoLeft").style.display = "block";
    document.getElementById("autoRight").style.display = "block";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("imgLeft").src = "index_data/textures/english/en3.jpg";
      document.getElementById("imgRight").src = "index_data/textures/english/en4.jpg";
      document.getElementById("pscl1").innerHTML = "press";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("imgLeft").src = "index_data/textures/hebrew/he3.jpg";
      document.getElementById("imgRight").src = "index_data/textures/hebrew/he4.jpg";
      document.getElementById("pscl1").innerHTML = "נגיעה כפולה";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("imgLeft").src = "index_data/textures/russian/ru3.jpg";
      document.getElementById("imgRight").src = "index_data/textures/russian/ru4.jpg";
      document.getElementById("pscl1").innerHTML = "нажимать";
    }
  }else{
    document.getElementById("setoneusetrue").style.display = "none";
    document.getElementById("autoLeft").style.display = "none";
    document.getElementById("autoRight").style.display = "none";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("imgLeft").src = "index_data/textures/english/en1.png";
      document.getElementById("imgRight").src = "index_data/textures/english/en2.png";
      document.getElementById("pscl1").innerHTML = "click";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("imgLeft").src = "index_data/textures/hebrew/he1.png";
      document.getElementById("imgRight").src = "index_data/textures/hebrew/he2.png";
      document.getElementById("pscl1").innerHTML = "לחיצה כפולה";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("imgLeft").src = "index_data/textures/russian/ru1.png";
      document.getElementById("imgRight").src = "index_data/textures/russian/ru2.png";
      document.getElementById("pscl1").innerHTML = "щелкните";
    }
  }
};