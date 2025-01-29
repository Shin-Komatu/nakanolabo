window.addEventListener('load', () => {
    // スタンドの要素を作成
    const stand = document.createElement('div');
    stand.style.position = 'absolute';
    stand.style.width = '150px';
    stand.style.height = '150px';
    stand.style.backgroundColor = '#ff4500';
    stand.style.opacity = '0';
    stand.style.transform = 'scale(0) rotate(0deg) translateY(-50px)';
    stand.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease-out';
    stand.style.transformOrigin = 'center';
    stand.style.boxShadow = '0 0 20px rgba(255, 69, 0, 0.8)';
    document.body.appendChild(stand);

    // スタンドを変形させるための初期設定
    stand.style.clipPath = 'polygon(50% 0%, 100% 100%, 0% 100%)'; // 三角形

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

    // スタンドの登場時にフラッシュを追加
    setTimeout(() => {
        stand.style.opacity = '1';
        stand.style.transform = 'scale(1.5) rotate(360deg) translateY(0)';
        text.style.opacity = '1';
        text.style.transform = 'scale(1)';
    }, 100); // 100ms後にフラッシュ効果

    // フラッシュ後にスタンドの形状を変形させるアニメーション
    setTimeout(() => {
        stand.style.transition = 'transform 1s ease-in-out, clip-path 2s ease-in-out';
        stand.style.transform = 'scale(1.2) rotate(720deg)';
        stand.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'; // 三角形から五角形に変形
    }, 1500); // フラッシュが終わった後に形状変化を開始

    // 衝撃波のような揺れ
    setTimeout(() => {
        stand.style.transition = 'transform 0.5s ease-in-out';
        stand.style.transform = 'scale(1) rotate(1080deg)';
    }, 2500);

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

        @keyframes shake {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-5px, 5px); }
            50% { transform: translate(5px, -5px); }
            75% { transform: translate(-5px, -5px); }
            100% { transform: translate(0, 0); }
        }

        .floating {
            animation: float 3s ease-in-out infinite, aura 1.5s infinite alternate, shake 0.2s infinite;
        }
    `;
    document.head.appendChild(style);

    // 最終的にフワフワと揺れる動きを適用
    setTimeout(() => {
        stand.classList.add('floating');
    }, 3500); // 形状変化後に揺れるアニメーションを適用
});
