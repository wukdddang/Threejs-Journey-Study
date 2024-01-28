import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// ? Scene
const scene = new THREE.Scene();

// ? Object
// * Geometry
//  Object의 형태
const geometry = new THREE.BoxGeometry(1, 1, 1);
// * Material
// Object의 재질. 색상, 질감 등
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// * Mesh
// Geometry + Material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// ? Sizes: Camera의 비율을 정해주기 위한 값
const sizes = {
  width: 800,
  height: 600,
};

// ? Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// ? Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
