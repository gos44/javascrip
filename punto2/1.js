const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
  img.addEventListener('click', () => {
    // Abrir modal con imagen
    alert('Imagen seleccionada: ' + img.alt);
  });
});
