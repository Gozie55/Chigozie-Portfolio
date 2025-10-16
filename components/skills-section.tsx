// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { FaJava  } from 'react-icons/fa';
// import { BiLogoSpringBoot } from "react-icons/bi";

// import {
//   SiReact,
//   SiTypescript,
//   SiJavascript,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiBootstrap,
//   SiMongodb,
//   SiPostgresql,
//   SiMysql,
//   SiNestjs,
//   SiGit,
//   SiDocker,
// } from "react-icons/si";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", icon: SiReact },
//       { name: "TypeScript", icon: SiTypescript },
//       { name: "JavaScript", icon: SiJavascript },
//       { name: "Next.js", icon: SiNextdotjs },
//       { name: "TailwindCSS", icon: SiTailwindcss },
//       { name: "Bootstrap", icon: SiBootstrap },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "NestJS", icon: SiNestjs },
//       { name: "MongoDB", icon: SiMongodb },
//       { name: "PostgreSQL", icon: SiPostgresql },
//       { name: "MySQL", icon: SiMysql },
//       { name: "Java", icon: FaJava },
//       { name: "Spring Boot", icon: BiLogoSpringBoot },
//     ],
//   },
//   {
//     title: "Tools & Others",
//     skills: [
//       { name: "Git", icon: SiGit },
//       { name: "Docker", icon: SiDocker },
//     ],
//   },
// ];
// export function SkillsSection() {
//   return (
//     <section
//       id="skills"
//       className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
//     >
//       <div className="absolute inset-0 -z-10">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, -80, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
          
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
//             Skills & Technologies
//           </h2>
          
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               <Card className="border-border h-full bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="h-10 w-1 bg-primary rounded-full" />
//                     <h3 className="text-xl font-semibold text-foreground">
//                       {category.title}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {category.skills.map((skill, skillIndex) => (
//                       <motion.div
//                         key={skill.name}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
//                         viewport={{ once: true }}
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         className="group/skill"
//                       >
//                         <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 hover:bg-primary/10 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default">
//                           <skill.icon className="h-5 w-5 text-primary group-hover/skill:scale-110 transition-transform duration-300" />
//                           <span className="text-sm font-medium text-foreground">
//                             {skill.name}
//                           </span>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
          
//           <div className="flex justify-center gap-6 flex-wrap ">
//             {[
//               SiReact,
//               SiTypescript,
//               SiJavascript,
//               SiNextdotjs,
//               SiTailwindcss,
//               SiBootstrap,
//               SiMongodb,
//               SiPostgresql,
//               SiMysql,
//               SiNestjs,
//               FaJava,
//               BiLogoSpringBoot,
//               SiGit,
//               SiDocker,
//             ].map((Icon, index) => (
//               <motion.div
//                 key={index}
//                 animate={{
//                   y: [0, -10, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Number.POSITIVE_INFINITY,
//                   delay: index * 0.2,
//                 }}
//                 className="opacity-100 hover:opacity-50 transition-opacity"
//               >
//                 <Icon className="h-8 w-8 fill-current text-black dark:text-white transition-colors duration-300" />

//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
