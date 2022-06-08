import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ProfileCircle from "../../../components/Collections/ProfileCircle";
const Model = dynamic(() => import("../../../components/ModelViewer"), {
  ssr: false,
});
import ItemCard from "../../../components/Cards/ItemCard";
import CollectionBar from "../../../components/Collections/collectionBar";
const CollectionPage = ({ collection }) => {
  return (
    <div>
      <Head>
        <title>Collection Page</title>
        <meta name="description" content="Generated by Collection Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        {/*  */}
        <div className="h-[200px] bg-black"></div>
        {/*first section  */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white border border-black top-40 left-1/2 transform -translate-x-1/2">
          <ProfileCircle glb={"/models/plant.glb"}></ProfileCircle>
        </div>
        {/*second section  */}
        <div className="h-[250px]  p-2 flex flex-col items-center justify-center">
          <h1 className="text-3xl  ">Collection Name</h1>
          <h1 className="text-xl  ">Created by userName </h1>
        </div>

        {/* Third section */}
        <div className="flex flex-col justify-center items-center  h-[100px]">
          <CollectionBar
            TotalNFTs={150}
            NFTFloor={50}
            ListedNFTs={2}
          ></CollectionBar>
        </div>

        <div className="flex flex-col justify-center items-center  h-[200px]">
          <h2>Information About the EventNFT</h2>
        </div>

        {/* all the NFTs in the collection */}
        <div className="min-h-[300px] p-4 flex flex-col items-center md:grid md:grid-cols-4 mt-10 ">
          <ItemCard
            CollectionId={0}
            NFTId={1}
            NFTPrice={50}
            glb={"/models/plant.glb"}
          ></ItemCard>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query, params, req }) => {
  //find collection id
  //get array of all items in collection
  //add them to item
  //render a card for each
  console.log(query.collection);

  return {
    props: {
      // item: items.find((i) => i.name === params?.collection),
      collection: {
        glb: query.collection,
        id: query.id,
        NFTname: query.EventNFT,
      },
    },
  };
};
export default CollectionPage;
