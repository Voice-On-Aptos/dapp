import React from "react";
import RAvatar from "../ui/avatar-compose";
import Modal from "../ui/modal";

interface Props {
  isOpen: boolean;
  closeHandler: () => void;
  buttonText: string;
}

const VotedCastedPopup = ({ buttonText, isOpen, closeHandler }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      closeHandler={closeHandler}
      className="w-[24.125rem]"
    >
      <div className="mb-7 flex items-center flex-col">
        <RAvatar className="size-8 lg:size-[3.5rem] mb-[0.875rem]" />
        <h4 className="text-mako text-lg lg:text-s20 font-medium">
          Vote has been casted
        </h4>
      </div>
      <button
        onClick={closeHandler}
        className="bg-accent px-4 py-2.5 w-full ml-auto mr-0 hover:bg-teal block text-white font-medium text-sm rounded-lg"
      >
        {buttonText}
      </button>
    </Modal>
  );
};

export default VotedCastedPopup;
