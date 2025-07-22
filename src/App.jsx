import React, { useEffect, useState } from "react";
import Loader from "./components/loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to RoririSoft 💻</h1>
    </div>
  );
};

export default App;
