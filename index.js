window.addEventListener("load", () => {
    const numParticles = 5; // 粒子（スタンド）の数
    const particles = [];

    // 🌟 量子フラッシュ（波動関数の崩壊的な光）
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 80%)";
    flash.style.opacity = "1";
    flash.style.zIndex = "1000";
    flash.style.transition = "opacity 0.2s ease-out";
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 200);
    }, 50);

    for (let i = 0; i < numParticles; i++) {
        // 粒子（スタンド）を作成
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "10px";
        particle.style.height = "10px";
        particle.style.backgroundColor = "rgba(0, 255, 255, 0.8)"; // サイバー感のある青色
        particle.style.opacity = "0";
        particle.style.borderRadius = "50%";
        particle.style.boxShadow = "0 0 20px rgba(0, 255, 255, 1)";
        particle.style.transform = "scale(0)";
        particle.style.transition = "transform 1s ease-out, opacity 0.5s ease-in";
        document.body.appendChild(particle);
        particles.push(particle);

        // ランダムな初期位置
        const randomX = Math.random() * (window.innerWidth - 150);
        const randomY = Math.random() * (window.innerHeight - 150);
        particle.style.left = `${randomX}px`;
        particle.style.top = `${randomY}px`;

        // 🔥 確率雲（ぼやけながら出現）
        setTimeout(() => {
            particle.style.opacity = "1";
            particle.style.transform = "scale(1.2)";
            particle.style.animation = "quantumFluctuate 0.5s infinite alternate";
        }, 300);

        // 🌊 波動関数の波紋
        const wave = document.createElement("div");
        wave.style.position = "absolute";
        wave.style.width = "150px";
        wave.style.height = "150px";
        wave.style.left = `${randomX - 70}px`;
        wave.style.top = `${randomY - 70}px`;
        wave.style.borderRadius = "50%";
        wave.style.backgroundColor = "rgba(0, 255, 255, 0.3)";
        wave.style.opacity = "0.8";
        wave.style.transform = "scale(0)";
        wave.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        document.body.appendChild(wave);

        setTimeout(() => {
            wave.style.transform = "scale(3)";
            wave.style.opacity = "0";
            setTimeout(() => wave.remove(), 1000);
        }, 500);

        // ⚛️ 量子トンネル効果（瞬間的なテレポート）
        setInterval(() => {
            const teleportX = Math.random() * (window.innerWidth - 150);
            const teleportY = Math.random() * (window.innerHeight - 150);
            particle.style.transition = "transform 0s"; // 瞬間移動なのでトランジションをオフ
            particle.style.left = `${teleportX}px`;
            particle.style.top = `${teleportY}px`;
            setTimeout(() => {
                particle.style.transition = "transform 0.5s ease-in-out"; // 徐々に元に戻す
            }, 50);
        }, 2000);

        // 💥 最後の消滅（波のように拡散）
        setTimeout(() => {
            particle.style.transition = "transform 0.8s ease-in-out, opacity 0.5s ease-in";
            particle.style.transform = "scale(0.1)";
            particle.style.opacity = "0";

            setTimeout(() => particle.remove(), 800);
        }, 5000);
    }

    // 🌊 CSS アニメーション
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes quantumFluctuate {
            0% { transform: scale(1.1); opacity: 0.7; filter: blur(1px); }
            100% { transform: scale(1); opacity: 1; filter: blur(0px); }
        }

        @keyframes quantumWave {
            0% { opacity: 0.8; transform: scale(0.5); }
            50% { opacity: 0.3; transform: scale(2); }
            100% { opacity: 0; transform: scale(3); }
        }
    `;
    document.head.appendChild(style);
});
