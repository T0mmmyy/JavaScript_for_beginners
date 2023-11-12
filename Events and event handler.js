var num = 0

function onClickButton(el) {
    num++;
    el.innerHTML = "Вы нажали на кнопку:  " + num;
}

function onInput(el) {
    console.log(el.value)
}