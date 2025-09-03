'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism, base, sepolia, polygonMumbai } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';
import { QueryClient as WagmiQueryClient } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

// Create wagmi config
const config = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism, base, sepolia, polygonMumbai],
  connectors: [
    injected(),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'your-project-id' }),
    coinbaseWallet({ appName: 'TicketSafer Protocol' }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
  },
});

const wagmiQueryClient = new WagmiQueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <WagmiProvider config={config} queryClient={wagmiQueryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
