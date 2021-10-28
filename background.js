const images = ["0.jpg","1.jpg","2.png"];
const bgImage = document.createElement("img");
const chosenImage = images[Math.floor(Math.random()* images.length)];


bgImage.src = chosenImage;

document.body.appendChild(bgImage);