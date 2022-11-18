let text = document.getElementById('.slider__review');
let start = text.innerHTML;

text.innerHTML = '';

let speed = 200;
let i = 0;

function typeWrite() {
  if (i < start.length) {
    text.innerHTML += String.charAt(i);
    i++;
    setTimeout(typeWrite, speed);
  }
}

setTimeout(typeWrite, speed);
