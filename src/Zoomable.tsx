import React, { useEffect, useMemo, useState } from "react";
import aaa from "./data.json";
console.log({
  aaa,
});

export type ZoomableType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const steps = [
  0,
  1 / 4,
  1 / 3,
  1 / 2,
  2 / 3,
  3 / 4,
  4 / 5,
  9 / 10,
  1,
  11 / 10,
  5 / 4,
  3 / 2,
  7 / 4,
  2 / 1,
  5 / 2,
  3 / 1,
  4 / 1,
  5 / 1,
  Infinity,
];
const toCurrIndex = (value: number) =>
  steps.findIndex((step) => step > value) - 1;
const toPrevIndex = (value: number) =>
  steps.findIndex((step) => step > value) - 2;
const toNextIndex = (value: number) => steps.findIndex((step) => step > value);
const checkReachBound = (value: number) => {
  if (value === steps[0]) return steps[1];
  if (value === steps[steps.length - 1]) return steps[steps.length - 2];

  return value;
};
const toCurr = (value: number) => {
  return checkReachBound(steps[toCurrIndex(value)]);
};
const toPrev = (value: number) => {
  return checkReachBound(steps[toPrevIndex(value)]);
};
const toNext = (value: number) => {
  return checkReachBound(steps[toNextIndex(value)]);
};

export const Zoomable = React.memo<ZoomableType>(function Zoomable({
  children,
  ...props
}) {
  const [[width, height], setSize] = useState([1, 1]);
  const [[clientWidth, clientHeight], setClientSize] = useState([
    width,
    height,
  ]);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [zoomContainer, setZoomContainer] = useState<HTMLDivElement | null>(
    null
  );
  const scale = useMemo(() => {
    const [scaleX, scaleY] = [width / clientWidth, height / clientHeight];

    return Math.min(scaleX, scaleY, 1);
  }, [width, height, clientWidth, clientHeight]);

  const [localScale, setLocaleScale] = useState<number | null>(null);

  const realScale = useMemo(
    () => toCurr(localScale ?? scale),
    [localScale, scale]
  );

  const allowScroll = useMemo(
    () => clientWidth / realScale < width || clientHeight / realScale < height,
    [clientHeight, clientWidth, realScale, width, height]
  );

  const transformStyle = useMemo(() => {
    return { transform: `scale(${realScale})` };
  }, [realScale]);

  useEffect(() => {
    if (zoomContainer) {
      const syncClientSize = (el: Element) => {
        const { clientWidth, clientHeight } = el;
        clientWidth &&
          clientHeight &&
          setClientSize([clientWidth, clientHeight]);
      };

      syncClientSize(zoomContainer);

      const option: ResizeObserverOptions = {};

      const observe: ResizeObserverCallback = (entries) => {
        for (const entry of entries) {
          syncClientSize(entry.target);
        }
      };

      const observer = new ResizeObserver(observe);

      observer.observe(zoomContainer, option);

      return () => observer.disconnect();
    }
  }, [zoomContainer]);
  useEffect(() => {
    if (container) {
      const { clientWidth, clientHeight } = container;
      setSize([clientWidth, clientHeight]);
    }
  }, [container]);

  return (
    <div {...props} style={{ ...props.style, position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: allowScroll ? "auto" : "hidden",
        }}
        ref={setContainer}
      >
        <div
          ref={setZoomContainer}
          style={{ transformOrigin: "center", ...transformStyle }}
        >
          {children}
        </div>
      </div>
      <div style={{ position: "absolute", right: "16px", top: "16px" }}>
        <span onClick={() => setLocaleScale(toPrev(realScale))}>-</span>
        {Math.round(realScale * 100)}%
        <span onClick={() => setLocaleScale(toNext(realScale))}>+</span>
      </div>
    </div>
  );
});
