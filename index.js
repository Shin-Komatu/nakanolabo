// `animationComplete` イベントを待ってから実行
window.addEventListener("animationComplete", () => {
    console.log("✅ アニメーションが完了しました！index.js の処理を開始します。");

    const numParticles = 8;
    const particles = [];

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px) scale(0.95)";
        section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0) scale(1)";
        }, 500 + index * 500);
    });

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
        }, 300);

        setTimeout(() => {
            particle.style.transition = "transform 1s ease-in-out, opacity 0.5s ease-in";
            particle.style.transform = "scale(0.1)";
            particle.style.opacity = "0";
            setTimeout(() => particle.remove(), 1000);
        }, 5500);
    }
});
