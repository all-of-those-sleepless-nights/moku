import { RouterProvider } from "react-router-dom";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { router } from "./components/routes/router";

function App() {
  const lenis = useRef<Lenis | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.current?.raf(time);
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.current?.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
