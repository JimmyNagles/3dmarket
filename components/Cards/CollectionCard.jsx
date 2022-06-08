import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const CollectionCard = ({
  Total = 149,
  CollectinId = 0,
  CollectionName = "collection 00",
  ModelComp,
  CollecitonGlb = "",
}) => {
  return (
    <div className="w-[200px] h-[200px] shadow-xl hover:shadow-2xl mt-4 border  ">
      <div className="w-[200px] h-[140px] p-2 ">{ModelComp}</div>

      <div className="h-[60px] p-2 ">
        <Link
          href={{
            pathname: "/vendingmachine/[collection]/",
            query: {
              EventNFT: CollectionName,
              id: CollectinId,
              collection: CollecitonGlb,
            },
          }}
          passHref
        >
          <button className="h-full w-full  hover:bg-black hover:text-white">
            More info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
