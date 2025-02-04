function hebrewLanguage() {
  document.documentElement.setAttribute('lang', 'he-il');
  localStorage.setItem("lang", "he");

  document.getElementById("langSelected").innerHTML = "שפה: " + heLang.innerHTML;

  document.title = "נגן אחסון";
  document.getElementById("loadNumber").innerHTML = "מתכונן לטעינה...";
  document.getElementById("loadtxt").innerHTML = "MNTS :עמוד חינם מאת";
  document.getElementById("quickinfoLang").innerHTML = "מידע מלא על העמוד.";
  document.getElementById("videoOpen").innerHTML = "סרטונים";
  document.getElementById("imageOpen").innerHTML = "תמונות";
  document.getElementById("audioOpen").innerHTML = "שמע";
  document.getElementById("docsOpen").innerHTML = "דוקטייפים";
  document.getElementById("linkOpen").innerHTML = "קישור";
  document.getElementById("pdfsOpen").innerHTML = "Pdfs";
  document.getElementById("settingsLang").innerHTML = "הגדרות";
  document.getElementById("protectLang").innerHTML = "הגנה";
  document.getElementById("setoneusetrue").innerHTML = "הגדר מצב 'שימוש אחד'";
  document.getElementById("animationLang").innerHTML = "אנימציות:";
  document.getElementById("themeLang").innerHTML = "נושא:";
  document.getElementById("asmLang").innerHTML = "הפעלת הוראות אוטומטית:";
  document.getElementById("amoLang").innerHTML = "> פתח את חלון ההוראות <";
  document.getElementById("moreLang").innerHTML = "יותר";
  document.getElementById("sharing").innerHTML = "שיתוף <emoji>🔗</emoji>";
  document.getElementById("reloadLang").innerHTML = "לרענן";
  document.getElementById("closeLang").innerHTML = "סגירה";
  document.getElementById("descriptLang").innerHTML = "תיאור:";
  document.getElementById("descript0Lang").innerHTML = "חקור את הקבצים במכשיר שלך והפעל אותם";
  document.getElementById("descript1Lang").innerHTML = "[כל הקבצים שהועלו לדף זה גלויים רק לך.";
  document.getElementById("descript2Lang").innerHTML = "כל הקבצים יוסרו לאחר טעינת העמוד מחדש].";
  document.getElementById("descript3Lang").innerHTML = "כמו כן, אנשים אחרים אינם רשאים לגשת לקבצים שלך מכיוון שהדף מאוחסן במכשיר שלך כקובץ .html רגיל; לדוגמה, 'קובץ.<a class='a' href='https://en.m.wikipedia.org/wiki/File_format' target='_blank'>פורמט</a>'.";
  document.getElementById("aboutLang").innerHTML = "על העמוד:";
  document.getElementById("about0Lang").innerHTML = "מההתחלה, הדף הזה נוצר עבור נגן וידאו כי נגן הוידאו של המערכת לא היה נוח, ואז הרעיון היה ליצור אחד עבור תמונות ואודיו אם נגני המערכת לא היו נוחים.";
  document.getElementById("recomLang").innerHTML = "המלצות:";
  document.getElementById("recom0Lang").innerHTML = "הורד '<a class='a' href='https://play.google.com/store/apps/details?id=rk.android.app.shortcutmaker'>יוצר קיצורים</a>' מGoogle Play, ליצירת קיצור דרך במפעיל.";
  document.getElementById("tipsLang").innerHTML = "טיפים:";
  document.getElementById("tips0Lang").innerHTML = "לחץ על תמונה שהועלתה כדי לפתוח את התצוגה המקדימה של התמונה שנלחצה.";
  document.getElementById("tips1Lang").innerHTML = "אם תשנה את גופן המכשיר, טקסט העמוד ישתנה לגופן התצוגה של המכשיר שלך.";
  document.getElementById("wawrsLang").innerHTML = "אזהרות ובעיות:";
  document.getElementById("wawrs0Lang").innerHTML = "מכשירים חלשים יאחרו.";
  document.getElementById("wawrs1Lang").innerHTML = "ייתכן שתרגומי שפות לא יהיו מדויקים ב-100%.";
  document.getElementById("wawrs2Lang").innerHTML = "אם נעשה שימוש ב'מצב שימוש אחד', כפתור 'סגור' לא יוכל לסגור את העמוד.";
  document.getElementById("wawrs3Lang").innerHTML = "אין דרך לתקן את זה:";
  document.getElementById("wawrs4Lang").innerHTML = "אין תמיכה בקבצים: <a>.heic(תמונה ממצלמת Xiaomi, אם ההגדרה מופעלת)</a>, <a>.heif(ערוך '.heic/.heif' תמונה מאת עורך MI)</a>.";
  document.getElementById("service0Lang").innerHTML = "צורו איתנו קשר:";
  document.getElementById("subService00Lang").innerHTML = "שלחו רק צילומי מסך, גיפים או סרטונים מהעמוד.";
  document.getElementById("subService01Lang").innerHTML = "ולפני צילום תמונות או הקלטת וידאו, הסר העלאות מהשחקנים.";
  document.getElementById("subTextLang").innerHTML = "עמוד חינם מאת: MNTS";
  document.getElementById("share0Lang").innerHTML = "בחר את השפה שבה אתה רוצה לשתף.";
  document.getElementById("shareEnLang").innerHTML = "אנגלית";
  document.getElementById("shareHeLang").innerHTML = "עברית";
  document.getElementById("shareRuLang").innerHTML = "רוסית";
  document.getElementById("instructionLang").innerHTML = "הוראות";
  document.getElementById("instruction0Lang").innerHTML = "מעבר מהיר בין ערכת נושא כהה ובהיר.";
  document.getElementById("instruction1Lang").innerHTML = "מעבר בין נגנים.";
  document.getElementById("instruction2Lang").innerHTML = "מעבר מהיר בין נגנים.";
  document.getElementById("instruction3Lang").innerHTML = "מעבר מהיר בין ערכת נושא כהה ובהיר.";
  document.getElementById("instruction4Lang").innerHTML = "מעבר בין נגנים.";
  document.getElementById("instruction5Lang").innerHTML = "כפתור להשבתת הגנה [";
  document.getElementById("autoRight").innerHTML = "הגדר את הדף למצב שימוש אחד [משבית את החזרות על הדף אחרי רענון של העמוד].";
  document.getElementById("autoLeft").innerHTML = "מסיר את המצב של שימוש אחד ומחזיר את הדף אחרי רענון.";
  document.getElementById("functionLang").innerHTML = "פונקציות";
  document.getElementById("function0Icon").innerHTML = "סמל פונקציה:";
  document.getElementById("function0Name").innerHTML = "שם הפונקציה: <a>לראש</a>.";
  document.getElementById("function0Descript").innerHTML = "תיאור: <a>כאשר תגללו למקום כלשהו בעמוד, הסמל יוצג בסרגל, אם תלחץ על הסמל זה יוביל אותך לראש העמוד</a>.";
  document.getElementById("function1Icon").innerHTML = "סמל פונקציה: &#x1F6E1;.";
  document.getElementById("function1Name").innerHTML = "שם הפונקציה: <a>הגנת קבצים המוצגים</a>.";
  document.getElementById("function1Descript").innerHTML = "תיאור: <a>הגן על המוצג מעיניים אחרות באמצעות טשטוש הנגן, לחץ פעמיים על הסמל כדי לכבות אותו</a>.";
  document.getElementById("function2Icon").innerHTML = "סמל פונקציה: &#9940;.";
  document.getElementById("function2Name").innerHTML = "שם הפונקציה: <a>מצב שימוש אחד</a>.";
  document.getElementById("function2Descript").innerHTML = "תיאור: <a>אם זה מופעל, הדף לא יהיה זמין לאחר טעינה מחדש. כדי להשבית אותו, הקש על הסמל או הקש על '&#8882;' בסרגל הניווט של טלפון שלך</a>.";
  document.getElementById("playersLang").innerHTML = "נגנים";
  document.getElementById("players0Lang").innerHTML = "שם הנגן: <a>סרטונים</a>";
  document.getElementById("players0Button").innerHTML = "פורמט קובץ של סירטונים (ויקיפדיה)";
  document.getElementById("players1Lang").innerHTML = "שם הנגן: <a>תמונות</a>";
  document.getElementById("players1Button").innerHTML = "פורמט קובץ של תמונות (ויקיפדיה)";
  document.getElementById("players2Lang").innerHTML = "שם הנגן: <a>שמע</a>";
  document.getElementById("players2Button").innerHTML = "פורמט קובץ של שמע (ויקיפדיה)";
  document.getElementById("players3Lang").innerHTML = "שם הנגן: <a>דוקטייפים</a>";
  document.getElementById("players4Lang").innerHTML = "פורמטים נתמכים בנגן:";
  document.getElementById("players5Lang").innerHTML = "<a>.txt</a>, <a>.json</a>, <a>.xml</a>, <a>.dll</a>, <a>.bat</a>, <a>.log</a>, <a>.htm</a>, <a>.html</a>, <a>.pdf</a>, <a>.py</a>, <a>.js</a>, <a>.css</a>.";
  document.getElementById("players6Lang").innerHTML = "שם הנגן: <a>קישור</a>";
  document.getElementById("players7Lang").innerHTML = "דוגמה לקישור של סרטון מיוטיוב:";
  document.getElementById("players8Lang").innerHTML = "https://youtube.com/<a>embed</a>/[id של הסרטון]";
  document.getElementById("player0Title").innerHTML = "סרטון";
  document.getElementById("vEndSows").innerHTML = "זה הכל (>_<).";
  document.getElementById("next00").innerHTML = "תמונה";
  document.getElementById("next01").innerHTML = "קישור";
  document.getElementById("player1Title").innerHTML = "תמונה";
  document.getElementById("iEndSows").innerHTML = "זה הכל (>_<).";
  document.getElementById("next10").innerHTML = "שמע";
  document.getElementById("next11").innerHTML = "סרטון";
  document.getElementById("player2Title").innerHTML = "שמע";
  document.getElementById("aEndSows").innerHTML = "זה הכל (>_<).";
  document.getElementById("next20").innerHTML = "דוקטייפים";
  document.getElementById("next21").innerHTML = "תמונה";
  document.getElementById("player3Title").innerHTML = "דוקטייפים";
  document.getElementById("dEndSows").innerHTML = "זה הכל (>_<).";
  document.getElementById("next30").innerHTML = "קישור";
  document.getElementById("next31").innerHTML = "שמע";
  document.getElementById("player4Title").innerHTML = "קישור";
  document.getElementById("embedLink").innerHTML = "לא נכתב שום קישור (>_<).";
  document.getElementById("next40").innerHTML = "סרטון";
  document.getElementById("next41").innerHTML = "דוקטייפים";
  document.getElementById("service1Lang").innerHTML = ":צורו איתנו קשר";
  document.getElementById("subService10Lang").innerHTML = "שלחו רק צילומי מסך, גיפים או סרטונים מהעמוד.";
  document.getElementById("subService11Lang").innerHTML = "ולפני צילום תמונות או הקלטת וידאו, הסר העלאות מהשחקנים.";
  document.getElementById("subText0Lang").innerHTML = "עמוד חינם מאת: MNTS";
  document.getElementById("pageNameLang").innerHTML = "שם תצוגת הדף:";
  document.getElementById("pageTitleLang").innerHTML = "כותרת העמוד:";
  document.getElementById("pagePackageLang").innerHTML = "שם חבילת עמוד:";
  document.getElementById("packLinkLang").innerHTML = "קישור לחבילת עמוד:";
  document.getElementById("uidLang").innerHTML = "UID לביקור בדף:";
  document.getElementById("lastTimeLang").innerHTML = "ביקור אחרון בעמוד:";
  document.getElementById("versionLang").innerHTML = "גרסת העמוד:";
  document.getElementById("updatedateLang").innerHTML = "עודכן ב:";
  document.getElementById("pageAuthorsLang").innerHTML = "מחברים:";
  document.getElementById("checkcookiesLang").innerHTML = "עוגיות:";
  document.getElementById("pageLicenseLang").innerHTML = "רישיון:";
  document.getElementById("interRessLang").innerHTML = "משאבים פנימיים:";
  document.getElementById("exterRessLang").innerHTML = "משאבים חיצוניים:";
  document.getElementById("exterLinkLang").innerHTML = "קישורים חיצוניים:";
  document.getElementById("subVLang").value = "העלה סרטונים";
  document.getElementById("subILang").value = "העלה תמונות";
  document.getElementById("subALang").value = "העלה אודיו";
  document.getElementById("subDLang").value = "העלה דוקטייפים";
  document.getElementById("inputsubmitlink").value = "אישור";
  document.getElementById("wlLang").innerHTML = "כתוב את הקישור כאן:";
  document.getElementById("confirmStarlLang").innerHTML = "אישור";
  document.getElementById("removeDefLang0").innerHTML = "הסר שפת ברירת מחדל";
  document.getElementById("removeDefLang1").innerHTML = "הסר שפת ברירת מחדל";

  document.getElementById("confirmStarlLang").style.display = "block";
  document.getElementById("removeDefLang0").style.display = "block";
// directions
  document.getElementById("infobtn").style.direction = "rtl";
  document.getElementById("subTextLang").style.direction = "rtl";
  document.getElementById("subText0Lang").style.direction = "rtl";
  document.getElementById("quickinfoLang").style.direction = "rtl";
  document.getElementById("wlLang").style.direction = "rtl";
  document.getElementById("modalcontentaut").classList.add("other-direction");
  document.getElementById("subService10Lang").classList.add("other-direction");
  document.getElementById("subService11Lang").classList.add("other-direction");
  document.getElementById("msgtext").classList.add("other-direction");
  
// text-aligns
  document.getElementById("infobtn").style.textAlign = "right";
  document.getElementById("loadtxt").style.textAlign = "right";
  document.getElementById("modalcontentaut").classList.add("other-align");
  document.getElementById("subService10Lang").classList.add("other-align");
  document.getElementById("subService11Lang").classList.add("other-align");

  if(localStorage.getItem("theme") == "dark"){
    document.getElementById("tmText").innerHTML = "כהה";
  }else
  if(localStorage.getItem("theme") == "light"){
    document.getElementById("tmText").innerHTML = "בהיר";
  };
  if(localStorage.getItem("automodal") === "false") {
    document.getElementById("amText").innerHTML = "כבוי";
  } else {
    document.getElementById("amText").innerHTML = "דלוק";
  };
  if (localStorage.getItem("yesanimation") === "true") {
    document.getElementById("kaText").innerHTML = "דלוקות";
  }else{
    document.getElementById("kaText").innerHTML = "כבויות";
  }
  loadTitle();
  infoLoader();
  checkBrowserCodeName();
}