import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="p-8 sm:p-12 text-center space-y-6 max-w-md w-full">
        <h1 className="text-6xl sm:text-7xl font-bold text-work-blue">404</h1>
        <p className="text-xl sm:text-2xl text-gray-600">
          Oops! Seite nicht gefunden.
        </p>
        <p className="text-gray-500">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
