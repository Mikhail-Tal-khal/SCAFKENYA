import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SCAFKENYA changed my life. Before I joined their support group, I felt alone in my battle with sickle cell. Now I have a community that understands me.",
    name: "Grace M.",
    role: "Sickle Cell Warrior",
    location: "Nairobi County",
  },
  {
    quote:
      "The medical support program helped my daughter get the treatment she needed when we couldn't afford it. We are forever grateful to SCAFKENYA.",
    name: "Peter O.",
    role: "Parent",
    location: "Kisumu County",
  },
  {
    quote:
      "Through their awareness campaigns, I learned about sickle cell trait testing before marriage. This knowledge is invaluable for our community.",
    name: "Faith W.",
    role: "Community Health Volunteer",
    location: "Mombasa County",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Stories of Hope & Transformation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hear from the people whose lives have been touched by our work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
