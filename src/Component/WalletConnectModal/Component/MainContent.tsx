/** @format */

import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Fab, Grid, Typography } from "@material-ui/core";

import { connectorNames, connectorTypes } from "./constants";
import useStyles from "./styles";

const MainContent = () => {
  const context = useWeb3React();
  const classes = useStyles();

  const { activate, connector } = context;

  return (
    <div className={classes.root}>
      {Object.keys(connectorTypes).map((con: any) => {
        const current = connectorTypes[con];
        const disabled = current === connector;
        const name = connectorNames[con];

        return (
          <Fab
            key={con}
            onClick={() => {
              activate(connectorTypes[con]);
            }}
            disabled={disabled}
            className={classes.optionButton}>
            <div className={classes.optionButton}>{name}</div>
          </Fab>
        );
      })}
    </div>
  );
};

export default MainContent;
