"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactLink() {
  return (
    <motion.div whileHover="hover" initial="initial" className="relative inline-block">
      <Link
        href="/contact"
        className="relative overflow-hidden px-4 py-2 rounded-md border-[0.5px] text-[#2dd4bf] flex items-center justify-center transition-all duration-300"
      >
        {/* Background Fade-Out Animation */}
        <motion.div
          variants={{
            initial: { backgroundColor: "rgb(45, 212, 191)", opacity: 1 },
            hover: { backgroundColor: "transparent", opacity: 0, },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        />

        {/* Text to Icon Transition */}
        <motion.span
          variants={{
            initial: { opacity: 0, y: 1 },
            hover: { opacity: 0, y: -10 }, // Move up when hovered
          }}
          transition={{ duration: 0.3 }}
          className="relative text-white"
        >
          Contact Us
        </motion.span>

        <motion.span
          variants={{
            initial: { opacity: 10, y: 0 }, // Start above
            hover: { opacity: 1, y: 0 }, // Move down into view
          }}
          transition={{ duration: 0.3 }}
          className="absolute text-[#2dd4bf]"
        >
          <Mail size={20} />
        </motion.span>
      </Link>
    </motion.div>
  );
}