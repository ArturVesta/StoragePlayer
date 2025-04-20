function previewFilesmp3(input) {
  let audio_count = 0
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
      audio.alt = `${++audio_count}` + "⟩ " + file.name
      audio.setAttribute("controls", "")
      if(document.getElementById("administratorTools").checked === false) {
        audio.setAttribute("controlsList","nodownload")
      }else{
        audio.setAttribute("controlsList","")
      }
      button.className = "button remove-mp3"
      span.className = "mp3-label"
      span.style.overflowX = "auto"
      span.style.overflowY = "hidden"
      span.innerHTML = audio.alt;
      acont.innerHTML = +audio_count;
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
        acont.innerHTML = --audio_count;
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