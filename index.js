window.addEventListener('load', () => {
    // スタンドの要素を作成
    const stand = document.createElement('div');
    stand.style.position = 'absolute';
    stand.style.width = '150px';
    stand.style.height = '150px';
    stand.style.backgroundColor = '#ff4500'; // ジョジョ風の赤オレンジ
    stand.style.borderRadius = '50%';
    stand.style.opacity = '0';
    stand.style.transform = 'scale(0) rotate(0deg) translateY(-50px)';
    stand.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease-out';
    stand.style.boxShadow = '0 0 20px rgba(255, 69, 0, 0.8)';
    stand.style.filter = 'blur(5px)';
    stand.style.transformOrigin = 'center';
    document.body.appendChild(stand);

    // ゴゴゴゴエフェクト
    const text = document.createElement('div');
    text.innerText = 'ゴゴゴゴゴ';
    text.style.position = 'absolute';
    text.style.fontSize = '50px';
    text.style.color = 'purple';
    text.style.fontWeight = 'bold';
    text.style.opacity = '0';
    text.style.transform = 'scale(0)';
    text.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    document.body.appendChild(text);

    // ランダムな位置に配置
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 150);
    stand.style.left = `${randomX}px`;
    stand.style.top = `${randomY}px`;
    text.style.left = `${randomX - 50}px`;
    text.style.top = `${randomY - 80}px`;

    // スタンドの登場アニメーション
    setTimeout(() => {
        stand.style.opacity = '1';
        stand.style.transform = 'scale(1.5) rotate(360deg) translateY(0)';
        stand.style.filter = 'blur(0)';
        text.style.opacity = '1';
        text.style.transform = 'scale(1)';
    }, 100);

    // 2回目の動き（衝撃波のような揺れ）
    setTimeout(() => {
        stand.style.transition = 'transform 0.5s ease-in-out';
        stand.style.transform = 'scale(1.2) rotate(720deg)';
        text.style.transition = 'transform 0.5s ease-in-out';
        text.style.transform = 'scale(1.2)';
    }, 1600);

    setTimeout(() => {
        stand.style.transition = 'transform 1s ease-in-out';
        stand.style.transform = 'scale(1) rotate(1080deg)';
        text.style.transition = 'opacity 1s ease-in-out';
        text.style.opacity = '0';
    }, 2200);

    // フワフワと動くアニメーション
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-10px) rotate(5deg) scale(1.1); }
            50% { transform: translateY(10px) rotate(-5deg) scale(1); }
            75% { transform: translateY(-5px) rotate(3deg) scale(1.05); }
            100% { transform: translateY(0) rotate(0deg) scale(1); }
        }

        @keyframes aura {
            0% { box-shadow: 0 0 20px rgba(255, 69, 0, 0.8); }
            50% { box-shadow: 0 0 40px rgba(255, 165, 0, 1); }
            100% { box-shadow: 0 0 20px rgba(255, 69, 0, 0.8); }
        }

        .floating {
            animation: float 3s ease-in-out infinite, aura 1.5s infinite alternate;
        }
    `;
    document.head.appendChild(style);

    // 最終的にフワフワと揺れる動きを適用
    setTimeout(() => {
        stand.classList.add('floating');
    }, 3000);
});
