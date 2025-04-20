
window.onload = function() {
  detectBrowser();
  removeLocalSticky();
  nextToa();
  checkConnection();
  checkFuncCeck();
  killAnimation();
  displayAutoModal();
  langCheck();
  firstLanguage();
  loadTheme();
    checkBrowserCodeName();
    loadTitle();
    loadIcon();
    autoOpenModal();
};
window.ononline = function() {
  checkConnection();
};
window.onoffline = function() {
  checkConnection();
};
window.oncontextmenu = function() {
  if(document.getElementById("administratorTools").checked === false) {
    return false;
  }
};
window.onscroll = function() {
  headerFunction();
  scrollIndicator();
};