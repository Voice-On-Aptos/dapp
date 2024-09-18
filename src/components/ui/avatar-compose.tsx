import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const RAvatar = ({ className }: { className?: string }) => {
  return (
    <Avatar className={cn("size-4", className)}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className="text-s10">VoA</AvatarFallback>
    </Avatar>
  );
};

export default RAvatar;
