
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileNav from "@/components/dashboard/MobileNav";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Settings = () => {
  const [feederName, setFeederName] = useState("Living Room Feeder");
  const [wifiSSID, setWifiSSID] = useState("Home_WiFi");
  const [wifiPassword, setWifiPassword] = useState("••••••••");
  const [deviceId, setDeviceId] = useState("FDR12345678");
  
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };
  
  const handleResetDevice = () => {
    toast.success("Device reset instructions sent!");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1">
        <MobileNav />
        <div className="container px-4 py-6">
          <DashboardHeader 
            title="Settings" 
            description="Configure your pet feeder device"
          />
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Settings</CardTitle>
                <CardDescription>Configure your feeder device</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feederName">Feeder Name</Label>
                  <Input 
                    id="feederName" 
                    value={feederName}
                    onChange={(e) => setFeederName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deviceId">Device ID</Label>
                  <Input 
                    id="deviceId" 
                    value={deviceId}
                    disabled
                  />
                  <p className="text-sm text-muted-foreground">
                    This is your unique device identifier
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full pet-feeder-button"
                  onClick={handleSaveSettings}
                >
                  Save Settings
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>WiFi Configuration</CardTitle>
                <CardDescription>Connect your device to WiFi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="wifiSSID">WiFi Network Name (SSID)</Label>
                  <Input 
                    id="wifiSSID" 
                    value={wifiSSID}
                    onChange={(e) => setWifiSSID(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wifiPassword">WiFi Password</Label>
                  <Input 
                    id="wifiPassword" 
                    type="password"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full pet-feeder-button"
                  onClick={handleSaveSettings}
                >
                  Update WiFi Settings
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Device Maintenance</CardTitle>
                <CardDescription>Troubleshooting and reset options</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you're experiencing issues with your device, you can reset it to factory defaults.
                  This will remove all saved settings and schedules.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={handleResetDevice}
                >
                  Reset Device
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
