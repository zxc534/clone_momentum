const images = ["0.jpg", "1.jpeg", "2.jpeg"];

const randImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${randImage}`;
bgImage.style.width = `${window.innerWidth}px`;
bgImage.style.height = `${window.innerHeight}px`;
//document.body.appendChild(bgImage);
