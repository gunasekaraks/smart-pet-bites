
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface NextMealDisplayProps {
  time: string;
  amount: number;
  name: string;
}

const NextMealDisplay = ({
  time,
  amount,
  name
}: NextMealDisplayProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-petfeeder-500" />
          Next Scheduled Feeding
        </CardTitle>
        <CardDescription>Your pet's upcoming meal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-6 space-y-2">
          <div className="text-4xl font-bold">{time}</div>
          <div className="text-xl font-medium text-petfeeder-600">{name}</div>
          <div className="text-muted-foreground">{amount}g of food</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextMealDisplay;
