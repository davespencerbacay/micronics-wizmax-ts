import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// const overscrollOptions = {
//   enable: true,
//   effect: "bounce",
//   damping: 0.15,
//   maxOverscroll: 150,
//   glowColor: "#fff",
// };

const overscrollOptions = {
  enable: true,
  effect: "glow",
  damping: 0.1,
  maxOverscroll: 200,
  glowColor: "#222a2d",
};

const options = {
  damping: 0.05,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);

    Scrollbar.init(document.body, options);
  }, []);

  return null;
};

export default SmoothScroll;
