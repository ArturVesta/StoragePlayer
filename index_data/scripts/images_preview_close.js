function closeImgPreview(){
  imagepreviewbase.style.backgroundColor = "var(--transparent)";
  imagepreviewbase.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    imagepreviewbase.style.left = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};