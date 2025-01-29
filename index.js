window.addEventListener('load', () => {
    // スタンドの要素を作成
    const stand = document.createElement('div');
    stand.style.position = 'absolute';
    stand.style.width = '150px';
    stand.style.height = '150px';
    stand.style.backgroundColor = '#ff6347'; // スタンドの色（赤）
    stand.style.borderRadius = '50%'; // 丸い形
    stand.style.opacity = '0';
    stand.style.transform = 'scale(0) rotate(0deg) translateY(-50px)';
    stand.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
    stand.style.transformOrigin = 'center';
    document.body.appendChild(stand);

    // ランダムな位置にスタンドを配置（画面内に収まるよう調整）
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 150);
    stand.style.left = `${randomX}px`;
    stand.style.top = `${randomY}px`;

    // スタンドの登場アニメーション
    setTimeout(() => {
        stand.style.opacity = '1';
        stand.style.transform = 'scale(1.2) rotate(360deg) translateY(0)';
    }, 100);

    // 2回目の動き（ゆっくり回転しながら小さくなる）
    setTimeout(() => {
        stand.style.transition = 'transform 1.5s ease-in-out';
        stand.style.transform = 'scale(1) rotate(720deg) translateY(0)';
    }, 2000);

    // フワフワと動くアニメーションの追加
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
            100% {
                transform: translateY(0) rotate(0deg);
            }
        }
        
        .floating {
            animation: float 3s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // 最終的にフワフワと揺れる動きを適用
    setTimeout(() => {
        stand.classList.add('floating');
    }, 3500);
});
