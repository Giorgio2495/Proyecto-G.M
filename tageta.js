export const tarjetas = (propiedades) => {
  const generador =`
    <a class="tarjetas" href="yes.html?id=${propiedades.id}" >
    <div class="tarjeta-imagen" style="background-image:url(/${propiedades.imagen})">
      <div class="tarjeta-top">
        <span class="tarjeta-propi-tipo">${propiedades.tipocasa}</span>
        <span class="tarjeta-propi-estado">${propiedades.tipoinmueble}</span>
        <div class="tarjeta-propi-cuadro"></div>
      </div>
      <div class="tarjeta-bottom">
        <span class="tarjeta-propi-price">${propiedades.precio}</span>
        <div class="tarjeta-propi-black-cuadro"></div>
        <div class="tarjeta-propi-black-cuadro"></div>
      </div>
    </div>
    <div class="propi-info">
      <h2 class="tarjeta-propi-location">${propiedades.ubicacion}</h2>
      <div class="tarjeta-propi-full-location">${propiedades.direccion}</div>
        <div class="tarjeta-propi-owner">
          <img src= "https://d500.epimg.net/cincodias/imagenes/2016/03/16/lifestyle/1458143779_942162_1458143814_noticia_normal.jpg" class="tarjeta-propi-owner-photo">
          <div class="tarjeta-propi-owner-name">${propiedades.dueno}</div>
          <div class="tarjeta-propi-date">${propiedades.hace}</div>
        </div>
        <div class="tarjeta-propi-features">
          <span class="tarjeta-propi-sq"><strong>${propiedades.area}</strong> metros cuadrados</span>
          <span>${propiedades.parqueo}</span>
          <span>${propiedades.banos}</span>
          <span>${propiedades.habits}</span>
        </div>
    </div>
  </a>
    `;

  return generador;
};
