import React, { useState } from "react";
import { MotionConfig, motion as Motion } from "framer-motion";

export const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-15 w-10 rounded-full  transition-colors hover:bg-white/20"
      >
        <Motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px] w-6 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <Motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px] w-6 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <Motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px] w-6 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 0px)",
          }}
        />
      </Motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50%",
    },
  },
};