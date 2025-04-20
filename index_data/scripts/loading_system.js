let widthcont = 0;
let errorscont = 0;

const jss = ".js";

const jsLoc = "index_data/scripts/";

const scriptsList = [// 67 (68)
  "devices_provider","load_page_title","load_page_icons","player_video_create","player_image_create","player_image_check","player_audio_create","player_documents_create","player_documents_check","player_url_load",
  "player_url_reload","player_url_startload","page_reload","page_close","modal_instructions_close","modal_instructions_open","modal_instructions_open_in_menu","modal_instructions_check","modal_instructions_checked",
  "modal_sharing","plugin_one_use_mode","plugin_one_use_mode_true","plugin_one_use_mode_false","plugin_one_use_mode_off","header_sticking","header_sticking_local_remove","navigator_battery","clock_and_calendar","players",
  "players_quick","images_preview","images_preview_close","documents_preview","documents_preview_close","menu","menu_btn_anim","to_top","external_links_provider","plugin_eye_protector",
  "plugin_eye_protector_off","navigator_online","notes_manual_close","transition_check","transition_load_check","transition","scroll","theme_scheme_detect","theme_change_manual","theme_load_check",
  "sharing_en","sharing_ru","sharing_he","languages","language_english","language_hebrew","language_russian","keys_press","keys_mouse_down","keys_down",
  "install","install_launch","open_themes_drow","drows_close","theme_default","theme_plugin_hoyolab","theme_loader","starter"
];

function systemAssetsLoader() {
  for(var a = 0; a < scriptsList.length; a++) {
    const assetscript = document.createElement('script');
    assetscript.src = jsLoc + scriptsList[a] + jss;
    assetscript.addEventListener("load", function() {
      document.getElementById('loadBar').style.width = widthcont++ + "px";
      document.getElementById("loadNumber").innerHTML = widthcont;
      toDisplayNone();
    });
    assetscript.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("errorLogs").innerHTML += "Cant load " + errorscont + " assets, not found or removed...";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("errorLogs").innerHTML += "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("errorLogs").innerHTML += "אין אפשרות לטעון" + errorscont + " משאבים, לא נמצאו או נמחקו...";
      }
    });
    document.body.appendChild(assetscript);
  }
}
systemAssetsLoader();
function toDisplayNone() {
  setTimeout(function() {
    if(document.getElementById('loadBar').style.width === "70px") {
      document.getElementById("loadingContinue").style.display = "block";
      document.getElementById("loadingAnimation").style.display = "none";
    }
  },1500);
}
function continueAfterLoad() {
  document.getElementById("loadContiner").style.backgroundColor = "var(--transparent)";
  document.getElementById("loadContiner").style.backdropFilter = "blur(0px)";
  document.getElementById("loadContiner").style.opacity = "0";
  setTimeout(function(){
    document.getElementById("loadContiner").style.display = "none";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("baseSpace").style.opacity = "1";
    document.getElementById("footer").style.opacity = "1";
    document.getElementById("myNavigator").style.opacity = "1";
  },200);
}