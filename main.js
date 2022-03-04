import './style.css'

import * as THREE from 'three';
// import { Curves } from "three/examples/jsm/curves/CurveExtras.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { LOD } from 'three';

const scene = new THREE.Scene();

			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

      const newcamera = new THREE.OrthographicCamera( -50, 50, 50 , -50, 0.1 , 100 );
      scene.add( newcamera );
      const newcamera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      newcamera2.position.set(0, 0 , -20);

      // you can enable grid helper to see the object in a grid pattern
      // Grid Helper
      // const gridhelper = new THREE.GridHelper(200, 50);
      // scene.add(gridhelper);

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

      // Camera Helper
      const camerahelper = new THREE.CameraHelper(newcamera);
      scene.add(camerahelper);
      const camerahelper2 = new THREE.CameraHelper(newcamera2);
      scene.add(camerahelper2);

// const geometry = new THREE.TorusKnotGeometry(10 ,3, 100 ,16);
// 			const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// 			const cube = new THREE.Mesh( geometry, material );

// 			scene.add( cube );

    // LOD(Level of Detail)
    // const lod = new THREE.LOD();
    // for ( let i = 0; i < 3 ; i++ ){
    //   const geometry = new THREE.IcosahedronGeometry(10, 3 , -1);
    //   const material = new THREE.MeshBasicMaterial( {
    //     color: 0xffffff
    //   });
    //   const mesh = new THREE.Mesh(geometry , material);
    //   lod.addLevel( mesh , i * 75 );

    // }
    // scene.add(lod);




     // TorousKnotGeometry
			const geometry = new THREE.TorusKnotGeometry(10 ,3, 100 ,16);
			const material = new THREE.MeshBasicMaterial( { 
        color: 0xe27ec2 ,
      wireframe: false} );
			const cube = new THREE.Mesh( geometry, material );
      cube.position.set(0 ,0 ,-30);
			scene.add( cube );

      const geometry2 = new THREE.BoxGeometry(5 ,5, 5);
      const material2 = new THREE.MeshStandardMaterial({
        color: 0xc0f8fe
      });
      const box = new THREE.Mesh(geometry2 , material2);
      box.position.set(0, 0, 0);
      scene.add(box);



      // Triangle
// var geomerty1 = new THREE.Geometry();
// geomerty1.vertices.push(
//   new THREE.Vector3(-10, 10, 0),
//   new THREE.Vector3(-10, -10, 0),
//   new THREE.Vector3(10, -10, 0)
// );
// geomerty1.faces.push( new THREE.Face3(0 ,1, 2));
// const material1 = new THREE.MeshLambertMaterial({color: 0xffffff});
// var triangle = new THREE.Mesh(geomerty1 , material1);
// triangle.position.z = -1000;
// scene.add(triangle);


      // Curves
      // const curve = new Curves.GrannyKnot();
      
      // const geometry1 = new THREE.TubeGeometry(curve , 100, 2, 8, true);
      // const material1 = new THREE.MeshBasicMaterial({
      //   color: 0xffffff,
      //   wireframe: true,
      // });
      // const tube = new THREE.Mesh(geometry1 , material1);
      // scene.add(tube);
     


        // Shapes
      // var x = 12;
      // var y = 8;

      // const shape = new THREE.Shape();
      // shape.moveTo( x + 25 , y + 25 );
      // shape.bezierCurveTo( x + 25 , y + 25 , x + 28 , y , x ,y);
      // shape.bezierCurveTo(x - 30 , y ,x - 30 , y + 35 , x - 30 , y + 35);
      // shape.bezierCurveTo(x - 30 , y ,x - 30 , y + 35 , x - 30 , y + 35);
      // shape.bezierCurveTo(x - 30 , y ,x - 30 , y + 35 , x - 30 , y + 35);
      // shape.bezierCurveTo(x - 30 , y ,x - 30 , y + 35 , x - 30 , y + 35);
      // shape.bezierCurveTo(x - 30 , y ,x - 30 , y + 35 , x - 30 , y + 35);

      
      // const extrudeSettings = {
      //   steps: 2,
      //   depth: 16,
      //   bevelEnabled: true,
      //   bevelThickness: 1,
      //   bevelSize: 1,
      //   bevelOffset: 0,
      //   bevelSegments: 1
      // };
      
      // const geometry = new THREE.ShapeGeometry( shape, extrudeSettings );
      // const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
      // const mesh = new THREE.Mesh( geometry, material ) ;
      // scene.add( mesh );


      // Lights
      const light = new THREE.DirectionalLight(0xfb131f , 0.4);
      light.position.set(0, 0, 15);
      scene.add(light);

      const lighthelper = new THREE.DirectionalLightHelper(light);
      scene.add(lighthelper);

      const ambientlight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientlight);
    
      const pointlight = new THREE.PointLight(0x128c13 , 0.9);
      pointlight.position.set(5 ,0 ,10)
      scene.add(pointlight);

      const pointlighthelper = new THREE.PointLightHelper(pointlight);
      scene.add(pointlighthelper);


      // this is used for orbitcontrols
      const controls = new OrbitControls(camera, renderer.domElement);

			// camera.position.set(50 , 20 ,0);
      // camera.rotateOnAxis( (0 ,0 ,10),30);
        // camera.rotation.set(0 ,0 ,19);
        camera.position.z = 50;
			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;

				renderer.render( scene, camera );
        // you can choose the camera by giving the camera name in the renderer.render function
        controls.update();
			};

			animate();
