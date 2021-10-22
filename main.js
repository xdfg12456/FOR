let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let ordercart = document.querySelector(".bx-cart");
let good = document.querySelectorAll(".good");
let order = document.querySelector(".order");
let home_content = document.querySelector(".home_content");
let orderimg = document.querySelector(".orderimg");
let ordername = document.querySelector(".ordername");
let order_ready = document.querySelector(".order_ready");
let orderlist = document.querySelector(".orderlist");
let orderbtn = document.querySelector(".orderbtn");
let inputnum = document.querySelector(".num");
let goodprice = document.querySelector(".price");
let imgsrc = ["brade.png", "burge.png", "chinese nodle.png", "Dumpling.png"
    , "fire.png", "japan rice.png", "koera rice.png", "lame.png"]
let orderpeice = [];
let ordernames = ["麵包", "漢堡", "螺獅粉", "水餃", "火鍋", "丼飯", "石鍋拌飯", "拉麵"];
let goodprices = [50, 130, 100, 80, 120, 150, 140, 190];
let ordernum = 1;
let currentgood;
window.onload = function () {
    setTimeout(() => {
        for (var i = 0; i < 8; i++) {
            new Image().src = imgsrc[i];
        }
    }, 1000);
}

for (var i = 0; i < good.length; i++) {
    good[i].onclick = function () {
        if (order.classList[1] != "active")
            order.classList.toggle("active");
        currentgood = this.getAttribute("value");
        goodprice.textContent = "$:" + goodprices[currentgood];
        orderimg.src = imgsrc[currentgood];
        ordername.innerHTML = ordernames[currentgood];
    }
}

function addGoodInOrder() {
    if (inputnum.value != 0) {
        ordernum += 1;
        let temp = orderlist.insertRow(ordernum);
        temp.innerHTML = "<td>" + ordernames[currentgood] + "</td>" + "<td>" + inputnum.value + "</td>" + "<td>" + inputnum.value * goodprices[currentgood] + "</td>";
        order.classList.toggle("active");
        inputnum.value = 0;
    }
}

document.addEventListener("click", clickhidden);

function clickhidden(event) {
    if (event.target.classList[0] != "order" && event.target.classList[0] != "goodname" && event.target.classList[0] != "price"
        && event.target.classList[0] != "orderbtn" && event.target.classList[0] != "orderimg" && event.target.classList[0] != "num"
        && event.target.classList[0] != "ordername" && order.classList[1] == "active")
        order.classList.toggle("active");

    if (order_ready.classList[1] == "active")
        if ((event.target.classList[0] == "bx" && event.target.classList[1] != "bx-cart") || event.target.classList[0] == "home_content" || event.target.classList[0] == "goodname"
            || event.target.classList[0] == "sidebar")
            order_ready.classList.toggle("active");
}

btn.onclick = function () {
    sidebar.classList.toggle("active");
}

ordercart.onclick = function () {
    order_ready.classList.toggle("active");
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