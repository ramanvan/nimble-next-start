
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TradingInterface = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 rounded-lg bg-muted">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-foreground text-lg font-medium">Selling</h2>
          <div className="flex gap-4">
            <Select defaultValue="usdc">
              <SelectTrigger className="w-[140px] bg-background">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usdc">USDC</SelectItem>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="sol">SOL</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              type="number" 
              placeholder="0.00"
              className="flex-1 bg-background text-foreground"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-foreground text-lg font-medium">Buying</h2>
          <div className="flex gap-4">
            <Select defaultValue="sol">
              <SelectTrigger className="w-[140px] bg-background">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usdc">USDC</SelectItem>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="sol">SOL</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              type="number" 
              placeholder="0.00"
              className="flex-1 bg-background text-foreground"
            />
          </div>
        </div>

        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Connect to Trade
        </Button>
      </div>
    </div>
  );
};
