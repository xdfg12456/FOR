let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

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