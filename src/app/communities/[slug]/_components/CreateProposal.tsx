"use client";
import { VoiceCircleIcon } from "@/components/custom-icons/VoiceIcon";
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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});

const FormButton = () => {
  return (
    <button
      className={cn(
        "bg-accent px-4 py-2.5 w-full ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
      )}
    >
      {"Create Proposal"}
    </button>
  );
};

const CreateProposal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [creatingProposal, setCreatingProposalState] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const title = form.watch("title");
  const content = form.watch("description");

  return (
    <>
      <button
        onClick={() => setCreatingProposalState(true)}
        title="Create proposal"
        className="flex items-center text-xs lg:text-sm font-medium text-mako space-x-2 border border-dark-gray rounded-lg px-4 py-[0.625rem]"
      >
        <LuPlus size={18} />
        <span>Create proposal</span>
      </button>
      <Modal
        isOpen={creatingProposal}
        closeHandler={() => setCreatingProposalState(false)}
        className="w-[24.125rem]"
        title="Create a Proposal"
      >
        <div className="mt-7">
          <span className="px-3 py-[0.625rem] mb-5 rounded-[0.125rem] space-x-2 flex text-xs text-mako items-start sm:items-center bg-squeeze">
            <span className="*:size-4">
              <VoiceCircleIcon />
            </span>
            <span>
              Creating a proposal costs <strong>3</strong> Voice Power
            </span>
          </span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div
                className={cn("mb-7 space-y-5 overflow-hidden", {
                  "scale-0": currentStep > 0,
                })}
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-sm text-mako">
                        What is your proposal title?
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                          placeholder="Enter title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="relative h-auto">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-normal text-sm text-mako">
                          Describe your proposal
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="border border-alice-blue min-h-[9rem] placeholder:text-gray placeholder:text-xs text-sm text-mako w-full block resize-none p-[0.875rem] rounded-lg"
                            placeholder="Enter description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span className="absolute bottom-1 text-xs text-right text-gray right-1.5">
                    {content.length}/1000
                  </span>
                </div>
              </div>
              <div
                className={cn("scale-0 overflow-hidden", {
                  "mb-7 space-y-5": currentStep !== 0,
                })}
              ></div>
              {currentStep === 0 ? (
                <button
                  type="button"
                  disabled={!title || !description}
                  onClick={() => setCurrentStep(1)}
                  className="bg-accent px-4 py-2.5 w-full ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
                >
                  Next
                </button>
              ) : (
                <FormButton />
              )}
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default CreateProposal;
