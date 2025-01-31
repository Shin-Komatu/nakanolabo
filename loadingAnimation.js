document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("animationCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#00FF00", "#FF7F00"];

    function drawDiamond(x, y, size, color) {
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size, y);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function animateSphere(x, y, radius, color, angle) {
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x + xOffset, y + yOffset, 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawEnergyBeam(x, y, size) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    let angle = 0;
    let radius = 50;
    let diamondSize = 60;
    let energyBeamSize = 20;
    let startTime = Date.now();
    let isAnimating = true;

    function animate() {
        if (!isAnimating) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawDiamond(canvas.width / 2, canvas.height / 2, diamondSize, "blue");

        angle += 0.1;
        animateSphere(canvas.width / 2, canvas.height / 2, radius, colors[0], angle);

        const timeElapsed = (Date.now() - startTime) / 1000;
        energyBeamSize = Math.sin(timeElapsed * Math.PI) * 60 + 10;

        drawEnergyBeam(canvas.width / 2, canvas.height / 2 - 100, energyBeamSize);

        if (timeElapsed > 2) {
            radius += 2;
            colors.push(colors.shift());
        }

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("load", () => {
        isAnimating = false;
        document.getElementById("loadingScreen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loadingScreen").style.display = "none";
        }, 1000);
    });
});
