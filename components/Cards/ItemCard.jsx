import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Model = dynamic(() => import("../ModelViewer"), {
  ssr: false,
});

const ItemCard = ({
  CollectionId = 0,
  NFTGlb = "/models/plant.glb",
  NFTPrice = 50,
  NFTId = 1,
  NFTDate = 0,
  NFTClaimed = false,
  NFTUtil = true,
}) => {
  const [isFlipped, setisFlipped] = useState(false);
  const [isClaimed, setisClaimed] = useState(false);
  const handleFlip = (e) => {
    e.preventDefault();
    setisFlipped(!isFlipped);
  };
  useEffect(() => {}, [isFlipped]);

  return (
    <div className="w-[200px] h-[250px] m-4 shadow-2xl">
      <div className="grid grid-cols-2 ">
        <div className="p-2">
          <h1>
            ID: <span>{NFTId}</span>
          </h1>
          <h1>
            Price: <span>${NFTPrice}</span>
          </h1>
        </div>
        <button
          onClick={handleFlip}
          className="bg-black text-white p-2   text-center hover:animate-pulse"
        >
          Info
        </button>
      </div>

      <div
        className={
          isFlipped ? "w-[200px] h-[240px] flex flex-col p-2 " : "hidden"
        }
      >
        <h1 className=" text-lg">Date:6/13/2022 </h1>
        <h1 className=" text-lg">Claimed? {NFTClaimed ? "Yes" : "No yet"}</h1>
        <h1 className=" text-lg">owners? 1</h1>
        <h1 className=" text-lg">Future Util? {NFTUtil ? "Yes" : "No yet"}</h1>
        <div className="w-full flex flex-col items-center mt-2">
          <Link
            href={{
              pathname: "/market/[collection]/[Itemid]",
              query: {
                itemid: NFTId,
                glb: NFTGlb,
                collection: CollectionId,
              },
            }}
            passHref
          >
            <button className="border border-black w-[100px]">More</button>
          </Link>
        </div>
      </div>
      <div className={isFlipped ? "hidden" : "w-[200px] h-[200px]"}>
        <Model></Model>
      </div>
    </div>
  );
};

export default ItemCard;
