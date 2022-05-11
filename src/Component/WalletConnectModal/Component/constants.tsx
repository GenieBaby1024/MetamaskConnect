import {
  injected,
  walletconnect,
  coinbase,
} from "./connectors";

export const connectorTypes: any = {
  Injected: injected,
  WalletConnect: walletconnect,
  Coinbase: coinbase,
};

export const connectorNames: any = {
  Injected: "metamask",
  WalletConnect: "walletconnect",
  Coinbase: "coinbase",
};
