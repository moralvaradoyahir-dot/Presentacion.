// Seleccionamos la sección donde insertaremos la imagen
const robotSection = document.getElementById('robot-section');

// Creamos un elemento <img>
const robotImage = document.createElement('img');

// Link funcional a una imagen de robot libre de derechos
robotImage.src = "https://cdn.pixabay.com/photo/2016/03/31/19/56/robot-1295541_1280.png";

// Texto alternativo
robotImage.alt = "Robot futurista";

// Ajustamos el tamaño
robotImage.width = 300;

// Insertamos la imagen en la sección
robotSection.appendChild(robotImage);
