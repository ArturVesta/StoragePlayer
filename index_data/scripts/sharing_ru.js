const shareDataRu = {
  title: "Проигрыватель памяти",
  text: "Исследуйте свои файлы!",
  url: window.location.href
};
const btnRu = document.querySelector(".share-ru");
const resultParaRu = document.querySelector(".result-ru");
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