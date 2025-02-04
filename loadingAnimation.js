document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("animationCanvas");

    // **キャンバスが存在しない場合は作成**
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "animationCanvas";
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");

    // **キャンバスのスタイルを設定して背景に固定**
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1"; // 背景として表示
    canvas.style.pointerEvents = "none"; // クリックを邪魔しない

    // **キャンバスのサイズを更新**
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const colors = ["#00FF00", "#FF7F00"];

    function drawDiamond(x, y, size, color) {
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size, y);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function animateSphere(x, y, radius, color, angle) {
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x + xOffset, y + yOffset, 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawEnergyBeam(x, y, size) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    let angle = 0;
    let radius = 50;
    let diamondSize = 60;
    let energyBeamSize = 20;
    let startTime = Date.now();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        drawDiamond(centerX, centerY, diamondSize, "blue");

        angle += 0.05;
        animateSphere(centerX, centerY, radius, colors[0], angle);

        const timeElapsed = (Date.now() - startTime) / 1000;
        energyBeamSize = Math.sin(timeElapsed * Math.PI) * 60 + 20;

        drawEnergyBeam(centerX, centerY - 100, energyBeamSize);

        requestAnimationFrame(animate);
    }

    animate();
});

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 5);
controls.update();

// ライト設定
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// マネキンの読み込み
const loader = new GLTFLoader();
let mannequin;
loader.load('https://example.com/mannequin.glb', (gltf) => {
    mannequin = gltf.scene;
    mannequin.scale.set(1, 1, 1);
    scene.add(mannequin);
});

// カメハメ波の球体
const kamehamehaGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const kamehamehaMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff });
const kamehameha = new THREE.Mesh(kamehamehaGeometry, kamehamehaMaterial);
kamehameha.visible = false;
scene.add(kamehameha);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

function triggerKamehameha() {
    if (!mannequin) return;
    
    kamehameha.visible = true;
    kamehameha.position.set(0, 1.5, 0);
    
    gsap.to(kamehameha.position, {
        z: -5,
        duration: 1.5,
        onComplete: () => {
            splitEffect();
        }
    });
}

function splitEffect() {
    for (let i = 0; i < 5; i++) {
        const fragment = kamehameha.clone();
        scene.add(fragment);
        fragment.position.set(kamehameha.position.x, kamehameha.position.y, kamehameha.position.z);
        gsap.to(fragment.position, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
            z: fragment.position.z - 1,
            duration: 1,
            onComplete: () => {
                gsap.to(fragment.material, { opacity: 0, duration: 0.5, onComplete: () => scene.remove(fragment) });
            }
        });
    }
    gsap.to(kamehameha.material, { opacity: 0, duration: 0.5, onComplete: () => { scene.remove(kamehameha); } });
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        triggerKamehameha();
    }
});
