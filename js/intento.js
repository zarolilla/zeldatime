'use strict';

const formulario = document.querySelector('form#formulario');
console.log(formulario);

const procesarTodo = (event) => {
  event.preventDefault();

  const datos = new FormData(event.target);

  const datoscompletos = Object.fromEntries(datos.entries());
  console.log(datoscompletos);
};
