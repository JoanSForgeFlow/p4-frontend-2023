import { useState, useEffect, useRef } from "react";

const useInfiniteScroll = (callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [node, setNode] = useState<Element | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    if (node) observer.current.observe(node);

  }, [node, callback]);

  return [setNode];
}

export default useInfiniteScroll;
