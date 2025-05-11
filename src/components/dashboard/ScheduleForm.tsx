
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Clock } from "lucide-react";

interface MealScheduleItem {
  id: string;
  time: string;
  amount: number;
  nickname: string;
}

const ScheduleForm = () => {
  const [meals, setMeals] = useState<MealScheduleItem[]>([
    { id: "1", time: "08:00", amount: 100, nickname: "Breakfast" },
    { id: "2", time: "17:00", amount: 100, nickname: "Dinner" }
  ]);
  
  const [time, setTime] = useState("12:00");
  const [amount, setAmount] = useState("100");
  const [nickname, setNickname] = useState("");
  
  const handleAddMeal = () => {
    if (!time || !amount) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const newMeal = {
      id: Date.now().toString(),
      time,
      amount: parseInt(amount),
      nickname: nickname || `Meal ${meals.length + 1}`
    };
    
    setMeals([...meals, newMeal]);
    toast.success("Meal schedule added");
    
    // Reset form
    setTime("12:00");
    setAmount("100");
    setNickname("");
  };
  
  const handleRemoveMeal = (id: string) => {
    setMeals(meals.filter(meal => meal.id !== id));
    toast.success("Meal removed from schedule");
  };

  const handleUpdateSchedule = () => {
    // This is where you would send the schedule to your backend/ESP32
    toast.success("Schedule updated successfully!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current Schedule</CardTitle>
          <CardDescription>Your pet's feeding schedule</CardDescription>
        </CardHeader>
        <CardContent>
          {meals.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No meals scheduled. Add your first meal below.
            </div>
          ) : (
            <div className="space-y-4">
              {meals.map((meal) => (
                <div 
                  key={meal.id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="bg-petfeeder-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-petfeeder-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{meal.nickname}</p>
                      <p className="text-sm text-muted-foreground">
                        {meal.time} • {meal.amount}g
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveMeal(meal.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full pet-feeder-button"
            onClick={handleUpdateSchedule}
          >
            Update Schedule
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Add New Meal</CardTitle>
          <CardDescription>Set up a new feeding time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="time">Feeding Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (grams)</Label>
                <div className="flex">
                  <Input
                    id="amount"
                    type="number"
                    min="1"
                    max="500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="flex items-center justify-center px-3 border border-l-0 rounded-r-md bg-secondary">
                    g
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nickname">Meal Name (optional)</Label>
              <Input
                id="nickname"
                placeholder="e.g. Breakfast, Dinner"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full pet-feeder-button"
            onClick={handleAddMeal}
          >
            Add Meal
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ScheduleForm;
