import Link from "next/link";
import Logo from "../logo/Logo";
import { footerInfo } from "./footer-info";

export default function Footer() {
  return (
    <footer id="contact" className="bg-contrast py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-text-secondary">
              Providing quality education through innovative online learning
              experiences.
            </p>

            <div className="mt-6 flex space-x-4">
              {footerInfo.socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.name}
                  className="text-text-secondary"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col space-y-2">
              {footerInfo.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-text-secondary ">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary">Support</h4>
            <ul className="mt-4 space-y-2">
              {footerInfo.support.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className=" text-text-secondary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-2">
              {footerInfo.contact.map((c, idx) => (
                <li key={idx} className="text-text-secondary">
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t text-text-secondary text-center">
          <p className="text-gray-400">© 2023 EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
