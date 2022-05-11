import React from "react";
import { useWeb3React } from "@web3-react/core";

import { connectorNames, connectorTypes } from "./constants";
import useStyles from "./styles";

interface MainContentProps {
  onClose: () => void;
}

const MainContent = ({ onClose }: MainContentProps) => {
  const context = useWeb3React();
  const classes = useStyles();

  const { activate, connector } = context;

  const handleClick = async (condition: boolean, item: any) => {
    if (!condition) {
      await activate(connectorTypes[item]);
      await onClose();
    }
  };

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
