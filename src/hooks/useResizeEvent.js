import { useLayoutEffect, useMemo } from 'react';
import throttle from 'lodash.throttle';

export const useResizeEvent = handler => {
  useLayoutEffect(() => {
    handler(null);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
};

export const useThrottledResizeEvent = (handler, delay = 100) => {
  const throttledHandler = useMemo(() => throttle(handler, delay), [
    handler,
    delay,
  ]);
  useResizeEvent(throttledHandler);
};
