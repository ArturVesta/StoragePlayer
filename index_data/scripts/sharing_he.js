const shareDataHe = {
  title: "נגן אחסון",
  text: "חקור את הקבצים שלך!",
  url: window.location.href
};
const btnHe = document.querySelector(".share-he");
const resultParaHe = document.querySelector(".result-he");
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