import Image from "next/image";
import { useState } from "react";
// import logoo from "../../public/placeholder.png";
// import MetamaskBtn from "../MetamaskBtn";

const Nav = () => {
  const [IsMobile, setIsMobile] = useState(false);

  const handleBurgerMenu = () => {
    console.log(IsMobile);
    setIsMobile(!IsMobile);
  };

  return (
    <div className=" sticky top-0 z-50 bg-white ">
      <nav className="flex flex-row p-2 justify-between">
        {/* LOGO  */}
        <div className="flex flex-row p-2 ">
          <a href="/">
            {/* <Image
              className="bg-black m-2 p-2  rounded"
              height="50"
              width="50"
              src={logoo}
              alt="NFT Logo"
            /> */}
          </a>
        </div>

        {/* links and btn for mobile */}
        <div>
          {/* Mobile Trigger hiiden on big screens */}
          <button className={"md:hidden p-5 m-2 "} onClick={handleBurgerMenu}>
            menu
          </button>

          {/* links div */}

          <ul className={"hidden md:flex md:flex-row p-2 "}>
            <li className="m-2 hover:underline underline-red ">
              <a href="/">Home</a>
            </li>
            <li className="m-2 hover:underline ">
              <a href="/vendingmachine//about">About</a>
            </li>
            <li className="m-2 hover:underline ">
              <a href="/vendingmachine/dashboard">dashboard</a>
            </li>
            {/* <li className="m-2 hover:underline ">
              <MetamaskBtn></MetamaskBtn>
            </li> */}
          </ul>
        </div>
      </nav>

      <ul
        className={
          IsMobile
            ? "bg-white flex flex-col md:flex-row p-4 text-center md:hidden"
            : "hidden "
        }
      >
        {/* <li className="m-2  ">
          <MetamaskBtn></MetamaskBtn>
        </li> */}
        <li className="m-2 hover:underline underline-red ">
          <a href="/">Home</a>
        </li>
        <li className="m-2 hover:underline ">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
