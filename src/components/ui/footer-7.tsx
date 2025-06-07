import React, { useState } from "react";
import {
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaDocker,
  FaAws,
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  partners?: Array<{
    icon: React.ReactElement;
    name: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

// Removed sections as per user request

const defaultSocialLinks = [
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  { icon: <FaGithub className="size-5" />, href: "#", label: "GitHub" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
];

const defaultPartners = [
  { icon: <FaDocker className="size-6" />, name: "Docker" },
  { icon: <FaAws className="size-6" />, name: "AWS" },
  { icon: <FaGoogle className="size-6" />, name: "Google Cloud" },
  { icon: <FaMicrosoft className="size-6" />, name: "Microsoft Azure" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/src/assets/logo_2.png",
    alt: "SumoPod Logo",
    title: "SumoPod",
  },
  description = "SumoPod offers seamless container and application purchasing solutions for businesses of all sizes.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} KodingWorks - PT Koding Kreasi Indonesia. All rights reserved.`,
  legalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}: Footer7Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-b bg-muted-foreground">
      <div className="absolute inset-0 bg-center opacity-10" />

      <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center space-y-6">
            <a href={logo.url} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-12 w-auto"
              />
            </a>

            <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
              {description}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 text-sm text-muted">
              <div className="flex items-center justify-center space-x-2">
                <FaEnvelope className="h-4 w-4 text-primary-400" />
                <a
                  href="mailto:support@sumopod.com"
                  className="hover:text-white transition-colors"
                >
                  support@sumopod.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FaPhone className="h-4 w-4 text-muted " />
                <a
                  href="tel:+6285190052577"
                  className="hover:text-white transition-colors"
                >
                  +62 851-9005-2577
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-muted">{copyright}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs text-muted hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        aria-label="Back to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer7;
