import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "@/constants";

export type CreateCommunityArguments = {
  community_id: string;
  min_voice_power_post: number;
  min_voice_age_post: number;
  min_voice_power_comment: number;
  min_voice_age_comment: number;
  min_voice_power_proposal: number;
  min_voice_age_proposal: number;
  min_voice_power_poll: number;
  min_voice_age_poll: number;
};

export const createCommunityOnChain = (
  args: CreateCommunityArguments
): InputTransactionData => {
  const {
    community_id,
    min_voice_power_post,
    min_voice_age_post,
    min_voice_power_comment,
    min_voice_age_comment,
    min_voice_power_proposal,
    min_voice_age_proposal,
    min_voice_power_poll,
    min_voice_age_poll,
  } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::Community::create_community`,
      typeArguments: [],
      functionArguments: [
        community_id,
        min_voice_power_post,
        min_voice_age_post,
        min_voice_power_comment,
        min_voice_age_comment,
        min_voice_power_proposal,
        min_voice_age_proposal,
        min_voice_power_poll,
        min_voice_age_poll,
      ],
    },
  };
};
