import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { shortenAddress } from "@/lib/utils";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import CopyIcon from "../custom-icons/CopyIcon";
import { HomeIconOutline } from "../custom-icons/HomeIcon";
import RAvatar from "../ui/avatar-compose";
import { toast } from "sonner";

const AccountMenu = () => {
  const { account, disconnect } = useWallet();

  const copyHandler = () => {
    navigator.clipboard.writeText(account?.address || "");
    toast("Address Copied.");
  };

  return (
    <div className="overflow-hidden relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <span className="flex items-center space-x-2 border border-athens rounded-lg px-4 py-[0.5625rem]">
            <RAvatar className="size-[1.75rem]" />
            <span className="font-medium text-sm text-abbey">
              {account?.address ? shortenAddress(account.address) : null}
            </span>
            <MdKeyboardArrowDown size={16} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-lg border-athens border py-[0.625rem] px-[0.375rem] w-[12.4375rem] max-w-full">
          <span className="flex items-center flex-col justify-center mb-2">
            <RAvatar className="size-6 lg:size-[2.75rem] mb-2" />
            <button
              onClick={copyHandler}
              className="text-xs lg:text-sm font-medium text-abbey flex items-center space-x-[0.375rem]"
            >
              <span>{shortenAddress(account?.address || "")}</span>
              <CopyIcon />
            </button>
          </span>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                href="/profile"
                className="flex items-center space-x-2 px-2 w-full py-[0.375rem] text-xs text-mako"
              >
                <span>
                  <HomeIconOutline />
                </span>
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/my-communities"
                className="flex items-center space-x-2 px-2 w-full py-[0.375rem] text-xs text-mako"
              >
                <span>
                  <HomeIconOutline />
                </span>
                <span>My Communities</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/notifications"
                className="flex items-center space-x-2 px-2 w-full py-[0.375rem] text-xs text-mako"
              >
                <span>
                  <HomeIconOutline />
                </span>
                <span>Notifications</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <button
                onClick={disconnect}
                className="flex items-center space-x-2 px-2 w-full py-[0.375rem] text-xs text-mako"
              >
                <span>
                  <HomeIconOutline />
                </span>
                <span>Discount wallet</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AccountMenu;
