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
    { glb: "97.glb", rotationSpeed: 0.01, scale: 2, position: [20, 20, 20] },
    { glb: "1.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    {
      glb: "3.glb",
      rotationSpeed: 0.01,
      scale: 0.03,
      position: [30, 30, 30],
    },
    {
      glb: "4.glb",
      rotationSpeed: 0.01,
      scale: 0.007,
      position: [40, 40, 40],
    },
    { glb: "5.glb", rotationSpeed: 0.01, scale: 2, position: [-50, -50, -50] },
    {
      glb: "6.glb",
      rotationSpeed: 0.01,
      scale: 2,
      position: [15, 15, 15],
    },
    {
      glb: "7.glb",
      rotationSpeed: 0.01,
      scale: 2,
      position: [-150, -150, 10],
    },
    { glb: "8.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 45] },
    // { glb: "10.glb", rotationSpeed: 0.01, scale: 2, position: [0, -100, -900] },
    // { glb: "10.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "11.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "12.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "13.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "14.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "15.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "16.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "17.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "18.glb", rotationSpeed: 0.01, scale: 2, position: [0, 0, 0] },
    // { glb: "2.glb", rotationSpeed: 0.01, scale: 0.05, position: [0, 0, 0] },
  ];

  return (
    <>
      <Canvas
        shadows={true}
        className={"canvas"}
        camera={{
          position: [7, 7, 7],
        }}
      >
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <ambientLight intensity={0.5} />
        <CameraControls></CameraControls>

        {/* <ThreeGlbs
          rotationSpeed={0.005}
          scale={2}
          position={[20, 20, 20]}
          glb="/models/2.glb"
        /> */}
        {/* 
        <Environment preset="forest" background={true} /> */}

        {GlbArr.map((GlbObj, index) => {
          return (
            <ThreeGlbs
              key={index}
              rotationSpeed={GlbObj.rotationSpeed}
              scale={GlbObj.scale}
              position={[
                GlbObj.position[0],
                GlbObj.position[1],
                GlbObj.position[2],
              ]}
              glb={`/models/${GlbObj.glb}`}
            ></ThreeGlbs>
          );
        })}
      </Canvas>
    </>
  );
};
