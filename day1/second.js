var cont = document.getElementById("d");
var gender_img = document.createElement("img");
var text_color = getCookie("Color").split("=")[1];
var gender = getCookie("Gender").split("=")[1];
var name = getCookie("Name").split("=")[1];
var count = getCookie("Counter").split("=")[1];
count = parseInt(count) + 1;

var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7);
setCookie("Counter", count);
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

function setCookie(key, value) {
  document.cookie = key + "=" + value + ";expires=" + expireDate;
}

if (gender == "Male") gender_img.setAttribute("src", "male.jpg");
else {
  gender_img.setAttribute("src", "femal.jpg");
}
cont.appendChild(gender_img);

var s = document.createElement("span");
s.textContent = "Welcome "; //   + count + " times :)";
var txt_name = document.createElement("span");
txt_name.innerHTML = name;
txt_name.style.color = text_color;
s.append(txt_name);
s.append(" you Have visited the site ");
txt_count = document.createElement("span");
txt_count.innerHTML = count;
txt_count.style.color = text_color;
s.append(txt_count);
s.append(" times:");
cont.appendChild(s);
