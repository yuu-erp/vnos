import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import { BsToggles } from "react-icons/bs";
import { FaApple, FaWifi } from "react-icons/fa";

interface Props {
  className?: string;
}
function Statusbar({ className }: Props) {
  return (
    <header
      className={cn("flex-row justify-between h-6 px-1 bg-black/20 backdrop-blur-2xl", className)}
    >
      <div className="flex-row">
        <Button>
          <FaApple className="size-4.5" />
        </Button>
        <Button className="font-extrabold">
          <span>Chrome</span>
        </Button>
        <Button className="font-semibold">
          <span>File</span>
        </Button>
        <Button className="font-semibold">
          <span>Edit</span>
        </Button>
        <Button className="font-semibold">
          <span>View</span>
        </Button>
        <Button className="font-semibold">
          <span>History</span>
        </Button>
        <Button className="font-semibold">
          <span>Bookmarks</span>
        </Button>
        <Button className="font-semibold">
          <span>Profiles</span>
        </Button>
        <Button className="font-semibold">
          <span>Tap</span>
        </Button>
        <Button className="font-semibold">
          <span>Window</span>
        </Button>
        <Button className="font-semibold">
          <span>Help</span>
        </Button>
      </div>
      <div className="flex-row">
        <Button className="px-2">
          <FaWifi className="size-4.5" />
        </Button>
        <Button className="px-2">
          <Search className="size-4.5" />
        </Button>
        <Button className="px-2">
          <BsToggles className="size-4.5" />
        </Button>
        <Button className="font-semibold">
          <span>Wed Oct 1 10:45 PM</span>
        </Button>
      </div>
    </header>
  );
}

export default React.memo(Statusbar);
