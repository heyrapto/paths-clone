import { useEffect, useRef, useState } from "react";

export const FadeParagraph = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // when paragraph goes out of view (above), fade it
        setVisible(entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="s transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </p>
  );
};
