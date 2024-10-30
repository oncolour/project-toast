import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
};

export default useEscapeKey;
