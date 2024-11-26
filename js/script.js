document.getElementById('name').addEventListener('input', function () {
    this.style.backgroundColor = '#dff7df';
});

document.getElementById('numberphone').addEventListener('input', function () {
    this.style.backgroundColor = '#dff7df';
});

document.getElementById('adres').addEventListener('input', function () {
    this.style.backgroundColor = '#dff7df';
});

document.getElementById('date').addEventListener('input', function () {
    this.style.backgroundColor = '#dff7df';
});

document.querySelector('.JSformOut h4').addEventListener('mouseover', function () {
    this.style.color = '#00FF00';
});
document.querySelector('.JSformOut h4').addEventListener('mouseout', function () {
    this.style.color = '';
});


function checkName()
{
    var first = document.getElementById("name").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(first)) 
    {
        document.getElementById("check_name").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("check_name").style.color = "red";
        document.getElementById("check_name").innerHTML = "Введите от 2 до 20 символов";
        return false;
    }
}

function checkNumber()
{
    var phone = document.getElementById("numberphone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone))
    {
        document.getElementById("check_phone").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("check_phone").style.color = "red";
        document.getElementById("check_phone").innerHTML = "Номер телефона введен некорректно";
        return false;
    }
}

function checkAdres()
{
    var dest = document.getElementById("adres").value;
    var regex = /^[a-zA-Z\s\.\,\d\ ]{4,30}$/;

    if (regex.test(dest))
    {
        document.getElementById("adres_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("adres_check").style.color = "red";
        document.getElementById("adres_check").innerHTML = "Введите от 4 до 30 символов";
        return false;
    }
}

function outputData() {
    var name = document.getElementById("name").value;
    var adres = document.getElementById("adres").value;
    var numberphone = document.getElementById("numberphone").value;
    var date = document.getElementById("date").value;
    var paymethod = document.getElementById("paymethod").value;

    if (name != "" && numberphone != "" && date != "" && adres != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Имя: " + name + ".</br>";
        document.getElementById("summary").innerHTML += "Номер телефона: " + numberphone + ".</br>";
        document.getElementById("summary").innerHTML += "Адрес заказа: " + adres + ".</br>";
        document.getElementById("summary").innerHTML += "Дата: " + date + ".</br>";
        document.getElementById("summary").innerHTML += "Метод оплаты: " + paymethod + ".";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}