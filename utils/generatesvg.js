function generateSvg(data) {
  if (data.shape === "circle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.letters}</text>

</svg>`;
  } else if (data.shape === "square") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="60" width="180" height="180" fill="${data.shapeColor}" />
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${data.color}">${data.letters}</text>
  </svg>`;
  } else if (data.shape === "triangle") {
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,20 20,180 280,180" fill="${data.shapeColor}" />
  <text x="150" y="160" font-size="60" text-anchor="middle" fill="${data.color}">${data.letters}</text>
</svg>`;
  }
}
module.exports = generateSvg;
