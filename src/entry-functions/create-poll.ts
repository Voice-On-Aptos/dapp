import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type CreatePollArguments = {
  community_id: string;
  poll_id: string;
  question: string;
  options: string[];
};

export const createPollOnChain = (
  args: CreatePollArguments
): InputTransactionData => {
  const { poll_id, community_id, question, options } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::create_poll`,
      typeArguments: [],
      functionArguments: [community_id, poll_id, question, options],
    },
  };
};
