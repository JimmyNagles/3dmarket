import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Model = dynamic(() => import("../ModelViewer"), {
  ssr: false,
});
const ProfileCircle = ({ glb = "/models/plant.glb" }) => {
  return (
    <div className="w-full h-full items-center flex justify-center ">
      <div className="w-[150px] h-[150px] ">
        <Model glb={glb}></Model>
      </div>
    </div>
  );
};

export default ProfileCircle;
