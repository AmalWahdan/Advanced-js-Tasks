//<button type="button" class="btn btn-dark mt-1" ;">Get All Cookie</button>
var contaner = document.getElementById("frm2");
var text = document.getElementById("par");
var user_id = document.getElementById("id");
var title = document.getElementById("title");
var body = document.getElementById("body");
var list = document.getElementById("ul1");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    creat_btn(user);
  })
  .catch((error) => {
    console.log(error);
  });

function creat_btn(user) {
  for (let i = 0; i < user.length; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.classList += "btn btn-dark m-1 ";
    btn.innerHTML = user[i].name;
    contaner.append(btn);
    btn.addEventListener("click", function () {
      get_user(i + 1);
    });
  }
}

function get_user(id) {
  fetch("https://jsonplaceholder.typicode.com/posts?id=" + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      creat_txt(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function creat_txt(data) {
  list.classList.remove("list-unstyled");
  user_id.innerHTML = data[0].id;
  title.innerHTML = data[0].title;
  body.innerHTML = data[0].body;
}
