import * as THREE from 'three';
class SceneSetupHelper{
    scene;
    camera;
    renderer;
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer(); // Define the renderer here

        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );
        this.camera.position.z = 5;
    }

    SetAnimationLoop(AnimLoopFunc){
        this.renderer.setAnimationLoop(AnimLoopFunc);
    }
}

export default SceneSetupHelper;
