/** @format */

import React, { Component, useEffect, useState } from "react";
import { getNfts } from "../../store/api/nft";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useAppSelector } from "../../store/hooks";

function Dashboard() {
  const [collectionData, setCollectionData] = useState<any>();
  const account = useAppSelector(selectLoginAddress);

  const init = async () => {
    let response = await getNfts({
      asset_owner: account,
    });
    setCollectionData(response?.data);
  };

  useEffect(() => {
    init();
  }, [account]);

  return (
    <>
      <div>{account}</div>
    </>
  );
}

export default Dashboard;
