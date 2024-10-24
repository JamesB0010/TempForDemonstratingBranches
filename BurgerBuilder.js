import * as THREE from 'three';

class BurgerBuilder {
    burger;

    burgerPartGeom;

    breadMaterial;

    LettuiceMaterial;

    PattyMaterial;

    constructor(){
        this.burgerPartGeom = new THREE.CapsuleGeometry(1, 1, 4, 8);

        this.breadMaterial = new THREE.MeshBasicMaterial({ color: 0xed8611 });

        this.LettuiceMaterial = new THREE.MeshBasicMaterial({ color: 0x3dd31d });

        this.PattyMaterial = new THREE.MeshBasicMaterial({ color: 0x662d1a });
    }
    StartBuildingBurger() {
        this.burger = new THREE.Group();
        return this;
    }

    AddBottomBread() {
        const bottomBreadMesh = new THREE.Mesh(this.burgerPartGeom, this.breadMaterial);
        this.burger.add(bottomBreadMesh);
        bottomBreadMesh.rotateZ(Math.PI / 2);
        bottomBreadMesh.scale.x = 0.35;
        bottomBreadMesh.position.y -= 0.8;
        return this;
    }

    AddTopBread() {
        const topBreadMesh = new THREE.Mesh(this.burgerPartGeom, this.breadMaterial);
        this.burger.add(topBreadMesh);
        topBreadMesh.rotateZ(Math.PI / 2);
        topBreadMesh.scale.x = 0.35;
        topBreadMesh.position.y += 1.5;
        return this;
    }

    AddLettuice() {
        const letticeMesh = new THREE.Mesh(this.burgerPartGeom, this.LettuiceMaterial);
        this.burger.add(letticeMesh);
        letticeMesh.position.y += 1;
        letticeMesh.rotateZ(Math.PI / 2);
        letticeMesh.rotateX(Math.PI / 6)
        letticeMesh.scale.x = 0.1;

        const letticeMesh2 = new THREE.Mesh(this.burgerPartGeom, this.LettuiceMaterial);

        this.burger.add(letticeMesh2);
        letticeMesh2.position.y += 0.7;
        letticeMesh2.rotateZ(Math.PI / 2);
        letticeMesh2.rotateX(-Math.PI / 6)
        letticeMesh2.scale.x = 0.1;

        const letticeMesh3 = new THREE.Mesh(this.burgerPartGeom, this.LettuiceMaterial);
        this.burger.add(letticeMesh3);
        letticeMesh3.position.y += 0.6;
        letticeMesh3.rotateZ(Math.PI / 2);
        letticeMesh3.rotateX(-Math.PI / 3)
        letticeMesh3.scale.x = 0.1;
        return this;
    }

    AddPatty() {
        const pattyMesh = new THREE.Mesh(this.burgerPartGeom, this.PattyMaterial);
        this.burger.add(pattyMesh);
        pattyMesh.rotateZ(Math.PI / 2);
        pattyMesh.scale.x = 0.5;
        return this;
    }
}


export default BurgerBuilder;