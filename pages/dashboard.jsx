import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ethers } from "ethers";

const Dashboard = () => {
  const [first, setfirst] = useState(null);

  return (
    <div className="min-h-screen ">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard of wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <h1>Todo</h1>
      </div>
    </div>
  );
};

export default Dashboard;
