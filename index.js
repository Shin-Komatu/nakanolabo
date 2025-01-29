window.addEventListener("load", () => {
    const numStands = 5; // スタンドの数
    const stands = [];

    for (let i = 0; i < numStands; i++) {
        // スタンド要素を作成
        const stand = document.createElement("div");
        stand.style.position = "absolute";
        stand.style.width = "100px";
        stand.style.height = "100px";
        stand.style.backgroundColor = "#ff4500";
        stand.style.opacity = "0";
        stand.style.transform = "scale(0) rotate(0deg)";
        stand.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        stand.style.transformOrigin = "center";
        stand.style.boxShadow = "0 0 20px rgba(255, 69, 0, 0.8)";
        stand.style.clipPath = "polygon(50% 0%, 100% 100%, 0% 100%)"; // 三角形
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

        // スタンド登場
        setTimeout(() => {
            stand.style.opacity = "1";
            stand.style.transform = "scale(1.5) rotate(360deg)";
            text.style.opacity = "1";
            text.style.transform = "scale(1)";
        }, 100);

        // 形状変化
        setTimeout(() => {
            stand.style.transition = "transform 1s ease-in-out, clip-path 2s ease-in-out";
            stand.style.transform = "scale(1.2) rotate(720deg)";
            stand.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; // 変形
        }, 1500);

        // 衝撃波のような揺れ
        setTimeout(() => {
            stand.style.transition = "transform 0.5s ease-in-out";
            stand.style.transform = "scale(1) rotate(1080deg)";
        }, 2500);

        // 四方八方に飛ばす
        setTimeout(() => {
            const angle = Math.random() * 360; // ランダムな角度
            const distance = 300; // 飛ぶ距離
            const dx = Math.cos((angle * Math.PI) / 180) * distance;
            const dy = Math.sin((angle * Math.PI) / 180) * distance;

            stand.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            stand.style.transform = `translate(${dx}px, ${dy}px) scale(0) rotate(1440deg)`;
            stand.style.opacity = "0";
        }, 3500);

        // ゴゴゴテキストも消す
        setTimeout(() => {
            text.style.transition = "opacity 1s ease-out";
            text.style.opacity = "0";
        }, 4000);
    }
});
