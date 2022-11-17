import { api_para_buscar } from "./api.js";
import { tarjetas } from "./tageta.js";

let busqueda = window.location.search;
const container = document.querySelector("#contenedores-menu");

api_para_buscar(busqueda).then((casa) => {
  console.log(casa);
  casa.forEach((e) => {
    const card = tarjetas(e);
    container.innerHTML += card;
  });
});
