import {
  Stethoscope,
  GraduationCap,
  Users,
  CalendarHeart,
  Building2,
  HandHeart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    icon: Stethoscope,
    title: "Medical Support Program",
    description:
      "Providing access to specialized healthcare, medications, and treatment for PLWSCD through hospital partnerships and medical camps.",
  },
  {
    icon: GraduationCap,
    title: "School Outreach Program",
    description:
      "Educating students, teachers, and parents about Sickle Cell Disease through interactive sessions and educational materials.",
  },
  {
    icon: Users,
    title: "Support Groups",
    description:
      "Creating safe spaces for patients and families to share experiences, access counseling, and build supportive communities.",
  },
  {
    icon: CalendarHeart,
    title: "Awareness Campaigns",
    description:
      "Organizing community events, media campaigns, and World Sickle Cell Day activities to raise awareness and reduce stigma.",
  },
  {
    icon: Building2,
    title: "Hospital Partnerships",
    description:
      "Collaborating with healthcare facilities across Kenya to improve diagnosis, treatment, and care for sickle cell patients.",
  },
  {
    icon: HandHeart,
    title: "Emergency Relief Fund",
    description:
      "Providing financial assistance for emergency medical needs, ensuring no patient is left without critical care.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Programs & Initiatives
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We run comprehensive programs designed to address the diverse needs
            of the sickle cell community in Kenya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="group hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <program.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
