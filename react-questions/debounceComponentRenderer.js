import React, { useState, useEffect, useCallback } from "react";

const debounceComponentRendererHOC = (WrappedComponent, delay) => {
  return (props) => {
    const [renderedProps, setRenderedProps] = useState(props);

    const updateProps = useCallback(
      (newProps) => {
        const timer = setTimeout(() => {
          setRenderedProps(newProps);
        }, delay);

        return () => clearTimeout(timer);
      },
      [delay]
    );

    useEffect(() => {
      updateProps(props);
    }, [props, updateProps]);

    return <WrappedComponent {...renderedProps} />;
  };
};

const Counter = ({ count }) => {
  console.log("Con");
  return <div>Counter: {count}</div>;
};

const Container = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const DebouncedCounter = debounceComponentRendererHOC(Counter, 1000);

  return <DebouncedCounter count={count} />;
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Container />
    </div>
  );
}
