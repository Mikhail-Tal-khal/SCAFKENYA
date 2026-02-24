import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              About SCAFKENYA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              {"Kenya's Pioneer in Sickle Cell Disease Advocacy"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Sickle Cell Awareness Foundation Kenya (SCAFKENYA) is{" "}
                {"Kenya's"} first nonprofit health NGO that is solely focused on
                improving the lives of Persons Living With Sickle Cell Disease
                (PLWSCD).
              </p>
              <p>
                Founded with a vision to create a Kenya where no person suffers
                unnecessarily from Sickle Cell Disease, we work tirelessly to
                provide comprehensive healthcare support, raise awareness about
                the condition, and offer hope to thousands of affected families.
              </p>
              <p>
                Our mission is anchored on three pillars:{" "}
                <strong className="text-primary">HEALTH</strong> - ensuring
                access to quality healthcare;{" "}
                <strong className="text-primary">AWARENESS</strong> - educating
                communities about sickle cell disease; and{" "}
                <strong className="text-primary">HOPE</strong> - providing
                emotional and social support to patients and their families.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">2013</div>
                <div className="text-sm text-muted-foreground">
                  Year Founded
                </div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">
                  People Educated
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/medical-team.jpg"
                alt="SCAFKENYA medical team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl max-w-xs">
              <blockquote className="text-sm italic">
                {
                  '"Together, we can change the narrative around Sickle Cell Disease in Kenya."'
                }
              </blockquote>
              <cite className="text-xs mt-2 block opacity-80">
                — SCAFKENYA Team
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
