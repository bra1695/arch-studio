import React from "react";
import { motion } from "framer-motion";

const TitlePage = ({ name }) => {
  return (
    <div className="hidden md:block">
      <motion.div 
        className="flex flex-col items-center gap-20 absolute top-0 left-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Vertical line */}
        <motion.div 
          className="w-px h-16 bg-slate-200"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Rotated title */}
        <motion.h1 
          className="rotate-90 text-slate-200 tracking-[0.4em] font-spartan text-md font-bold"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 90 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {name.toUpperCase()}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default TitlePage;