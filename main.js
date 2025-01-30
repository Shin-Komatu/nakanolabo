import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.*;

public class StandEffect extends JPanel implements ActionListener {
    private static final int MAX_MANNEQUINS = 1;  // マネキンの数
    private Timer timer;
    private java.util.List<Mannequin> mannequins;

    public StandEffect() {
        mannequins = new ArrayList<>();
        timer = new Timer(16, this); // 約60fpsで更新
        timer.start();
    }

    // マネキンクラス
    class Mannequin {
        int x, y, size, speed, direction;
        boolean isShooting, isSplitting;
        int shootProgress;  // カメハメ波の進行
        List<Particle> particles; // 分裂したパーティクル

        public Mannequin(int x, int y) {
            this.x = x;
            this.y = y;
            this.size = 20;
            this.speed = 4;
            this.direction = 1; // 発射方向
            this.isShooting = true; // 初めはカメハメ波を発射する
            this.isSplitting = false;
            this.shootProgress = 0;
            this.particles = new ArrayList<>();
        }

        public void update() {
            if (isShooting) {
                shootProgress++;
                if (shootProgress > 100) {  // 100フレーム後に分裂
                    isShooting = false;
                    isSplitting = true;
                    createParticles();
                }
            }

            if (isSplitting) {
                // パーティクルが移動して、透明度が減少
                for (Iterator<Particle> it = particles.iterator(); it.hasNext(); ) {
                    Particle p = it.next();
                    p.update();
                    if (p.opacity <= 0) {
                        it.remove(); // 透明度が0になったら削除
                    }
                }
            }
        }

        public void draw(Graphics g) {
            if (isShooting) {
                // カメハメ波の発射
                g.setColor(new Color(0, 255, 255));
                g.fillRect(x + size / 2, y, 10 + shootProgress / 2, 5);  // 波を発射
            }

            // マネキン本体
            g.setColor(Color.GRAY);
            g.fillRect(x - size / 2, y - size / 2, size, size * 2); // 体
            g.fillRect(x - size / 4, y - size, size / 2, size); // 頭

            // 分裂したパーティクル
            for (Particle p : particles) {
                p.draw(g);
            }
        }

        private void createParticles() {
            // 分裂パーティクルを生成
            for (int i = 0; i < 10; i++) {
                int particleX = x + size / 2;
                int particleY = y;
                particles.add(new Particle(particleX, particleY));
            }
        }
    }

    // パーティクルクラス（分裂したパーツ）
    class Particle {
        int x, y, size, speedX, speedY;
        float opacity;

        public Particle(int x, int y) {
            this.x = x;
            this.y = y;
            this.size = 5;
            this.speedX = (int) (Math.random() * 6 - 3); // ランダムに左右に移動
            this.speedY = (int) (Math.random() * 6 - 3); // ランダムに上下に移動
            this.opacity = 1.0f;
        }

        public void update() {
            x += speedX;
            y += speedY;
            opacity -= 0.02f; // 徐々に透明になる
        }

        public void draw(Graphics g) {
            g.setColor(new Color(255, 255, 0, Math.max(0, (int)(opacity * 255))));
            g.fillOval(x, y, size, size);
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (mannequins.isEmpty()) {
            mannequins.add(new Mannequin(getWidth() / 2, getHeight() / 2)); // 初期マネキンを画面中央に配置
        }

        // マネキンを更新
        for (Mannequin mannequin : mannequins) {
            mannequin.update();
        }

        repaint(); // 再描画を要求
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // マネキンを描画
        for (Mannequin mannequin : mannequins) {
            mannequin.draw(g);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("デキリコスタンドエフェクト");
        StandEffect panel = new StandEffect();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);
        frame.add(panel);
        frame.setVisible(true);
    }
}
