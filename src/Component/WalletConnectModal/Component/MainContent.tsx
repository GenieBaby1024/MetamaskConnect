/** @format */

import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectorNames, connectorTypes } from "./constants";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setloginAddress } from "../../../store/auth";

interface MainContentProps {
  onClose: () => void;
}

const MainContent = ({ onClose }: MainContentProps) => {
  const dispatch = useAppDispatch();
  const context = useWeb3React();
  const classes = useStyles();
  const navigate = useNavigate();

  const { activate, connector, account } = context;

  const handleClick = async (condition: boolean, item: any) => {
    if (!condition) {
      await activate(connectorTypes[item]);
      await onClose();
      await navigate("/dashboard");
    } else {
      console.log("metamask login error");
    }
  };

  useEffect(() => {
    dispatch(setloginAddress(account));
  }, [account]);

  console.log(account);

  return (
    <div className={classes.root}>
      {Object.keys(connectorTypes).map((con: any) => {
        const current = connectorTypes[con];
        const disabled = current === connector;

        return (
          <div
            key={con}
            onClick={() => handleClick(disabled, con)}
            className={
              disabled ? classes.activeOptionButton : classes.optionButton
            }>
            <img
              src={connectorNames[con].icon}
              className={classes.btnIcon}
              alt='iconAvatar'
            />
            <div className={classes.btnTitle}>{connectorNames[con].name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
