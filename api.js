const enlace_server = "http://localhost:3000/viviendas";

export const consumir_objeto = async (id) => {
  try {
    const pedir = await fetch(enlace_server + "/" + id);
    const jason = await pedir.json();
    console.log(jason);
    return jason;
  } catch (error) {
    console.log(error);
  }
};

export const consumir_jason = async (extraer) => {
  try {
    const pedir = await fetch(enlace_server);
    const jason = await pedir.json();
    console.log(jason);
    return jason;
  } catch (error) {
    console.log(error);
  }
};

export const api_para_buscar = async (busqueda) => {
  try {
    let response = await fetch(enlace_server + busqueda);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
