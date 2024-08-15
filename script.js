function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function generateColorPalette(baseColor, steps) {
  const [r, g, b] = baseColor;
  const palette = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const newR = Math.round(r * (1 - t * t));
    const newG = Math.round(g * (1 - t * t));
    const newB = Math.round(b * (1 - t * t));

    palette.push(`rgb(${newR},${newG},${newB})`);
  }

  return palette;
}

function renderPalette(palette) {
  const container = document.getElementById("colorPalette");
  container.innerHTML = ""; // Clear previous palette

  palette.forEach((color) => {
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;

    const label = document.createElement("div");
    label.className = "color-label";
    label.innerText = color;

    const colorContainer = document.createElement("div");
    colorContainer.appendChild(colorBox);
    colorContainer.appendChild(label);

    container.appendChild(colorContainer);
  });
}

function generateAndRenderPalette() {
  const hexColor = document.getElementById("baseColor").value;
  const steps = parseInt(document.getElementById("steps").value);
  const baseColor = hexToRgb(hexColor);

  const palette = generateColorPalette(baseColor, steps);
  renderPalette(palette);
}

// Generate an initial palette on load
generateAndRenderPalette();
