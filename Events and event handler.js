var num = 0

function onClickButton(el) {
    num++;
    el.innerHTML = "Вы нажали на кнопку:  " + num;
    el.style.cssText = "border-radius: 20px; border: 0; font-size: 20px;"
}

function onInput(el) {
    if(el.value == "Hello")
        alert("И тебе привет")
    console.log(el.value)
}