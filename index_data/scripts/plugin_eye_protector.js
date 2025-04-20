var elementmaineyepro = document.getElementById("main");
var elementimgview = document.getElementById("expandedImg");
function protectOn() {
  elementmaineyepro.style.filter = "blur(20px)";
  elementimgview.style.filter = "blur(20px)";
  elementmaineyepro.style.opacity = "0.3";
  elementimgview.style.opacity = "0.3";
  document.getElementById("protectbtn").style.display = "block";
  document.getElementById("intmess").style.left = "0px";
  document.getElementById("protectLang").disabled = true;
  if(localStorage.getItem("lang") == "en") {
    if(navigator.userAgent.match(/mobile/i)) {
      document.getElementById("msgtext").innerHTML = "Double press on ''&#x1F6E1'' for turn off.";
    }else{
      document.getElementById("msgtext").innerHTML = "Double click on ''&#x1F6E1'' for turn off.";
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if(navigator.userAgent.match(/mobile/i)) {
      document.getElementById("msgtext").innerHTML = "נגיעה כפולה על ''&#x1F6E1'' בשביל לכבות.";
    }else{
      document.getElementById("msgtext").innerHTML = "לחיצה כפולה על ''&#x1F6E1'' בשביל לכבות.";
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if(navigator.userAgent.match(/mobile/i)) {
      document.getElementById("msgtext").innerHTML = "Дважды нажмите на ''&#x1F6E1'' для выключения.";
    }else{
      document.getElementById("msgtext").innerHTML = "Дважды щелкните на ''&#x1F6E1'', чтобы выключить.";
    }
  }
  setTimeout(() => {
    document.getElementById("intmess").style.left = "-100%";
    setTimeout(() => {
      document.getElementById("msgtext").innerHTML = "";
    },400);
  },3000);
};