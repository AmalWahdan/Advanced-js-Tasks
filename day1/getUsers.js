var getAll = document.getElementById("btn_getAll");
var xhr;
var row;
getAll.addEventListener("click", function () {
  get_Json();
  console.log("inside");
});
function get_Json() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var arr = JSON.parse(xhr.response);
        for (var i = 0; i < arr.length; i++) {
          row = table.insertRow(table.rows.length);
          row.insertCell(0).innerHTML = arr[i].id;
          row.insertCell(1).innerHTML = arr[i].name;
          row.insertCell(2).innerHTML = arr[i].username;
          row.insertCell(3).innerHTML = arr[i].email;
        }
      }
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send("");
}
