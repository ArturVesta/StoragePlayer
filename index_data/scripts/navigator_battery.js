navigator.getBattery().then(function (battery) {
  function showAllBatteryInfo() {
    editChargeInfo();
    editLevelInfo();
  }
  showAllBatteryInfo();
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  function editChargeInfo() {
    var idkbttry = document.getElementById('isbatterycharging');
    var isBatteryCharging = (battery.charging ? "⨭" : "⨴️");
    idkbttry.innerText = isBatteryCharging;
    if (idkbttry.innerHTML === "⨴️") {
      idkbttry.style.color = "var(--subcolor)";
      document.getElementById("isinprogbattery").style.backgroundColor = "var(--subcolor)";
    } else {
      idkbttry.style.color = "var(--interact-color)";
      document.getElementById("isinprogbattery").style.backgroundColor = "var(--interact-color)";
    }
  };
  battery.addEventListener('levelchange', function () {
  editLevelInfo();
  });
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  battery.addEventListener('levelchange', function () {
    editLevelInfo();
  });
  function editLevelInfo() {
    var batteryLevel = battery.level * 100;
    document.getElementById('batterypercentage').innerText = batteryLevel + "%";
    document.getElementById("isinprogbattery").style.height = document.getElementById('batterypercentage').innerHTML;
    if (batteryLevel < 20) {
      document.getElementById('batterypercentage').style.color = "var(--import-error)";
      document.getElementById("isinprogbattery").style.backgroundColor = "var(--import-error)";
    }else{
      document.getElementById('batterypercentage').style.color = "var(--color)";
    }
  };
});