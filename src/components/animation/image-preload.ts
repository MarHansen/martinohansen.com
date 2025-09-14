import { useState, useEffect } from "react";

function useImagePreloader(src?: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [src]);
  return isLoaded;
}

export default useImagePreloader;
