function previewFiles(input) {
  let image_count = 0
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
      img.alt = `${++image_count}` + "⟩ " + file.name
      button.className = "button remove-img"
      span.className = "img-label"
      span.style.overflowX = "auto"
      span.style.overflowY = "hidden"
      span.innerHTML = img.alt
      icont.innerHTML = +image_count;
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
        icont.innerHTML = --image_count;
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
      if(document.getElementById("administratorTools").checked === false) {
        evt.preventDefault();
        return false;
      }
      });
    }
    reader.readAsDataURL(file)
  })
};