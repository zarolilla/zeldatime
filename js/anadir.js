'use strict';

const form = document.querySelector('form#formulario');

console.log(form);
let juegosNuevos = [];
const title = form.elements.title;
const age = form.elements.age;
const descrip = form.elements.descript;

let portada = form.elements.portada.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});

form.addEventListener('submit', (event) => {
  const images = localStorage.getItem('recent-image');
  event.preventDefault();

  let newGames = {
    date: age.value,
    title: title.value,
    image: images,
    text: descrip.value,
  };
  console.log(newGames);
  juegosNuevos.push(newGames);
  form.reset();

  localStorage.setItem('juegosNuevos', JSON.stringify(juegosNuevos));
  form.reset();
});

/*
###### Mi primer intento fue imprimir con dom en pantalla el añadir ######

const nuevoJuego = document.querySelector('ul#newul');
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
