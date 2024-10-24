//Setup Scene
import * as THREE from "three";
import SetupHelper from './SceneSetupHelper.js'
import BurgerBuilder from './BurgerBuilder.js'
const setupHelper = new SetupHelper();
setupHelper.SetAnimationLoop(animate);


//get important references
const renderer = setupHelper.renderer;
const scene = setupHelper.scene;
const camera = setupHelper.camera;


//Build burger
const burgerBuilder = new BurgerBuilder();

for(let i = 0; i < 10; i++){
    burgerBuilder.StartBuildingBurger().AddBottomBread().AddPatty().AddLettuice().AddTopBread();
    const burger = burgerBuilder.burger;

    const randomX = Math.random() * (10 + 10) - 10;

    const randomY = Math.random() * (10 + 10) - 10;

    const randomZ = Math.random() * (10 + 10) - 10;

    burger.position.set(randomX, randomY, randomZ)

    scene.add(burger);

}



//animate loop func
function animate() 
{
	renderer.render( scene, camera );
}