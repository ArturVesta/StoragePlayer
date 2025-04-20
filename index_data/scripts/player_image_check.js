function CheckImgFile(s) {
  var ValidExtensions= new Array(".heic",".heif");
  var FileExtension=s.value;
  FileExtension=FileExtension.substring(FileExtension.lastIndexOf('.'));
  if (ValidExtensions.lastIndexOf(FileExtension)<0) {
    return previewFiles(s);
  } else {
    document.getElementById("intmess").style.left = "0px";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("msgtext").innerHTML = "Invalid format of file selected";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("msgtext").innerHTML = "פורמט לא חוקי של הקובץ שנבחר";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("msgtext").innerHTML = "Неверный формат выбранного файла";
    }
    setTimeout(() => {
      document.getElementById("intmess").style.left = "-100%";
      setTimeout(() => {
        document.getElementById("msgtext").innerHTML = "";
      },400);
    },3000);
    return false;
  }
};