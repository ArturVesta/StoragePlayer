let video_count = 0
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
    document.getElementById("vcont").innerHTML = ++video_count;
    video.alt = `${video_count}` + "⟩ " + file.name;
    video.setAttribute("controls", "");
    if(document.getElementById("administratorTools").checked === false) {
      video.setAttribute("controlsList","nodownload")
    }else{
      video.setAttribute("controlsList","")
    };
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
      document.getElementById("vcont").innerHTML = --video_count;
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
      if(document.getElementById("administratorTools").checked === false) {
        evt.preventDefault();
        return false;
      }
    });
  }
};