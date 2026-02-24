"use client";

import { useState } from "react";
import { Heart, Smartphone, Building2, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateModal } from "@/components/donate-modal";

const benefits = [
  "Provide medical support to patients in need",
  "Fund awareness campaigns across Kenya",
  "Support research and treatment programs",
  "Help families affected by Sickle Cell Disease",
];

export function DonateSection() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <section id="donate" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              Support Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Your Donation Saves Lives
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Every contribution, no matter the size, helps us provide essential
              healthcare, raise awareness, and bring hope to thousands of Kenyans
              living with Sickle Cell Disease.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => setDonateModalOpen(true)}
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Button>
          </div>

          {/* Right Content - Payment Methods */}
          <div className="bg-card rounded-2xl p-6 shadow-xl">
            <h3 className="font-serif text-xl font-bold text-foreground mb-5">
              Ways to Give
            </h3>

            {/* M-Pesa */}
            <div className="mb-4 p-4 bg-[#4CAF50]/10 rounded-xl border border-[#4CAF50]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">M-Pesa</h4>
                  <p className="text-xs text-muted-foreground">Lipa na M-Pesa Paybill</p>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3 space-y-1 text-sm">
                <p>
                  <span className="font-medium text-foreground">Paybill:</span>{" "}
                  <span className="text-muted-foreground font-bold">954049</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">Account:</span>{" "}
                  <span className="text-muted-foreground font-bold">SICKLE CELL</span>
                </p>
              </div>
            </div>

            {/* Airtel Money */}
            <div className="mb-4 p-4 bg-[#E4002B]/10 rounded-xl border border-[#E4002B]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#E4002B] rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Airtel Money</h4>
                  <p className="text-xs text-muted-foreground">Dial *222# or use Paybill</p>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3 space-y-1 text-sm">
                <p>
                  <span className="font-medium text-foreground">Business No:</span>{" "}
                  <span className="text-muted-foreground font-bold">954049</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">Reference:</span>{" "}
                  <span className="text-muted-foreground font-bold">SICKLE CELL</span>
                </p>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="p-4 bg-[#00A3E0]/10 rounded-xl border border-[#00A3E0]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#00A3E0] rounded-full flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Bank Transfer</h4>
                  <p className="text-xs text-muted-foreground">Kenya Commercial Bank (KCB)</p>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3 space-y-1 text-sm">
                <p>
                  <span className="font-medium text-foreground">Account Name:</span>{" "}
                  <span className="text-muted-foreground font-bold">SCAF KENYA</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">Account No:</span>{" "}
                  <span className="text-muted-foreground font-bold">1237037131</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">Branch:</span>{" "}
                  <span className="text-muted-foreground">Kilindini</span>
                </p>
                <p>
                  <span className="font-medium text-foreground">SWIFT:</span>{" "}
                  <span className="text-muted-foreground font-bold">KCBLKENX</span>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <p className="text-xs text-center text-muted-foreground mt-5">
              Need assistance? Call{" "}
              <a href="tel:+254726931076" className="text-primary hover:underline font-medium">
                +254 726 931076
              </a>
            </p>
          </div>
        </div>
      </div>

      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </section>
  );
}
