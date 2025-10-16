"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer",
    company: "BlackSillicon Ltd",
    period: "June, 2025  - Present",
      responsibilities: [
  "Designed and developed scalable backend APIs for Poplar, powering digital product purchases and wallet transactions for over 5,000 users.",
  "Engineered GrowtechAfrica full-stack platform — including the main website and admin dashboard — enabling seamless course enrollment, payments, and student management.",
  "Integrated third-party services such as Flutterwave, Monnify, and EKEDC APIs to automate payments and electricity token vending with 99.9% uptime.",
  "Containerized applications with Docker and orchestrated multi-environment deployments, reducing deployment overhead by 70%.",
  "Collaborated with cross-functional teams to define system requirements and ensure smooth frontend-backend communication across two independent frontends.",
],

  },
  {
  title: "Java Backend Engineer",
  company: "JavaPlus Innovations",
  period: "July, 2024 -  June, 2025",
  responsibilities: [
    "Engineered and deployed scalable Spring Boot microservices supporting over 1,000 API requests daily across multiple products.",
    "Developed RESTful APIs for user onboarding, wallet management, and digital payments, ensuring secure data handling and PCI compliance.",
    "Integrated third-party financial APIs including Paystack and Flutterwave, reducing payment processing failures by 35%.",
    
  ],
},

  {
    title: "Software Engineer Intern",
    company: "Erina Technologies",
    period: "Aug 2023 - June, 2024",
    
    responsibilities: [
  "Assisted in building web pages and simple applications using React and Java Spring Boot.",
  "Helped create and test REST APIs for basic data operations.",
  "Worked with the frontend team to make responsive and user-friendly designs.",
  "Fixed bugs and improved existing features based on team feedback.",
  "Learned version control and collaborated using Git and GitHub.",
],

  },
]

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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
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
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
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
  )
}
