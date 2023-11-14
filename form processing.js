var text = document.getElementById('text')
text.id = "New text";
console.log(text.id);

text.style.color = "red";
text.style.backgroundColor = "black";

text.innerHTML = "New<br>string";

var spans = document.getElementsByTagName('span');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}