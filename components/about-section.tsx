// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { GraduationCap, Download } from "lucide-react"
// import { motion } from "framer-motion"

// const education = [
//   {
//     degree: "Bachelor of Science in Computer Science",
//     institution: "University of Technology",
//     year: "2018 - 2022",
//     description: "Graduated with honors, focusing on software engineering and web development.",
//   },
// ]

// export function AboutSection() {
//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
//           <div className="w-20 h-1 bg-primary mx-auto" />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Bio */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
//             <div className="space-y-4 text-muted-foreground leading-relaxed">
//               <p>
//                 I'm a passionate Software Engineer with 3 years of professional experience in building modern web
//                 applications. My journey in tech started during my university years, where I discovered my love for
//                 creating elegant solutions to complex problems.
//               </p>
//               <p>
//                 Throughout my career, I've had the opportunity to work on diverse projects ranging from e-commerce
//                 platforms to enterprise SaaS applications. I thrive in collaborative environments and enjoy mentoring
//                 junior developers.
//               </p>
//               <p>
//                 When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts,
//                 or exploring the latest web technologies. I believe in continuous learning and staying updated with
//                 industry trends.
//               </p>
//             </div>

//             <Button size="lg" className="gap-2" asChild>
//               <a href="/resume.pdf" download>
//                 <Download className="h-5 w-5" />
//                 Download CV
//               </a>
//             </Button>
//           </motion.div>

//           {/* Education */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
//               <GraduationCap className="h-6 w-6 text-primary" />
//               Education
//             </h3>

//             {education.map((edu, index) => (
//               <Card key={index} className="border-border">
//                 <CardContent className="p-6">
//                   <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
//                   <p className="text-primary font-medium mb-2">{edu.institution}</p>
//                   <p className="text-sm text-muted-foreground mb-3">{edu.year}</p>
//                   <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
//                 </CardContent>
//               </Card>
//             ))}

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 gap-4 pt-6">
//               <Card className="border-border">
//                 <CardContent className="p-6 text-center">
//                   <div className="text-4xl font-bold text-primary mb-2">3+</div>
//                   <div className="text-sm text-muted-foreground">Years Experience</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-border">
//                 <CardContent className="p-6 text-center">
//                   <div className="text-4xl font-bold text-primary mb-2">20+</div>
//                   <div className="text-sm text-muted-foreground">Projects Completed</div>
//                 </CardContent>
//               </Card>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
