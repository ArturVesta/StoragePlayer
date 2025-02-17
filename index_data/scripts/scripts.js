// Display update info
function infoLoader() {
  document.getElementById("version").innerHTML = version;
  document.getElementById("updatedate").innerHTML = datatime;
  document.getElementById("pagePackage").innerHTML = "index.html";
  document.getElementById("packLink").innerHTML = document.URL;
  if(localStorage.getItem("lang") == "en") {
    document.getElementById("pageName").innerHTML = "Storage Player";
    document.getElementById("pageTitle").innerHTML = "Storage Player";
    document.getElementById("pageAuthors").innerHTML = "MNTS</a>" + ", " + "<a>Meir Shmukler";
    document.getElementById("pageLicense").innerHTML = "&#169; GFG All the content of this webpage belongs to creators, All rights reserved. Not distributed!";
    document.getElementById("interRess").innerHTML = "Internal file";
    document.getElementById("exterRess").innerHTML = "GitHub";
    document.getElementById("exterLink").innerHTML = "Wikipedia</a>" + ", " + "<a>WhatsApp</a>" + ", " + "<a>Google</a>" + ", " + "<a>Google Play</a>" + ", " + "<a>Gmail</a>" + ", " + "<a>Phone</a>" + ", " + "<a>Message</a>" + ", " + "<a>Telegram";
  }else
  if(localStorage.getItem("lang") == "he") {
    document.getElementById("pageName").innerHTML = "נגן אחסון";
    document.getElementById("pageTitle").innerHTML = "נגן אחסון";
    document.getElementById("pageAuthors").innerHTML = "MNTS</a>" + ", " + "<a>Meir Shmukler";
    document.getElementById("pageLicense").innerHTML = "&#169; GFG כל התוכן של דף אינטרנט זה שייך ליוצרים, כל הזכויות שמורות. לא להפצה!";
    document.getElementById("interRess").innerHTML = "קובץ פנימי";
    document.getElementById("exterRess").innerHTML = "GitHub";
    document.getElementById("exterLink").innerHTML = "ויקיפדיה</a>" + ", " + "<a>WhatsApp</a>" + ", " + "<a>Google</a>" + ", " + "<a>Google Play</a>" + ", " + "<a>Gmail</a>" + ", " + "<a>טלפון</a>" + ", " + "<a>הודעות</a>" + ", " + "<a>Telegram";
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.getElementById("pageName").innerHTML = "Проигрыватель памяти";
    document.getElementById("pageTitle").innerHTML = "Проигрыватель памяти";
    document.getElementById("pageAuthors").innerHTML = "MNTS</a>" + ", " + "<a>Meir Shmukler";
    document.getElementById("pageLicense").innerHTML = "&#169; GFG Весь контент этой веб-страницы принадлежит создателям, все права защищены. Не распространяется!";
    document.getElementById("interRess").innerHTML = "Внутренний файл";
    document.getElementById("exterRess").innerHTML = "GitHub";
    document.getElementById("exterLink").innerHTML = "Википедия</a>" + ", " + "<a>WhatsApp</a>" + ", " + "<a>Google</a>" + ", " + "<a>Google Play</a>" + ", " + "<a>Gmail</a>" + ", " + "<a>Телефон</a>" + ", " + "<a>Сообщение</a>" + ", " + "<a>Telegram";
  }
};
// get coming soon
function comingSoon() {
  document.getElementById("intmess").style.left = "0px";
  if(localStorage.getItem("lang") == "en") {
    document.getElementById("msgtext").innerHTML = "Coming soon!, wait for update.";
  }else
  if(localStorage.getItem("lang") == "he") {
    document.getElementById("msgtext").innerHTML = "בקרוב!, חכו לעדכון.";
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.getElementById("msgtext").innerHTML = "Скоро!, ждите обновления.";
  }
  setTimeout(() => {
    document.getElementById("intmess").style.left = "-100%";
    setTimeout(() => {
    document.getElementById("msgtext").innerHTML = "";
    },400);
  },6000);
};
// Check if page suported by browser
function checkBrowserCodeName() {
  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("setoneusetrue").style.display = "block";
    document.getElementById("autoLeft").style.display = "block";
    document.getElementById("autoRight").style.display = "block";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("imgLeft").src = "index_data/textures/english/en3.jpg";
      document.getElementById("imgRight").src = "index_data/textures/english/en4.jpg";
      document.getElementById("dpffi").innerHTML = "&#8595;Double press for full screen information&#8595;";
      document.getElementById("pscl1").innerHTML = "press";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("imgLeft").src = "index_data/textures/hebrew/he3.jpg";
      document.getElementById("imgRight").src = "index_data/textures/hebrew/he4.jpg";
      document.getElementById("dpffi").innerHTML = "&#8595;גע פעמיים למידע על מסך מלא&#8595;";
      document.getElementById("pscl1").innerHTML = "נגיעה כפולה";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("imgLeft").src = "index_data/textures/russian/ru3.jpg";
      document.getElementById("imgRight").src = "index_data/textures/russian/ru4.jpg";
      document.getElementById("dpffi").innerHTML = "&#8595;Дважды нажмите для просмотра информации на весь экран&#8595;";
      document.getElementById("pscl1").innerHTML = "нажимать";
    }
  }else{
    document.getElementById("setoneusetrue").style.display = "none";
    document.getElementById("autoLeft").style.display = "none";
    document.getElementById("autoRight").style.display = "none";
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("imgLeft").src = "index_data/textures/english/en1.png";
      document.getElementById("imgRight").src = "index_data/textures/english/en2.png";
      document.getElementById("dpffi").innerHTML = "&#8595;Double click for full screen information&#8595;";
      document.getElementById("pscl1").innerHTML = "click";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("imgLeft").src = "index_data/textures/hebrew/he1.png";
      document.getElementById("imgRight").src = "index_data/textures/hebrew/he2.png";
      document.getElementById("dpffi").innerHTML = "&#8595;לחץ פעמיים למידע על מסך מלא&#8595;";
      document.getElementById("pscl1").innerHTML = "לחיצה כפולה";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("imgLeft").src = "index_data/textures/russian/ru1.png";
      document.getElementById("imgRight").src = "index_data/textures/russian/ru2.png";
      document.getElementById("dpffi").innerHTML = "&#8595;Дважды щелкните для просмотра информации на весь экран&#8595;";
      document.getElementById("pscl1").innerHTML = "щелкните";
    }
  }
};
// Page title loader
function loadTitle() {
  if(localStorage.getItem("lang") == "en") {
    document.title = "Storage Player";
  }else
  if(localStorage.getItem("lang") == "he") {
    document.title = "נגן אחסון";
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.title = "Проигрыватель памяти";
  }
  document.getElementById("title").innerHTML = document.title;
};
// Page icon loader
const dimensions = [
  "16x16",
  "32x32",
  "96x96",
  "180x180",
  "300x300",
  "512x512"
];
function loadIcon() {
  var favicon = document.createElement('link');
  var favicon16 = document.createElement('link');
  var favicon32 = document.createElement('link');
  var favicon96 = document.createElement('link');
  var favicon180 = document.createElement('link');
  var favicon300 = document.createElement('link');
  var favicon512 = document.createElement('link');
  if(document.getElementById("themeCheckbox").checked){
    subiconCode = "index_data/textures/icon_light.png";
  }else{
    subiconCode = "index_data/textures/icon_dark.png";
  }
  favicon.href = subiconCode;
  favicon.rel = 'icon';
  favicon16.href = subiconCode;
  favicon16.rel = 'icon';
  favicon16.sizes = dimensions[0];
  favicon32.href = subiconCode;
  favicon32.rel = 'icon';
  favicon32.sizes = dimensions[1];
  favicon96.href = subiconCode;
  favicon96.rel = 'icon';
  favicon96.sizes = dimensions[2];
  favicon180.href = subiconCode;
  favicon180.rel = 'icon';
  favicon180.sizes = dimensions[3];
  favicon300.href = subiconCode;
  favicon300.rel = 'icon';
  favicon300.sizes = dimensions[4];
  favicon512.href = subiconCode;
  favicon512.rel = 'icon';
  favicon512.sizes = dimensions[5];
  document.head.appendChild(favicon);
  document.head.appendChild(favicon16);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon96);
  document.head.appendChild(favicon180);
  document.head.appendChild(favicon300);
  document.head.appendChild(favicon512);
};
// Load page
var lp = 0;
function moVe() {
  if (lp == 0) {
  lp = 1;
  var elemlp = document.getElementById("loadBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      ip = 0;
      document.getElementById("loadContiner").style.backgroundColor = "var(--transparent)";
      document.getElementById("loadContiner").style.backdropFilter = "blur(0px)";
      document.getElementById("loadContiner").style.opacity = "0";
      setTimeout(function(){
        document.getElementById("loadContiner").style.display = "none";
        document.getElementById("header").style.opacity = "1";
        document.getElementById("main").style.opacity = "1";
        document.getElementById("baseSpace").style.opacity = "1";
        document.getElementById("footer").style.opacity = "1";
        document.getElementById("myNavigator").style.opacity = "1";
        if(localStorage.getItem("lang") == "") {
          return false;
        }else{
          randomizeFunctionTips();
        }
      },200);
      checkBrowserCodeName();
      loadTitle();
      loadIcon();
      autoOpenModal();
      infoLoader();
      document.getElementById("lastTime").innerHTML = document.getElementById("vartime").innerHTML + document.getElementById("vardate").innerHTML;
    } else {
      width++;
      elemlp.style.width = width + "%";
      document.getElementById("loadNumber").innerHTML = width + "%";
      lp = 0;
      }
    }
  }
  infoLoader();
};
// Upload video file to "Video Player"
let count = 0
document.querySelector("input[name=video]").onchange = function(event) {
  const preview = document.getElementById('videos')
  var numberOfVideos = event.target.files.length;
  for (var i = 0; i < numberOfVideos; i++) {
    var file = event.target.files[i];
    var blobURL = URL.createObjectURL(file);
    const div = document.createElement('div');
    const video = document.createElement('video');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const loadingcontainer = document.createElement('div');
    const loader = document.createElement('div');
    loadingcontainer.className = "loadingcontainer";
    loader.className = "loader";
    document.getElementById("vcont").innerHTML = ++count;
    video.alt = `${count}` + "⟩ " + file.name;
    video.setAttribute("controls", "");
    video.setAttribute("controlsList","nodownload");
    button.className = "button remove-vdo";
    span.className = "vdo-label";
    span.style.overflowX = "auto";
    span.style.overflowY = "hidden";
    span.innerHTML = video.alt;
    if(localStorage.getItem("lang") == "en") {
      button.textContent = "Remove from list";
    }else
    if(localStorage.getItem("lang") == "he") {
      button.textContent = "הסר מהרשימה";
    }else
    if(localStorage.getItem("lang") == "ru") {
      button.textContent = "Удалить из списка";
    }
    button.addEventListener('click', () => {
      preview.removeChild(div);
      document.getElementById("vcont").innerHTML = --count;
    });
    video.src = blobURL;
    var videos = document.getElementById("videos");
    div.appendChild(video);
    div.appendChild(button);
    div.appendChild(span);
    div.appendChild(loadingcontainer);
    loadingcontainer.appendChild(loader);
    video.onloadeddata = function() {
      div.removeChild(loadingcontainer);
    };
    div.className = "vdo-frame";
    preview.appendChild(div);
    video.addEventListener('contextmenu', evt => {
      evt.preventDefault();
      return blockImagesContext();
    });
  }
};
// Upload image file to "Image Player"
function previewFiles(input) {
  let count = 0
  const preview = document.getElementById('images')
  const {
    files
  } = input
  Array.from(files).forEach(file => {
    const reader = new FileReader()
    reader.onload = e => {
      const div = document.createElement('div')
      const img = document.createElement('img')
      const span = document.createElement('span')
      const button = document.createElement('button')
      const loadingcontainer = document.createElement('div');
      const loader = document.createElement('div');
      loadingcontainer.className = "loadingcontainer";
      loader.className = "loader";
      img.src = e.target.result
      img.alt = `${++count}` + "⟩ " + file.name
      button.className = "button remove-img"
      span.className = "img-label"
      span.style.overflowX = "auto"
      span.style.overflowY = "hidden"
      span.innerHTML = img.alt
      icont.innerHTML = +count;
      if(localStorage.getItem("lang") == "en") {
        button.textContent = "Remove from list";
      }else
      if(localStorage.getItem("lang") == "he") {
        button.textContent = "הסר מהרשימה";
      }else
      if(localStorage.getItem("lang") == "ru") {
        button.textContent = "Удалить из списка";
      }
      button.addEventListener('click', () => {
        preview.removeChild(div)
        icont.innerHTML = --count;
        })
      div.appendChild(img)
      div.appendChild(button)
      div.appendChild(span)
      div.appendChild(loadingcontainer);
      loadingcontainer.appendChild(loader);
      img.onload = function() {
        div.removeChild(loadingcontainer);
      };
      div.className = "img-frame"
      preview.appendChild(div)
      img.onclick = function(){showImage(this)};
      img.ondragstart = function() {return false;};
      img.addEventListener('contextmenu', evt => {
        evt.preventDefault();
        return blockImagesContext();
      });
    }
    reader.readAsDataURL(file)
  })
};
function CheckImgFile(s) {
  var ValidExtensions= new Array(".heic",".heif");
  var FileExtension=s.value;
  FileExtension=FileExtension.substring(FileExtension.lastIndexOf('.'));
  if (ValidExtensions.lastIndexOf(FileExtension)<0) {
    return previewFiles(s);
  } else {
  if(localStorage.getItem("lang") == "en") {
    alert("Invalid format of file selected");
  }else
  if(localStorage.getItem("lang") == "he") {
    alert("פורמט לא חוקי של הקובץ שנבחר");
  }else
  if(localStorage.getItem("lang") == "ru") {
    alert("Неверный формат выбранного файла");
  }
  return false;
  }
};
// Upload audio file to "Audio Player"
function previewFilesmp3(input) {
  let count = 0
  const preview = document.getElementById('audios')
  const {
    files
  } = input
  Array.from(files).forEach(file => {
    const reader = new FileReader()
    reader.onload = e => {
      const div = document.createElement('div')
      const audio = document.createElement('audio')
      const span = document.createElement('span')
      const button = document.createElement('button')
      const loadingcontainer = document.createElement('div');
      const loader = document.createElement('div');
      loadingcontainer.className = "loadingcontainer";
      loader.className = "loader";
      audio.src = e.target.result
      audio.alt = `${++count}` + "⟩ " + file.name
      audio.setAttribute("controls", "")
      audio.setAttribute("controlsList","nodownload")
      button.className = "button remove-mp3"
      span.className = "mp3-label"
      span.style.overflowX = "auto"
      span.style.overflowY = "hidden"
      span.innerHTML = audio.alt;
      acont.innerHTML = +count;
      if(localStorage.getItem("lang") == "en") {
        button.textContent = "Remove from list";
      }else
      if(localStorage.getItem("lang") == "he") {
        button.textContent = "הסר מהרשימה";
      }else
      if(localStorage.getItem("lang") == "ru") {
        button.textContent = "Удалить из списка";
      }
      button.addEventListener('click', () => {
        preview.removeChild(div)
        acont.innerHTML = --count;
      })
      div.appendChild(audio)
      div.appendChild(button)
      div.appendChild(span)
      div.appendChild(loadingcontainer);
      loadingcontainer.appendChild(loader);
      audio.onloadeddata = function() {
        div.removeChild(loadingcontainer);
      };
      div.className = "mp3-frame"
      preview.appendChild(div)
    }
    reader.readAsDataURL(file)
  })
};
// Upload files like documents
function previewFilesdoc(input) {
  let count = 0
  const preview = document.getElementById('documents')
  const {
    files
  } = input
  Array.from(files).forEach(file => {
    const reader = new FileReader()
    reader.onload = e => {
      const div = document.createElement('div')
      const embed = document.createElement('embed')
      const span = document.createElement('span')
      const button = document.createElement('button')
      const btnful = document.createElement("button")
      const loadingcontainer = document.createElement('div');
      const loader = document.createElement('div');
      loadingcontainer.className = "loadingcontainer";
      loader.className = "loader";
      embed.src = e.target.result
      embed.alt = `${++count}` + "⟩ " + file.name
      button.className = "button remove-doc"
      btnful.className = "button view-doc"
      span.className = "doc-label"
      span.style.overflowX = "auto"
      span.style.overflowY = "hidden"
      span.innerHTML = embed.alt
      dcont.innerHTML = +count;
      if(localStorage.getItem("lang") == "en") {
        button.textContent = "Remove from list";
        btnful.textContent = "View in full screen";
      }else
      if(localStorage.getItem("lang") == "he") {
        button.textContent = "הסר מהרשימה";
        btnful.textContent = "צפייה במסך מלא";
      }else
      if(localStorage.getItem("lang") == "ru") {
        button.textContent = "Удалить из списка";
        btnful.textContent = "Просмотреть на весь экран";
      }
      button.addEventListener('click', () => {
        preview.removeChild(div)
        dcont.innerHTML = --count;
      })
      btnful.addEventListener('click', () => {
        showIframe(embed);
      })
      div.appendChild(embed)
      div.appendChild(btnful)
      div.appendChild(button)
      div.appendChild(span)
      div.appendChild(loadingcontainer);
      loadingcontainer.appendChild(loader);
      embed.addEventListener('load', function() {
        div.removeChild(loadingcontainer);
      });
      div.className = "doc-frame"
      preview.appendChild(div)
    }
  reader.readAsDataURL(file)
  })
};
function CheckDocFile(s) {
  var ValidExtensions= new Array(".txt",".json",".xml",".dll",".bat",".log",".html",".htm",".py",".js",".css");
  var FileExtension=s.value;
  FileExtension=FileExtension.substring(FileExtension.lastIndexOf('.'));
  if (ValidExtensions.lastIndexOf(FileExtension)<0) {
    if(localStorage.getItem("lang") == "en") {
      alert("Invalid format of file selected");
    }else
    if(localStorage.getItem("lang") == "he") {
      alert("פורמט לא חוקי של הקובץ שנבחר");
    }else
    if(localStorage.getItem("lang") == "ru") {
      alert("Неверный формат выбранного файла");
    }
    return false;
  } else {
    return previewFilesdoc(s);
  }
};
// Load link from text
function LoadLink() {
  var txtary = document.getElementById("inputsearchurl");
  var iframe = document.getElementById("embedlink");
  var embed = document.getElementById("embedLink");
  iframe.src = txtary.value;
  embed.innerHTML = iframe.src;
  embed.addEventListener("click", reloadEmbed);
};
function reloadEmbed() {
  embed.innerHTML = iframe.src;
};
function finishLoading() {
  document.getElementById('loadingcontainer').style.display='none';
};
function startLoading() {
  document.getElementById('loadingcontainer').style.display='block';
};
// Reload the page
function locationReload() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Reload the «Storage Player»?")) {
      window.location.reload();
    }else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("לרענן מחדש את «נגן האחסון»?")) {
      window.location.reload();
    }else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Перезагрузить «Проигрыватель памяти»?")) {
      window.location.reload();
    }else{
      return false;
    }
  }
};
// Close page
function questionClosepage() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Close the «Storage Player»?")) {
      window.close();
    } else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("לסגור את «נגן האחסון»?")) {
      window.close();
    } else{
      return false;
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Закрыть «Проигрыватель памяти»?")) {
      window.close();
    } else{
      return false;
    }
  }
};
// Quickly open full info
function gotoFullsinfo() {
  setTimeout(function(){
    document.getElementById("opennavbtn").click();
  }, 500);
  setTimeout(function(){
    infoInfull();
  }, 1000);
};
// Display modal of auto instructions
var autmodal = document.getElementById("autoModal");
var modalcontaut = document.getElementById("modalcontentaut");
var cbtnaut = document.getElementsByClassName("auto-close")[0];
cbtnaut.ondblclick = function() {
  autmodal.style.left = "-100%";
  if(document.getElementById("myNavigator").style.marginLeft) {
    document.body.style.overflowY = "hidden";
  }else{
    document.body.style.overflowY = "auto";
  }
};
function autoOpenModal() {
  autmodal.style.left = "0%";
};
function autoOpenFmenu() {
  autmodal.classList.remove("dont-show-auto");
  autmodal.style.left = "0%";
  document.body.style.overflowY = "hidden";
};
// Display modal of sharing
var shrmodal = document.getElementById("shareModal");
var modalcontshr = document.getElementById("modalcontentshr");
var btnshr = document.getElementById("sharing");
var cbtnshr = document.getElementsByClassName("sharing-close")[0];
btnshr.onclick = function() {
  shrmodal.style.left = "0%";
  document.getElementById("myNavigator").style.overflowY = "hidden";
  setTimeout(() => {
    shrmodal.style.backgroundColor = "var(--opacity-bg)";
    shrmodal.style.backdropFilter = "blur(5px)";
  },340);
};
cbtnshr.onclick = function() {
  shrmodal.style.backgroundColor = "var(--transparent)";
  shrmodal.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    shrmodal.style.left = "-100%";
    document.getElementById("myNavigator").style.overflowY = "auto";
  },340);
};
shrmodal.onclick = function(event) {
  if (event.target == shrmodal) {
    shrmodal.style.backgroundColor = "var(--transparent)";
    shrmodal.style.backdropFilter = "blur(0px)";
    setTimeout(() => {
      shrmodal.style.left = "-100%";
      document.getElementById("myNavigator").style.overflowY = "auto";
    },340);
  }
};
// Turning one use mode for page to invisible after reload him
function oneModeuse() {
  if(localStorage.getItem("lang") == "en") {
    if (confirm("Set page to «One Use» mode?") == true) {
      document.getElementById("msgtext").innerHTML = "The page will not be available after reload the page.<br>You can remove from the link &#171;#OneUse&#187; for return the page to repeatability.<br>And you can press on back for exit from &#171;OneUse&#187;.";
      oneUseMode();
    }else{
      document.getElementById("msgtext").innerHTML = "you refused the &#171;One Use&#187; mode.";
      oneUseModeRefused();
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if (confirm("להגדיר את הדף למצב «שימוש אחד»?") == true) {
      document.getElementById("msgtext").innerHTML = "הדף לא יהיה זמין לאחר טעינה מחדש.<br>אתה יכול להסיר מהקישור &#171;#OneUse&#187; כדי להחזיר את הדף לחזרות.<br>ואתה יכול ללחוץ על חזור ליציאה מ&#171;שימוש אחד&#187;.";
      oneUseMode();
    }else{
      document.getElementById("msgtext").innerHTML = "סירבת למצב &#171;שימוש אחד&#187;.";
      oneUseModeRefused();
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if (confirm("Установить страницу в режим «Одноразового использования»?") == true) {
      document.getElementById("msgtext").innerHTML = "Страница будет недоступна после перезагрузки.<br>Вы можете удалить от ссылку &#171;#OneUse&#187; чтобы вернуть страницу к повторяемости.<br>И вы можете нажать кнопку Назад, чтобы выйти из &#171;Одноразовое использование&#187;.";
      oneUseMode();
    }else{
      document.getElementById("msgtext").innerHTML = "Вы отказались от режима &#171;Одноразового использования&#187;.";
      oneUseModeRefused();
    }
  };
  function oneUseMode() {
    document.getElementById("intmess").style.left = "0px";
    window.location.href='#OneMode';
    document.getElementById("oneuseappicon").style.display = "block";
    document.getElementById("setoneusetrue").disabled = true;
    document.getElementById("setoneusetrue").style.opacity = "0.5";
    setTimeout(() => {
      document.getElementById("intmess").style.left = "-100%";
      setTimeout(() => {
      document.getElementById("msgtext").innerHTML = "";
      },400);
    },6000);
  };
  function oneUseModeRefused() {
    document.getElementById("intmess").style.left = "0px";
    setTimeout(() => {
      document.getElementById("intmess").style.left = "-100%";
      setTimeout(() => {
      document.getElementById("msgtext").innerHTML = "";
      },400);
    },6000);
  }
  return false;
};
// Disabling one use mode
function returnRepl() {
  history.back();
  document.getElementById("oneuseappicon").style.display = "none";
  document.getElementById("setoneusetrue").disabled = false;
  document.getElementById("setoneusetrue").style.opacity = "1";
};
 function detectBrowser(){
  window.onpopstate = function(event){
  document.getElementById("oneuseappicon").style.display = "none";
  document.getElementById("setoneusetrue").disabled = false;
  document.getElementById("setoneusetrue").style.opacity = "1";
  };
};
// Set header to sticky when scrolling
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
    header.style.zIndex = "1";
    header.style.borderRadius = "0 0 10px 10px";
    header.style.borderTop = "solid 0px var(--border)";
    header.style.borderLeft = "solid 2px var(--border)";
    header.style.borderRight = "solid 2px var(--border)";
    document.getElementById("videoOpen").style.borderRadius = "0 0 0 10px";
    document.getElementById("pdfsOpen").style.borderRadius = "0 0 10px 0";
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
    header.style.zIndex = "1";
    header.style.borderRadius = "0 0 0 0";
    header.style.borderTop = "solid 2px var(--border)";
    header.style.borderLeft = "solid 0px var(--border)";
    header.style.borderRight = "solid 0px var(--border)";
    document.getElementById("videoOpen").style.borderRadius = "0 0 0 0";
    document.getElementById("pdfsOpen").style.borderRadius = "0 0 0 0";
    toggledspace.style.height = "0px";
    document.getElementById("totop").style.display = "none";
    document.getElementById("myNavigator").style.height = "calc(100% - 100px)";
  }
};
function removeLocalSticky() {
  document.documentElement.setAttribute('header', '');
  localStorage.setItem("header", "");
  document.documentElement.setAttribute('header', '');
};
// Get battery level in % with charging detection
navigator.getBattery().then(function (battery) {
  function showAllBatteryInfo() {
    editChargeInfo();
    editLevelInfo();
  }
  showAllBatteryInfo();
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  function editChargeInfo() {
    var idkbttry = document.getElementById('isbatterycharging');
    var isBatteryCharging = (battery.charging ? "⨭" : "⨴️");
    idkbttry.innerText = isBatteryCharging;
    if (idkbttry.innerHTML === "⨴️") {
      idkbttry.style.color = "var(--subcolor)";
      document.getElementById("isinprogbattery").style.backgroundColor = "var(--subcolor)";
    } else {
      idkbttry.style.color = "var(--interact-color)";
      document.getElementById("isinprogbattery").style.backgroundColor = "var(--interact-color)";
    }
  };
  battery.addEventListener('levelchange', function () {
  editLevelInfo();
  });
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  battery.addEventListener('levelchange', function () {
    editLevelInfo();
  });
  function editLevelInfo() {
    var batteryLevel = battery.level * 100;
    document.getElementById('batterypercentage').innerText = batteryLevel + "%";
    document.getElementById("isinprogbattery").style.height = document.getElementById('batterypercentage').innerHTML;
    if (batteryLevel < 20) {
      document.getElementById('batterypercentage').style.color = "var(--import-error)";
      document.getElementById("isinprogbattery").style.backgroundColor = "var(--import-error)";
    }else{
      document.getElementById('batterypercentage').style.color = "var(--color)";
    }
  };
});
// Display time & date
setInterval(displayTime, 1);
function displayTime() {
  if(localStorage.getItem("lang") == "en") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time =hoursOfDay + ":" + minutes + " ✧";
    document.getElementById("vartime").innerHTML = time;
    document.getElementById("vardate").innerHTML = " " + today + " " + tomonths + " " + year;
    document.getElementById("vardate").style.direction = "ltr";
  }else
  if(localStorage.getItem("lang") == "he") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"]
    let today = weekDay[timeNow.getDay()];
    let months = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time =hoursOfDay + ":" + minutes + " ✧";
    document.getElementById("vartime").innerHTML = time;
    document.getElementById("vardate").innerHTML = " " + today + " " + tomonths + " " + year;
    document.getElementById("vardate").style.direction = "rtl";
  }else
  if(localStorage.getItem("lang") == "ru") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]
    let today = weekDay[timeNow.getDay()];
    let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time =hoursOfDay + ":" + minutes + " ✧";
    document.getElementById("vartime").innerHTML = time;
    document.getElementById("vardate").innerHTML = " " + today + " " + tomonths + " " + year;
    document.getElementById("vardate").style.direction = "rtl";
  }
};
// Display info in full screen
function infoInfull() {
  document.getElementById("infobtn").style.position = "fixed";
  document.getElementById("infobtn").style.width = "100%";
  document.getElementById("infobtn").style.height = "100%";
  document.getElementById("infobtn").style.margin = "0";
  document.getElementById("infobtn").style.borderRadius = "0px";
  document.getElementById("xinfobtn").style.transform = "scale(1,1)";
};
function infoInnorm() {
  document.getElementById("infobtn").style.position = "relative";
  document.getElementById("infobtn").style.width = "95%";
  document.getElementById("infobtn").style.height = "187px";
  document.getElementById("infobtn").style.margin = "2px 2.5%";
  document.getElementById("infobtn").style.borderRadius = "10px";
  document.getElementById("xinfobtn").style.transform = "scale(0,0)";
};
// Show toggled player has selected
function openPlayer(evt, playerName) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (ti = 0; ti < tabcontent.length; ti++) {
    tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (ti = 0; ti < tablinks.length; ti++) {
    tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(playerName).style.display = "block";
  evt.currentTarget.className += " active";
};
// Quick toggling between players
function nextTob() {
  document.getElementById("imageOpen").click();
};
function nextToc() {
  document.getElementById("audioOpen").click();
};
function nextTod() {
  document.getElementById("docsOpen").click();
};
function nextToe() {
  document.getElementById("linkOpen").click();
};
function nextToa() {
  document.getElementById("videoOpen").click();
};
// Display images on full screen
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
  evt.preventDefault();
  return blockImagesContext();
});
  expandImg.ondragstart = function() {return false;};
};
function closeImgPreview(){
  imagepreviewbase.style.backgroundColor = "var(--transparent)";
  imagepreviewbase.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    imagepreviewbase.style.left = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};
// Display doctypes on full screen
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
function closeIfmPreview(){
  iframepreviewbase.style.backgroundColor = "var(--transparent)";
  iframepreviewbase.style.backdropFilter = "blur(0px)";
  document.getElementById("xpvbtn").style.transform = "scale(0,0)";
  setTimeout(() => {
    iframepreviewbase.style.left = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};
// Open navigator menu
function menuNavigator() {
  var nb = document.getElementById("myNavigator");
  var mine = document.getElementById("main");
  var footer = document.getElementById("footer");
  if (nb.style.marginLeft === "calc(0% - 2px)") {
    if(localStorage.getItem("header") === "sticky") {
      document.getElementById("header").style.width = "calc(95% - 4px)";
      document.getElementById("header").style.margin = "0 2.5%";
      document.getElementById("header").style.borderRadius = "0 0 10px 10px";
      document.getElementById("header").style.borderLeft = "solid 2px var(--border)";
      document.getElementById("header").style.borderRight = "solid 2px var(--border)";
      document.getElementById("videoOpen").style.borderRadius = "0 0 0 10px";
      document.getElementById("pdfsOpen").style.borderRadius = "0 0 10px 0";
    }
    nb.style.marginLeft = "calc(100% - 2px)";
    mine.style.opacity = "1";
    footer.style.opacity = "1";
    document.body.style.overflowY = "auto";
  } else {
    if(localStorage.getItem("header") === "sticky") {
      document.getElementById("header").style.width = "100%";
      document.getElementById("header").style.margin = "0 0";
      document.getElementById("header").style.borderRadius = "0 0 0 0";
      document.getElementById("header").style.borderLeft = "solid 0px var(--border)";
      document.getElementById("header").style.borderRight = "solid 0px var(--border)";
      document.getElementById("videoOpen").style.borderRadius = "0 0 0 0";
      document.getElementById("pdfsOpen").style.borderRadius = "0 0 0 0";
    }
    nb.style.marginLeft = "calc(0% - 2px)";
    mine.style.opacity = "0";
    footer.style.opacity = "0";
    document.body.style.overflowY = "hidden";
  }
};
function menuButton(x) {
  x.classList.toggle("change");
};
// go to top smooth
function topFunction() {
  var element = document.getElementById("baseSpace");
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};
// Links to external pages or apps
function linkLoaderWhatsapp() {
  window.open("https://api.whatsapp.com/send?phone=972537929234&text=Hello there!",target="_blank");
};
function linkLoaderMail() {
  window.open("mailto:meirfons1@gmail.com",target="_blank");
};
function linkLoaderCall() {
  window.open("tel:0537929234",target="_blank");
};
function linkLoaderMessage() {
  window.open("sms:0537929234?body=Hello there!",target="_blank");
};
function linkLoaderTelegram() {
  window.open("https://t.me/arthur_vesta_mt",target="_blank");
};
function videolistPlayer() {
  window.open("https://en.m.wikipedia.org/wiki/Video_file_format",target="_blank");
};
function imagelistPlayer() {
  window.open("https://en.m.wikipedia.org/wiki/Image_file_format",target="_blank");
};
function audiolistPlayer() {
  window.open("https://en.m.wikipedia.org/wiki/Audio_file_format",target="_blank");
};
function docslistPlayer() {
  window.open("https://www.adobe.com/uk/acrobat/resources/document-files/text-files.html",target="_blank");
};
// Protector of bluring players
var elementmaineyepro = document.getElementById("main");
var elementimgview = document.getElementById("expandedImg");
function protectOn() {
  elementmaineyepro.style.filter = "blur(20px)";
  elementimgview.style.filter = "blur(20px)";
  elementmaineyepro.style.opacity = "0.3";
  elementimgview.style.opacity = "0.3";
  document.getElementById("protectbtn").style.display = "block";
  document.getElementById("intmess").style.left = "0px";
  document.getElementById("protectLang").disabled = true;
  if(localStorage.getItem("lang") == "en") {
    if(navigator.userAgent.match(/mobile/i)) {
      document.getElementById("msgtext").innerHTML = "Double press on ''&#x1F6E1'' for turn off.";
    }else{
      document.getElementById("msgtext").innerHTML = "Double click on ''&#x1F6E1'' for turn off.";
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    if(navigator.userAgent.match(/mobile/i)) {
      document.getElementById("msgtext").innerHTML = "נגיעה כפולה על ''&#x1F6E1'' בשביל לכבות.";
    }else{
      document.getElementById("msgtext").innerHTML = "לחיצה כפולה על ''&#x1F6E1'' בשביל לכבות.";
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    if(navigator.userAgent.match(/mobile/i)) {
      document.getElementById("msgtext").innerHTML = "Дважды нажмите на ''&#x1F6E1'' для выключения.";
    }else{
      document.getElementById("msgtext").innerHTML = "Дважды щелкните на ''&#x1F6E1'', чтобы выключить.";
    }
  }
  setTimeout(() => {
    document.getElementById("intmess").style.left = "-100%";
    setTimeout(() => {
      document.getElementById("msgtext").innerHTML = "";
    },400);
  },3000);
};
function protectOff() {
  elementmaineyepro.style.filter = "blur(0px)";
  elementimgview.style.filter = "blur(0px)";
  elementmaineyepro.style.opacity = "1";
  elementimgview.style.opacity = "1";
  document.getElementById("protectbtn").style.display = "none";
  document.getElementById("protectLang").disabled = false;
};
// Check if page use cookies
function checkCookies() {
  if (navigator.cookieEnabled === true) {
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("checkcookies").innerHTML = "Page use cookie";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("checkcookies").innerHTML = "הדף משתמש בעוגיות";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("checkcookies").innerHTML = "Страница использует куки";
    }
  } else {
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("checkcookies").innerHTML = "Page don't use cookie";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("checkcookies").innerHTML = "הדף לא משתמש בעוגיות";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("checkcookies").innerHTML = "Страница не использует куки";
    }
  }
};
// Check connection online or offline
function checkConnection() {
  var status = navigator.onLine;
  if (status) {
    document.getElementById("body").value = "ONLINE";
    document.getElementById("internetdisconnected").style.display = "none";
    document.getElementById("internetconnected").style.display = "block";
  } else {
    document.getElementById("body").value = "OFFLINE";
    document.getElementById("internetdisconnected").style.display = "block";
    document.getElementById("internetconnected").style.display = "none";
  }
};
// Close message whene clicked
function callbaCkmsg() {
  document.getElementById("intmess").style.left = "-100%";
  setTimeout(() => {
  document.getElementById("msgtext").innerHTML = "";
  },400);
};
// Load random text type tips
const myListTipsEn = [
  "Press an uploaded image for open current pressed image preview.",
  "If you change the device font, the page text will change to your device's display font.",
  "Open menu for settings and information.",
  "Double press on information table for full screen information.",
  "''Protection'' function will protect your uploaded content from other eyes.",
  "''One Use Mode'' disable page after reload him.",
  "You can remove ''One Use Mode'' by press back on your device's navigation bar.",
  "In instructions you will see links to lists of formats can be able in any players.",
  "Download ''<a class='a' href='https://play.google.com/store/apps/details?id=rk.android.app.shortcutmaker'>Shortcut Maker</a>'' from Google Play, For create shortcut on launcher.",
  "Weak devices will lag.",
  "Language translations may not be 100% accurate.",
  "If ''One Use Mode'' is used, the ''Close'' button will not be able to close the page.",
  "Files is not supported is: <a>.heic(Image from Xiaomi camera, if the setting is enabled)</a>, <a>.heif(Edited ''.heic/.heif'' image by MI Editor)</a><a class='transparent-text'>Cannot be fixed</a>."
];
const myListTipsHe = [
  "לחץ על תמונה שהועלתה כדי לפתוח את התצוגה המקדימה של התמונה שנלחצה.",
  "אם תשנה את גופן המכשיר, טקסט העמוד ישתנה לגופן התצוגה של המכשיר שלך.",
  "פתח את התפריט להגדרות ומידע.",
  "לחץ פעמיים על טבלת המידע לקבלת מידע על מסך מלא.",
  "פונקציית ''הגנה'' תגן על התוכן שהעלתם מעיניים אחרות.",
  "''מצב שימוש אחד'' משבית את הדף לאחר טעינתו מחדש.",
  "אתה יכול להסיר את ''מצב שימוש אחד'' על ידי לחיצה לאחור בסרגל הניווט של המכשיר שלך.",
  "בהוראות תראה קישורים לרשימות של פורמטים שיכולים להיות בכל נגן.",
  "הורד ''<a class='a' href='https://play.google.com/store/apps/details?id=rk.android.app.shortcutmaker'>יוצר קיצורים</a>'' מGoogle Play, ליצירת קיצור דרך במפעיל.",
  "מכשירים חלשים יאחרו.",
  "ייתכן שתרגומי שפות לא יהיו מדויקים ב-100%.",
  "אם ''מצב שימוש אחד'' שומש, הלחצן ''סגור'' לא יוכל לסגור את הדף.",
  "אין תמיכה בקבצים: <a>.heic(תמונה ממצלמת Xiaomi, אם ההגדרה מופעלת)</a>, <a>.heif(ערוך ''.heic/.heif'' תמונה מאת עורך MI)</a><a class='transparent-text'>לא ניתן לתיקון</a>."
];
const myListTipsRu = [
  "Нажмите на загруженное изображение, чтобы открыть предварительный просмотр текущего нажатого изображения.",
  "Если вы измените шрифт устройства, текст страницы изменится на шрифт дисплея вашего устройства.",
  "Откройте меню для настроек и информации.",
  "Двойное нажатие на информационную таблицу для отображения информации на весь экран.",
  "''Защита'' функция защитит ваш загруженный контент от посторонних глаз.",
  "''Режим одноразового использования'' отключить страницу после перезагрузки.",
  "Вы можете удалить ''Режим одноразового использования'' нажав кнопку «Назад» на панели навигации вашего устройства.",
  "В инструкции вы увидите ссылки на списки форматов, которые могут быть доступны в любых плеерах..",
  "Загрузите '<a class='a' href='https://play.google.com/store/apps/details?id=rk.android.app.shortcutmaker'>Создатель ярлыков</a>' из Google Play, для создания ярлыка на панели запуска.",
  "Слабые устройства будут отставать.",
  "Переводы на другие языки могут быть неточными на 100%.",
  "Если 'Режим одноразового использования' был использован, то тагда кнопка 'Закрыть' не сможет закрыть страницу по неизвестной причине.",
  "Файлы не поддерживаются: <a>.heic(Изображение с камеры Xiaomi, если настройка включена)</a>, <a>.heif(Редактированные '.heic/.heif' изображение от MI Редактор)</a>."
];
function randomizeFunctionTips() {
  document.getElementById("intmess").style.left = "0px";
  if(localStorage.getItem("lang") == "en") {
    document.getElementById("msgtext").innerHTML = myListTipsEn[Math.floor(Math.random() * myListTipsEn.length)];
  }else
  if(localStorage.getItem("lang") == "he") {
    document.getElementById("msgtext").innerHTML = myListTipsHe[Math.floor(Math.random() * myListTipsHe.length)];
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.getElementById("msgtext").innerHTML = myListTipsRu[Math.floor(Math.random() * myListTipsRu.length)];
  }
  setTimeout(() => {
    document.getElementById("intmess").style.left = "-100%";
    setTimeout(() => {
    document.getElementById("msgtext").innerHTML = "";
    },400);
  },3000);
};
// Generator for randim visit uid
function visitInformation() {
  const uid = window.crypto.randomUUID();
  document.getElementById("uid").innerHTML = uid;
};
// Block images context menu alert
function blockImagesContext() {
  return false;
};
// Disable all animations
function checkFunc(){
  if (document.getElementById("checkKillAnim").checked === true) {
    document.documentElement.setAttribute('animation', '0.6s');
    localStorage.setItem("yesanimation", "true");
  } else {
    document.documentElement.setAttribute('animation', '0.0s');
    localStorage.setItem("yesanimation", "false");
  }
};
function checkFuncCeck() {
  if (localStorage.getItem("yesanimation") === "true") {
    document.getElementById("checkKillAnim").checked = true;
  }else{ 
    document.getElementById("checkKillAnim").checked = false;
  }
};
function killAnimation() {
  var checkbox = document.getElementById("checkKillAnim");
  var toggletext = document.getElementById("kaText");
  var ka = document.querySelectorAll('*');
  if(checkbox.checked === false) {
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "OFF";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "כבוי";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВЫК";
    }
    for(var i=0;i<ka.length;i++){
      ka[i].style.transition = '0s';
      ka[i].style.webkitTransition = '0s';
      ka[i].style.mozTransition = '0s';
      ka[i].style.oTransition = '0s';
    }
  }else{
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "ON";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "דלוק";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВКЛ";
    }
    for(var i=0;i<ka.length;i++){
      ka[i].style.transition = '0.6s';
      ka[i].style.webkitTransition = '0.6s';
      ka[i].style.mozTransition = '0.6s';
      ka[i].style.oTransition = '0.6s';
    }
  }
};
// Get scroll width
function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
};
// Dark / Light Themes
function detectColorScheme(){
var theme="light";
document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f5f6fb');
document.getElementById("tmText").innerHTML = "Bright";
  if(localStorage.getItem("theme")){
    if(localStorage.getItem("theme") == "dark"){
      var theme = "dark";
    }
  } else if(!window.matchMedia) {
    return false;
  } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    var theme = "dark";
  }
  if (theme=="dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0f1d');
  }
};
detectColorScheme();
const toggleSwitch = document.querySelector('#themeCheckbox input[type="checkbox"]');
function switchTheme() {
  if (document.getElementById("themeCheckbox").checked) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("themeCheckbox").checked = true;
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("tmText").innerHTML = "Dark";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("tmText").innerHTML = "כהה";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("tmText").innerHTML = "Темный";
    }
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0f1d');
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("themeCheckbox").checked = false;
    if(localStorage.getItem("lang") == "en") {
      document.getElementById("tmText").innerHTML = "Bright";
    }else
    if(localStorage.getItem("lang") == "he") {
      document.getElementById("tmText").innerHTML = "בהיר";
    }else
    if(localStorage.getItem("lang") == "ru") {
      document.getElementById("tmText").innerHTML = "Светлый";
    }
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f5f6fb');
  }
  loadIcon();
};
document.getElementById("themeCheckbox").addEventListener('change', switchTheme, false);
if (document.documentElement.getAttribute("data-theme") == "dark"){
  document.getElementById("themeCheckbox").checked = true;
  if(localStorage.getItem("lang") == "en") {
    document.getElementById("tmText").innerHTML = "Dark";
  }else
  if(localStorage.getItem("lang") == "he") {
    document.getElementById("tmText").innerHTML = "כהה";
  }else
  if(localStorage.getItem("lang") == "ru") {
    document.getElementById("tmText").innerHTML = "Темный";
  }
  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0c0f1d');
};
// Share system
const shareDataEn = {
  title: "Storage Player",
  text: "Explore your files!",
  url: window.location.href
};
const shareDataHe = {
  title: "נגן אחסון",
  text: "חקור את הקבצים שלך!",
  url: window.location.href
};
const shareDataRu = {
  title: "Проигрыватель памяти",
  text: "Исследуйте свои файлы!",
  url: window.location.href
};
const btnEn = document.querySelector(".share-en");
const resultParaEn = document.querySelector(".result-en");
const btnHe = document.querySelector(".share-he");
const resultParaHe = document.querySelector(".result-he");
const btnRu = document.querySelector(".share-ru");
const resultParaRu = document.querySelector(".result-ru");
btnEn.addEventListener("click", async () => {
  try {
    await navigator.share(shareDataEn);
    resultParaEn.textContent = "Shared successfully!";
    resultParaEn.style.color = "var(--interact-color)";
  } catch (err) {
    resultParaEn.textContent = `Error: ${err}`;
    resultParaEn.style.color = "var(--import-error)";
  }
});
btnHe.addEventListener("click", async () => {
  try {
    await navigator.share(shareDataHe);
    resultParaHe.textContent = "שותף בהצלחה!";
    resultParaHe.style.color = "var(--interact-color)";
  } catch (err) {
    resultParaHe.textContent = `שגיאה: ${err}`;
    resultParaHe.style.color = "var(--import-error)";
  }
});
btnRu.addEventListener("click", async () => {
  try {
    await navigator.share(shareDataRu);
    resultParaRu.textContent = "Успешно передано!";
    resultParaRu.style.color = "var(--interact-color)";
  } catch (err) {
    resultParaRu.textContent = `Ошибка: ${err}`;
    resultParaRu.style.color = "var(--import-error)";
  }
});
// Auto start window of instructions
function checkFuncAuto(){
  var toggletext = document.getElementById("amText");
  if (document.getElementById("autoMOdalChecker").checked === true) {
    document.documentElement.setAttribute('instruntion', 'autostart-on');
    localStorage.setItem("automodal", "true");
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "ON";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "דלוק";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВКЛ";
    }
  } else {
    document.documentElement.setAttribute('instruntion', 'autostart-off');
    localStorage.setItem("automodal", "false");
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "OFF";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "כבוי";
    }else
    if(localStorage.getItem("lang") == "ru") {
      toggletext.innerHTML = "ВЫК";
    }
  }
};
function displayAutoModal() {
  var toggletext = document.getElementById("amText");
  if(localStorage.getItem("automodal") === "false") {
    document.getElementById("autoModal").classList.add("dont-show-auto");
    document.getElementById("autoMOdalChecker").checked = false;
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "OFF";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "כבוי";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "ВЫК";
    }
    document.body.style.overflowY = "auto";
  }else{
    document.getElementById("autoModal").classList.remove("dont-show-auto");
    document.getElementById("autoMOdalChecker").checked = true;
    if(localStorage.getItem("lang") == "en") {
      toggletext.innerHTML = "ON";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "דלוק";
    }else
    if(localStorage.getItem("lang") == "he") {
      toggletext.innerHTML = "ВКЛ";
    }
    document.body.style.overflowY = "hidden";
  }
}