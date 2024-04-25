import React, { useRef, useState, useLayoutEffect } from "react";

export default function CreativesBar({ creativesCount }) {
  const [statusBarLen, setStatusBarLen] = useState(0);
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    const updateStatusBarLength = () => {
      if (inputRef.current) {
        setStatusBarLen(inputRef.current.offsetWidth);
      }
    };
    updateStatusBarLength();

    window.addEventListener("resize", updateStatusBarLength);

    return () => {
      window.removeEventListener("resize", updateStatusBarLength);
    };
  }, []);

  return (
    <div className="creatives-bar">
      <span className="status-bar" ref={inputRef}>
        <span
          className="fill"
          style={{ width: `${(creativesCount / 5) * statusBarLen}px` }}
        ></span>
      </span>
      <span className="creatives-status">{creativesCount} / 5 Creatives</span>
    </div>
  );
}
