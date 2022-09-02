import React, { Suspense, useState, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

const ThreeGlbs = ({
  scale = 1,
  glb = "/models/2.glb",
  position = [0, 0, 0],
  rotationSpeed = 0.01,
}) => {
  const gltf = useLoader(GLTFLoader, glb);
  const ref = useRef(null);
  const [hovered, set] = useState(false);
  useFrame(() => (ref.current.rotation.y += rotationSpeed));

  return (
    <>
      <primitive
        ref={ref}
        position={position}
        object={gltf.scene}
        scale={scale}
      ></primitive>
    </>
  );
};

export default ThreeGlbs;
