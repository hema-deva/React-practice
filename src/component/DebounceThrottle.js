import React, { useRef, useState, useEffect } from 'react';

export function DebounceThrottle() {
  const [count, setCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  // Persist timer and timestamp between renders
  const throttleTimeRef = useRef(0);
  const debounceTimerRef = useRef(null);

  const handleClick = () => {
    // Immediate count
    setCount(prev => prev + 1);

    // Debounce logic (wait 500ms after last click)
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setDebounceCount(prev => prev + 1);
    }, 1000);

    
    const now = Date.now();
    if (now - throttleTimeRef.current >= 5000) {
      throttleTimeRef.current = now;
      setThrottleCount(prev => prev + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>Click Count: {count}</p>
      <p>Debounced Count (500ms after stop): {debounceCount}</p>
      <p>Throttled Count (1 per 500ms max): {throttleCount}</p>
    </div>
  );
}
