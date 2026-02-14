import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StorySectionProps {
  image: string;
  imageAlt: string;
  caption: string;
  title: string;
  body: string;
  reverse?: boolean;
}

const StorySection = ({ image, imageAlt, caption, title, body, reverse = false }: StorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center ${
          reverse ? "direction-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          className={`${
            reverse ? "md:col-start-6 md:col-span-7" : "md:col-span-7"
          } overflow-hidden`}
          style={{ y: imageY }}
        >
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-auto object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className={`${
            reverse ? "md:col-start-1 md:col-span-4 md:row-start-1" : "md:col-start-9 md:col-span-4"
          } flex flex-col gap-6`}
          style={{ y: textY }}
        >
          <motion.span
            className="text-caption text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {caption}
          </motion.span>
          <motion.h2
            className="text-editorial-md text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-body text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {body}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
