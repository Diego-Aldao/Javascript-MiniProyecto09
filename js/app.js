(function () {
  const flotante = document.querySelector(".contenedor-flotante");
  const btnCerrar = document.querySelector(".btn-cerrar");
  const btnSiguiente = document.querySelector(".btn-derecha");
  const btnAnterior = document.querySelector(".btn-izquierda");
  const imagenes = document.querySelectorAll(".imagenes");
  const contenedorImagenFlotante = document.querySelector(
    ".contenedor-imagen-flotante"
  );
  const imagenFlotante = document.querySelector(".imagen-flotante");

  let listaImagenes = [];

  let contadorImagenes = 0;

  //EVENT LISTENERS

  imagenes.forEach((imagen) => {
    let imagenSrc = imagen.src;
    listaImagenes.push(imagenSrc);
  });

  imagenes.forEach((imagen) => {
    imagen.addEventListener("click", (e) => {
      flotante.style.display = "flex";
      let imagenClickeada = e.target.src;
      imagenFlotante.src = imagenClickeada;
      contadorImagenes = listaImagenes.indexOf(imagenClickeada);
      console.log(contadorImagenes);
    });
  });

  btnSiguiente.addEventListener("click", () => {
    contadorImagenes++;
    if (contadorImagenes > listaImagenes.length - 1) {
      contadorImagenes = 0;
    }
    imagenFlotante.src = listaImagenes[contadorImagenes];
  });

  btnAnterior.addEventListener("click", () => {
    contadorImagenes--;
    if (contadorImagenes < 0) {
      contadorImagenes = listaImagenes.length - 1;
    }
    imagenFlotante.src = listaImagenes[contadorImagenes];
  });

  btnCerrar.addEventListener("click", () => {
    flotante.style.display = "none";
  });
})();
