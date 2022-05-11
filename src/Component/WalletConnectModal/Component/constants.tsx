import { injected, walletconnect, coinbase } from "./connectors";
import MetaMaskIcon from "../../../asset/icons/metamask.svg";
import CoinBaseIcon from "../../../asset/icons/coinbase.svg";
import WalletConnectIcon from "../../../asset/icons/walletconnect.svg";

export const connectorTypes: any = {
  Injected: injected,
  WalletConnect: walletconnect,
  Coinbase: coinbase,
};

export const connectorNames: any = {
  Injected: {
    name: "Meta mask",
    icon: MetaMaskIcon,
  },
  WalletConnect: {
    name: "Wallet Connect",
    icon: WalletConnectIcon,
  },
  Coinbase: {
    name: "Coin Base",
    icon: CoinBaseIcon,
  },
};
