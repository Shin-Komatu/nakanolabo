document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("animationCanvas");

    // **キャンバスが取得できない場合のエラー処理**
    if (!canvas) {
        console.error("❌ animationCanvas が見つかりません！ index.html に <canvas id='animationCanvas'></canvas> を追加してください。");
        return;
    }

    const ctx = canvas.getContext("2d");

    // **キャンバスのサイズを更新**
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log("✅ キャンバスサイズ更新:", canvas.width, canvas.height);
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

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

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        drawDiamond(centerX, centerY, diamondSize, "blue");

        angle += 0.05;
        animateSphere(centerX, centerY, radius, colors[0], angle);

        const timeElapsed = (Date.now() - startTime) / 1000;
        energyBeamSize = Math.sin(timeElapsed * Math.PI) * 60 + 20;

        drawEnergyBeam(centerX, centerY - 100, energyBeamSize);

        requestAnimationFrame(animate);
    }

    animate();
});
