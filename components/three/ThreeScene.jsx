import React, { Suspense } from "react";
import ThreeGlbs from "./ThreeGlbs";
import { Canvas } from "@react-three/fiber";
import {
  View,
  Bounds,
  OrthographicCamera,
  CameraShake,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ArcballControls,
  TransformControls,
} from "@react-three/drei";
import useRefs from "react-use-refs";
import CameraControls from "./CameraControls";
import GlbModel from "./GlbModel";

export const ThreeScene = () => {
  const GlbArr = [
    { glb: "19.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    { glb: "2.glb", rotationSpeed: 0.01, scale: 0.05, position: [5, 5, 5] },
    { glb: "3.glb", rotationSpeed: 0.01, scale: 0.007, position: [10, 10, 10] },
    { glb: "4.glb", rotationSpeed: 0.01, scale: 0.007, position: [15, 15, 15] },
    { glb: "5.glb", rotationSpeed: 0.01, scale: 2, position: [20, 20, 20] },
    { glb: "6.glb", rotationSpeed: 0.01, scale: 2, position: [25, 25, 25] },
    { glb: "7.glb", rotationSpeed: 0.01, scale: 2, position: [-5, -5, -5] },
    { glb: "8.glb", rotationSpeed: 0.01, scale: 2, position: [-10, -10, -10] },
    { glb: "9.glb", rotationSpeed: 0.01, scale: 2, position: [-15, -15, -15] },
    { glb: "10.glb", rotationSpeed: 0.01, scale: 2, position: [-20, -20, -20] },
    { glb: "11.glb", rotationSpeed: 0.01, scale: 2, position: [-25, -25, -25] },
    { glb: "12.glb", rotationSpeed: 0.01, scale: 2, position: [-30, -30, -30] },
    { glb: "13.glb", rotationSpeed: 0.01, scale: 2, position: [-5, -5, 5] },
    { glb: "14.glb", rotationSpeed: 0.01, scale: 2, position: [-10, -10, 10] },
    { glb: "15.glb", rotationSpeed: 0.01, scale: 2, position: [-20, -20, 20] },
    { glb: "16.glb", rotationSpeed: 0.01, scale: 2, position: [40, 40, 40] },
    { glb: "17.glb", rotationSpeed: 0.01, scale: 2, position: [35, 35, 35] },
    { glb: "18.glb", rotationSpeed: 0.01, scale: 2, position: [-35, -35, -35] },
    { glb: "1.glb", rotationSpeed: 0.01, scale: 2, position: [-40, -40, -40] },
  ];

  return (
    <>
      <Canvas
        shadows={true}
        className={"canvas"}
        camera={{
          position: [-7, 7, 7],
        }}
      >
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />

        <CameraControls></CameraControls>

        {/*
        <ThreeGlbs
          rotationSpeed={0.005}
          scale={2}
          position={[20, 20, 20]}
          glb="/models/2.glb"
        />
         */}
        <Environment preset="forest" background={false} />

        {GlbArr.map((GlbObj, index) => {
          return (
            <ThreeGlbs
              key={index}
              rotationSpeed={GlbObj.rotationSpeed}
              scale={GlbObj.scale}
              position={[index, index, GlbObj.position[1]]}
              glb={`/models/${GlbObj.glb}`}
            />
          );
        })}
      </Canvas>
    </>
  );
};
