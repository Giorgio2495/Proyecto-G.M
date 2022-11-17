import { consumir_jason } from "./api.js"
import { tarjetas} from "./tageta.js"

document.addEventListener("DOMContentLoaded" , async()=>{
    const selector = document.querySelector("#contenedores-menu");
    const casas = await consumir_jason();
   
    casas.forEach(propiedad => {
        
        selector.innerHTML+= tarjetas(propiedad)
     });
})