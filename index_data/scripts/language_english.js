function englishLanguage() {
  document.documentElement.setAttribute('lang', 'en-us');
  localStorage.setItem("lang", "en");

  document.getElementById("langSelected").innerHTML = "Language: " + enLang.innerHTML;

  document.title = "Storage Player";
  document.getElementById("loadNumber").innerHTML = "Preparing to load...";
  document.getElementById("loadtxt").innerHTML = "Free page by: MNTS";
  document.getElementById("quickinfoLang").innerHTML = "Full information of the page.";
  document.getElementById("videoOpen").innerHTML = "Video";
  document.getElementById("imageOpen").innerHTML = "Image";
  document.getElementById("audioOpen").innerHTML = "Audio";
  document.getElementById("docsOpen").innerHTML = "Doctypes";
  document.getElementById("linkOpen").innerHTML = "Link";
  document.getElementById("pdfsOpen").innerHTML = "Pdfs";
  document.getElementById("settingsLang").innerHTML = "Settings";
  document.getElementById("protectLang").innerHTML = "Protection";
  document.getElementById("setoneusetrue").innerHTML = "Set page 'One use' mode";
  document.getElementById("animationLang").innerHTML = "Animations:";
  document.getElementById("themeLang").innerHTML = "Theme:";
  document.getElementById("asmLang").innerHTML = "Auto start instructions:";
  document.getElementById("amoLang").innerHTML = "> Open instructions window <";
  document.getElementById("moreLang").innerHTML = "More";
  document.getElementById("sharing").innerHTML = "Share <emoji>🔗</emoji>";
  document.getElementById("reloadLang").innerHTML = "Reload";
  document.getElementById("closeLang").innerHTML = "Close";
  document.getElementById("descriptLang").innerHTML = "Description:";
  document.getElementById("descript0Lang").innerHTML = "Explore the files in your device and play it";
  document.getElementById("descript1Lang").innerHTML = "[all files uploaded to this page are visible only to you.";
  document.getElementById("descript2Lang").innerHTML = "all files clear after page reload].";
  document.getElementById("descript3Lang").innerHTML = "Also, other people are not allowed to access your files because the page is stored on your device as a regular .html file; for example, 'file.<a class='a' href='https://en.m.wikipedia.org/wiki/File_format' target='_blank'>format</a>'.";
  document.getElementById("aboutLang").innerHTML = "About page:";
  document.getElementById("about0Lang").innerHTML = "From the beginning, this page was created for a video player because the system video player was not convenient, and then the idea was to create one for pictures and audio if the system players were not convenient.";
  document.getElementById("recomLang").innerHTML = "Recommendations:";
  document.getElementById("recom0Lang").innerHTML = "Download '<a class='a' href='https://play.google.com/store/apps/details?id=rk.android.app.shortcutmaker'>Shortcut Maker</a>' from Google Play, For create shortcut on launcher.";
  document.getElementById("tipsLang").innerHTML = "Tips:";
  document.getElementById("tips0Lang").innerHTML = "Press an uploaded image for open current pressed image preview.";
  document.getElementById("tips1Lang").innerHTML = "If you change the device font, the page text will change to your device's display font.";
  document.getElementById("wawrsLang").innerHTML = "Warnings and wrongs:";
  document.getElementById("wawrs0Lang").innerHTML = "Weak devices will lag.";
  document.getElementById("wawrs1Lang").innerHTML = "Language translations may not be 100% accurate.";
  document.getElementById("wawrs2Lang").innerHTML = "If 'One Use Mode' is used, the 'Close' button will not be able to close the page by an unknown reason.";
  document.getElementById("wawrs3Lang").innerHTML = "There's no way to fix it:";
  document.getElementById("wawrs4Lang").innerHTML = "Files is not supported is: <a>.heic(Image from Xiaomi camera, if the setting is enabled)</a>, <a>.heif(Edited '.heic/.heif' image by MI Editor)</a>.";
  document.getElementById("service0Lang").innerHTML = "Contact to us:";
  document.getElementById("subService00Lang").innerHTML = "Send only screenshots, gifs or videos from the page.";
  document.getElementById("subService01Lang").innerHTML = "And before taking photos or record video, remove uploaded from the players.";
  document.getElementById("subTextLang").innerHTML = "FREE PAGE BY: MNTS";
  document.getElementById("share0Lang").innerHTML = "Select the language you want to share.";
  document.getElementById("shareEnLang").innerHTML = "English";
  document.getElementById("shareHeLang").innerHTML = "Hebrew";
  document.getElementById("shareRuLang").innerHTML = "Russian";
  document.getElementById("instructionLang").innerHTML = "Instructions";
  document.getElementById("instruction0Lang").innerHTML = "Quick toggle between Dark and Bright themes.";
  document.getElementById("instruction1Lang").innerHTML = "Switch between players.";
  document.getElementById("instruction2Lang").innerHTML = "Quick Switch between players.";
  document.getElementById("instruction3Lang").innerHTML = "Quick toggle between Dark and Bright themes.";
  document.getElementById("instruction4Lang").innerHTML = "Switch between players.";
  document.getElementById("instruction5Lang").innerHTML = "Button for disable protection [Double";
  document.getElementById("autoRight").innerHTML = "Set page to One Use Mode [Disable repeat the page].";
  document.getElementById("autoLeft").innerHTML = "Remove the One Use Mode and return page repeating.";
  document.getElementById("functionLang").innerHTML = "Functions";
  document.getElementById("function0Icon").innerHTML = "Function icon:";
  document.getElementById("function0Name").innerHTML = "Function name: <a>To Top</a>.";
  document.getElementById("function0Descript").innerHTML = "Description: <a>When you scroll anywhere on the page, the icon will be displayed in bar, if press on icon the this take you to the top of the page</a>.";
  document.getElementById("function1Icon").innerHTML = "Function icon: &#x1F6E1;.";
  document.getElementById("function1Name").innerHTML = "Function name: <a>Files Displayed Protection</a>.";
  document.getElementById("function1Descript").innerHTML = "Description: <a>Protect displayed from others eyes with blur the player, double press on icon for turn it off</a>.";
  document.getElementById("function2Icon").innerHTML = "Function icon: &#9940;.";
  document.getElementById("function2Name").innerHTML = "Function name: <a>Mode One use</a>.";
  document.getElementById("function2Descript").innerHTML = "Description: <a>If this is enabled, the page will not be available after reload. To disable it, tap on the icon or tap '&#8882;' on the navigation bar of your phone</a>.";
  document.getElementById("playersLang").innerHTML = "Players";
  document.getElementById("players0Lang").innerHTML = "Player name: <a>Video</a>";
  document.getElementById("players0Button").innerHTML = "Video file format (Wikipedia)";
  document.getElementById("players1Lang").innerHTML = "Player name: <a>Image</a>";
  document.getElementById("players1Button").innerHTML = "Image file format (Wikipedia)";
  document.getElementById("players2Lang").innerHTML = "Player name: <a>Audio</a>";
  document.getElementById("players2Button").innerHTML = "Audio file format (Wikipedia)";
  document.getElementById("players3Lang").innerHTML = "Player name: <a>Doctypes</a>";
  document.getElementById("players4Lang").innerHTML = "Formats supported in player:";
  document.getElementById("players5Lang").innerHTML = "<a>.txt</a>, <a>.json</a>, <a>.xml</a>, <a>.dll</a>, <a>.bat</a>, <a>.log</a>, <a>.htm</a>, <a>.html</a>, <a>.pdf</a>, <a>.py</a>, <a>.js</a>, <a>.css</a>.";
  document.getElementById("players6Lang").innerHTML = "Player name: <a>Link</a>";
  document.getElementById("players7Lang").innerHTML = "Example to link of video from YouTube:";
  document.getElementById("players8Lang").innerHTML = "https://youtube.com/<a>embed</a>/[video id]";
  document.getElementById("player0Title").innerHTML = "VIDEO";
  document.getElementById("vEndSows").innerHTML = "this is all (>_<).";
  document.getElementById("next00").innerHTML = "Image";
  document.getElementById("next01").innerHTML = "Link";
  document.getElementById("player1Title").innerHTML = "IMAGE";
  document.getElementById("iEndSows").innerHTML = "this is all (>_<).";
  document.getElementById("next10").innerHTML = "Audio";
  document.getElementById("next11").innerHTML = "Video";
  document.getElementById("player2Title").innerHTML = "AUDIO";
  document.getElementById("aEndSows").innerHTML = "this is all (>_<).";
  document.getElementById("next20").innerHTML = "Doctypes";
  document.getElementById("next21").innerHTML = "Image";
  document.getElementById("player3Title").innerHTML = "DOCTYPES";
  document.getElementById("dEndSows").innerHTML = "this is all (>_<).";
  document.getElementById("next30").innerHTML = "Link";
  document.getElementById("next31").innerHTML = "Audio";
  document.getElementById("player4Title").innerHTML = "LINK";
  document.getElementById("embedLink").innerHTML = "No link is written (>_<).";
  document.getElementById("next40").innerHTML = "Video";
  document.getElementById("next41").innerHTML = "Doctypes";
  document.getElementById("service1Lang").innerHTML = "Contact us:";
  document.getElementById("subService10Lang").innerHTML = "Send only screenshots, gifs or videos from the page.";
  document.getElementById("subService11Lang").innerHTML = "And before taking photos or record video, remove uploaded from the players.";
  document.getElementById("subText0Lang").innerHTML = "FREE PAGE BY: MNTS";
  document.getElementById("pageNameLang").innerHTML = "Display name of page:";
  document.getElementById("pageTitleLang").innerHTML = "Title of page:";
  document.getElementById("pagePackageLang").innerHTML = "Page package name:";
  document.getElementById("packLinkLang").innerHTML = "Page package link:";
  document.getElementById("uidLang").innerHTML = "Page visit UID:";
  document.getElementById("lastTimeLang").innerHTML = "Last page visit:";
  document.getElementById("versionLang").innerHTML = "Page version:";
  document.getElementById("updatedateLang").innerHTML = "Updated in:";
  document.getElementById("pageAuthorsLang").innerHTML = "Authors:";
  document.getElementById("checkcookiesLang").innerHTML = "Cookies:";
  document.getElementById("pageLicenseLang").innerHTML = "License:";
  document.getElementById("interRessLang").innerHTML = "Internal resources:";
  document.getElementById("exterRessLang").innerHTML = "External resources:";
  document.getElementById("exterLinkLang").innerHTML = "External links:";
  document.getElementById("subVLang").value = "Upload Videos";
  document.getElementById("subILang").value = "Upload Images";
  document.getElementById("subALang").value = "Upload Audios";
  document.getElementById("subDLang").value = "Upload Doctypes";
  document.getElementById("inputsubmitlink").value = "Сonfirm";
  document.getElementById("wlLang").innerHTML = "Write the link here:";
  document.getElementById("confirmStarlLang").innerHTML = "Сonfirm";
  document.getElementById("removeDefLang0").innerHTML = "Remove Default Language";
  document.getElementById("removeDefLang1").innerHTML = "Remove Default Language";
  document.getElementById("confirmStarlLang").style.display = "block";
  document.getElementById("removeDefLang0").style.display = "block";
  document.getElementById("installButton").innerHTML = "Install ''Storage Player''";
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
  document.getElementById("installButton").classList.remove("other-direction");
  
// text-aligns
  document.getElementById("infobtn").style.textAlign = "left";
  document.getElementById("loadtxt").style.textAlign = "left";
  document.getElementById("modalcontentaut").classList.remove("other-align");
  document.getElementById("subService10Lang").classList.remove("other-align");
  document.getElementById("subService11Lang").classList.remove("other-align");

  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("dblLangToClose").innerHTML = "Double press on anywhere for close";
  }else{
    document.getElementById("dblLangToClose").innerHTML = "Double click on anywhere for close";
  };
  if(localStorage.getItem("theme") == "dark"){
    document.getElementById("tmText").innerHTML = "Dark";
  }else
  if(localStorage.getItem("theme") == "light"){
    document.getElementById("tmText").innerHTML = "Bright";
  };
  if(localStorage.getItem("automodal") === "false") {
    document.getElementById("amText").innerHTML = "OFF";
  } else {
    document.getElementById("amText").innerHTML = "ON";
  };
  if (localStorage.getItem("yesanimation") === "true") {
    document.getElementById("kaText").innerHTML = "ON";
  }else{
    document.getElementById("kaText").innerHTML = "OFF";
  }
  loadTitle();
  infoLoader();
  checkBrowserCodeName();
}