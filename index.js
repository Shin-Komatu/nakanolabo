window.addEventListener('load', () => {
    // スタンドの要素を作成
    const stand = document.createElement('div');
    stand.style.position = 'absolute';
    stand.style.width = '150px';
    stand.style.height = '150px';
    stand.style.backgroundColor = '#ff6347'; // スタンドの色（赤）
    stand.style.borderRadius = '50%'; // 丸い形
    stand.style.opacity = '0';
    stand.style.transform = 'scale(0) rotate(0deg)';
    stand.style.transition = 'transform 2s ease-in-out, opacity 2s ease-in-out';
    stand.style.transformOrigin = 'center';
    document.body.appendChild(stand);

    // ランダムな位置にスタンドを配置（画面内に収まるよう調整）
    const randomX = Math.random() * (window.innerWidth - 150); // スタンドの幅を考慮
    const randomY = Math.random() * (window.innerHeight - 150); // スタンドの高さを考慮
    stand.style.left = `${randomX}px`;
    stand.style.top = `${randomY}px`;

    // スタンドの登場アニメーション
    setTimeout(() => {
        stand.style.opacity = '1';
        stand.style.transform = 'scale(1.2) rotate(180deg)';
    }, 100);

    // 弾むアニメーションを追加
    setTimeout(() => {
        stand.style.transition = 'transform 1s ease-in-out';
        stand.style.transform = 'scale(1) rotate(360deg)';
        stand.style.animation = 'bounce 1s ease-in-out forwards';
    }, 2100);

    // 弾むアニメーションの定義をCSSに追加
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounce {
            0% {
                transform: translateY(0);
            }
            30% {
                transform: translateY(-30px);
            }
            50% {
                transform: translateY(10px);
            }
            70% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
