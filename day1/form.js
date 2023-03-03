var btn = document.getElementById("btn_login");
var input_name = document.getElementById("Name");
var input_radio = document.getElementsByName("gender");
var input_color = document.getElementById("ColorInput");
var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7);
var expired = new Date();
expired.setDate(expired.getDate() - 8);

function setCookie(key, value) {
  document.cookie = key + "=" + value + ";expires=" + expireDate;
}
function deleteCookie(key) {
  document.cookie = key + "=hi;expires=" + expired;
}

deleteCookie("Counter");
btn.addEventListener("click", function () {
  setCookie("Name", input_name.value);
  setCookie("Color", input_color.value);
  if (input_radio[0].checked) {
    setCookie("Gender", input_radio[0].value);
  } else {
    setCookie("Gender", input_radio[1].value);
  }
  open("second.html");
});
setCookie("Counter", "0");

/*
function hasCookie(key) {
  var arr = getAllCookies();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].split("=")[0].trim() == key) {
      return true;
    }
  }
  return false;
}*/
