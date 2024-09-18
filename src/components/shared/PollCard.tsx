"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { VoiceCircleIcon } from "../custom-icons/VoiceIcon";

const options = ["yes", "no"];

const PollCard = ({ isClosed }: { isClosed?: boolean }) => {
  const [choice, setChoice] = useState("");
  return (
    <div className="border border-alice-blue rounded-lg p-5">
      <div className="flex items-center justify-between mb-18">
        <div className="flex items-center space-x-[0.625rem]">
          <span className="size-[2.5rem] inline-block rounded-full bg-athens"></span>
          <span>
            <h4 className="text-mako font-medium text-sm">Meenash</h4>
            <h5 className="text-xs text-gray">18 mins ago</h5>
          </span>
        </div>
        <div>
          <span
            className={cn(
              "flex items-center justify-center space-x-2 text-xs text-apple bg-beige rounded-full py-1 px-[0.875rem]",
              {
                "bg-red-100 text-red-600": isClosed,
              }
            )}
          >
            <span
              className={cn("rounded-full bg-emerald size-2 inline-block", {
                "bg-red-500": isClosed,
              })}
            ></span>
            <span>{isClosed ? "Closed" : "Active"}</span>
          </span>
          <span className="flex items-center mt-[0.4375rem] text-s10 space-x-1 text-shark">
            <VoiceCircleIcon />
            <span>4 Voice Power</span>
          </span>
        </div>
      </div>
      <div>
        <span className="flex items-center justify-between mb-[0.4375rem]">
          <h5 className="text-mako font-medium text-sm">Do we have to go?</h5>
          <span className="text-s10 text-mist">choose one</span>
        </span>

        <RadioGroup value={choice} onValueChange={(value) => setChoice(value)}>
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 border hover:border-accent border-alice-blue rounded-lg py-[0.6875rem] px-[0.875rem] text-sm text-mako"
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
                className="capitalize font-normal"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="mt-18 flex items-center justify-between">
        <span className="mt-5 flex items-center space-x-[0.375rem] text-xs text-mako">
          <span>Poll ends in:</span>
          <span className="text-sm font-medium">6d 12h 3m</span>
        </span>
        <Link
          href="/communities/hello/polls/hey"
          className="underline text-xs text-mako"
        >
          View votes
        </Link>
      </div>
    </div>
  );
};

export default PollCard;
