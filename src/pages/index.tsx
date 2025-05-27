import rabin from "../rabin";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

// Card hover effect classes
const cardHover =
  "transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.035] hover:bg-gradient-to-br hover:from-amber-400/10 hover:to-orange-700/10 hover:border-amber-400 hover:text-amber-200 focus-within:scale-[1.035] focus-within:shadow-2xl focus-within:bg-gradient-to-br focus-within:from-amber-400/10 focus-within:to-orange-700/10 focus-within:border-amber-400";

// Section definitions for nav and scroll tracking
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function Home() {
  // Track which section is currently in view
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      let current = sections[0].id;
      for (const section of sections) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 140;
          if (scrollY >= top) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-lg bg-slate-900 bg-gradient-to-br to-slate-900 via-slate-700 from-amber-300/20 via-20% text-slate-100">
      {/* Header (fixed on left for large screens) */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <aside className="bg-slate-900/50 backdrop-blur-xl border lg:w-2/5 w-full flex flex-col items-center justify-center px-8 py-12 lg:py-16 lg:fixed lg:h-full lg:justify-between border-b lg:border-b-0 lg:border-r border-slate-700/30 z-10 shadow-none lg:shadow-2xl lg:shadow-slate-950/50 transition-all duration-300">
          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 text-slate-100">
              {rabin.firstName}{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
                {rabin.lastName}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-slate-300">
              <span className="bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
                {rabin.title}
              </span>
            </h2>
            {/* About Section in Head */}
            <div className="mb-10 w-full">
              <p className="text-lg leading-relaxed mb-6 text-slate-200 border-l-4 border-amber-400 pl-4 italic">
                {rabin.summary}
              </p>
              <div className="flex flex-wrap gap-4 text-base text-slate-400 mb-6 w-full">
                <a
                  href={`mailto:${rabin.contact.email}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-700/30 hover:border-amber-400 hover:text-amber-200 transition-all font-medium text-slate-200 w-full sm:w-auto"
                >
                  <EnvelopeIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.email}
                </a>
                <a
                  href={`tel:${rabin.contact.phone}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-700/30 hover:border-amber-400 hover:text-amber-200 transition-all font-medium text-slate-200 w-full sm:w-auto"
                >
                  <PhoneIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.phone}
                </a>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 font-medium text-slate-200 w-full sm:w-auto transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-700/30 hover:border-amber-400 hover:text-amber-200 cursor-pointer">
                  <MapPinIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.location}
                </span>
                <a
                  href={rabin.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-700/30 hover:border-amber-400 hover:text-amber-200 transition-all font-medium text-slate-200 w-full sm:w-auto"
                >
                  <GlobeAltIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.websiteUrl.replace(/^https?:\/\//, "")}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-xs mb-6">
                {rabin.languages.map(
                  (lang: { name: string; level: string }) => (
                    <span
                      key={lang.name}
                      className="bg-slate-800/60 backdrop-blur-sm rounded-full px-3 py-1 font-medium text-slate-200 border border-slate-700/50 transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-700/30 hover:border-amber-400 hover:text-amber-200 cursor-pointer"
                    >
                      {lang.name}{" "}
                      <span className="text-slate-400">({lang.level})</span>
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs mb-6">
                {rabin.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-full px-3 py-1 font-medium text-slate-300 border border-slate-700/40 transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-orange-700/30 hover:border-amber-400 hover:text-amber-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <nav className="flex gap-8 mb-14 lg:mb-0 text-xl font-medium">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`transition-colors ${
                    activeSection === section.id
                      ? "text-amber-400 font-bold"
                      : "text-slate-300"
                  } hover:text-amber-400`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        {/* Main content (right half on large screens) */}
        <main className="flex-1 w-full lg:w-3/5 max-w-4xl mx-auto px-6 py-12 lg:ml-[40vw] lg:px-20 lg:py-16 transition-all duration-300 text-lg">
          {/* About Section */}
          <section
            id="about"
            className="mb-12"
            ref={(el) => {
              sectionRefs.current["about"] = el;
            }}
          >
            <div className="p-8 text-xl text-slate-200">{rabin.summary}</div>
          </section>
          {/* Experience Section */}
          <section
            id="experience"
            className="mb-12"
            ref={(el) => {
              sectionRefs.current["experience"] = el;
            }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
              Experience
            </h2>
            <ul className="space-y-8">
              {rabin.experiences?.map((exp: any) => (
                <li key={exp.company + exp.startDate}>
                  <div
                    className={`group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-2xl p-8 flex gap-6 items-start text-xl ${cardHover}`}
                  >
                    {exp.imagePath && (
                      <img
                        src={exp.imagePath}
                        alt={exp.company}
                        className="w-16 h-16 object-contain rounded-xl bg-slate-800/60 p-3 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-lg text-slate-100">
                        {exp.position}{" "}
                        <span className="text-slate-400 font-normal">
                          @ {exp.company}
                        </span>
                      </div>
                      <div className="text-sm text-slate-400 mb-1">
                        {exp.startDate} – {exp.endDate} | {exp.location}
                      </div>
                      <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                        {exp.description
                          .split("\n")
                          .map((point: string, idx: number) => (
                            <li key={idx}>{point}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-12"
            ref={(el) => {
              sectionRefs.current["projects"] = el;
            }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
              Projects
            </h2>
            <ul className="space-y-8">
              {rabin.projects?.map((proj: any) => (
                <li key={proj.name}>
                  <div
                    className={`group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-2xl p-8 flex gap-6 items-center text-xl ${cardHover}`}
                  >
                    {proj.imagePath && (
                      <img
                        src={proj.imagePath}
                        alt={proj.name}
                        className="w-20 h-20 object-cover rounded-xl bg-slate-800/60 p-3 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group_hover:rotate-2"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-slate-100">
                        {proj.name}
                      </div>
                      <div className="text-sm text-slate-300">
                        {proj.description}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="mb-12"
            ref={(el) => {
              sectionRefs.current["education"] = el;
            }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
              Education
            </h2>
            <ul className="space-y-8">
              {rabin.educations?.map((edu: any) => (
                <li key={edu.school + edu.acheivment}>
                  <div
                    className={`group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-2xl p-8 flex gap-6 items-center text-xl ${cardHover}`}
                  >
                    {edu.imagePath && (
                      <img
                        src={edu.imagePath}
                        alt={edu.school}
                        className="w-14 h-14 object-contain rounded-xl bg-slate-800/60 p-3 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group_hover:-rotate-3"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-slate-100">
                        {edu.school}
                      </div>
                      <div className="text-sm text-slate-400">
                        {edu.acheivment} ({edu.endDate})
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Footer note */}
          <div className="mt-40 pb-12 text-center text-base text-slate-400 flex flex-col items-center">
            <span>
              Loosely designed in{" "}
              <a
                href="https://figma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-amber-400"
              >
                Figma
              </a>{" "}
              and coded in{" "}
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-amber-400"
              >
                Visual Studio Code
              </a>{" "}
              by yours truly.
            </span>
            <span>
              Built with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-amber-400"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-amber-400"
              >
                Tailwind CSS
              </a>
              , deployed with{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-amber-400"
              >
                Vercel
              </a>
              .
            </span>
            <span>
              All text is set in the{" "}
              <a
                href="https://rsms.me/inter/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-amber-400"
              >
                Inter
              </a>{" "}
              typeface.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
