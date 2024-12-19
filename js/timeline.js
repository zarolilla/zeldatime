'use strict';
fetch('../json/zelda-timeline.json')
  .then(response => response.json())  // Convertimos la respuesta a JSON
  .then(data => {
    data.sort((a, b) => a.date - b.date);   // Ordenamos los datos por fecha
    console.log(data);    // Verifica los datos en consola
    renderSlider(data);   // Llama a la función para renderizar el slider
    typeWriterEffect();    // Inicia el efecto de máquina de escribir
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

import data from '../json/zelda-timeline.json' assert { type: 'json' };

data.sort((a, b) => a.date - b.date);

console.log(data);

const div = document.createElement('div');
div.classList.add('slider__container', 'container');
const frag = document.createDocumentFragment();
div.innerHTML = `
  <div  class="slider__arrow" id="before" alt="">&#60;</div>
  <div  class="slider__arrow" id="after" alt="">&#62;</div>`;
let i = 1;

for (const datos of data) {
  console.log(i);
  const li = document.createElement('section');
  li.classList.add('slider__body', `slider__body--show${i}`);
  li.setAttribute('data-id', `${i}`);
  li.innerHTML = `
  <div class="slider__text">    
  <h3>${datos.date}</h3>
  <h2 class="subtitle">${datos.title}</h2>
  <p class="slider__review" id="escribir">${datos.text} </p>
  </div>  
  <img class="slider__img" src="${datos.image} " alt="${datos.date} ">
  
  
  `;
  frag.append(li);
  i++;
  console.log(li);
}

div.append(frag);

const section = document.querySelector('section#zeldagame');
console.log(section);
console.log(frag);

section.append(div);

(function sliders() {
  const slider = [...document.querySelectorAll('.slider__body')];
  console.log(slider);
  const arrowNext = document.querySelector('#after');
  console.log(arrowNext);
  const arrowBefore = document.querySelector('#before');
  let value;

  arrowNext.addEventListener('click', () => changePosition(1));
  arrowBefore.addEventListener('click', () => changePosition(-1));
  function changePosition(change) {
    const currentElement = Number(
      document.querySelector('.slider__body--show1').dataset.id
    );

    value = currentElement;
    value += change;
    if (value === 0 || value == slider.length + 1) {
      value = value === 0 ? slider.length : 1;
    }
    slider[currentElement - 1].classList.toggle('slider__body--show1');
    slider[value - 1].classList.toggle('slider__body--show1');
  }
})();

let text = document.getElementById('escribir');
let str = text.innerHTML;
text.innerHTML = '';
let speed = 20;
var e = 0;

function typeWriter() {
  if (e < str.length) {
    text.innerHTML += str.charAt(e);
    e++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout(typeWriter, speed);
