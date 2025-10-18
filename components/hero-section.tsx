"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  { icon: Github, href: "https://github.com/Gozie55", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/chigo-iwuji", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/uzomauzo5", label: "Twitter" },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2347030710355",
    label: "WhatsApp",
  },
];

export function HeroSection() {
  const [dots, setDots] = useState<{ left: string; top: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random dots only on client
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setDots(generated);
  }, []);

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        />

        {dots.map((dot, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="text-primary">Chigozie</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
                  />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              As a software engineer with extensive industry experience, I specialize in building scalable, secure, and
              user-centered applications. I’ve contributed to projects across fintech, energy, and enterprise solutions,
              always focusing on delivering measurable results and seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button size="lg" onClick={handleContactClick} className="text-base group">
                Hire Me →
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full bg-secondary/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 border border-border/50 hover:border-primary/30"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 clip-hex blur-2xl" />
              <div className="relative w-full h-full clip-hex overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/chigozie.png"
                  alt="Chigozie - Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
