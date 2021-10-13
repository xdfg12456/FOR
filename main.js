let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let good = document.querySelectorAll(".good");
let order = document.querySelector(".order");
let home_content = document.querySelector(".home_content");
let orderimg = document.querySelector(".orderimg");
let imgsrc = ["brade.png", "burge.png", "chinese nodle.png", "Dumpling.png"
    , "fire.png", "japan rice.png", "koera rice.png", "lame.png"]

window.onload = function () {
    order.style.display = "none";
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
    }
}

document.addEventListener("click", clickhidden);

function clickhidden(event) {
    if (event.target.classList[0] != "order" && event.target.classList[0] != "goodname" && event.target.classList[0] != "price" && event.target.classList[0] != "orderbtn" && event.target.classList[0] != "orderimg" && event.target.classList[0] != "num") {
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

function SubmitFormData() {
    var user = $("#user").val();
    var pass = $("#pass").val();
    $.post("logprocess.php", { user: user, pass: pass },
        function (data) {
            $('#results').html(data);
            $('#myForm')[0].reset();
        });
}