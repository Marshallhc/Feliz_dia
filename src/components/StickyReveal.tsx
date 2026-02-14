import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storyImage from "@/assets/story-3.jpg";

const StickyReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.4, 1, 1, 0.6]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      {/* Sticky image background */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={storyImage}
          alt="Hands shaping clay"
          className="w-full h-full object-cover"
          style={{ scale: imageScale, opacity: imageOpacity }}
        />
      </div>

      {/* Overlaid text blocks */}
      <div className="absolute inset-0 flex flex-col items-center justify-around py-[25vh] pointer-events-none">
        <motion.div
          className="bg-background/80 backdrop-blur-sm p-8 md:p-12 max-w-md mx-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-caption text-muted-foreground block mb-4">1 Tesalonicenses 5:18</span>
          <h3 className="text-editorial-md text-foreground mb-4">Gracias Señor</h3>
          <p className="text-body text-muted-foreground">
            Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús
          </p>
        </motion.div>

        <motion.div
          className="bg-background/80 backdrop-blur-sm p-8 md:p-12 max-w-md mx-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-caption text-muted-foreground block mb-4">Mateo 5:13-16,</span>
          <h3 className="text-editorial-md text-foreground mb-4">Sos Sal y Luz!</h3>
          <p className="text-body text-muted-foreground">
            Ustedes son la sal de tierra. Ustedes son la luz del mundo.
          </p>
        </motion.div>

        <motion.div
          className="bg-background/80 backdrop-blur-sm p-8 md:p-12 max-w-md mx-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-caption text-muted-foreground block mb-4">Marshall 1:1-1</span>
          <h3 className="text-editorial-md text-foreground mb-4">Esperar y Triunfar</h3>
          <p className="text-body text-muted-foreground">
            No sé si está en tu voluntad pero me gusta.. y mucho.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StickyReveal;
