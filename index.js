window.addEventListener("load", () => {
    const numStands = 3; // スタンドの数
    const stands = [];

    // 🔥 フラッシュエフェクト
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.backgroundColor = "white";
    flash.style.opacity = "1";
    flash.style.zIndex = "1000";
    flash.style.transition = "opacity 0.5s ease-out";
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0"; // 徐々に消える
        setTimeout(() => flash.remove(), 500);
    }, 100);

    for (let i = 0; i < numStands; i++) {
        // スタンド要素を作成
        const stand = document.createElement("div");
        stand.style.position = "absolute";
        stand.style.width = "100px";
        stand.style.height = "100px";
        stand.style.backgroundColor = "red"; // 初期色
        stand.style.borderRadius = "50%"; // 初期は円形
        stand.style.opacity = "0";
        stand.style.transform = "scale(0)";
        stand.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        stand.style.boxShadow = "0 0 30px rgba(255, 69, 0, 0.8)";
        document.body.appendChild(stand);
        stands.push(stand);

        // ランダムな初期位置
        const randomX = Math.random() * (window.innerWidth - 150);
        const randomY = Math.random() * (window.innerHeight - 150);
        stand.style.left = `${randomX}px`;
        stand.style.top = `${randomY}px`;

        // ゴゴゴゴエフェクト
        const text = document.createElement("div");
        text.innerText = "ゴゴゴゴゴ";
        text.style.position = "absolute";
        text.style.fontSize = "50px";
        text.style.color = "purple";
        text.style.fontWeight = "bold";
        text.style.opacity = "0";
        text.style.transform = "scale(0)";
        text.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        document.body.appendChild(text);
        text.style.left = `${randomX - 50}px`;
        text.style.top = `${randomY - 80}px`;

        // スタンド登場（震えながら出現）
        setTimeout(() => {
            stand.style.opacity = "1";
            stand.style.transform = "scale(1.2)";
            stand.style.animation = "shake 0.3s infinite alternate"; // 震えエフェクト
            text.style.opacity = "1";
            text.style.transform = "scale(1)";
        }, 300);

        // 🔥 波動エフェクト
        setTimeout(() => {
            const wave = document.createElement("div");
            wave.style.position = "absolute";
            wave.style.width = "150px";
            wave.style.height = "150px";
            wave.style.left = `${randomX - 25}px`;
            wave.style.top = `${randomY - 25}px`;
            wave.style.borderRadius = "50%";
            wave.style.backgroundColor = "rgba(255, 69, 0, 0.5)";
            wave.style.opacity = "0.8";
            wave.style.transform = "scale(0)";
            wave.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            document.body.appendChild(wave);

            setTimeout(() => {
                wave.style.transform = "scale(3)";
                wave.style.opacity = "0";
                setTimeout(() => wave.remove(), 1000);
            }, 100);
        }, 500);

        // 形状と色の変化
        setTimeout(() => {
            stand.style.backgroundColor = "purple";
            stand.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; // 星形
        }, 1500);

        setTimeout(() => {
            stand.style.backgroundColor = "blue";
            stand.style.clipPath = "none";
            stand.style.borderRadius = "10px"; // 四角形
        }, 2500);

        setTimeout(() => {
            stand.style.backgroundColor = "yellow";
            stand.style.borderRadius = "0";
            stand.style.transform = "scale(1.2) rotate(360deg)";
        }, 3500);

        // 🌊 四方八方に飛ばす
        setTimeout(() => {
            const angle = Math.random() * 360; // ランダムな角度
            const distance = 300; // 飛ぶ距離
            const dx = Math.cos((angle * Math.PI) / 180) * distance;
            const dy = Math.sin((angle * Math.PI) / 180) * distance;

            stand.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            stand.style.transform = `translate(${dx}px, ${dy}px) scale(0) rotate(1440deg)`;
            stand.style.opacity = "0";
        }, 4500);

        // ゴゴゴテキストも消す
        setTimeout(() => {
            text.style.transition = "opacity 1s ease-out";
            text.style.opacity = "0";
        }, 5000);
    }

    // CSS アニメーション追加
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-3px) rotate(-2deg); }
            50% { transform: translateX(3px) rotate(2deg); }
            75% { transform: translateX(-3px) rotate(-2deg); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
});
