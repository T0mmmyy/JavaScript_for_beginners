//alert("Hello");

//var data = confirm("Hi");
//if (data) {
//   alert("good")
//}

//var num = prompt("Сколько вам лет")
//console.log(num);

var person = null;
if(confirm("Вы точно уверены?")) {
    person = prompt("Введите ваше имя");
    alert("Привет " + person);
} else {
    alert("Вы нажали на <<Отмена>>");
}
