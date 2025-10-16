// "use client"

// import { motion } from "framer-motion"
// import { Quote } from "lucide-react"

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Product Manager at TechCorp",
//     image: "/professional-woman-headshot.png",
//     content:
//       "Working with John was an absolute pleasure. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. He delivered our project ahead of schedule.",
//     rating: 5,
//   },
//   {
//     name: "Michael Chen",
//     role: "CTO at StartupXYZ",
//     image: "/professional-man-headshot.png",
//     content:
//       "John's technical expertise and problem-solving skills are outstanding. He quickly became an integral part of our team and significantly improved our application's performance.",
//     rating: 5,
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Lead Designer at Creative Studio",
//     image: "/professional-woman-headshot-designer.jpg",
//     content:
//       "The collaboration with John was seamless. He perfectly implemented our designs with pixel-perfect precision and even suggested improvements that enhanced the user experience.",
//     rating: 5,
//   },
// ]

// export function TestimonialsSection() {
//   return (
//     <section id="testimonials" className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What People Say</h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
//             Testimonials from clients and colleagues I've had the pleasure of working with
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
//             >
//               <Quote className="h-8 w-8 text-primary mb-4" />

//               <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>

//               <div className="flex items-center gap-4">
//                 <img
//                   src={testimonial.image || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold">{testimonial.name}</h4>
//                   <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                 </div>
//               </div>

//               <div className="flex gap-1 mt-4">
//                 {Array.from({ length: testimonial.rating }).map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
//                     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                   </svg>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
