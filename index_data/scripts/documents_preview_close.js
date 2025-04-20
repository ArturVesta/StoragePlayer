function closeIfmPreview(){
  iframepreviewbase.style.backgroundColor = "var(--transparent)";
  iframepreviewbase.style.backdropFilter = "blur(0px)";
  document.getElementById("xpvbtn").style.transform = "scale(0,0)";
  setTimeout(() => {
    iframepreviewbase.style.left = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};