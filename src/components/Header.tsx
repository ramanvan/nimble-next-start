
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 transition-colors">
      <div className="text-foreground text-xl font-semibold">Trading</div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          Connect
        </Button>
      </div>
    </header>
  );
};
