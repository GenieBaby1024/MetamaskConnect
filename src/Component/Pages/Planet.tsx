/** @format */

import React, { useEffect, useState } from "react";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNftCollections } from "../../store/nftCollections";
import { nftCollection } from "../../store/nftCollections/selectors";
import Header from "../Header/Header";
import WalletConnectModal from "../WalletConnectModal/WalletConnectModal";

function Planet() {
  const account = useAppSelector(selectLoginAddress);
  const dispatch = useAppDispatch();
  const collectionData = useAppSelector(nftCollection);
  const [modalStatus, setModalStatus] = useState(false);

  console.log(collectionData);

  useEffect(() => {
    dispatch(getNftCollections(account));
  }, [account]);

  const handleNoneNftClick = () => {
    window.open("https://opensea.io/collection/zippo-verse", "_blank");
  };

  return (
    <div className='c-planet-root'>
      <Header />
      {/* {collectionData?.length === 0 ||
      collectionData === null ||
      collectionData === undefined ? ( */}
      <div className='c-dashboard-wrap'>
        <div
          className='c-dashboard-nonenftbtn'
          onClick={() => setModalStatus(true)}>
          Unlocked to view your Nft
        </div>
      </div>
      {/* ) : (
        <div>{account} </div>
      )} */}
      <WalletConnectModal
        show={modalStatus}
        onClose={() => setModalStatus(false)}
        toUrl='/planet'
      />
    </div>
  );
}

export default Planet;
