import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type LeaveCommunityArguments = {
  community_id: string;
};

export const leaveCommunityOnChain = (
  args: LeaveCommunityArguments
): InputTransactionData => {
  const { community_id } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::leave_community`,
      typeArguments: [],
      functionArguments: [community_id],
    },
  };
};
