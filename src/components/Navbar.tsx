import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference"
    >
      <span className="text-caption text-primary-foreground">y si sí?</span>
      <span className="text-caption text-primary-foreground">por mí sí</span>
    </motion.nav>
  );
};

export default Navbar;
