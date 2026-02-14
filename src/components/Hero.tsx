import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/a2jpeg.jpeg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-[100vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img
          src={heroImage}
          alt="Minimal ceramic vase on linen"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        style={{ opacity, y: titleY }}
      >
        <h1 className="text-editorial-xl text-foreground text-center max-w-5xl">
          Te Amo
          <br />
          <em>Muchooo</em>
        </h1>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-caption text-muted-foreground">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
