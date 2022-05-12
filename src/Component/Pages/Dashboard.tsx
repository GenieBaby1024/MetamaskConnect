import React, { useEffect, useState } from "react";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNftCollections } from "../../store/nftCollections";
import { nftCollection } from "../../store/nftCollections/selectors";

function Dashboard() {
  const account = useAppSelector(selectLoginAddress);
  const dispatch = useAppDispatch();
  const collectionData = useAppSelector(nftCollection);

  console.log(collectionData);

  useEffect(() => {
    dispatch(getNftCollections(account));
  }, [account]);

  const handleNoneNftClick = () => {
    window.open("https://opensea.io/collection/zippo-verse", "_blank");
  };

  return (
    <>
      {collectionData?.length === 0 ||
      collectionData === null ||
      collectionData === undefined ? (
        <div className='c-dashboard-wrap'>
          <div className='c-dashboard-nonenftbtn' onClick={handleNoneNftClick}>
            Unlocked to view your Nft
          </div>
        </div>
      ) : (
        <div>{account} </div>
      )}
    </>
  );
}

export default Dashboard;
