import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

//create a scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');

//camera 

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 4;

//create a object

const geometry = new THREE.DodecahedronGeometry(1.1, 0);
const material = new THREE.MeshLambertMaterial({ color: "#fdff00", emissive : "#004444"});

const decahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: "#00d5ff", emissive : "#00d5ff"});


const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -2;

scene.add(box);
scene.add(decahedron);


//light 

const light = new THREE.SpotLight( 0x056769, 105, 45.9, 90, 1, 1);

light.position.set( 1.1,1,2 );
scene.add(light);
light.castShadow = true;


const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// ADD orbit controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//add animation 

function animate() {
    requestAnimationFrame(animate);
    decahedron.rotation.x += 0.01;
    decahedron.rotation.y += 0.01;
    box.rotation.y += 0.005;
    renderer.render(scene, camera);
    controls.update();
    renderer.render( scene, camera );
}

animate();