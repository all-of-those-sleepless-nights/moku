import { useEffect, useState, useRef } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import backgroundImage from "../../assets/hero.jpg";

function HeroBanner() {
  const [size] = useState<DOMRect | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);
  const maskSize = useMotionValue(100);

  const maskImage = useMotionTemplate`radial-gradient(circle at ${maskX}px ${maskY}px, transparent 0px, transparent ${maskSize}px, black ${maskSize}px)`;

  // Image dimensions and focal point from Figma
  const IMAGE_WIDTH = 4096;
  const IMAGE_HEIGHT = 2731;
  const FOCAL_X = 2048.08;
  const FOCAL_Y = 1033;
  const text = "Emphasize Your Own Style • Emphasize Your Own Style • ";
  const radius = 100;

  // Calculate percentages
  const focalXPercent = FOCAL_X / IMAGE_WIDTH; // 0.50002
  const focalYPercent = FOCAL_Y / IMAGE_HEIGHT; // 0.37818

  const calculateFocalPosition = () => {
    if (!imageRef.current || !containerRef.current) return { x: 0, y: 0 };

    const imgRect = imageRef.current.getBoundingClientRect();
    const img = imageRef.current;

    const naturalRatio = img.naturalWidth / img.naturalHeight;
    const displayedRatio = imgRect.width / imgRect.height;

    let renderedWidth = imgRect.width;
    let renderedHeight = imgRect.height;
    let offsetX = 0;
    let offsetY = 0;

    // Calculate which dimension is cropped based on object-cover
    if (displayedRatio > naturalRatio) {
      // Image is cropped on top/bottom
      renderedHeight = imgRect.width / naturalRatio;
      offsetY = (imgRect.height - renderedHeight) / 2;
    } else {
      // Image is cropped on left/right
      renderedWidth = imgRect.height * naturalRatio;
      offsetX = (imgRect.width - renderedWidth) / 2;
    }

    // Calculate focal point position relative to container
    const focalX = offsetX + renderedWidth * focalXPercent;
    const focalY = offsetY + renderedHeight * focalYPercent;

    return { x: focalX, y: focalY };
  };

  useEffect(() => {
    const updatePosition = () => {
      const { x, y } = calculateFocalPosition();
      maskX.set(x);
      maskY.set(y);
    };

    // Initial position after image loads
    const img = imageRef.current;
    if (img) {
      if (img.complete) {
        updatePosition();
      } else {
        img.addEventListener("load", updatePosition);
      }
    }

    // Update on resize
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      if (img) {
        img.removeEventListener("load", updatePosition);
      }
    };
  }, [maskX, maskY]);

  return (
    <section className="w-screen h-screen sticky top-0 flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden"
      >
        <img
          ref={imageRef}
          alt="hero-banner"
          src={backgroundImage}
          className="w-full h-full object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-black/60"
          onHoverStart={() => !size && animate(maskSize, 75)}
          onHoverEnd={() => {
            const { x, y } = calculateFocalPosition();
            animate(maskSize, 100);
            animate(maskX, x, { duration: 0.5 });
            animate(maskY, y, { duration: 0.5 });
          }}
          onPointerMove={(e) => {
            if (size) return;
            const { top, left } = (
              e.currentTarget as HTMLElement
            ).getBoundingClientRect();
            maskX.set(e.clientX - left);
            maskY.set(e.clientY - top);
          }}
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
        />

        {/* Circular Text */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: maskX,
            top: maskY,
            x: "-50%",
            y: "-50%",
          }}
        >
          <svg
            width={radius * 2}
            height={radius * 2}
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <defs>
              <path
                id="circlePath"
                d={`M ${radius}, ${radius} m -${radius - 20}, 0 a ${
                  radius - 20
                },${radius - 20} 0 1,1 ${(radius - 20) * 2},0 a ${
                  radius - 20
                },${radius - 20} 0 1,1 -${(radius - 20) * 2},0`}
              />
            </defs>
            <text className="text-sm font-bold fill-black shadow-lg shadow-white uppercase tracking-wider">
              <textPath href="#circlePath" startOffset="0%">
                {text}
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBanner;
