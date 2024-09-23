import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaXTwitter } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { z } from "zod";
import { FileUploader } from "@/components/ui/file-uploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { StepProps } from "./CreateCommunity";
import useCreateCommunityStore from "@/store/community.store";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  token_address: z.string().min(2, {
    message: "Token address must be at least 2 characters.",
  }),
  twitter: z.string().url().min(2, {
    message: "Twitter must be at least 2 characters.",
  }),
  website: z.string().url().min(2, {
    message: "Website must be at least 2 characters.",
  }),
  logo: z.array(z.instanceof(File)),
  banner: z.array(z.instanceof(File)),
});

const FormButton = () => {
  return (
    <button
      className={cn(
        "bg-accent px-4 py-2.5 w-fit lg:px-[2.5rem] ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
      )}
    >
      {"Continue"}
    </button>
  );
};

export const BasicDetails = ({ nextHandler }: StepProps) => {
  const { update } = useCreateCommunityStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      token_address: "",
      twitter: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    update({ ...values, logo: values.logo[0], banner: values.banner[0] });
    nextHandler();
  }

  const content = form.watch("description");

  const pasteHandler = async () => {
    try {
      const text = await navigator.clipboard.readText();

      form.setValue("token_address", text);
    } catch (error) {
      console.log("Failed to read clipboard");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn("mb-8 space-y-5 overflow-hidden")}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-sm text-mako">
                  What is the name of your Project?
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                    placeholder="Enter name"
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
                    Describe your project
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="border border-alice-blue min-h-[9rem] placeholder:text-gray placeholder:text-xs text-sm text-mako w-full block resize-none p-[0.875rem] rounded-lg"
                      placeholder="Briefly describe your project"
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

          <FormField
            control={form.control}
            name="token_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-sm text-mako">
                  Token address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                      placeholder="For e.g; SDFYJHJLO5465689igDHGJJGYJHG"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={pasteHandler}
                      className="absolute top-1/2 -translate-y-1/2 text-xs text-right text-accent right-2"
                    >
                      Paste
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal flex items-center space-x-[0.375rem] text-sm text-mako">
                  <FaXTwitter size={20} className="text-mist-2" />
                  <span>Twitter URL</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                    placeholder="For e.g; https://x.com"
                    pattern="https://(www\.)?(twitter\.com|x\.com)/[a-zA-Z0-9_]+(/status/[0-9]+)?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal flex items-center space-x-[0.375rem] text-sm text-mako">
                  <RiGlobalLine size={20} className="text-mist-2" />
                  <span>Website URL</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    className="border-alice-blue border shadow-none rounded-lg p-[0.875rem] text-mako text-xs placeholder:text-gray"
                    placeholder="For e.g; https://..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <div className="space-y-6">
                <FormItem className="w-full">
                  <FormLabel className="font-normal text-sm text-mako">
                    Logo Image
                  </FormLabel>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                      maxFileCount={1}
                      maxSize={800 * 400}
                      // progresses={progresses}
                      // pass the onUpload function here for direct upload
                      // onUpload={uploadFiles}
                      // disabled={isUploading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="banner"
            render={({ field }) => (
              <div className="space-y-6">
                <FormItem className="w-full">
                  <FormLabel className="font-normal text-sm text-mako">
                    Banner Image
                  </FormLabel>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                      maxFileCount={1}
                      maxSize={800 * 400}
                      // progresses={progresses}
                      // pass the onUpload function here for direct upload
                      // onUpload={uploadFiles}
                      // disabled={isUploading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>

        <FormButton />
      </form>
    </Form>
  );
};
