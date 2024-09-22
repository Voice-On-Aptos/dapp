import { create } from "zustand";

interface DataProps {
  name: string;
  description: string;
  token_address: string;
  twitter: string;
  website: string;
  logo: File;
  banner: File;
  voice_power_rate: number;
  minimum_voice_power_required_to_join: number;
  post: {
    minimum_voice_power: number;
    minimum_voice_age: number;
  };
  comment: {
    minimum_voice_power: number;
    minimum_voice_age: number;
  };
  proposal: {
    minimum_voice_power: number;
    minimum_voice_age: number;
  };
  poll: {
    minimum_voice_power: number;
    minimum_voice_age: number;
  };
  token_to_distribute: number;
  distribution_date: Date;
}

type StoreProps = {
  data: Partial<DataProps> | null;
  update: (value: Partial<DataProps>) => void;
  clear: () => void;
};

const useCreateCommunityStore = create<StoreProps>((set) => ({
  data: null,
  update: (value) => set((state) => ({ data: { ...state.data, ...value } })),
  clear: () => set({ data: null }),
}));

export default useCreateCommunityStore;
