var toggledspace = document.getElementById("toggledspace");
var header = document.getElementById("header");
var sticky = header.offsetTop;
function headerFunction() {
  if (window.pageYOffset >= sticky) {
    document.documentElement.setAttribute('header', 'sticky');
    localStorage.setItem("header", "sticky");
    header.classList.add("sticky");
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "calc(95% - 4px)";
    header.style.margin = "0 2.5%";
    header.style.borderRadius = "0 0 10px 10px";
    header.style.borderTop = "solid 0px var(--border)";
    header.style.borderLeft = "solid 2px var(--border)";
    header.style.borderRight = "solid 2px var(--border)";
    document.getElementById("videoOpen").style.borderRadius = "0 0 0 10px";
    document.getElementById("linkOpen").style.borderRadius = "0 0 10px 0";
    toggledspace.style.height = "67px";
    document.getElementById("totop").style.display = "block";
    document.getElementById("myNavigator").style.height = "calc(100% - 66px)";
  } else {
    document.documentElement.setAttribute('header', 'unsticky');
    header.classList.remove("sticky");
    localStorage.setItem("header", "");
    header.style.position = "relative";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.margin = "0 0";
    header.style.borderRadius = "0 0 0 0";
    header.style.borderTop = "solid 2px var(--border)";
    header.style.borderLeft = "solid 0px var(--border)";
    header.style.borderRight = "solid 0px var(--border)";
    document.getElementById("videoOpen").style.borderRadius = "0 0 0 0";
    document.getElementById("linkOpen").style.borderRadius = "0 0 0 0";
    toggledspace.style.height = "0px";
    document.getElementById("totop").style.display = "none";
    document.getElementById("myNavigator").style.height = "calc(100% - 100px)";
  }
};