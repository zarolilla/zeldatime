'use strict';

import data from '../json/zelda-timeline.json' assert { type: 'json' };

const añadir = data;

const anidar = JSON.parse(localStorage.getItem('juegosNuevos'));
console.log(anidar);
for (const puchear of anidar) {
  console.log(anidar);
  añadir.push(puchear);
  añadir.sort((a, b) => a.date - b.date);
}

const div = document.createElement('div');
div.classList.add('slider__container', 'container');
const frag = document.createDocumentFragment();

let i = 1;

for (const datos of data) {
  console.log(i);
  const li = document.createElement('section');
  li.classList.add('slider__body', `slider__body--show${i}`);
  li.setAttribute('data-id', `${i}`);
  li.innerHTML = `
  <img class="slider__img" src="${datos.image} " alt="${datos.date} ">
  <div class="slider__text">    
  <h3>${datos.date}</h3>
  <h2 class="subtitle">${datos.title}</h2>
  <p class="slider__review" id="escribir">${datos.text}</p>
  </div>  
  
  
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

let animado = document.querySelectorAll('.slider__body');
console.log(animado);
function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 800 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add('derecha');

      console.log(animado);
    }
  }
}
window.addEventListener('scroll', mostrarScroll);
