"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DonateModal } from "@/components/donate-modal";

const footerLinks = {
  organization: [
    { label: "About Us", href: "#about" },
    { label: "Our Pillars", href: "#pillars" },
    { label: "Our Team", href: "#" },
    { label: "Partners", href: "#" },
  ],
  programs: [
    { label: "Medical Support", href: "#programs" },
    { label: "Awareness Campaigns", href: "#programs" },
    { label: "Support Groups", href: "#programs" },
    { label: "School Outreach", href: "#programs" },
  ],
  getInvolved: [
    { label: "Donate", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Partner With Us", href: "#" },
    { label: "Events", href: "#" },
  ],
  resources: [
    { label: "About Sickle Cell", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "News & Updates", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export function Footer() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="SCAFKENYA Logo"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {"Kenya's"} first nonprofit health NGO dedicated to improving the
              lives of Persons Living With Sickle Cell Disease.
            </p>
            <p className="text-background/50 text-sm">
              Health | Awareness | Hope
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Organization</h4>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => setDonateModalOpen(true)}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Sickle Cell Awareness Foundation
              Kenya (SCAFKENYA). All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </footer>
  );
}
