import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type CreateApplaudArguments = {
  community_id: string;
  post_id: string;
  applaud_id: string;
};

export const createApplaudOnChain = (
  args: CreateApplaudArguments
): InputTransactionData => {
  const { post_id, applaud_id, community_id } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::create_applaud`,
      typeArguments: [],
      functionArguments: [community_id, post_id, applaud_id],
    },
  };
};
