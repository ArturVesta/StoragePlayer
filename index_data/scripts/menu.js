function menuNavigator() {
  var nb = document.getElementById("myNavigator");
  var mine = document.getElementById("main");
  var footer = document.getElementById("footer");
  if (nb.style.marginLeft === "calc(0% - 2px)") {
    if(localStorage.getItem("header") === "sticky") {
      document.getElementById("header").style.width = "calc(95% - 4px)";
      document.getElementById("header").style.margin = "0 2.5%";
      document.getElementById("header").style.borderRadius = "0 0 10px 10px";
      document.getElementById("header").style.borderLeft = "solid 2px var(--border)";
      document.getElementById("header").style.borderRight = "solid 2px var(--border)";
      document.getElementById("videoOpen").style.borderRadius = "0 0 0 10px";
      document.getElementById("linkOpen").style.borderRadius = "0 0 10px 0";
    }
    nb.style.marginLeft = "calc(100% - 2px)";
    mine.style.opacity = "1";
    footer.style.opacity = "1";
    document.body.style.overflowY = "auto";
  } else {
    if(localStorage.getItem("header") === "sticky") {
      document.getElementById("header").style.width = "100%";
      document.getElementById("header").style.margin = "0 0";
      document.getElementById("header").style.borderRadius = "0 0 0 0";
      document.getElementById("header").style.borderLeft = "solid 0px var(--border)";
      document.getElementById("header").style.borderRight = "solid 0px var(--border)";
      document.getElementById("videoOpen").style.borderRadius = "0 0 0 0";
      document.getElementById("linkOpen").style.borderRadius = "0 0 0 0";
    }
    nb.style.marginLeft = "calc(0% - 2px)";
    mine.style.opacity = "0";
    footer.style.opacity = "0";
    document.body.style.overflowY = "hidden";
  }
};