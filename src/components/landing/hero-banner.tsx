import { useEffect, useState, useRef } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import backgroundImage from "../../assets/hero.jpg";

function HeroBanner() {
  const mokuHeader = "Moku .";
  const [displayMokuHeader, setDisplayMokuHeader] = useState(false);

  const [size] = useState<DOMRect | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);

  // Get base mask size based on screen size (2xl = 1536px)
  const getBaseMaskSize = () =>
    window.innerWidth >= 750 ? 125 : window.innerWidth >= 576 ? 115 : 105;
  const maskSize = useMotionValue(getBaseMaskSize());

  // Calculate reduced size (75% of base) and radius (same as base)
  const getReducedSize = () => getBaseMaskSize() * 0.75;
  const [radius, setRadius] = useState(getBaseMaskSize());

  const maskImage = useMotionTemplate`radial-gradient(circle at ${maskX}px ${maskY}px, transparent 0px, transparent ${maskSize}px, black ${maskSize}px)`;

  // Image dimensions and focal point from Figma
  const IMAGE_WIDTH = 4096;
  const IMAGE_HEIGHT = 2731;
  const FOCAL_X = 2048.08;
  const FOCAL_Y = 1033;
  const text = "Emphasize Your Own Style • ";

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

    const updateMaskSize = () => {
      const baseSize = getBaseMaskSize();
      maskSize.set(baseSize);
      setRadius(baseSize);
    };

    const handleResize = () => {
      updatePosition();
      updateMaskSize();
    };

    // Initial radius update
    updateMaskSize();

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
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (img) {
        img.removeEventListener("load", updatePosition);
      }
    };
  }, [maskX, maskY, maskSize]);

  return (
    <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
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
          onHoverStart={() => !size && animate(maskSize, getReducedSize())}
          onHoverEnd={() => {
            const { x, y } = calculateFocalPosition();
            const baseSize = getBaseMaskSize();
            animate(maskSize, baseSize);
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
            <text className="text-sm lg:text-base xl:text-lg font-bold fill-red-700 shadow-2xl shadow-red-600 uppercase tracking-wider">
              <textPath href="#circlePath" startOffset="0%">
                {text}
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                {text}
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      <motion.a
        initial="initial"
        animate="animated"
        className={`text-3xl md:text-5xl text-white shadow-xl font-bold font-serif absolute bottom-2 left-2 whitespace-nowrap overflow-hidden z-10 ${
          displayMokuHeader && "hidden"
        }`}
        style={{ lineHeight: 0.85 }}
        onAnimationComplete={() => {
          setDisplayMokuHeader(true);
        }}
      >
        <div>
          {mokuHeader.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                variants={{
                  initial: { y: 0 },
                  animated: { y: "-100%" },
                }}
                transition={{ delay: 3 + 0.1 * i }}
                className="inline-block text-white"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {mokuHeader.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                variants={{
                  initial: { y: "100%" },
                  animated: { y: 0 },
                }}
                transition={{ delay: 4.5 + 0.1 * i }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </motion.a>

      <motion.a
        initial="initial"
        whileHover="hovered"
        className={`text-3xl md:text-5xl text-white shadow-xl font-bold font-serif absolute bottom-2 left-2 whitespace-nowrap overflow-hidden ${
          !displayMokuHeader && "hidden"
        }`}
        style={{ lineHeight: 0.85 }}
      >
        <div>
          {mokuHeader.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{ delay: 0.1 * i }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {mokuHeader.split("").map((l, i) => {
            return (
              <motion.span
                key={i}
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{ delay: 0.1 * i }}
                className="inline-block"
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
    </section>
  );
}

export default HeroBanner;
