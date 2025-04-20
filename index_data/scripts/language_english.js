function englishLanguage() {
  document.documentElement.setAttribute('lang', 'en-us');
  localStorage.setItem("lang", "en");

  document.getElementById("langSelected").innerHTML = "Language: " + enLang.innerHTML;

  document.title = "Storage Player";
  document.getElementById("loadNumber").innerHTML = "Preparing to load...";
  document.getElementById("loadtxt").innerHTML = "Free page by: MNTS<br>&#169; GFG All the content of this webpage belongs to creators, All rights reserved. Not distributed!";
  document.getElementById("videoOpen").innerHTML = "Video";
  document.getElementById("imageOpen").innerHTML = "Image";
  document.getElementById("audioOpen").innerHTML = "Audio";
  document.getElementById("docsOpen").innerHTML = "Doctypes";
  document.getElementById("linkOpen").innerHTML = "Link";
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
  document.getElementById("subTextLang").innerHTML = "FREE PAGE BY: MNTS<br>&#169; GFG All the content of this webpage belongs to creators, All rights reserved. Not distributed!";
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
  document.getElementById("next32").innerHTML = "Video";
  document.getElementById("next02").innerHTML = "Doctypes";
  document.getElementById("subText0Lang").innerHTML = "FREE PAGE BY: MNTS<br>&#169; GFG All the content of this webpage belongs to creators, All rights reserved. Not distributed!";
  document.getElementById("subVLang").value = "Upload Videos";
  document.getElementById("subILang").value = "Upload Images";
  document.getElementById("subALang").value = "Upload Audios";
  document.getElementById("subDLang").value = "Upload Doctypes";
  document.getElementById("inputsubmitlink").value = "Сonfirm";
  document.getElementById("wlLang").innerHTML = "Write the link here:";
  document.getElementById("confirmStarlLang").innerHTML = "Сonfirm";
  document.getElementById("installButton").innerHTML = "Install ''Storage Player''";
  document.getElementById("defLang").innerHTML = "Default Theme";
  document.getElementById("adminToolsLang").innerHTML = "Developments";
  document.getElementById("loadingContinue").innerHTML = "Continue";

  document.getElementById("confirmStarlLang").style.display = "block";
// directions
  document.getElementById("subTextLang").style.direction = "ltr";
  document.getElementById("subText0Lang").style.direction = "ltr";
  document.getElementById("wlLang").style.direction = "ltr";
  document.getElementById("modalcontentaut").classList.remove("other-direction");
  document.getElementById("msgtext").classList.remove("other-direction");
  document.getElementById("installButton").classList.remove("other-direction");
  
// text-aligns
  document.getElementById("loadtxt").style.textAlign = "left";
  document.getElementById("modalcontentaut").classList.remove("other-align");

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
  checkBrowserCodeName();
}