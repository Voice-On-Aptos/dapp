"use client";
import { VoiceCircleIcon } from "@/components/custom-icons/VoiceIcon";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import { z } from "zod";

const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  multiple: z.boolean().default(false).optional(),
});

const FormButton = () => {
  return (
    <button
      className={cn(
        "bg-accent px-4 py-2.5 w-full ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
      )}
    >
      {"Create Poll"}
    </button>
  );
};

const CreatePoll = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [creatingPoll, setCreatingPollState] = useState(false);
  const [optionsCount, setOptionsCount] = useState(2);

  const optionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const id = Number(event.target.id || 0);
    setOptions((prev) => {
      const valueIndex = id - 1;
      const reducedArray = [...prev];
      reducedArray[valueIndex] = value || "";
      return reducedArray;
    });
    if (id === optionsCount) {
      setOptionsCount((prev) => prev + 1);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      multiple: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <button
        title="Create poll"
        onClick={() => setCreatingPollState(true)}
        className="flex items-center text-xs lg:text-sm font-medium text-mako space-x-2 border border-dark-gray rounded-lg px-4 py-[0.625rem]"
      >
        <LuPlus size={18} />
        <span>Create poll</span>
      </button>
      <Modal
        isOpen={creatingPoll}
        closeHandler={() => setCreatingPollState(false)}
        className="w-[24.125rem]"
        title="Create Poll"
      >
        <div className="mt-7 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-18 space-y-5">
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-sm text-mako">
                        Ask Question
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                          placeholder="Enter question"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormLabel className="font-normal text-sm block text-mako mb-[0.375rem]">
                    Options
                  </FormLabel>
                  <div className="space-y-[0.375rem]">
                    {Array(optionsCount)
                      .fill("")
                      .map((_, index) => (
                        <Input
                          key={index}
                          id={`${index + 1}`}
                          value={options?.[index] || ""}
                          onChange={optionHandler}
                          className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                          placeholder="Add Option"
                        />
                      ))}
                  </div>
                </div>
              </div>
              <FormField
                control={form.control}
                name="multiple"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-[0.375rem] space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="text-xs text-mako font-normal">
                      Allow multiple answers
                    </FormLabel>
                  </FormItem>
                )}
              />
              <span className="px-3 py-[0.625rem] mt-5 mb-7 rounded-[0.125rem] space-x-2 flex text-xs text-mako items-start sm:items-center bg-squeeze">
                <span className="*:size-4">
                  <VoiceCircleIcon />
                </span>
                <span>
                  Create a poll with <strong>3</strong> Voice Power or{" "}
                  <strong>2</strong> months voice age
                </span>
              </span>
              <FormButton />
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default CreatePoll;
