import React from "react";
import { useState } from "react";
import { useGLTF } from "@react-three/drei";

const GlbModel = ({ wireframe, ...props }) => {
  const [hovered, spread] = useHover();
  const { nodes } = useGLTF("/models/1.glb");
  return (
    <group {...props} {...spread} dispose={null}>
      <mesh>
        <meshStandardMaterial
          color={hovered ? "red" : "green"}
          roughness={0}
          metalness={0.8}
          envMapIntensity={2}
          wireframe={wireframe}
        />
      </mesh>
      <mesh>
        <meshStandardMaterial
          color="black"
          envMapIntensity={0}
          wireframe={wireframe}
        />
      </mesh>
    </group>
  );
};

function useHover() {
  const [hovered, hover] = useState(false);
  return [
    hovered,
    {
      onPointerOver: (e) => (e.stopPropagation(), hover(true)),
      onPointerOut: () => hover(false),
    },
  ];
}

export default GlbModel;
