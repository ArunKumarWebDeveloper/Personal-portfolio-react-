import { useEffect, useState } from "react";


export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // fake delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
          
        <div className="spinner"> </div>
        <p className="load">Loading... Please Wait </p>
      </div>
    );
  }

  // ✅ This makes sure your website content shows up
  return <>{children}</>;
}
