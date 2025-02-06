"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contentData } from "@/lib/content";

const ExternalArrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
  >
    <path
      d="M2.07102 1.99999H10.071M10.071 1.99999V9.99999M10.071 1.99999L1.07102 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = () => {
  const { footer } = contentData;

  return (
    <footer className="relative mt-auto bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start">
          <div className="mb-10 md:mb-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4 inline-block text-[#2770F4]"
            >
              {footer.contact.title}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-4xl md:text-5xl lg:text-6xl font-light"
            >
              {footer.contact.heading}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={footer.contact.cta.href}
                className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-[#1E1E1E] transition-transform hover:scale-105"
              >
                {footer.contact.cta.text}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {footer.navigation.internal.map((link) => (
                <div key={link.id}>
                  <Link
                    href={link.href}
                    className="text-lg hover:text-[#2770F4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </motion.nav>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {footer.navigation.social.map((link) => (
                <div key={link.id}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lg hover:text-[#2770F4] transition-colors"
                  >
                    {link.label}
                    <ExternalArrow />
                  </Link>
                </div>
              ))}
            </motion.nav>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-sm text-white/60">
            {new Date().getFullYear()} {footer.copyright.text}{" "}
            <span className="text-white">{footer.copyright.brand}</span>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 h-[70%] w-1/2 bg-gradient-to-t from-[#2770F4]/20 to-transparent blur-3xl" />
    </footer>
  );
};

export default Footer;
