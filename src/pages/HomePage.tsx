import { useEffect } from 'react';

export default function HomePage(){
  useEffect(() => {
    document.title = "Minehaus Store | Home";
    
    // Optional: Reset title when component unmounts
    return () => {
      document.title = "Minehaus Store";
    };
  }, []);

  return <div>
    Home
  </div>
}