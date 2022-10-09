import { chain, Chain, configureChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

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
    binance: 'https://bsc-dataseed1.binance.org/',
    ninicoin: 'https://bsc-dataseed1.ninicoin.io/',
    defibit: 'https://bsc-dataseed1.defibit.io/',
    default: 'https://bsc-dataseed1.ninicoin.io/',
  },
  blockExplorers: {
    default: { name: 'bscscan', url: 'https://bscscan.com/' },
  },
  testnet: false,
};

const { provider, webSocketProvider } = configureChains(
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

export { provider, webSocketProvider };
