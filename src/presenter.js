import sumar from "./sumador";
import multi from "./multi"; // Importa la función multi

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const multButton = document.querySelector("#mult-button"); // Selecciona el botón multiplicar
const sumarButton = document.querySelector("#sumar-button"); // Selecciona el botón sumar

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  // Si el botón que disparó el evento es el de sumar
  if (event.submitter === multButton) {
    div.innerHTML = "<p>" + multi(firstNumber, secondNumber) + "</p>";
  } 

  if(event.submitter === sumarButton){
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  }
});
