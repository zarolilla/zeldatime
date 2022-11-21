'use strict';

import data from '../json/zelda-timeline.json' assert { type: 'json' };

data.sort((a, b) => a.date - b.date);
console.log(data);
/*const añadir = data;

const anidar = JSON.parse(localStorage.getItem('juegosNuevos'));
console.log(anidar);
for (const puchear of anidar) {
  console.log(anidar);
  añadir.push(puchear);
}*/

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
  <p class="slider__review">${datos.text}</p>
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
