'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Solo renderizar los providers de Web3 cuando esté montado en el cliente
  if (!mounted) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  // Importación dinámica para evitar problemas de SSR
  const Web3Providers = () => {
    const [Web3ProviderComponent, setWeb3ProviderComponent] = useState<any>(null);

    useEffect(() => {
      import('./Web3Providers').then((module) => {
        setWeb3ProviderComponent(() => module.Web3Providers);
      }).catch((error) => {
        console.warn('Web3 providers not available:', error);
        setWeb3ProviderComponent(() => ({ children }: { children: ReactNode }) => <>{children}</>);
      });
    }, []);

    if (!Web3ProviderComponent) {
      return <>{children}</>;
    }

    return <Web3ProviderComponent>{children}</Web3ProviderComponent>;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Web3Providers />
    </QueryClientProvider>
  );
}
