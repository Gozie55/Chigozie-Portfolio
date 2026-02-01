"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer & Support Engineer",
    company: "BlackSilicon Ltd, Lagos, Nigeria",
    period: "June 2023 – Present",
    responsibilities: [
      "Architected and implemented a microservices-based backend comprising three independent services, connected through a centralized API Gateway to enable secure routing, service isolation, and cross-service communication.",
      "Designed and built scalable backend APIs powering digital purchases, utility payments, and wallet transactions for a fintech platform serving over 5,000 active users.",
      "Implemented an API Gateway layer with request validation, routing, and service abstraction, enabling consistent external APIs while allowing internal services to evolve independently.",
      "Integrated third-party payment and utility providers including Flutterwave, Monnify, and EKEDC, ensuring high system reliability, transactional integrity, and near-zero downtime.",
      "Developed a full-stack education and business platform (public website and admin dashboard) supporting payments, course enrollment, user management, and role-based access control.",
      "Containerized microservices using Docker and orchestrated multi-environment deployments, significantly reducing deployment time and operational overhead.",
      "Refactored frontend components and backend service boundaries to improve reusability, maintainability, and developer productivity across teams.",
      "Collaborated closely with product managers and frontend engineers to design stable, well-documented APIs consumed by multiple client applications.",
    ],
  },

  {
    title: "Java Backend Engineer",
    company: "JavaPlus Innovations, Lagos Nigeria",
    period: "July 2021 to April 2023",
    responsibilities: [
      "Built and deployed Spring Boot microservices handling thousands of API requests daily across multiple products. ",
      "Designed secure REST APIs for user onboarding, wallet systems, and payment processing with strong focus on data security and compliance. ",
      "ntegrated third party payment services including Paystack and Flutterwave, reducing failed transactions and improving payment success rates. ",
      "Optimized backend performance and improved system stability through better service design and monitoring. ",
    ],
  },

  {
    title: "Software Engineer Intern",
    company: "Erina Technologies",
    period: "August 2020 to June 2021",

    responsibilities: [
      "Supported development of web applications using React and Java Spring Boot.",
      "Assisted in building and testing REST APIs for core application features. ",
      "Collaborated with designers and senior developers to deliver responsive and user friendly interfaces. ",
      "Fixed bugs and improved existing features based on team feedback.",
      "Fixed bugs and improved existing features while learning best practices in version control and team collaboration.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 hidden md:block" />

                <Card className="border-border md:ml-16">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary md:hidden" />
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm flex gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span className="leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
