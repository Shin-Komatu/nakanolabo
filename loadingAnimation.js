document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("animationCanvas");

    if (!canvas) {
        console.error("❌ animationCanvas が見つかりません！");
        return;
    }

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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
    let isAnimating = true;

    function animate() {
        if (!isAnimating) return;
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

    // **⏳ 5秒後にアニメーションを終了し、index.js を実行**
    setTimeout(() => {
        isAnimating = false;

        // キャンバスをフェードアウト
        canvas.style.transition = "opacity 1s ease-out";
        canvas.style.opacity = "0";

        setTimeout(() => {
            canvas.remove(); // キャンバスを削除
            window.dispatchEvent(new Event("animationComplete")); // index.js に通知
        }, 1000);
    }, 5000);
});
