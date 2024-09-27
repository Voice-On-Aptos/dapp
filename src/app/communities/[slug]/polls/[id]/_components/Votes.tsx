"use client";
import { VoiceCircleIcon } from "@/components/custom-icons/VoiceIcon";
import VotedCastedPopup from "@/components/shared/VotedCastedPopup";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const options = ["yes", "no"];

const Votes = () => {
  const [choice, setChoice] = useState("");
  const [showPopup, setShowPopupState] = useState(false);
  return (
    <>
      <div className="rounded-xl bg-white p-4 lg:p-6 border border-alice-blue">
        <h4 className="text-sm text-mako font-medium mb-4">VOTES</h4>
        <RadioGroup
          className="mb-4"
          value={choice}
          onValueChange={(value) => {
            setChoice(value);
            setShowPopupState(true); // Open popup after selecting a choice
          }}
          disabled={!!choice}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-2 cursor-pointer border hover:border-accent border-alice-blue rounded-lg py-[0.6875rem] px-[0.875rem] text-sm text-mako",
                {
                  "border-accent": option === choice,
                }
              )}
            >
              <RadioGroupItem
                value={option}
                id={index.toString()}
                className={cn({
                  "border-blue-chill": choice === option,
                })}
              />
              <Label
                htmlFor={index.toString()}
                className="capitalize font-normal w-full block"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <span className="px-4 py-[0.625rem] rounded-[0.125rem] space-x-2 flex text-xs lg:text-sm text-mako items-start sm:items-center bg-squeeze">
          <span className="*:size-4">
            <VoiceCircleIcon />
          </span>
          <span>A vote costs 3 Voice Power</span>
        </span>
      </div>
      <VotedCastedPopup
        buttonText="Back to Poll"
        isOpen={showPopup}
        closeHandler={() => setShowPopupState(false)}
      />
    </>
  );
};

export default Votes;
