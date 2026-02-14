import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "gala", span: "md:col-span-5 md:row-span-2" },
  { src: gallery2, alt: "olivos", span: "md:col-span-4 md:col-start-7" },
  { src: gallery3, alt: "besoo", span: "md:col-span-3 md:col-start-7" },
  { src: gallery4, alt: "que fuerte", span: "md:col-span-4 md:col-start-4 md:row-start-3" },
];

const GalleryItem = ({ src, alt, span }: { src: string; alt: string; span: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div ref={ref} className={`overflow-hidden ${span}`} style={{ y }}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      />
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-40">
      <motion.div
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-caption text-muted-foreground block mb-4">Colección</span>
        <h2 className="text-editorial-lg text-foreground max-w-xl">
          Momentos <em>por siempre</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
        {images.map((img) => (
          <GalleryItem key={img.alt} {...img} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
