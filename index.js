window.addEventListener("load", () => {
    const numStands = 3; // スタンドの数
    const stands = [];

    // 🌟 フラッシュエフェクト（稲妻のような光）
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 80%)";
    flash.style.opacity = "1";
    flash.style.zIndex = "1000";
    flash.style.transition = "opacity 0.5s ease-out";
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 200);
    }, 50);

    // 🌊 画面全体のシェイクエフェクト
    document.body.style.animation = "shakeScreen 0.4s ease-in-out";

    for (let i = 0; i < numStands; i++) {
        // スタンド要素を作成
        const stand = document.createElement("div");
        stand.style.position = "absolute";
        stand.style.width = "120px";
        stand.style.height = "120px";
        stand.style.backgroundColor = "rgba(255, 69, 0, 0.8)";
        stand.style.opacity = "0";
        stand.style.borderRadius = "50%";
        stand.style.boxShadow = "0 0 40px rgba(255, 69, 0, 1)";
        stand.style.transform = "scale(0)";
        stand.style.transition = "transform 1s ease-out, opacity 0.5s ease-in";
        document.body.appendChild(stand);
        stands.push(stand);

        // ランダムな初期位置
        const randomX = Math.random() * (window.innerWidth - 150);
        const randomY = Math.random() * (window.innerHeight - 150);
        stand.style.left = `${randomX}px`;
        stand.style.top = `${randomY}px`;

        // 🔥 エネルギー溜め（振動しながら拡大）
        setTimeout(() => {
            stand.style.opacity = "1";
            stand.style.transform = "scale(1.2)";
            stand.style.animation = "vibrate 0.2s infinite alternate";
        }, 300);

        // ⚡ ドドドエフェクト
        const text = document.createElement("div");
        text.innerText = "ドドドドド";
        text.style.position = "absolute";
        text.style.fontSize = "60px";
        text.style.color = "purple";
        text.style.fontWeight = "bold";
        text.style.opacity = "0";
        text.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        text.style.animation = "fadeInOut 2s infinite alternate";
        document.body.appendChild(text);
        text.style.left = `${randomX - 50}px`;
        text.style.top = `${randomY - 80}px`;

        setTimeout(() => {
            text.style.opacity = "1";
        }, 500);

        // 💥 最後の爆発的飛散
        setTimeout(() => {
            const angle = Math.random() * 360;
            const distance = 400;
            const dx = Math.cos((angle * Math.PI) / 180) * distance;
            const dy = Math.sin((angle * Math.PI) / 180) * distance;

            stand.style.transition = "transform 0.8s ease-in-out, opacity 0.5s ease-in";
            stand.style.transform = `translate(${dx}px, ${dy}px) scale(0.5)`;
            stand.style.opacity = "0";

            setTimeout(() => stand.remove(), 800);
        }, 3000);

        // 🌀 ドドドドも消す（フェードアウトしながら拡大）
        setTimeout(() => {
            text.style.opacity = "0";
            text.style.transform = "scale(1.5)";
            setTimeout(() => text.remove(), 500);
        }, 3200);
    }

    // 🌊 CSS アニメーション
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes shakeScreen {
            0% { transform: translate(0, 0); }
            25% { transform: translate(5px, -5px); }
            50% { transform: translate(-5px, 5px); }
            75% { transform: translate(5px, -5px); }
            100% { transform: translate(0, 0); }
        }

        @keyframes vibrate {
            0% { transform: scale(1.1) rotate(-2deg); }
            100% { transform: scale(1.2) rotate(2deg); }
        }

        @keyframes fadeInOut {
            0% { opacity: 0.8; transform: scale(1); }
            100% { opacity: 0.2; transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
});
