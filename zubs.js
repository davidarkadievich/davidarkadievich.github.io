// Импорт основных компонентов Three.js
import * as THREE from 'https://unpkg.com/three@0.132.2/build/three.module.js';

// Создание сцены
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

// Материал
const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

// Геометрия зуба: конус и цилиндр
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);

// Меш (сетка) для конуса и цилиндра
const cone = new THREE.Mesh(coneGeometry, material);
const cylinder = new THREE.Mesh(cylinderGeometry, material);

cone.position.y = 1;
cylinder.position.y = -1;

scene.add(cone);
scene.add(cylinder);

// Функция анимации
function animate() {
  requestAnimationFrame(animate);
  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
