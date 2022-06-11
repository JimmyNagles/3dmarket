import React from "react";

const Collectionbar = ({ NFTFloor = 0, TotalNFTs = 1, ListedNFTs = 1 }) => {
  return (
    <div className="border-2  border-black w-[200px] md:w-[400px] h-[80px] grid grid-cols-3 ">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-sm  md:text-xl font-bold">Tickets</h1>
        <h1>{TotalNFTs}</h1>
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-sm  md:text-xl font-bold">Listed</h1>
        <h1>{ListedNFTs}</h1>
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-sm  md:text-xl font-bold">Floor</h1>
        <h1>${NFTFloor}</h1>
      </div>
    </div>
  );
};

export default Collectionbar;
