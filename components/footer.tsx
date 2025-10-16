"use client"

import { Github, Linkedin } from "lucide-react"
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  { icon: Github, href: "https://github.com/Gozie55", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/chigozie-iwuji", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/uzomauzo5", label: "Twitter" },
  { icon: FaWhatsapp, href: "https://wa.me/2347030710355", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Chigozie. All rights reserved.</span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
