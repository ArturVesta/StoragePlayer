window.onclick = function(event) {
  if (!event.target.matches('.selectthemebtn')) {
    var dropdowns = document.getElementsByClassName("select-themes-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }else
  if (!event.target.matches('.selectbtn')) {
    var dropdowns = document.getElementsByClassName("select-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};