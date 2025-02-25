const canvas = document.getElementById("lowerThirdCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "./lower.png"; // Image source

img.onload = () => drawLowerThird();

function drawLowerThird() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const name = document.getElementById("nameInput").value.trim();
    const title = document.getElementById("titleInput").value.trim();

    ctx.font = "10px Roboto Serif";
    ctx.fillStyle = "black";
    ctx.fillText(name, 75, 245);

    ctx.font = "7px Roboto Serif";
    ctx.fillStyle = "white";
    ctx.fillText(title, 75, 255);
}

function generateLowerThird() {
    drawLowerThird();
}

function downloadImage() {
    const fullResCanvas = document.createElement("canvas");
    fullResCanvas.width = 1920;
    fullResCanvas.height = 1080;
    const fullResCtx = fullResCanvas.getContext("2d");

    fullResCtx.drawImage(img, 0, 0, fullResCanvas.width, fullResCanvas.height);

    const name = document.getElementById("nameInput").value.trim();
    const title = document.getElementById("titleInput").value.trim();

    fullResCtx.font = "40px Roboto Serif";
    fullResCtx.fillStyle = "black";
    fullResCtx.fillText(name, 300, 980);

    fullResCtx.font = "28px Roboto Serif";
    fullResCtx.fillStyle = "white";
    fullResCtx.fillText(title, 300, 1020);

    const link = document.createElement('a');
    link.download = 'lower.png';
    link.href = fullResCanvas.toDataURL('image/png');
    link.click();
}
