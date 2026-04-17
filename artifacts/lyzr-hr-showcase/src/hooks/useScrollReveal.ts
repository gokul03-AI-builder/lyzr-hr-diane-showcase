import { useCallback, useRef, useEffect } from "react";

type RefCallback<T extends HTMLElement = HTMLElement> = (el: T | null) => void;

/**
 * Single element scroll reveal via callback ref.
 * Returns a callback ref — pass it directly as the `ref` prop.
 * A fresh IntersectionObserver is created each time the element mounts,
 * so navigating back to the page correctly re-animates content.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
): RefCallback<T> {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Cleanup on final unmount
  useEffect(() => () => { observerRef.current?.disconnect(); }, []);

  return useCallback((el: T | null) => {
    // Tear down any previous observer for this element
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (!el) return;

    // Reset so re-mounts animate in again
    el.classList.remove("revealed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
          observerRef.current = null;
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    observerRef.current = observer;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

/**
 * Staggered list reveal via callback refs.
 * Each element gets its own fresh observer on mount.
 * Usage: const setRef = useScrollRevealList(n); ... ref={setRef(i)}
 */
export function useScrollRevealList(
  _count: number,
  options?: IntersectionObserverInit
) {
  const observersRef = useRef<Map<number, IntersectionObserver>>(new Map());

  useEffect(() => {
    return () => {
      observersRef.current.forEach((o) => o.disconnect());
      observersRef.current.clear();
    };
  }, []);

  // Returns a stable-per-index callback ref
  const setRef = useCallback(
    (i: number) => (el: HTMLElement | null) => {
      const existing = observersRef.current.get(i);
      if (existing) {
        existing.disconnect();
        observersRef.current.delete(i);
      }

      if (!el) return;

      el.classList.remove("revealed");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("revealed"), i * 70);
            observer.disconnect();
            observersRef.current.delete(i);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px", ...options }
      );

      observer.observe(el);
      observersRef.current.set(i, observer);
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return setRef;
}
