import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type CreatePostArguments = {
  community_id: string;
  post_id: string;
  content: string;
};

export const createPostOnChain = (
  args: CreatePostArguments
): InputTransactionData => {
  const { post_id, community_id, content } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::create_post`,
      typeArguments: [],
      functionArguments: [community_id, post_id, content],
    },
  };
};
