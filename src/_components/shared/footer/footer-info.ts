import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const footerInfo = {
  socials: [
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "Twitter", href: "#", icon: FaTwitter },
    { name: "Instagram", href: "#", icon: FaInstagram },
    { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  ],

  quickLinks: [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],

  support: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],

  contact: [
    { label: "123 Education Street" },
    { label: "San Francisco, CA 94107" },
    { label: "contact@edulearn.com" },
    { label: "+1 (555) 123-4567" },
  ],
};
