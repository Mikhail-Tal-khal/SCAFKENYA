import Image from "next/image";
import { Heart, Megaphone, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Health",
    description:
      "We provide access to quality healthcare services, medical support, and treatment for Persons Living With Sickle Cell Disease. Our programs include medical camps, hospital partnerships, and medication support.",
    image: "/images/health-care.jpg",
    stats: "500+ Medical Interventions",
  },
  {
    icon: Megaphone,
    title: "Awareness",
    description:
      "We educate communities about Sickle Cell Disease through campaigns, workshops, and school programs. Our awareness initiatives help reduce stigma and promote early diagnosis and proper management.",
    image: "/images/awareness-campaign.jpg",
    stats: "200+ Community Events",
  },
  {
    icon: Sparkles,
    title: "Hope",
    description:
      "We provide emotional and social support to patients and their families. Our support groups, counseling services, and community networks help PLWSCD live fulfilling lives with dignity.",
    image: "/images/hope-children.jpg",
    stats: "1,000+ Families Supported",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Mission
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Three Pillars of Change
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our work is built on three foundational pillars that guide
            everything we do in serving the sickle cell community in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pillar.image || "/placeholder.svg"}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                    <pillar.icon className="h-4 w-4" />
                    {pillar.title}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">
                    {pillar.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
