function previewFilesdoc(input) {
  let document_count = 0
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
      embed.alt = `${++document_count}` + "⟩ " + file.name
      button.className = "button remove-doc"
      btnful.className = "button view-doc"
      span.className = "doc-label"
      span.style.overflowX = "auto"
      span.style.overflowY = "hidden"
      span.innerHTML = embed.alt
      dcont.innerHTML = +document_count;
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
        dcont.innerHTML = --document_count;
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