import { Network } from "@aptos-labs/ts-sdk";

export const NETWORK: Network =
  (process.env.NEXT_PUBLIC_APP_NETWORK as Network) ?? "testnet";
export const MODULE_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS;
export const EXPLORER = (url: string) =>
  `${process.env.NEXT_PUBLIC_EXPLORER}${url}?network=${NETWORK}`;
