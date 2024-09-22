import RAvatar from "@/components/ui/avatar-compose";
import { cn } from "@/lib/utils";
import React from "react";

interface InputProps {
  label: string;
  value: string | number;
  onChangeHandler: (value: number) => void;
  className?: string;
  icon?: string;
}

export const InputField = ({
  label,
  value,
  onChangeHandler,
  className,
  icon = "/svgs/voice-icon.svg",
}: InputProps) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    onChangeHandler(value);
  };

  return (
    <div>
      {label ? (
        <span className="text-mako w-full mb-[0.625rem]">
          <h6 className="text-sm lg:text-base">{label}</h6>
        </span>
      ) : null}
      <div
        className={cn(
          "border border-concrete rounded-md py-3 px-2 flex justify-between items-center",
          className
        )}
      >
        <span className="flex items-center space-x-2">
          <RAvatar src={icon} className="size-5 lg:size-6" />
          <span className="text-sm text-mako inline-block">Voice Power</span>
        </span>
        <input
          min={0}
          type="number"
          value={value}
          className="outline-none border-none text-right p-0 text-base lg:text-xl text-mako"
          onChange={inputHandler}
        />
      </div>
    </div>
  );
};

export default InputField;
