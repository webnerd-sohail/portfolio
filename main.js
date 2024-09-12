import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { rgbShift } from 'three/webgpu';

//create a scene with background #f0f0f0

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

//Create a camera

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;

// create a cube object

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshLambertMaterial({ color: "#00d5ff", emissive : "#00d5ff"});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// add lightning 

const light  =  new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set = (1,1,1);

scene.add(light);


//seetup a renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// lets animate the scene \

function animate()
{
    
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);


}

animate();


// i did successfully animation of the cube. 

// add controls

