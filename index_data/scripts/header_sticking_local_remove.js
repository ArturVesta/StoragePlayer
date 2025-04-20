function removeLocalSticky() {
  document.documentElement.setAttribute('header', '');
  localStorage.setItem("header", "");
  document.documentElement.setAttribute('header', '');
};