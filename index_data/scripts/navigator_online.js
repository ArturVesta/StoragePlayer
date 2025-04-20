function checkConnection() {
  var status = navigator.onLine;
  if (status) {
    document.getElementById("body").value = "ONLINE";
    document.getElementById("internetdisconnected").style.display = "none";
    document.getElementById("internetconnected").style.display = "block";
    document.getElementById("linkOpen").style.display = "block";
    document.getElementById("next32").style.display = "none";
    document.getElementById("next02").style.display = "none";
  } else {
    document.getElementById("body").value = "OFFLINE";
    document.getElementById("internetdisconnected").style.display = "block";
    document.getElementById("internetconnected").style.display = "none";
    document.getElementById("linkOpen").style.display = "none";
    document.getElementById("next32").style.display = "block";
    document.getElementById("next02").style.display = "block";
    if(document.getElementById("e").style.display === "block") {
      document.getElementById("videoOpen").click();
    }else{
      return false;
    }
  }
};