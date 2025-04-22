
import { Header } from "@/components/Header";
import { TradingInterface } from "@/components/TradingInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4">
        <TradingInterface />
      </main>
    </div>
  );
};

export default Index;
