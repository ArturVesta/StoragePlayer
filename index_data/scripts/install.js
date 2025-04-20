function installApp() {
  let deferredPrompt; // Store the deferred prompt
  if (navigator.fullscreen) {
    // Already installed (iOS) or running as a fullscreen app
    document.getElementById("intmess").style.left = "0px";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("msgtext").innerHTML = "App is already installed or running in fullscreen mode.";
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
  if (window.matchMedia('(display-mode: fullscreen)').matches) {
    // Already installed (Android)
    document.getElementById("intmess").style.left = "0px";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("msgtext").innerHTML = "App is already installed or running in fullscreen mode.";
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