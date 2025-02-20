// Keyboard on klicked !-Only PCs
document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("e").style.display == "block"){
      document.getElementById("inputsubmitlink").click();
    }else{
      return false;
    }
  }
}
// Install App: Gen by: Gemini
function installApp() {
  let deferredPrompt; // Store the deferred prompt
  if (navigator.standalone) {
    // Already installed (iOS) or running as a standalone app
    document.getElementById("intmess").style.left = "0px";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("msgtext").innerHTML = "App is already installed or running in standalone mode.";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("msgtext").innerHTML = "האפליקציה כבר מותקנת או פועלת במצב עצמאי.";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("msgtext").innerHTML = "Приложение уже установлено или работает в автономном режиме.";
    }
    setTimeout(() => {
      document.getElementById("intmess").style.left = "-100%";
      setTimeout(() => {
        document.getElementById("msgtext").innerHTML = "";
      },400);
    },3000);
    return;
  }
  if (window.matchMedia('(display-mode: standalone)').matches) {
    // Already installed (Android)
    document.getElementById("intmess").style.left = "0px";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("msgtext").innerHTML = "App is already installed or running in standalone mode.";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("msgtext").innerHTML = "האפליקציה כבר מותקנת או פועלת במצב עצמאי.";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("msgtext").innerHTML = "Приложение уже установлено или работает в автономном режиме.";
    }
    setTimeout(() => {
      document.getElementById("intmess").style.left = "-100%";
      setTimeout(() => {
        document.getElementById("msgtext").innerHTML = "";
      },400);
    },3000);
    return;
  }
  if (typeof deferredPrompt !== 'undefined') {
    // The user has been prompted before, so let's prompt them again
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null; // Reset the deferred prompt
    });
    return;
  }
  // Check if the browser supports add to home screen
  if (window.matchMedia('(display-mode: browser)').matches) {
    // Check if the browser supports beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be used later.
      deferredPrompt = e;
      // Optionally, send analytics event that A2HS prompt was shown.
      console.log('beforeinstallprompt' + 'event was fired.');
      // Show the install button
       const installButton = document.getElementById('installButton'); // Replace with your button ID
       if (installButton) {
           installButton.style.display = 'block'; // Or however you want to show it
       }
    });
    // Handle the button click
    const installButton = document.getElementById('installButton'); // Replace with your button ID
    if (installButton) {
      installButton.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
            installButton.style.display = 'none'; // Hide the button after the prompt
          });
        } else {
          // The deferred prompt is not available, possibly due to user interaction or browser limitations.
          document.getElementById("intmess").style.left = "0px";
          if(localStorage.getItem("lang") == "en") {
            document.getElementById("msgtext").innerHTML = "Add to Home Screen functionality is not currently available.  Make sure you've visited the site a few times.";
          }else
          if(localStorage.getItem("lang") == "he") {
            document.getElementById("msgtext").innerHTML = "הפונקציונליות של הוסף למסך הבית אינה זמינה כעת. ודא שביקרת באתר כמה פעמים.";
          }else
          if(localStorage.getItem("lang") == "ru") {
            document.getElementById("msgtext").innerHTML = "Функция «Добавить на главный экран» в настоящее время недоступна. Убедитесь, что вы посетили сайт несколько раз.";
          }
          setTimeout(() => {
            document.getElementById("intmess").style.left = "-100%";
            setTimeout(() => {
              document.getElementById("msgtext").innerHTML = "";
            },400);
          },3000);
        }
      });
    }
  } else {
    document.getElementById("intmess").style.left = "0px";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("msgtext").innerHTML = "This browser does not support Add to Home Screen.";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("msgtext").innerHTML = "דפדפן זה אינו תומך בהוספה למסך הבית.";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("msgtext").innerHTML = "Этот браузер не поддерживает функцию «Добавить на главный экран».";
    }
    setTimeout(() => {
      document.getElementById("intmess").style.left = "-100%";
      setTimeout(() => {
        document.getElementById("msgtext").innerHTML = "";
      },400);
    },3000);
  }
}
// Call installApp() when your button is clicked.  For example:
const installButton = document.getElementById('installButton'); // Replace with your actual button ID
if (installButton) {
  installButton.addEventListener('click', installApp);
};
function activeSelectThemes() {
  document.getElementById("selectThemes").classList.toggle("show");
};
window.onclick = function(event) {
  if (!event.target.matches('.selectthemebtn')) {
    var dropdowns = document.getElementsByClassName("select-themes-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }else
  if (!event.target.matches('.selectbtn')) {
    var dropdowns = document.getElementsByClassName("select-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
function themeSystemChangesDefault() {
  localStorage.setItem("mainTheme", "default");
  var link = document.getElementById("rootHendler");
  link.setAttribute("href", "index_data/themes/default/roots.css");
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("themeSelected").innerHTML = "Default Theme";
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("themeSelected").innerHTML = "ערכת נושא ברירת מחדל";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("themeSelected").innerHTML = "По Умолчаная Тема";
  }
};
function themeSystemChangesHoyolab() {
  localStorage.setItem("mainTheme", "hoyolab");
  var link = document.getElementById("rootHendler");
  link.setAttribute("href", "index_data/themes/hoyolab/roots.css");
  document.getElementById("themeSelected").innerHTML = "HoYoLab Theme";
};
function loadTheme() {
  if(localStorage.getItem("mainTheme") === "default") {
    return themeSystemChangesDefault();
  }else
  if(localStorage.getItem("mainTheme") === "hoyolab") {
    return themeSystemChangesHoyolab();
  }else{
    localStorage.setItem("mainTheme", "default");
    console.log("Can't load theme at unknown error in script...");
    console.log("Theme auto selected to Default value.");
  }
}