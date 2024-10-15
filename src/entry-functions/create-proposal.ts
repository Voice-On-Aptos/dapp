import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type CreateProposalArguments = {
  community_id: string;
  proposal_id: string;
  title: string;
  description: string;
};

export const createProposalOnChain = (
  args: CreateProposalArguments
): InputTransactionData => {
  const { proposal_id, community_id, title, description } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::create_proposal`,
      typeArguments: [],
      functionArguments: [community_id, proposal_id, title, description],
    },
  };
};
