"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { DonateModal } from "@/components/donate-modal";

export function Hero() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-community.jpg"
          alt="SCAFKENYA community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50 sm:from-foreground/90 sm:via-foreground/70 sm:to-foreground/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="text-base sm:text-lg">🇰🇪</span>
            <span className="text-background">{"Kenya's First Sickle Cell NGO"}</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-4 sm:mb-6">
            <span className="text-balance block sm:inline">Transforming Lives Through</span>{" "}
            <span className="text-primary">Health</span>,{" "}
            <span className="text-primary">Awareness</span> &{" "}
            <span className="text-primary">Hope</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-background/90 mb-6 sm:mb-8 leading-relaxed max-w-xl">
            SCAFKENYA is dedicated to improving the lives of Persons Living With
            Sickle Cell Disease (PLWSCD) across Kenya through comprehensive
            healthcare support, community awareness, and unwavering hope.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="gap-2 w-full sm:w-auto text-base"
              onClick={() => setDonateModalOpen(true)}
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto text-base border-background/50 text-background hover:bg-background/10 hover:text-background bg-transparent"
              asChild
            >
              <a href="#about">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-background">5,000+</div>
              <div className="text-xs sm:text-sm text-background/70">Lives Impacted</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-background/30 hidden sm:block" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-background">47</div>
              <div className="text-xs sm:text-sm text-background/70">Counties Reached</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-background/30 hidden sm:block" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-background">10+</div>
              <div className="text-xs sm:text-sm text-background/70">Years of Service</div>
            </div>
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
