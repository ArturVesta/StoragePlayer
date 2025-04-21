function themeSystemChangesHoyolab() {
  localStorage.setItem("mainTheme", "hoyolab");
  var root = document.getElementById("rootHendler");
  root.setAttribute("href", "index_data/themes/hoyolab/roots.css");
  root.addEventListener('load', function() {
    document.getElementById('loadBar').style.width = widthcont++ + "px";
    document.getElementById("loadNumber").innerHTML = widthcont;
    toDisplayNone();
  });
  root.addEventListener("error", function() {
    errorscont++;
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("errorLogs").innerHTML += "Cant load " + errorscont + " styles, not found or removed..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("errorLogs").innerHTML += "Невозможно загрузить " + errorscont + " стайли, они не найдены или удалены..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("errorLogs").innerHTML += "אין אפשרות לטעון" + errorscont + " סטיילים, לא נמצאו או נמחקו..." + "<br>";
    }
  });
  var styles = document.getElementById("stylesHendler");
  styles.setAttribute("href", "index_data/themes/hoyolab/styles.css");
  styles.addEventListener('load', function() {
    document.getElementById('loadBar').style.width = widthcont++ + "px";
    document.getElementById("loadNumber").innerHTML = widthcont;
    toDisplayNone();
  });
  styles.addEventListener("error", function() {
    errorscont++;
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("errorLogs").innerHTML += "Cant load " + errorscont + " styles, not found or removed..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("errorLogs").innerHTML += "Невозможно загрузить " + errorscont + " стайли, они не найдены или удалены..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("errorLogs").innerHTML += "אין אפשרות לטעון" + errorscont + " סטיילים, לא נמצאו או נמחקו..." + "<br>";
    }
  });
  var styles500 = document.getElementById("stylesHendler500");
  styles500.setAttribute("href", "index_data/themes/hoyolab/styles_max_500.css");
  styles500.addEventListener('load', function() {
    document.getElementById('loadBar').style.width = widthcont++ + "px";
    document.getElementById("loadNumber").innerHTML = widthcont;
    toDisplayNone();
  });
  styles500.addEventListener("error", function() {
    errorscont++;
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("errorLogs").innerHTML += "Cant load " + errorscont + " styles, not found or removed..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("errorLogs").innerHTML += "Невозможно загрузить " + errorscont + " стайли, они не найдены или удалены..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("errorLogs").innerHTML += "אין אפשרות לטעון" + errorscont + " סטיילים, לא נמצאו או נמחקו..." + "<br>";
    }
  });
  var animations = document.getElementById("animationsHendler");
  animations.setAttribute("href", "index_data/themes/hoyolab/animations.css");
  animations.addEventListener('load', function() {
    document.getElementById('loadBar').style.width = widthcont++ + "px";
    document.getElementById("loadNumber").innerHTML = widthcont;
    toDisplayNone();
  });
  animations.addEventListener("error", function() {
    errorscont++;
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("errorLogs").innerHTML += "Cant load " + errorscont + " styles, not found or removed..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("errorLogs").innerHTML += "Невозможно загрузить " + errorscont + " стайли, они не найдены или удалены..." + "<br>";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("errorLogs").innerHTML += "אין אפשרות לטעון" + errorscont + " סטיילים, לא נמצאו או נמחקו..." + "<br>";
    }
  });
  document.getElementById("themeSelected").innerHTML = "HoYoLab Theme";
};