function showImage(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imagepreviewbase = document.getElementById("imagepreviewbase");
  expandImg.src = imgs.src;
  imagepreviewbase.style.left = "0%";
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    imagepreviewbase.style.backgroundColor = "var(--opacity-bg)";
    imagepreviewbase.style.backdropFilter = "blur(5px)";
  },340);
expandImg.addEventListener('contextmenu', evt => {
  if(document.getElementById("administratorTools").checked === false) {
    evt.preventDefault();
    return false;
  }
});
  expandImg.ondragstart = function() {return false;};
};