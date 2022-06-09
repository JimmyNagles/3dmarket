import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import CollectionsGrid from "../../components/Grid/CollectionsGrid";
import CollectionCard from "../../components/Cards/CollectionCard";
const ModelView = dynamic(() => import("../../components/ModelViewer"), {
  ssr: false,
});
const Market = () => {
  return (
    <div className="">
      <Head>
        <title>3d Market </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CollectionsGrid>
        <CollectionCard
          CollecitonGlb="/models/plant.glb"
          CollectinId={1}
          CollectionName={"Rock 0"}
          ModelComp={<ModelView glb="/models/monsteraltar.glb"></ModelView>}
        />
        <CollectionCard
          CollecitonGlb="/models/plant.glb"
          CollectinId={0}
          CollectionName={"Rock 1"}
          ModelComp={<ModelView glb="/models/monsterking.glb"></ModelView>}
        />
        <CollectionCard
          CollecitonGlb="/models/plant.glb"
          CollectinId={0}
          CollectionName={"Rock 1"}
          ModelComp={<ModelView glb="/models/plant.glb"></ModelView>}
        />
      </CollectionsGrid>
    </div>
  );
};

export default Market;
