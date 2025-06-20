import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="p-10 bg-card/80 border border-border text-center space-y-4">
        <h1 className="text-work-blue">404</h1>
        <p className="text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-placed-blue hover:underline">
          Return to Home
        </a>
      </Card>
    </div>
  );
};

export default NotFound;
