import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-24 md:py-40 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-editorial-lg text-foreground mb-6">
            Feliz Día
            <br />
            <em>de los enamorados</em>
          </h2>
          
        </motion.div>

        <motion.div
          className="md:col-start-9 md:col-span-4 flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-caption text-muted-foreground block mb-2">Proverbios 31:10-31</span>
            <p className="text-body text-foreground">-Te encontré</p>
          </div>
          <div>
            <span className="text-caption text-muted-foreground block mb-2">1 Corintios 13:4-7</span>
            <p className="text-body text-foreground">-Te decido todos los días</p>
          </div>

        </motion.div>
      </div>

      <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-caption text-muted-foreground"> 14/02 te extraño siempre</span>
        <span className="text-caption text-muted-foreground">Hecho con Amor</span>
      </div>
    </footer>
  );
};

export default Footer;
