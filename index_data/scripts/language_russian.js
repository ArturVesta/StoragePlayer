function russianLanguage() {
  document.documentElement.setAttribute('lang', 'ru-ru');
  localStorage.setItem("lang", "ru");

  document.getElementById("langSelected").innerHTML = "Язык: " + ruLang.innerHTML;

  document.title = "Проигрыватель памяти";
  document.getElementById("loadNumber").innerHTML = "Подготовка к загрузке...";
  document.getElementById("loadtxt").innerHTML = "БЕСПЛАТНАЯ СТРАНИЦА ОТ: MNTS";
  document.getElementById("quickinfoLang").innerHTML = "Полная информация о странице.";
  document.getElementById("videoOpen").innerHTML = "Видео";
  document.getElementById("imageOpen").innerHTML = "Изображение";
  document.getElementById("audioOpen").innerHTML = "Аудио";
  document.getElementById("docsOpen").innerHTML = "Доктипы";
  document.getElementById("linkOpen").innerHTML = "Ссылка";
  document.getElementById("pdfsOpen").innerHTML = "Pdfs";
  document.getElementById("settingsLang").innerHTML = "Настройки";
  document.getElementById("protectLang").innerHTML = "Защита";
  document.getElementById("setoneusetrue").innerHTML = "Установить режим 'Одноразовое использование'";
  document.getElementById("animationLang").innerHTML = "Анимации:";
  document.getElementById("themeLang").innerHTML = "Тема:";
  document.getElementById("asmLang").innerHTML = "Авто запуск инструкций:";
  document.getElementById("amoLang").innerHTML = "> Открыть окно инструкций <";
  document.getElementById("moreLang").innerHTML = "Более";
  document.getElementById("sharing").innerHTML = "Делиться <emoji>🔗</emoji>";
  document.getElementById("reloadLang").innerHTML = "Перезагрузить";
  document.getElementById("closeLang").innerHTML = "Закрыть";
  document.getElementById("descriptLang").innerHTML = "Описание:";
  document.getElementById("descript0Lang").innerHTML = "Просмотрите файлы на вашем устройстве и воспроизведите их";
  document.getElementById("descript1Lang").innerHTML = "[все файлы, загруженные на эту страницу, видны только вам.";
  document.getElementById("descript2Lang").innerHTML = "все файлы очищаются после перезагрузки страницы].";
  document.getElementById("descript3Lang").innerHTML = "Кроме того, другие люди нет права доступа к вашим файлам, поскольку страница не сохранит ваши файлы в облаке, а только считывает местоположение файлов.";
  document.getElementById("aboutLang").innerHTML = "О странице:";
  document.getElementById("about0Lang").innerHTML = "Изначально эта страница была создана для видеоплеера, так как системный видеоплеер был неудобен, затем возникла идея создать страницу для изображений и аудио, если системные плееры были неудобны.";
  document.getElementById("recomLang").innerHTML = "Рекомендации:";
  document.getElementById("recom0Lang").innerHTML = "Загрузите '<a class='a' href='https://play.google.com/store/apps/details?id=rk.android.app.shortcutmaker'>Создатель ярлыков</a>' из Google Play, для создания ярлыка на панели запуска.";
  document.getElementById("tipsLang").innerHTML = "Советы:";
  document.getElementById("tips0Lang").innerHTML = "Нажмите на загруженное изображение, чтобы открыть предварительный просмотр текущего нажатого изображения.";
  document.getElementById("tips1Lang").innerHTML = "Если вы измените шрифт устройства, текст страницы изменится на шрифт дисплея вашего устройства.";
  document.getElementById("wawrsLang").innerHTML = "Предупреждения и ошибки:";
  document.getElementById("wawrs0Lang").innerHTML = "Слабые устройства будут отставать.";
  document.getElementById("wawrs1Lang").innerHTML = "Переводы на другие языки могут быть неточными на 100%.";
  document.getElementById("wawrs2Lang").innerHTML = "Если 'Режим одноразового использования' был использован, то тагда кнопка 'Закрыть' не сможет закрыть страницу по неизвестной причине.";
  document.getElementById("wawrs3Lang").innerHTML = "Нет способа это исправить:";
  document.getElementById("wawrs4Lang").innerHTML = "Файлы не поддерживаются: <a>.heic(Изображение с камеры Xiaomi, если настройка включена)</a>, <a>.heif(Редактированные '.heic/.heif' изображение от MI Редактор)</a>.";
  document.getElementById("service0Lang").innerHTML = "Свяжитесь с нами:";
  document.getElementById("subService00Lang").innerHTML = "Отправляйте только скриншоты, гифки или видео со страницы.";
  document.getElementById("subService01Lang").innerHTML = "И прежде чем делать фотографии или записывать видео, удалите загруженное с плееров.";
  document.getElementById("subTextLang").innerHTML = "БЕСПЛАТНАЯ СТРАНИЦА ОТ: MNTS";
  document.getElementById("share0Lang").innerHTML = "Выберите язык, на котором вы хотите поделиться.";
  document.getElementById("shareEnLang").innerHTML = "Английский";
  document.getElementById("shareHeLang").innerHTML = "Иврит";
  document.getElementById("shareRuLang").innerHTML = "Русский";
  document.getElementById("instructionLang").innerHTML = "Инструкции";
  document.getElementById("instruction0Lang").innerHTML = "Быстрое переключение между Темной и Яркой темами.";
  document.getElementById("instruction1Lang").innerHTML = "Переключение между проигрывателями.";
  document.getElementById("instruction2Lang").innerHTML = "Быстрое переключение между проигрывателями.";
  document.getElementById("instruction3Lang").innerHTML = "Быстрое переключение между Темной и Яркой темами.";
  document.getElementById("instruction4Lang").innerHTML = "Переключение между проигрывателями.";
  document.getElementById("instruction5Lang").innerHTML = "Кнопка отключения защиты [Двойной";
  document.getElementById("autoRight").innerHTML = "Установить страницу в режим одноразового использования [Отключить повтор страницы].";
  document.getElementById("autoLeft").innerHTML = "Удалить режим одноразового использования и вернуть повторность страницу.";
  document.getElementById("functionLang").innerHTML = "Функции";
  document.getElementById("function0Icon").innerHTML = "Значок функции:";
  document.getElementById("function0Name").innerHTML = "Имя функции: <a>Наверх</a>.";
  document.getElementById("function0Descript").innerHTML = "Описание: <a>Если прокрутите в любом месте страницы на панели будет отображаться значок. Если нажать на значок, вы перейдете наверх страницы.</a>.";
  document.getElementById("function1Icon").innerHTML = "Значок функции: &#x1F6E1;.";
  document.getElementById("function1Name").innerHTML = "Имя функции: <a>Защита отображаемых файлов</a>.";
  document.getElementById("function1Descript").innerHTML = "Описание: <a>Защитить отображаемое изображение от посторонних глаз с помощью размытия игроков, дважды нажмите на значок, чтобы отключить его</a>.";
  document.getElementById("function2Icon").innerHTML = "Значок функции: &#9940;.";
  document.getElementById("function2Name").innerHTML = "Имя функции: <a>Режим один использование</a>.";
  document.getElementById("function2Descript").innerHTML = "Описание: <a>Если эта опция включена, страница не будет доступна после перезагрузки. Чтобы отключить ее, нажмите на иконку или нажмите '&#8882;' на панели навигации вашего телефона</a>.";
  document.getElementById("playersLang").innerHTML = "Проигрывателы";
  document.getElementById("players0Lang").innerHTML = "Имя проигрывателя: <a>Видео</a>";
  document.getElementById("players0Button").innerHTML = "Формат видеофайла (Википедия)";
  document.getElementById("players1Lang").innerHTML = "Имя проигрывателя: <a>Изображение</a>";
  document.getElementById("players1Button").innerHTML = "Формат файла изображения (Википедия)";
  document.getElementById("players2Lang").innerHTML = "Имя проигрывателя: <a>Аудио</a>";
  document.getElementById("players2Button").innerHTML = "Формат аудиофайла (Википедия)";
  document.getElementById("players3Lang").innerHTML = "Имя проигрывателя: <a>Доктипы</a>";
  document.getElementById("players4Lang").innerHTML = "Форматы, поддерживаемые проигрывателом:";
  document.getElementById("players5Lang").innerHTML = "<a>.txt</a>, <a>.json</a>, <a>.xml</a>, <a>.dll</a>, <a>.bat</a>, <a>.log</a>, <a>.htm</a>, <a>.html</a>, <a>.pdf</a>, <a>.py</a>, <a>.js</a>, <a>.css</a>.";
  document.getElementById("players6Lang").innerHTML = "Имя проигрывателя: <a>Ссылка</a>";
  document.getElementById("players7Lang").innerHTML = "Пример ссылки на видео с YouTube:";
  document.getElementById("players8Lang").innerHTML = "https://youtube.com/<a>embed</a>/[идентификатор видео]";
  document.getElementById("player0Title").innerHTML = "ВИДЕО";
  document.getElementById("vEndSows").innerHTML = "это все (>_<).";
  document.getElementById("next00").innerHTML = "Изображение";
  document.getElementById("next01").innerHTML = "Ссылка";
  document.getElementById("player1Title").innerHTML = "ИЗОБРАЖЕНИЕ";
  document.getElementById("iEndSows").innerHTML = "это все (>_<).";
  document.getElementById("next10").innerHTML = "Аудио";
  document.getElementById("next11").innerHTML = "Видео";
  document.getElementById("player2Title").innerHTML = "АУДИО";
  document.getElementById("aEndSows").innerHTML = "это все (>_<).";
  document.getElementById("next20").innerHTML = "Доктипы";
  document.getElementById("next21").innerHTML = "Изображение";
  document.getElementById("player3Title").innerHTML = "ДОКТИПЫ";
  document.getElementById("dEndSows").innerHTML = "это все (>_<).";
  document.getElementById("next30").innerHTML = "Ссылка";
  document.getElementById("next31").innerHTML = "Аудио";
  document.getElementById("player4Title").innerHTML = "ССЫЛКА";
  document.getElementById("embedLink").innerHTML = "Ссылка не написана (>_<).";
  document.getElementById("next40").innerHTML = "Видео";
  document.getElementById("next41").innerHTML = "Доктипы";
  document.getElementById("service1Lang").innerHTML = "Свяжитесь с нами:";
  document.getElementById("subService10Lang").innerHTML = "Отправляйте только скриншоты, гифки или видео со страницы.";
  document.getElementById("subService11Lang").innerHTML = "И прежде чем делать фотографии или записывать видео, удалите загруженное с плееров.";
  document.getElementById("subText0Lang").innerHTML = "БЕСПЛАТНАЯ СТРАНИЦА ОТ: MNTS";
  document.getElementById("pageNameLang").innerHTML = "Отображаемое имя страницы:";
  document.getElementById("pageTitleLang").innerHTML = "Название страницы:";
  document.getElementById("pagePackageLang").innerHTML = "Имя пакета страницы:";
  document.getElementById("packLinkLang").innerHTML = "Ссылка на страницу пакета:";
  document.getElementById("uidLang").innerHTML = "Идентификатор посещения страницы:";
  document.getElementById("lastTimeLang").innerHTML = "Последнее посещение страницы:";
  document.getElementById("versionLang").innerHTML = "Версия страницы:";
  document.getElementById("updatedateLang").innerHTML = "Обновлено в:";
  document.getElementById("pageAuthorsLang").innerHTML = "Авторы:";
  document.getElementById("checkcookiesLang").innerHTML = "Файлы cookie:";
  document.getElementById("pageLicenseLang").innerHTML = "Лицензия:";
  document.getElementById("interRessLang").innerHTML = "Внутренние ресурсы:";
  document.getElementById("exterRessLang").innerHTML = "Внешние ресурсы:";
  document.getElementById("exterLinkLang").innerHTML = "Внешние ссылки:";
  document.getElementById("subVLang").value = "Загрузить видео";
  document.getElementById("subILang").value = "Загрузить изображения";
  document.getElementById("subALang").value = "Загрузить аудио";
  document.getElementById("subDLang").value = "Загрузить доктипы";
  document.getElementById("inputsubmitlink").value = "Подтвердить";
  document.getElementById("wlLang").innerHTML = "Напишите ссылку здесь:";
  document.getElementById("confirmStarlLang").innerHTML = "Подтвердить";
  document.getElementById("removeDefLang0").innerHTML = "Удалить язык по умолчанию";
  document.getElementById("removeDefLang1").innerHTML = "Удалить язык по умолчанию";

  document.getElementById("confirmStarlLang").style.display = "block";
  document.getElementById("removeDefLang0").style.display = "block";
// directions
  document.getElementById("infobtn").style.direction = "ltr";
  document.getElementById("subTextLang").style.direction = "ltr";
  document.getElementById("subText0Lang").style.direction = "ltr";
  document.getElementById("quickinfoLang").style.direction = "ltr";
  document.getElementById("wlLang").style.direction = "ltr";
  document.getElementById("modalcontentaut").classList.remove("other-direction");
  document.getElementById("subService10Lang").classList.remove("other-direction");
  document.getElementById("subService11Lang").classList.remove("other-direction");
  document.getElementById("msgtext").classList.remove("other-direction");
  
// text-aligns
  document.getElementById("infobtn").style.textAlign = "left";
  document.getElementById("loadtxt").style.textAlign = "left";
  document.getElementById("modalcontentaut").classList.remove("other-align");
  document.getElementById("subService10Lang").classList.remove("other-align");
  document.getElementById("subService11Lang").classList.remove("other-align");

  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("dblLangToClose").innerHTML = "Дважды коснитесь в любом месте, чтобы закрыть";
  }else{
    document.getElementById("dblLangToClose").innerHTML = "Дважды нажмите в любом месте, чтобы закрыть";
  };
  if(localStorage.getItem("theme") == "dark"){
    document.getElementById("tmText").innerHTML = "Темный";
  }else
  if(localStorage.getItem("theme") == "light"){
    document.getElementById("tmText").innerHTML = "Светлый";
  };
  if(localStorage.getItem("automodal") === "false") {
    document.getElementById("amText").innerHTML = "ВЫК";
  } else {
    document.getElementById("amText").innerHTML = "ВКЛ";
  };
  if (localStorage.getItem("yesanimation") === "true") {
    document.getElementById("kaText").innerHTML = "ВКЛ";
  }else{
    document.getElementById("kaText").innerHTML = "ВЫК";
  }
  loadTitle();
  infoLoader();
  checkBrowserCodeName();
}