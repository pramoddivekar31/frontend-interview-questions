import { useEffect } from "react";

const withAsyncCSS = ({ url }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [url]);

  return <div>Loading CSS Asynchronously</div>;
};
