import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.140.0/build/three.min.js';

// Сцена
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Освещение
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Материалы
const material = new THREE.MeshPhongMaterial({ color: 0xdddddd });

// Создание модели зуба
const toothGeometry = new THREE.CylinderGeometry(0.5, 1, 2, 32);
const tooth = new THREE.Mesh(toothGeometry, material);
scene.add(tooth);

// Анимация
function animate() {
    requestAnimationFrame(animate);
    tooth.rotation.x += 0.01;
    tooth.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
