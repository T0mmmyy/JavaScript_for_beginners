// var text = document.getElementById('text')
// text.id = "New text";
// console.log(text.id);

// text.style.color = "red";
// text.style.backgroundColor = "black";

// text.innerHTML = "New<br>string";

// var spans = document.getElementsByTagName('span');

// var spans = document.getElementsByClassName('simple-text');

// for(var i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

function checkForm(el) {
    // var name = document.getElementById('name').value;
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    console.log(name + " - " + state + " - " + repass + " - " + pass);
    var fail = "";
    if(name == "" || pass == "" || state == "")
        fail = "Заполните все поля"
    else if(name.length <= 2 || name.length > 50)
        fail = "Введите коректное имя"
    else if(pass != repass)
         fail = "Парол должны совпадать"
    else if(pass.split("&").length > 1)
        fail = "Некоректный пароль";

    if(fail !== "") {
        document.getElementById('eror').innerHTML = fail;
        return false;
    }   else {
        alert("Все данные заполнены");
        window.location = 'https://www.youtube.com';
        return false;
    }
}