const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#00FF00', '#FF7F00']; // グリーンとファイエロ

// ダイヤモンド型の描画
function drawDiamond(x, y, size, color) {
    ctx.beginPath();
    ctx.moveTo(x, y - size);  // 上
    ctx.lineTo(x + size, y);  // 右
    ctx.lineTo(x, y + size);  // 下
    ctx.lineTo(x - size, y);  // 左
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// 水玉のアニメーション
function animateSphere(x, y, radius, color, angle) {
    const xOffset = Math.cos(angle) * radius;
    const yOffset = Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.arc(x + xOffset, y + yOffset, 10, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// カメハメハのエネルギー波
function drawEnergyBeam(x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
}

// アニメーションメイン
let angle = 0;
let radius = 50;
let diamondSize = 60;
let energyBeamSize = 20;
let startTime = Date.now();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ダイヤモンドの描画
    drawDiamond(canvas.width / 2, canvas.height / 2, diamondSize, 'blue');

    // 水玉のアニメーション
    angle += 0.1;
    animateSphere(canvas.width / 2, canvas.height / 2, radius, colors[0], angle);

    // カメハメハのエネルギー波
    const timeElapsed = (Date.now() - startTime) / 1000;
    energyBeamSize = Math.sin(timeElapsed * Math.PI) * 60 + 10; // 伸縮する波

    drawEnergyBeam(canvas.width / 2, canvas.height / 2 - 100, energyBeamSize);

    // 分岐する水玉
    if (timeElapsed > 2) {
        radius += 2;
        colors.push(colors.shift()); // 色を循環
    }

    requestAnimationFrame(animate);
}

animate();
