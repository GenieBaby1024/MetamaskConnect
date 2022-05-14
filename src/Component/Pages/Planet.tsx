/** @format */

import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNftCollections } from "../../store/nftCollections";
import { nftCollection } from "../../store/nftCollections/selectors";
import Header from "../Header/Header";
import WalletConnectModal from "../WalletConnectModal/WalletConnectModal";

function Planet() {
  const loginAddress = useAppSelector(selectLoginAddress);

  const { account } = useWeb3React();
  const dispatch = useAppDispatch();
  const collectionData = useAppSelector(nftCollection);
  const [modalStatus, setModalStatus] = useState(false);

  console.log(collectionData);

  useEffect(() => {
    dispatch(getNftCollections(loginAddress));
  }, [loginAddress]);

  const handleNoneNftClick = () => {
    window.open("https://opensea.io/collection/zippo-verse", "_blank");
  };

  console.log("loginAddress address : ", loginAddress);

  return (
    <>
      <div className='c-planet-root'>
        <Header />

        <WalletConnectModal
          show={modalStatus}
          onClose={() => setModalStatus(false)}
          toUrl='/planet'
        />
      </div>
      <div
        className={
          loginAddress === "" ||
          loginAddress === undefined ||
          loginAddress === null
            ? "c-dashboard-wrap"
            : "displayNone"
        }>
        <div
          className='c-dashboard-connectwallettbtn'
          onClick={() => setModalStatus(true)}>
          Connect Your Wallet
        </div>
      </div>
      <div
        className={
          collectionData?.length !== 0 &&
          collectionData !== undefined &&
          collectionData !== null &&
          loginAddress !== "" &&
          loginAddress !== undefined &&
          loginAddress !== null
            ? "c-dashboard-wrap"
            : "displayNone"
        }>
        <div className='c-dashboard-nonftmodalroot'>
          <div className='c-dashboard-nonftmodaltitle'>JOIN OUR COMMUNITY</div>
          <div className='c-dashboard-nonftmodaldes'>
            The Planet is for Zippo members only You currently don't hold an
            zippo verse nfts.
          </div>
          <div
            className='c-dashboard-nonenftbtn'
            onClick={() => handleNoneNftClick()}>
            Unlocked to view your Nft
          </div>
        </div>
      </div>
    </>
  );
}

export default Planet;
