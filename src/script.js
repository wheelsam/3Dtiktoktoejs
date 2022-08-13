import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let INTERSECTED;

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(2, 2, 2,10,10,10)
const dstep = 10

const material = new THREE.MeshBasicMaterial({
    wireframe: false
})

const mesh1 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({
    color: "837392"
}))
const mesh0 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mesh2 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
mesh1.position.x = dstep
mesh2.position.x = -dstep

const mesh3 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mesh4 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
mesh3.position.y = dstep
mesh4.position.y = -dstep

const mesh5 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mesh6 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
mesh5.position.y = dstep; mesh5.position.x = dstep; 
mesh6.position.y = dstep; mesh6.position.x = -dstep; 

const mesh7 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mesh8 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
mesh7.position.y = -dstep; mesh7.position.x = dstep; 
mesh8.position.y = -dstep; mesh8.position.x = -dstep;

const mz1 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz2 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz3 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz4 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz5 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz6 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz7 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz8 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz9 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())

const mz10 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz20 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz30 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz40 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz50 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz60 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz70 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz80 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())
const mz90 = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial())

mz1.position.x = mesh0.position.x; mz1.position.y = mesh0.position.y;
mz2.position.x = mesh1.position.x; mz2.position.y = mesh1.position.y;
mz3.position.x = mesh2.position.x; mz3.position.y = mesh2.position.y;
mz4.position.x = mesh3.position.x; mz4.position.y = mesh3.position.y;
mz5.position.x = mesh4.position.x; mz5.position.y = mesh4.position.y;
mz6.position.x = mesh5.position.x; mz6.position.y = mesh5.position.y;
mz7.position.x = mesh6.position.x; mz7.position.y = mesh6.position.y;
mz8.position.x = mesh7.position.x; mz8.position.y = mesh7.position.y;
mz9.position.x = mesh8.position.x; mz9.position.y = mesh8.position.y;

mz10.position.x = mesh0.position.x; mz10.position.y = mesh0.position.y; 
mz20.position.x = mesh1.position.x; mz20.position.y = mesh1.position.y; 
mz30.position.x = mesh2.position.x; mz30.position.y = mesh2.position.y; 
mz40.position.x = mesh3.position.x; mz40.position.y = mesh3.position.y; 
mz50.position.x = mesh4.position.x; mz50.position.y = mesh4.position.y; 
mz60.position.x = mesh5.position.x; mz60.position.y = mesh5.position.y; 
mz70.position.x = mesh6.position.x; mz70.position.y = mesh6.position.y; 
mz80.position.x = mesh7.position.x; mz80.position.y = mesh7.position.y; 
mz90.position.x = mesh8.position.x; mz90.position.y = mesh8.position.y; 


mz1.position.z = dstep; mz10.position.z = -dstep
mz2.position.z = dstep; mz20.position.z = -dstep
mz3.position.z = dstep; mz30.position.z = -dstep
mz4.position.z = dstep; mz40.position.z = -dstep
mz5.position.z = dstep; mz50.position.z = -dstep
mz6.position.z = dstep; mz60.position.z = -dstep
mz7.position.z = dstep; mz70.position.z = -dstep
mz8.position.z = dstep; mz80.position.z = -dstep
mz9.position.z = dstep; mz90.position.z = -dstep

scene.add(mesh0); scene.add(mz1); scene.add(mz10)
scene.add(mesh1); scene.add(mz2); scene.add(mz20)
scene.add(mesh2); scene.add(mz3); scene.add(mz30)
scene.add(mesh3); scene.add(mz4); scene.add(mz40)
scene.add(mesh4); scene.add(mz5); scene.add(mz50)
scene.add(mesh5); scene.add(mz6); scene.add(mz60)
scene.add(mesh6); scene.add(mz7); scene.add(mz70)
scene.add(mesh7); scene.add(mz8); scene.add(mz80)
scene.add(mesh8); scene.add(mz9); scene.add(mz90)

console.log(canvas.firstChild)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)

controls.enableDamping = true
console.log(scene.children.domElement)

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 4))

// Animate
const clock = new THREE.Clock()

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

    const intersects = raycaster.intersectObjects( scene.children, false );

    if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

            if (INTERSECTED) { INTERSECTED.scale.x =1; INTERSECTED.scale.y =1; INTERSECTED.scale.z =1; INTERSECTED.rotation.x = 0; INTERSECTED.rotation.y = 0;}

            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.scale.x = 2; INTERSECTED.scale.y =2; INTERSECTED.scale.z =2; 
            // INTERSECTED.material.wireframe = true
        }

        if (INTERSECTED) {INTERSECTED.rotation.x +=0.02;}

    } else {
        if ( INTERSECTED ) { INTERSECTED.scale.x =1; INTERSECTED.scale.y =1; INTERSECTED.scale.z =1; INTERSECTED.rotation.x = 0; INTERSECTED.rotation.y = 0;}
        INTERSECTED = null
    }

    renderer.render( scene, camera );
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
window.addEventListener( 'pointermove', onPointerMove );
tick()



