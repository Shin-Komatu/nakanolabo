function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // ランダムな位置で粒子を生成
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    particle.style.left = `${xPos}px`;
    particle.style.top = `${yPos}px`;

    // ランダムに動かす
    setInterval(() => {
        const xMove = (Math.random() - 0.5) * 200; // -100px から 100px
        const yMove = (Math.random() - 0.5) * 200; // -100px から 100px
        particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
    }, 200);

    // 一定時間後に削除
    setTimeout(() => {
        particle.remove();
    }, 3000); // 3秒後に削除
}

// 定期的に粒子を生成
setInterval(createParticle, 200); // 0.2秒ごとに生成


