import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { router } from "./components/routes/router";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.6,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
