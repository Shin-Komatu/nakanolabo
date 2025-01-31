<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ジョジョのスタンドアニメーション</title>
    <style>
        body {
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
        }
        #jojoCanvas {
            margin-top: 50px;
            background-color: #222;
        }
    </style>
</head>
<body>
    <h1>ジョジョのスタンドアニメーション</h1>
    
    <!-- Canvasを使ってアニメーションを描画 -->
    <canvas id="jojoCanvas" width="800" height="600"></canvas>
    
    <script>
        const canvas = document.getElementById('jojoCanvas');
        const ctx = canvas.getContext('2d');

        // スタンドの初期設定
        const stand = {
            x: 400,
            y: 500,
            width: 40,
            height: 80,
            color: 'magenta'
        };

        // エネルギー弾（カメハメ波）の設定
        const energyBalls = [];
        let attackFrame = 0;

        // エネルギー弾のクラス
        class EnergyBall {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = 10;
                this.opacity = 1.0;
                this.speedX = Math.random() * 6 - 3;
                this.speedY = Math.random() * 6 - 3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity -= 0.02;
            }

            draw() {
                ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // スタンドを描く
        function drawStand() {
            ctx.fillStyle = stand.color;
            ctx.fillRect(stand.x - stand.width / 2, stand.y - stand.height, stand.width, stand.height); // 本体
            ctx.beginPath();
            ctx.arc(stand.x, stand.y - stand.height, 20, 0, Math.PI * 2); // 頭
            ctx.fillStyle = 'yellow';
            ctx.fill();
        }

        // エネルギー波を発射する
        function attack() {
            if (attackFrame % 5 === 0) {
                energyBalls.push(new EnergyBall(stand.x, stand.y - 20));
            }
            attackFrame++;
        }

        // アニメーションを更新する
        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア
            drawStand(); // スタンドを描く

            // エネルギー弾を更新・描画
            for (let i = energyBalls.length - 1; i >= 0; i--) {
                let ball = energyBalls[i];
                ball.update();
                ball.draw();
                if (ball.opacity <= 0) {
                    energyBalls.splice(i, 1); // 透明になったエネルギー弾は削除
                }
            }

            // 攻撃開始
            if (attackFrame < 100) {
                attack();
            }

            requestAnimationFrame(update); // 次のフレームを要求
        }

        // ページが読み込まれたらアニメーションを開始
        window.onload = () => {
            setTimeout(() => { attackFrame = 0; }, 2000); // 2秒後に攻撃開始
            update(); // アニメーション開始
        };
    </script>
</body>
</html>
