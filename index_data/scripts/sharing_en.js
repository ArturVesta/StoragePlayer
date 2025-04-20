const shareDataEn = {
  title: "Storage Player",
  text: "Explore your files!",
  url: window.location.href
};
const btnEn = document.querySelector(".share-en");
const resultParaEn = document.querySelector(".result-en");
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