var GHPATH = '/StoragePlayer';
var APP_PREFIX = 'gppwa_';
var VERSION = '5.3.9-final';
var URLS = [
  `${GHPATH}/`,

  `${GHPATH}/index.html`,
  `${GHPATH}/manifest.webmanifest`,
  `${GHPATH}/no_linked.txt`,

  `${GHPATH}/index_data`,

  `${GHPATH}/index_data/scripts`,
  `${GHPATH}/index_data/scripts/clock_and_calendar.js`,
  `${GHPATH}/index_data/scripts/devices_provider.js`,
  `${GHPATH}/index_data/scripts/documents_preview.js`,
  `${GHPATH}/index_data/scripts/documents_preview_close.js`,
  `${GHPATH}/index_data/scripts/drows_close.js`,
  `${GHPATH}/index_data/scripts/external_links_provider.js`,
  `${GHPATH}/index_data/scripts/header_sticking.js`,
  `${GHPATH}/index_data/scripts/header_sticking_local_remove.js`,
  `${GHPATH}/index_data/scripts/images_preview.js`,
  `${GHPATH}/index_data/scripts/images_preview_close.js`,
  `${GHPATH}/index_data/scripts/install.js`,
  `${GHPATH}/index_data/scripts/install_launch.js`,
  `${GHPATH}/index_data/scripts/keys_down.js`,
  `${GHPATH}/index_data/scripts/keys_mouse_down.js`,
  `${GHPATH}/index_data/scripts/keys_press.js`,
  `${GHPATH}/index_data/scripts/language_english.js`,
  `${GHPATH}/index_data/scripts/language_hebrew.js`,
  `${GHPATH}/index_data/scripts/language_russian.js`,
  `${GHPATH}/index_data/scripts/languages.js`,
  `${GHPATH}/index_data/scripts/load_page_icons.js`,
  `${GHPATH}/index_data/scripts/load_page_title.js`,
  `${GHPATH}/index_data/scripts/loading_system.js`,
  `${GHPATH}/index_data/scripts/menu.js`,
  `${GHPATH}/index_data/scripts/menu_btn_anim.js`,
  `${GHPATH}/index_data/scripts/modal_instructions_check.js`,
  `${GHPATH}/index_data/scripts/modal_instructions_checked.js`,
  `${GHPATH}/index_data/scripts/modal_instructions_close.js`,
  `${GHPATH}/index_data/scripts/modal_instructions_open.js`,
  `${GHPATH}/index_data/scripts/modal_instructions_open_in_menu.js`,
  `${GHPATH}/index_data/scripts/modal_sharing.js`,
  `${GHPATH}/index_data/scripts/navigator_battery.js`,
  `${GHPATH}/index_data/scripts/navigator_online.js`,
  `${GHPATH}/index_data/scripts/notes_manual_close.js`,
  `${GHPATH}/index_data/scripts/open_themes_drow.js`,
  `${GHPATH}/index_data/scripts/page_close.js`,
  `${GHPATH}/index_data/scripts/page_reload.js`,
  `${GHPATH}/index_data/scripts/player_audio_create.js`,
  `${GHPATH}/index_data/scripts/player_documents_check.js`,
  `${GHPATH}/index_data/scripts/player_documents_create.js`,
  `${GHPATH}/index_data/scripts/player_image_check.js`,
  `${GHPATH}/index_data/scripts/player_image_create.js`,
  `${GHPATH}/index_data/scripts/player_url_finload.js`,
  `${GHPATH}/index_data/scripts/player_url_load.js`,
  `${GHPATH}/index_data/scripts/player_url_reload.js`,
  `${GHPATH}/index_data/scripts/player_url_startload.js`,
  `${GHPATH}/index_data/scripts/player_video_create.js`,
  `${GHPATH}/index_data/scripts/players.js`,
  `${GHPATH}/index_data/scripts/players_quick.js`,
  `${GHPATH}/index_data/scripts/plugin_eye_protector.js`,
  `${GHPATH}/index_data/scripts/plugin_eye_protector_off.js`,
  `${GHPATH}/index_data/scripts/plugin_one_use_mode.js`,
  `${GHPATH}/index_data/scripts/plugin_one_use_mode_false.js`,
  `${GHPATH}/index_data/scripts/plugin_one_use_mode_off.js`,
  `${GHPATH}/index_data/scripts/plugin_one_use_mode_true.js`,
  `${GHPATH}/index_data/scripts/scroll.js`,
  `${GHPATH}/index_data/scripts/sharing_en.js`,
  `${GHPATH}/index_data/scripts/sharing_he.js`,
  `${GHPATH}/index_data/scripts/sharing_ru.js`,
  `${GHPATH}/index_data/scripts/starter.js`,
  `${GHPATH}/index_data/scripts/theme_change_manual.js`,
  `${GHPATH}/index_data/scripts/theme_default.js`,
  `${GHPATH}/index_data/scripts/theme_load_check.js`,
  `${GHPATH}/index_data/scripts/theme_loader.js`,
  `${GHPATH}/index_data/scripts/theme_plugin_hoyolab.js`,
  `${GHPATH}/index_data/scripts/theme_scheme_detect.js`,
  `${GHPATH}/index_data/scripts/to_top.js`,
  `${GHPATH}/index_data/scripts/transition.js`,
  `${GHPATH}/index_data/scripts/transition_check.js`,
  `${GHPATH}/index_data/scripts/transition_load_check.js`,

  `${GHPATH}/index_data/textures`,
  `${GHPATH}/index_data/textures/icon_dark.png`,
  `${GHPATH}/index_data/textures/icon_light.png`,

  `${GHPATH}/index_data/textures/english`,
  `${GHPATH}/index_data/textures/english/en1.png`,
  `${GHPATH}/index_data/textures/english/en2.png`,
  `${GHPATH}/index_data/textures/english/en3.png`,
  `${GHPATH}/index_data/textures/english/en4.png`,

  `${GHPATH}/index_data/textures/hebrew`,
  `${GHPATH}/index_data/textures/hebrew/he1.png`,
  `${GHPATH}/index_data/textures/hebrew/he2.png`,
  `${GHPATH}/index_data/textures/hebrew/he3.png`,
  `${GHPATH}/index_data/textures/hebrew/he4.png`,

  `${GHPATH}/index_data/textures/russian`,
  `${GHPATH}/index_data/textures/russian/ru1.png`,
  `${GHPATH}/index_data/textures/russian/ru2.png`,
  `${GHPATH}/index_data/textures/russian/ru3.png`,
  `${GHPATH}/index_data/textures/russian/ru4.png`,

  `${GHPATH}/index_data/themes/default`,

  `${GHPATH}/index_data/themes/default/animations.css`,
  `${GHPATH}/index_data/themes/default/roots.css`,
  `${GHPATH}/index_data/themes/default/styles.css`,
  `${GHPATH}/index_data/themes/default/styles_max_500.css`,

  `${GHPATH}/index_data/themes/hoyolab`,

  `${GHPATH}/index_data/themes/hoyolab/animations.css`,
  `${GHPATH}/index_data/themes/hoyolab/roots.css`,
  `${GHPATH}/index_data/themes/hoyolab/styles.css`,
  `${GHPATH}/index_data/themes/hoyolab/styles_max_500.css`,
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(URLS))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cached response
        }
        return fetch(event.request); // Fetch from network
      })
  );
});