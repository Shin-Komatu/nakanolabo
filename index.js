window.addEventListener("load", () => {
    const numParticles = 8;
    const particles = [];

    // 🌟 セクションの出現アニメーション
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px) scale(0.95)";
        section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0) scale(1)";
        }, 1000 + index * 500);
    });

    // 🌟 フラッシュエフェクト
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 90%)";
    flash.style.opacity = "1";
    flash.style.zIndex = "999";
    flash.style.transition = "opacity 0.5s ease-out";
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 200);
    }, 50);

    // 🌌 干渉パターンの背景
    const interference = document.createElement("div");
    interference.style.position = "fixed";
    interference.style.top = "0";
    interference.style.left = "0";
    interference.style.width = "100%";
    interference.style.height = "100%";
    interference.style.background = "radial-gradient(circle, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 80%)";
    interference.style.opacity = "0";
    interference.style.zIndex = "-1";
    interference.style.transition = "opacity 1s ease-in-out";
    document.body.appendChild(interference);

    setTimeout(() => {
        interference.style.opacity = "0.8";
        setTimeout(() => interference.style.opacity = "0", 3000);
    }, 500);

    // 🌟 粒子（スタンドエフェクト）
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "12px";
        particle.style.height = "12px";
        particle.style.backgroundColor = "rgba(0, 255, 255, 0.9)";
        particle.style.opacity = "0";
        particle.style.borderRadius = "50%";
        particle.style.boxShadow = "0 0 30px rgba(0, 255, 255, 1)";
        particle.style.transform = "scale(0)";
        particle.style.transition = "transform 1s ease-out, opacity 0.5s ease-in";
        particle.style.zIndex = "100";
        document.body.appendChild(particle);
        particles.push(particle);

        const randomX = Math.random() * (window.innerWidth - 150);
        const randomY = Math.random() * (window.innerHeight - 150);
        particle.style.left = `${randomX}px`;
        particle.style.top = `${randomY}px`;

        setTimeout(() => {
            particle.style.opacity = "1";
            particle.style.transform = "scale(1.3)";
            particle.style.animation = "quantumFluctuate 0.5s infinite alternate, quantumSpin 1s linear infinite";
        }, 300);

        // 波動関数の波紋
        const wave = document.createElement("div");
        wave.style.position = "absolute";
        wave.style.width = "180px";
        wave.style.height = "180px";
        wave.style.left = `${randomX - 85}px`;
        wave.style.top = `${randomY - 85}px`;
        wave.style.borderRadius = "50%";
        wave.style.backgroundColor = "rgba(0, 255, 255, 0.2)";
        wave.style.opacity = "0.8";
        wave.style.transform = "scale(0)";
        wave.style.transition = "transform 1.2s ease-out, opacity 1.2s ease-out";
        wave.style.zIndex = "99";
        document.body.appendChild(wave);

        setTimeout(() => {
            wave.style.transform = "scale(3)";
            wave.style.opacity = "0";
            setTimeout(() => wave.remove(), 1200);
        }, 500);

        // 💥 最後の消滅
        setTimeout(() => {
            particle.style.transition = "transform 1s ease-in-out, opacity 0.5s ease-in";
            particle.style.transform = "scale(0.1)";
            particle.style.opacity = "0";
            setTimeout(() => particle.remove(), 1000);
        }, 5500);
    }

    // 🌊 CSS アニメーション
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes quantumFluctuate {
            0% { transform: scale(1.1); opacity: 0.7; filter: blur(1px); }
            100% { transform: scale(1); opacity: 1; filter: blur(0px); }
        }

        @keyframes quantumSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
