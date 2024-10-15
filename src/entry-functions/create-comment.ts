import { MODULE_ADDRESS } from "@/constants";
import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export type CreateCommentArguments = {
  community_id: string;
  post_id: string;
  comment_id: string;
  content: string;
};

export const createCommentOnChain = (
  args: CreateCommentArguments
): InputTransactionData => {
  const { post_id, comment_id, community_id, content } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::create_comment`,
      typeArguments: [],
      functionArguments: [community_id, post_id, comment_id, content],
    },
  };
};
