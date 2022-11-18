'use strict';
import data from '../json/zelda-timeline.json' assert { type: 'json' };
const fs = required('fs');
const datos = data;
console.log(datos);

const form = document.querySelector('form#formulario');
console.log(form);

const inputTitle = form.elements.title;
const inputAge = form.elements.age;
const inputDescrip = form.elements.descript;
const inputPortada = form.elements.portada;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(inputTitle.value);
  console.log(inputAge.value);
  console.log(inputDescrip.value);
  console.log(inputPortada.value);
});
function formSubmit(event) {
  event.preventDefault();
  datos.push[
    {
      date: `${inputAge.value}`,
      title: `${inputTitle.value}`,
      image: `${inputPortada.value}`,
      text: `${inputDescrip.value}`,
    }
  ];
}
form.addEventListener('submit', formSubmit);
console.log(datos);

/*const nuevoJuego = document.querySelector('ul#newul');
console.log(nuevoJuego);

function formSumbit(event) {
  event.preventDefault();
  const li = document.createElement('li');

  li.innerHTML = `
  <img class="slider__img" src="${inputPortada.value} " alt="${inputTitle.value} ">
  <div class="slider__text">    
  <h3>${inputAge.value}</h3>
  <h2 class="subtitle">${inputTitle.value}</h2>
  <p class="slider__review">${inputDescrip.value}</p>
  </div>  
    
    `;
  nuevoJuego.append(li);
  form.reset();
}

form.addEventListener('submit', formSumbit);*/
