"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateModal } from "@/components/donate-modal";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#pillars", label: "Our Pillars" },
  { href: "#impact", label: "Our Impact" },
  { href: "#programs", label: "Programs" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SCAFKENYA Logo"
              width={160}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Get Involved</Link>
            </Button>
            <Button size="sm" onClick={() => setDonateModalOpen(true)}>
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#contact">Get Involved</Link>
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDonateModalOpen(true);
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </header>
  );
}
