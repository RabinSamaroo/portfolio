import rabin from "../rabin";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

// Card hover effect classes
const cardHover =
  "transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.035] hover:bg-gradient-to-br hover:from-amber-400/10 hover:to-orange-700/10 hover:border-amber-400 hover:text-amber-200 focus-within:scale-[1.035] focus-within:shadow-2xl focus-within:bg-gradient-to-br focus-within:from-amber-400/10 focus-within:to-orange-700/10 focus-within:border-amber-400";

// Section definitions for nav and scroll tracking
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

// Color themes
const themes = {
  amber: {
    name: "Amber",
    primary: "from-amber-400 to-orange-700",
    accent: "text-amber-400",
    border: "border-amber-400",
    hover: "hover:border-amber-400 hover:text-amber-200",
    gradient: "hover:from-amber-400/20 hover:to-orange-700/30",
    glow: "hover:from-amber-400/10 hover:to-orange-700/10",
    background: "from-amber-300/5 via-orange-400/8 to-slate-900",
  },
  blue: {
    name: "Blue",
    primary: "from-blue-400 to-cyan-600",
    accent: "text-blue-400",
    border: "border-blue-400",
    hover: "hover:border-blue-400 hover:text-blue-200",
    gradient: "hover:from-blue-400/20 hover:to-cyan-600/30",
    glow: "hover:from-blue-400/10 hover:to-cyan-600/10",
    background: "from-blue-400/5 via-cyan-400/8 to-slate-900",
  },
  purple: {
    name: "Purple",
    primary: "from-purple-400 to-pink-600",
    accent: "text-purple-400",
    border: "border-purple-400",
    hover: "hover:border-purple-400 hover:text-purple-200",
    gradient: "hover:from-purple-400/20 hover:to-pink-600/30",
    glow: "hover:from-purple-400/10 hover:to-pink-600/10",
    background: "from-purple-400/5 via-pink-400/8 to-slate-900",
  },
  green: {
    name: "Green",
    primary: "from-green-400 to-emerald-600",
    accent: "text-green-400",
    border: "border-green-400",
    hover: "hover:border-green-400 hover:text-green-200",
    gradient: "hover:from-green-400/20 hover:to-emerald-600/30",
    glow: "hover:from-green-400/10 hover:to-emerald-600/10",
    background: "from-green-400/5 via-emerald-400/8 to-slate-900",
  },
};

export default function Home() {
  // Track which section is currently in view
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Theme state
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof themes>("amber");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const theme = themes[currentTheme];

  // Create dynamic card hover effect with current theme
  const cardHover = `transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.035] hover:bg-gradient-to-br ${theme.glow} ${theme.hover} focus-within:scale-[1.035] focus-within:shadow-2xl focus-within:bg-gradient-to-br ${theme.glow} focus-within:${theme.border}`;

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
    <div
      className={`min-h-screen flex flex-col font-sans text-lg bg-slate-900 bg-gradient-to-br ${theme.background} via-20% text-slate-100`}
    >
      {/* Theme Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 ${theme.hover} transition-all duration-200 shadow-lg`}
            title="Change color theme"
          >
            <PaintBrushIcon className={`w-5 h-5 ${theme.accent}`} />
          </button>
          {showThemeMenu && (
            <div className="absolute top-14 right-0 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-xl p-2 shadow-xl min-w-[120px]">
              {Object.entries(themes).map(([key, themeOption]) => (
                <button
                  key={key}
                  onClick={() => {
                    setCurrentTheme(key as keyof typeof themes);
                    setShowThemeMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    currentTheme === key
                      ? `bg-gradient-to-r ${themeOption.primary} text-white`
                      : `hover:bg-slate-700/50 text-slate-200 hover:${themeOption.border.replace(
                          "border-",
                          "text-"
                        )}`
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${themeOption.primary}`}
                  ></div>
                  {themeOption.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Header (fixed on left for large screens) */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <aside className="bg-slate-900/50 backdrop-blur-xl border lg:w-2/5 w-full flex flex-col items-center justify-center px-8 pt-12 lg:py-16 lg:fixed lg:h-full lg:justify-between border-b lg:border-b-0 lg:border-r border-slate-700/30 z-10 shadow-none lg:shadow-2xl lg:shadow-slate-950/50 transition-all duration-300">
          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 text-slate-100 text-center lg:text-left">
              {rabin.firstName}{" "}
              <span
                className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
              >
                {rabin.lastName}
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-slate-300 text-center lg:text-left">
              <span
                className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
              >
                {rabin.title}
              </span>
            </h2>
            {/* About Section in Head */}
            <div className="mb-10 w-full">
              <p
                className={`text-lg leading-relaxed mb-6 text-slate-200 border-l-4 ${theme.border} pl-4 italic hidden lg:block`}
              >
                {rabin.quote}
              </p>
              {/* Contact buttons: icon-only and horizontal on mobile, full on lg+ */}
              {/* Mobile: icon-only, horizontal */}
              <div className="flex flex-row gap-4 text-base text-slate-400 mb-6 w-full justify-center lg:hidden">
                <a
                  href={`mailto:${rabin.contact.email}`}
                  className={`flex items-center justify-center px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 transition-all font-medium text-slate-200 w-12 h-12 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover}`}
                  title={rabin.contact.email}
                >
                  <EnvelopeIcon className={`w-5 h-5 ${theme.accent}`} />
                </a>
                <a
                  href={`tel:${rabin.contact.phone}`}
                  className={`flex items-center justify-center px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 transition-all font-medium text-slate-200 w-12 h-12 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover}`}
                  title={rabin.contact.phone}
                >
                  <PhoneIcon className={`w-5 h-5 ${theme.accent}`} />
                </a>
                <span
                  className={`flex items-center justify-center px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 font-medium text-slate-200 w-12 h-12 transition-all duration-200 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} cursor-pointer`}
                  title={rabin.contact.location}
                >
                  <MapPinIcon className={`w-5 h-5 ${theme.accent}`} />
                </span>
                <a
                  href={rabin.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 transition-all font-medium text-slate-200 w-12 h-12 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover}`}
                  title={rabin.contact.websiteUrl}
                >
                  <GlobeAltIcon className={`w-5 h-5 ${theme.accent}`} />
                </a>
              </div>
              {/* Desktop: original full buttons */}
              <div className="hidden lg:flex flex-wrap gap-4 text-base text-slate-400 mb-6 w-full">
                <a
                  href={`mailto:${rabin.contact.email}`}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} transition-all font-medium text-slate-200 w-full sm:w-auto`}
                >
                  <EnvelopeIcon className={`w-5 h-5 ${theme.accent}`} />
                  {rabin.contact.email}
                </a>
                <a
                  href={`tel:${rabin.contact.phone}`}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} transition-all font-medium text-slate-200 w-full sm:w-auto`}
                >
                  <PhoneIcon className={`w-5 h-5 ${theme.accent}`} />
                  {rabin.contact.phone}
                </a>
                <span
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 font-medium text-slate-200 w-full sm:w-auto transition-all duration-200 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} cursor-pointer`}
                >
                  <MapPinIcon className={`w-5 h-5 ${theme.accent}`} />
                  {rabin.contact.location}
                </span>
                <a
                  href={rabin.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} transition-all font-medium text-slate-200 w-full sm:w-auto`}
                >
                  <GlobeAltIcon className={`w-5 h-5 ${theme.accent}`} />
                  {rabin.contact.websiteUrl.replace(/^https?:\/\//, "")}
                </a>
              </div>
              {/* Languages and Skills: only on lg+ */}
              <div className="hidden lg:flex flex-wrap gap-3 text-xs mb-6">
                {rabin.languages.map(
                  (lang: { name: string; level: string }) => (
                    <span
                      key={lang.name}
                      className={`bg-slate-800/60 backdrop-blur-sm rounded-full px-3 py-1 font-medium text-slate-200 border border-slate-700/50 transition-all duration-200 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} cursor-pointer`}
                    >
                      {lang.name}{" "}
                      <span className="text-slate-400">({lang.level})</span>
                    </span>
                  )
                )}
              </div>
              <div className="hidden lg:flex flex-wrap gap-2 text-xs mb-6">
                {rabin.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className={`bg-slate-800/30 backdrop-blur-sm rounded-full px-3 py-1 font-medium text-slate-300 border border-slate-700/40 transition-all duration-200 hover:bg-gradient-to-r ${theme.gradient} ${theme.hover} cursor-pointer`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Nav only on large screens */}
            <nav className="hidden lg:flex gap-8 mb-14 lg:mb-0 text-xl font-medium">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`transition-colors ${
                    activeSection === section.id
                      ? `${theme.accent} font-bold`
                      : "text-slate-300"
                  } hover:${theme.accent.replace("text-", "")}`}
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
            <div className="p-8 text-xl text-slate-200">
              <span className={`${theme.accent} font-semibold`}>
                Senior Full-Stack Developer
              </span>{" "}
              with{" "}
              <span className={`${theme.accent} font-semibold`}>
                5+ years of experience
              </span>{" "}
              leading{" "}
              <span className={`${theme.accent} font-semibold`}>
                high-performance teams
              </span>{" "}
              and architecting{" "}
              <span className={`${theme.accent} font-semibold`}>
                scalable enterprise solutions
              </span>
              . Proven track record of delivering{" "}
              <span className={`${theme.accent} font-semibold`}>
                mission-critical applications
              </span>
              , optimizing{" "}
              <span className={`${theme.accent} font-semibold`}>
                system performance
              </span>
              , and driving{" "}
              <span className={`${theme.accent} font-semibold`}>
                technical innovation
              </span>
              . Expertise in modern{" "}
              <span className={`${theme.accent} font-semibold`}>
                JavaScript/TypeScript ecosystems
              </span>
              ,{" "}
              <span className={`${theme.accent} font-semibold`}>
                cloud infrastructure
              </span>
              , and{" "}
              <span className={`${theme.accent} font-semibold`}>
                agile methodologies
              </span>{" "}
              with a passion for{" "}
              <span className={`${theme.accent} font-semibold`}>
                mentoring developers
              </span>{" "}
              and building{" "}
              <span className={`${theme.accent} font-semibold`}>
                robust, maintainable codebases
              </span>
              .
            </div>
          </section>
          {/* Sidebar content below about section on mobile */}
          <div className="lg:hidden flex flex-col items-center w-full">
            <div className="mb-10 w-full">
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
            {/* Nav is hidden on mobile */}
          </div>
          {/* Experience Section */}
          <section
            id="experience"
            className="mb-12"
            ref={(el) => {
              sectionRefs.current["experience"] = el;
            }}
          >
            <h2
              className={`text-3xl font-bold mb-8 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Experience
            </h2>
            <ul className="space-y-8">
              {rabin.experiences?.map((exp: any, idx: number) => (
                <li key={exp.company + exp.startDate + idx}>
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
            <h2
              className={`text-3xl font-bold mb-8 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Projects
            </h2>
            <ul className="space-y-8">
              {rabin.projects?.map((proj: any) => (
                <li key={proj.name}>
                  <div
                    className={`group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-2xl overflow-hidden flex text-xl ${cardHover}`}
                  >
                    {proj.imagePath && (
                      <div className="w-1/3 h-48 flex-shrink-0">
                        <img
                          src={proj.imagePath}
                          alt={proj.name}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col justify-center flex-1">
                      <div className="font-semibold text-slate-100 mb-2">
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
            <h2
              className={`text-3xl font-bold mb-8 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
            >
              Education
            </h2>
            <ul className="space-y-8">
              {rabin.educations?.map((edu: any) => (
                <li key={edu.school + edu.achievement}>
                  <div
                    className={`group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-2xl overflow-hidden p-8 text-xl ${cardHover}`}
                  >
                    <div className="flex items-start gap-6">
                      {edu.imagePath && (
                        <div className="w-32 h-32 flex-shrink-0 rounded-lg p-2 flex items-center justify-center">
                          <img
                            src={edu.imagePath}
                            alt={edu.school}
                            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-center flex-1">
                        <div className="font-semibold text-slate-100 mb-1">
                          {edu.school}
                        </div>
                        <div className="text-sm text-slate-400 mb-3">
                          {edu.achievement} ({edu.endDate})
                        </div>
                        {edu.description && (
                          <div className="text-sm text-slate-300">
                            {edu.description}
                          </div>
                        )}
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
                className={`font-bold hover:${theme.accent.replace(
                  "text-",
                  ""
                )}`}
              >
                Figma
              </a>{" "}
              and coded in{" "}
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold hover:${theme.accent.replace(
                  "text-",
                  ""
                )}`}
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
                className={`font-bold hover:${theme.accent.replace(
                  "text-",
                  ""
                )}`}
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold hover:${theme.accent.replace(
                  "text-",
                  ""
                )}`}
              >
                Tailwind CSS
              </a>
              , deployed with{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold hover:${theme.accent.replace(
                  "text-",
                  ""
                )}`}
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
                className={`font-bold hover:${theme.accent.replace(
                  "text-",
                  ""
                )}`}
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
