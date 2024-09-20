"use client";
import GalleryAddIcon from "@/components/custom-icons/GalleryAddIcon";
import { HomeIconOutline } from "@/components/custom-icons/HomeIcon";
import { VoiceCircleIcon } from "@/components/custom-icons/VoiceIcon";
import Modal from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const CreatePost = () => {
  const [creatingPost, setCreatingPostState] = useState(false);
  const [content, setContent] = useState("");
  return (
    <>
      <button
        onClick={() => setCreatingPostState(true)}
        className="w-full flex items-center space-x-2 px-2 hover:bg-azure py-[0.375rem] text-xs text-mako"
      >
        <span>
          <HomeIconOutline />
        </span>
        <span>Post</span>
      </button>
      <Modal
        title="Create a Post"
        isOpen={creatingPost}
        closeHandler={() => setCreatingPostState(false)}
        className="w-[34.375rem]"
      >
        <div className="mt-7">
          <span className="px-4 py-[0.625rem] mb-5 rounded-[0.125rem] space-x-2 flex text-xs lg:text-sm text-mako items-start sm:items-center bg-squeeze">
            <span className="*:size-4">
              <VoiceCircleIcon />
            </span>
            <span>
              Creating a post costs <strong>3</strong> Voice Power
            </span>
          </span>
          <div className="mb-7">
            <h5 className="text-xs lg:text-sm text-mako mb-[0.375rem]">
              What do you want to talk about?
            </h5>
            <div className="mb-3 relative h-auto">
              <textarea
                minLength={1}
                maxLength={1000}
                value={content}
                onChange={(event) => {
                  const value = event.target.value;
                  setContent(value);
                }}
                className="border border-alice-blue min-h-[9rem] placeholder:text-gray placeholder:text-xs text-sm text-mako w-full block resize-none p-[0.875rem] rounded-lg"
                placeholder="Share your thoughts with the community"
              />
              <span className="absolute bottom-1 text-xs text-right text-gray right-1.5">
                {content.length}/1000
              </span>
            </div>
            <span className="flex items-center w-fit">
              <input
                type="file"
                accept="images/*"
                id="post-image"
                className="w-0 h-0 opacity-0 scale-0"
              />
              <label
                htmlFor="post-image"
                className="flex space-x-2 cursor-pointer items-center text-sm text-mako"
              >
                <GalleryAddIcon />
                <span>Add images</span>
              </label>
            </span>
          </div>
          <button
            className={cn(
              "bg-accent px-4 py-2.5 w-fit ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
            )}
          >
            {"Post"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreatePost;
