"use client";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import React from "react";

const WalletConnectButton = () => {
  return <WalletSelector />;
};

export default WalletConnectButton;
