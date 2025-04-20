function loadTheme() {
  if(localStorage.getItem("mainTheme") === "default") {
    return themeSystemChangesDefault();
  }else
  if(localStorage.getItem("mainTheme") === "hoyolab") {
    return themeSystemChangesHoyolab();
  }else{
    localStorage.setItem("mainTheme", "default");
    console.log("Can't load theme at unknown error in script...");
    console.log("Theme auto selected to Default value.");
  }
}