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
let totalprice = document.querySelector(".goodtotalprice");
let goodprice = document.querySelector(".price");
let tr = document.querySelectorAll("tr")
let imgsrc = ["brade.png", "burge.png", "chinese nodle.png", "Dumpling.png"
    , "fire.png", "japan rice.png", "koera rice.png", "lame.png"]
let orderpeice = [];
let ordernames = ["麵包", "漢堡", "螺獅粉", "水餃", "火鍋", "丼飯", "石鍋拌飯", "拉麵"];
let goodprices = [50, 130, 100, 80, 120, 150, 140, 190];
let ordernum = 1;
let currentgood;
let currentmoney = 0;
window.onload = function () {
    totalprice.innerHTML = currentmoney;
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



function updataValue(event) {
    if (event.target.value == 0) {
        let del = confirm("是否取消項目");
        if (del) {
            currentmoney -= parseInt(event.target.parentElement.nextElementSibling.innerHTML);
            totalprice.innerHTML = currentmoney;
            let row = event.target.parentElement.parentElement.rowIndex;
            orderlist.deleteRow(row);
            ordernum -= 1;
            return;
        }
        else
            event.target.value = 1;
    }
    currentmoney -= parseInt(event.target.parentElement.nextElementSibling.innerHTML);
    event.target.parentElement.nextElementSibling.innerHTML = event.target.value * goodprices[ordernames.indexOf(event.target.parentElement.previousElementSibling.innerHTML)];
    currentmoney += parseInt(event.target.parentElement.nextElementSibling.innerHTML);
    totalprice.innerHTML = currentmoney;
}

function addGoodInOrder() {
    tr = document.querySelectorAll("tr");
    if (inputnum.value != 0) {
        let tr_i = findsame();
        if (tr_i != -1) {
            tr[tr_i].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value = parseInt(tr[tr_i].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value) + parseInt(inputnum.value);
            tr[tr_i].getElementsByTagName("td")[2].innerHTML = parseInt(tr[tr_i].getElementsByTagName("td")[2].innerHTML) + inputnum.value * goodprices[currentgood];
            currentmoney += inputnum.value * goodprices[currentgood];
            order.classList.toggle("active");
            inputnum.value = 0;
        } else {
            ordernum += 1;
            let temp = orderlist.insertRow(ordernum);
            temp.innerHTML = `<td>${ordernames[currentgood]}</td>` + `<td><input type="number" class="goodnum" value="${inputnum.value}"></td>` + `<td>${inputnum.value * goodprices[currentgood]}</td>`;
            order.classList.toggle("active");
            currentmoney += inputnum.value * goodprices[currentgood];
            inputnum.value = 0;
        }
    }
}

function findsame() {
    for (let i = 2; i < tr.length - 1; i++) {
        if (tr[i].getElementsByTagName("td")[0].innerHTML == ordernames[currentgood]) {
            return i;
        }
    }
    return -1;
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
    let goodnum = document.querySelectorAll(".goodnum");
    for (var i = 0; i < goodnum.length; i++) {
        goodnum[i].addEventListener("change", updataValue);
    }
    totalprice.innerHTML = currentmoney;
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