
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useState } from "react";

interface FeederCardProps {
  name: string;
  status: "online" | "offline";
  lastFed: string;
  foodLevel: number;
}

const FeederCard = ({
  name,
  status,
  lastFed,
  foodLevel
}: FeederCardProps) => {
  const [feeding, setFeeding] = useState(false);
  
  const handleFeedNow = () => {
    setFeeding(true);
    
    // Simulate feeding process
    setTimeout(() => {
      setFeeding(false);
      toast.success("Food dispensed successfully!");
    }, 2000);
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge variant={status === "online" ? "default" : "secondary"}>
            {status === "online" ? "Online" : "Offline"}
          </Badge>
        </div>
        <CardDescription>Last fed: {lastFed}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Food level</span>
              <span className="text-sm font-medium">{foodLevel}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
              <div 
                className="bg-petfeeder-600 h-2.5 rounded-full"
                style={{ width: `${foodLevel}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleFeedNow} 
          disabled={feeding || status === "offline"} 
          className="w-full pet-feeder-button"
        >
          {feeding ? "Dispensing..." : "Feed Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeederCard;
