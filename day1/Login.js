var b_login = document.getElementById("btn_login");
var b_getAll = document.getElementById("btn_getAll");
var b_getCookie = document.getElementById("btn_getCookie");
var b_deleteCookie = document.getElementById("btn_deleteCookie");
var input_name = document.getElementById("Name");
var input_password = document.getElementById("pass");
var input_Key = document.getElementById("key");

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

function getAllCookies() {
  return document.cookie.split(";");
}

function getCookie(key) {
  var arr = getAllCookies();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].split("=")[0].trim() == key) {
      return arr[i];
    }
  }
}
//setCookie("phone", "01550731214");

b_login.addEventListener("click", function () {
  setCookie("Name", input_name.value);
  setCookie("Password", input_password.value);
});

b_deleteCookie.addEventListener("click", function () {
  deleteCookie(input_Key.value);
});

b_getAll.addEventListener("click", function () {
  console.log(getAllCookies());
});

b_getCookie.addEventListener("click", function () {
  console.log(getCookie(input_Key.value));
});
