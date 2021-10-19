let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let good = document.querySelectorAll(".good");
let order = document.querySelector(".order");
let home_content = document.querySelector(".home_content");
let orderimg = document.querySelector(".orderimg");
let ordername = document.querySelector(".ordername");
let imgsrc = ["brade.png", "burge.png", "chinese nodle.png", "Dumpling.png"
    , "fire.png", "japan rice.png", "koera rice.png", "lame.png"]
let orderpeice = [];
let ordernames = ["麵包", "漢堡", "螺獅粉", "水餃", "火鍋", "丼飯", "石鍋拌飯", "拉麵"];

window.onload = function () {
    order.style.display = "none";
    setTimeout(() => {
        for (var i = 0; i < 8; i++) {
            new Image().src = imgsrc[i];
        }
    }, 1000);
}

for (var i = 0; i < good.length; i++) {
    good[i].onclick = function () {
        if (order.style.display == "none") {
            order.style.display = "block";
            setTimeout(() => {
                order.style.opacity = 1;
            }, 14);
        }
        orderimg.src = imgsrc[this.getAttribute("value")];
        ordername.innerHTML = ordernames[this.getAttribute("value")];
    }
}

document.addEventListener("click", clickhidden);

function clickhidden(event) {
    console.log(event.target.classList[0]);
    if (event.target.classList[0] != "order" && event.target.classList[0] != "goodname" && event.target.classList[0] != "price"
        && event.target.classList[0] != "orderbtn" && event.target.classList[0] != "orderimg" && event.target.classList[0] != "num"
        && event.target.classList[0] != "ordername") {
        order.style.opacity = 0;
        setTimeout(() => {
            order.style.display = "none";
        }, 300);
    }
}

btn.onclick = function () {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function () {
    if (!sidebar.classList.contains("active"))
        sidebar.classList.toggle("active");
}

function newaccount() {
    window.location.href = 'sign.html';
}

function jumplog() {
    window.location.href = 'log.html';
}

function SubmitFormData() {
    var user = $("#user").val();
    var pass = $("#pass").val();
    $.post("logprocess.php", { user: user, pass: pass },
        function (data) {
            $('#results').html(data);
            $('#myForm')[0].reset();
        });
}