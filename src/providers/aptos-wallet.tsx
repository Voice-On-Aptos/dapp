"use client";
import { NETWORK } from "@/constants";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import React from "react";
import { toast } from "sonner";

const AptosWalletProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const wallets = [new PetraWallet()];
  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      // autoConnect={true}
      dappConfig={{ network: NETWORK }}
      onError={(error) => {
        toast.error("Error", {
          description: error || "Unknown wallet error",
          className: "error-message",
        });
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};

export default AptosWalletProvider;
