var number = 15;
var text = true;

if(number == 5 || text  == true) {
    console.log("ok");
} else if(number < 10) {
    console.log("ok!");
} else if(number == 7) {
    console.log("Okk")
} else if(number >= 15) {
    console.log(">=15")
}else {
    console.log("Else");
}

var stroka = "word"
switch (stroka) {
    case "4": console.log("Переменная со значением 4")
    break;
    case "45": console.log("Переменная со значением 45")
    break;
    case "word": console.log("Переменная со значением <<word>>")
    break;
    default:
        console.log("Default")
}