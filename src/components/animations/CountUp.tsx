import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp = ({ 
  end, 
  start = 0, 
  duration = 2, 
  delay = 0, 
  prefix = "", 
  suffix = "" 
}: CountUpProps) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let animationFrame: number;

    if (isInView) {
      timeout = setTimeout(() => {
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / (duration * 1000), 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const current = Math.floor(start + (end - start) * easeOutQuad);

          setCount(current);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);
    }

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, start, end, duration, delay]);

  return (
    <div ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default CountUp;
