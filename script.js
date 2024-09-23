document
  .querySelectorAll('.navegacion-lista a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Obtiene el elemento de destino a partir del href
      const target = document.querySelector(this.getAttribute("href"));

      // Realiza el desplazamiento suave hacia el elemento objetivo
      target.scrollIntoView({
        behavior: "smooth", // Scroll suave
        block: "start", // Alinea al inicio de la página
      });
    });
  });
