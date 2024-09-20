import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const RAvatar = ({
  className,
  src = "https://github.com/voice-on-aptos.png",
}: {
  className?: string;
  src?: string;
}) => {
  return (
    <Avatar className={cn("size-4", className)}>
      <AvatarImage src={src} className="object-cover object-center" />
      <AvatarFallback className="text-s10">VoA</AvatarFallback>
    </Avatar>
  );
};

export default RAvatar;
