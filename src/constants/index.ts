import { Network } from "@aptos-labs/ts-sdk";

export const NETWORK: Network =
  (process.env.NEXT_PUBLIC_APP_NETWORK as Network) ?? "testnet";
