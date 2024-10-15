import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type JoinCommunityArguments = {
  community_id: string;
};

export const joinCommunityOnChain = (
  args: JoinCommunityArguments
): InputTransactionData => {
  const { community_id } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::join_community`,
      typeArguments: [],
      functionArguments: [community_id],
    },
  };
};
