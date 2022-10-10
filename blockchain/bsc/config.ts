import { chain, Chain, configureChains, createClient } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const bscChain: Chain = {
  id: 56,
  name: 'Binance Smart Chain Mainnet',
  network: 'bsc',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org/',
    ninicoin: 'https://bsc-dataseed1.ninicoin.io/',
    defibit: 'https://bsc-dataseed1.defibit.io/',
    default: 'https://bsc-dataseed1.ninicoin.io/',
  },
  blockExplorers: {
    default: { name: 'bscscan', url: 'https://bscscan.com/' },
  },
  testnet: false,
};

const { chains, provider, webSocketProvider } = configureChains(
  // [bscChain],
  // [
  //   jsonRpcProvider({
  //     rpc: (chain) => {
  //       if (chain.id !== bscChain.id) return null;
  //       return { http: chain.rpcUrls.default };
  //     },
  //   }),
  // ]
  [chain.mainnet, chain.polygon, bscChain],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== bscChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

// Set up client
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

export { wagmiClient };
