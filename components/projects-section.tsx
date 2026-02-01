"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "GrowTechAfrica",
    description:
      "A full-stack web platform built to advertise technology courses and allow student registrations.",
    image: "/growtechafrica.png",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
    ],
    github: {
      label: "Private Repository",
      locked: true, // 🔒 Private business code
      note: "Codebase is private due to business and security constraints",
    },
    demo: "https://growtechafrica.com",
  },
  {
    title: "Fintech Payment Gateway UI (Multi-Channel)",
    description:
      "A mobile-first payment gateway UI that mimics real checkout flows with Card, Bank Transfer, USSD, and PushPay routes.",
    image: "/payment-gateway-ui.png",
    tech: ["React", "React Router", "Lucide Icons", "Inline CSS"],
    github: {
      label: "View Code",
      locked: false,
      url: "https://github.com/Gozie55/card-payment-sdk-demo.git",
    },
    demo: "https://cardpay-sdk.netlify.app",
  },

  {
    title: "TouchByIfinee",
    description:
      "A sleek and responsive landing page for a beauty salon designed to highlight services, showcase client reviews, display pricing, and allow customers to book appointments or send inquiries through an interactive contact form.",
    image: "/touchbyifinee.png",
    tech: ["React", "TypeScript", "Tailwindcss"],
    github: {
      label: "View Code",
      locked: false,
      url: "https://github.com/Gozie55/TouchByIFine.git",
    },
    demo: "https://touchbyifinee.netlify.app/",
  },

  {
    title: "Admin Dashboard",
    description:
      "A secure and intuitive bank admin dashboard for managing customers, monitoring transactions, reviewing loan applications, and tracking overall financial performance.",
    image: "/admindashboard.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: {
      label: "View Code",
      locked: false,
      url: "https://github.com/Gozie55/my-finance-app.git",
    },
    demo: "https://my-gozloan-app.netlify.app",
  },

  {
    title: "Poplar Backend",
    description:
      "A robust backend system providing RESTful APIs for purchasing airtime, electricity tokens, and other digital products.",
    image: "/poplar.png",
    tech: ["Spring Boot", "PostgreSQL", "Docker", "Flyway"],
    github: {
      label: "Private Repository",
      locked: true, // 🔒 Production fintech system
      note: "Source code is private due to security and commercial constraints",
    },
    demo: "https://poplar-be.blacksillicon.com/actuator/health",
  },

  {
    title: "Ipay Wallet Backend",
    description:
      "A comprehensive banking backend system providing APIs for account creation, KYC verification, and wallet management.",
    image: "/ipaywalletbackend.png",
    tech: ["Spring Boot", "PostgreSQL", "Docker", "Monnify API"],
    github: {
      label: "View Code",
      locked: false,
      url: "https://github.com/Gozie55/Ipay-Wallet-Backend.git",
    },
    demo: "https://ipay-wallet-backend.onrender.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  {/* GitHub / Code button */}
                  {project.github.locked ? (
                    // 🔒 Private repository: disabled button with explanation
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 bg-transparent cursor-not-allowed opacity-70"
                      title={project.github.note} // Tooltip on hover
                      disabled
                    >
                      <Github className="h-4 w-4" />
                      {project.github.label}
                    </Button>
                  ) : (
                    // 🌍 Public repository: clickable link
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        {project.github.label}
                      </a>
                    </Button>
                  )}

                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
