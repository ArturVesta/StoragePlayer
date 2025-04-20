function LoadLink() {
  var txtary = document.getElementById("inputsearchurl");
  var iframe = document.getElementById("embedlink");
  var embed = document.getElementById("embedLink");
  iframe.src = txtary.value;
  embed.innerHTML = iframe.src;
  embed.addEventListener("click", reloadEmbed);
};