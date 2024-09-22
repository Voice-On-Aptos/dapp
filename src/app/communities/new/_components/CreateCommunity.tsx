"use client";
import { DateInput } from "@/components/ui/date-input";
import { cn } from "@/lib/utils";
import useCreateCommunityStore from "@/store/community.store";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { SwapInput, TokenProps } from "../../[slug]/swap/_components/Swap";

interface StepProps {
  nextHandler: () => void;
}

const BasicDetails = ({}: StepProps) => {
  return <div></div>;
};

const Configuration = ({}: StepProps) => {
  const { update } = useCreateCommunityStore();
  const handler = () => {
    // update({
    // });
  };
  return (
    <div>
      <div></div>
      <button
        onClick={handler}
        className="bg-accent disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2.5 w-fit ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
      >
        {"Continue"}
      </button>
    </div>
  );
};

const RewardPool = () => {
  const { update } = useCreateCommunityStore();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [value, setValue] = useState<TokenProps>({
    value: 0,
    balance: 0,
    icon: "/svgs/cell-icon.svg",
    name: "CELL",
  });

  const handleValueChange = (name: string, value: number, balance = 0) => {
    setValue((prev) => ({ ...prev, value, balance }));
  };

  const handler = () => {
    update({
      token_to_distribute: value?.value,
      distribution_date: endDate,
    });
    startTransition(() => {
      router.push("/communities/new/review");
    });
  };

  return (
    <div>
      <div className="w-full space-y-5 mb-8">
        <SwapInput
          label="How much total token do you want to distribute?"
          value={value}
          name="to"
          onChangeHandler={handleValueChange}
          className="w-full rounded-lg py-[0.5625rem] [&>input]:!text-sm"
        />
        <div className="flex flex-col w-full">
          <label className="font-normal mb-2 text-sm block text-mako">
            How long should it last for?
          </label>
          <DateInput
            value={endDate}
            onChange={(value) => {
              setEndDate(value);
            }}
            noForm
          />
        </div>
      </div>
      <button
        disabled={pending || !value || !endDate}
        onClick={handler}
        className="bg-accent disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2.5 w-fit ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
      >
        {pending ? "Loading..." : "Review"}
      </button>
    </div>
  );
};

const steps = ["Basic Details", "Configuration", "Reward Pool"];

const CreateCommunity = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextHandler = () => {
    setCurrentStep((prev) => ++prev);
  };
  return (
    <div className="lg:flex lg:space-x-4">
      <aside className="border-b gap-3 lg:flex lg:flex-col lg:border-b-0 pb-4 lg:pb-0 lg:pr-4 lg:border-r border-athens-2">
        {steps.map((step, index) => (
          <button
            key={index}
            className={cn(
              "hover:bg-azure lg:w-[16.875rem] max-w-full lg:text-left font-medium rounded-lg text-xs lg:text-sm capitalize text-mako border border-athens-2 py-3 px-[0.875rem]",
              {
                "bg-azure text-accent border-transparent":
                  currentStep === index,
              }
            )}
          >
            {step}
          </button>
        ))}
      </aside>
      <div className="relative w-full">
        {currentStep === 0 ? (
          <BasicDetails nextHandler={nextHandler} />
        ) : currentStep === 1 ? (
          <Configuration nextHandler={nextHandler} />
        ) : currentStep === 2 ? (
          <RewardPool />
        ) : null}
      </div>
    </div>
  );
};

export default CreateCommunity;
