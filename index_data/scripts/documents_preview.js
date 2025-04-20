function showIframe(iframes) {
  var expandIframe = document.getElementById("expandedIframe");
  var iframepreviewbase = document.getElementById("iframepreviewbase");
  expandIframe.src = iframes.src;
  expandIframe.style.margin = "0px";
  expandIframe.style.paddingTop = "0px";
  iframepreviewbase.style.left = "0%";
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    iframepreviewbase.style.backgroundColor = "var(--opacity-bg)";
    iframepreviewbase.style.backdropFilter = "blur(5px)";
    document.getElementById("xpvbtn").style.transform = "scale(1,1)";
  },340);
};