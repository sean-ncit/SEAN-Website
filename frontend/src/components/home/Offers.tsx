import {
  FlaskConical,
  Users,
  Award,
  Handshake,
  Briefcase,
  Laptop,
  GraduationCap,
  BadgeCheck,
  Lightbulb,
} from "lucide-react";

// -------------------------
// Offers Data
// -------------------------
const offers = [
  {
    title: "Research & Labs",
    desc: "Access to state-of-the-art research facilities, innovation centers, and specialized high-tech laboratories supporting AI, Robotics, Cloud, and Software Engineering projects.",
    icon: "FlaskIcon",
  },
  {
    title: "Student Activities & Clubs",
    desc: "Vibrant student life with technical clubs, hackathons, coding contests, seminars, tech meetups, and community-driven initiatives.",
    icon: "UsersIcon",
  },
  {
    title: "Alumni & Achievements",
    desc: "Celebrating our graduates’ career journeys, global achievements, industry impact, and success stories that inspire excellence.",
    icon: "AwardIcon",
  },
  {
    title: "Industry Partnerships",
    desc: "Strong collaborations with leading IT companies for internships, training programs, industrial visits, and joint research opportunities.",
    icon: "HandshakeIcon",
  },
  {
    title: "Internships & Placements",
    desc: "Dedicated placement support offering career counseling, resume building, mock interviews, and internship opportunities in reputed organizations.",
    icon: "BriefcaseIcon",
  },
  {
    title: "Modern Learning Environment",
    desc: "Smart classrooms, digital learning tools, cloud-based platforms, and continuous curriculum updates aligned with global industry standards.",
    icon: "LaptopIcon",
  },
  {
    title: "Faculty Expertise",
    desc: "Highly qualified and experienced faculty specializing in AI, ML, Cloud Computing, DevOps, Embedded Systems, Cybersecurity, and Software Architecture.",
    icon: "GraduationCapIcon",
  },
  {
    title: "Workshops & Certifications",
    desc: "Hands-on workshops and professional certification courses in trending technologies such as AWS, Google Cloud, Cisco, Red Hat, and Microsoft.",
    icon: "BadgeCheckIcon",
  },
  {
    title: "Innovation & Entrepreneurship",
    desc: "Support for student startups through incubation programs, mentorship sessions, innovation grants, and entrepreneurship development initiatives.",
    icon: "LightbulbIcon",
  },
];

// -------------------------
// Icon Map
// -------------------------
const iconMap: Record<string, any> = {
  FlaskIcon: FlaskConical,
  UsersIcon: Users,
  AwardIcon: Award,
  HandshakeIcon: Handshake,
  BriefcaseIcon: Briefcase,
  LaptopIcon: Laptop,
  GraduationCapIcon: GraduationCap,
  BadgeCheckIcon: BadgeCheck,
  LightbulbIcon: Lightbulb,
};

// -------------------------
// Offer Card Component
// -------------------------
const OfferCard = ({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: any;
}) => {
  return (
    <div
      data-animate
      className="group bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                 hover:-translate-y-1 transition-all duration-300 border border-transparent
                 hover:border-blue-600 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
          <Icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};

// -------------------------
// Main Component
// -------------------------
export default function OffersSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
      <h2
        data-animate
        className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center"
      >
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {offers.map((o) => {
          const IconComponent = iconMap[o.icon];
          return (
            <OfferCard
              key={o.title}
              title={o.title}
              desc={o.desc}
              Icon={IconComponent}
            />
          );
        })}
      </div>
    </section>
  );
}
