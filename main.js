canvas = document.getElementById("canvasproject");

ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle - "orange"
ctx.lineWidth - 2;
ctx.rect(250, 120, 1500, 750);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "blue"
ctx.lineWidth - 5;
ctx.arc(300, 170, 100, 750, 0, 2 * MathPI);
ctx.stroke();

