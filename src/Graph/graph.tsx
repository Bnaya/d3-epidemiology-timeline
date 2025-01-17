import * as React from "react";
// import { runD3Stuff } from "./runD3Stuff";
import { runD3StuffSecondIteration } from "./secondIterationD3";

export function Graph() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      runD3StuffSecondIteration(containerRef.current);
    }
  }, []);

  return <div ref={containerRef}></div>;
}
