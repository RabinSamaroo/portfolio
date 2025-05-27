import rabin from "../rabin";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 bg-gradient-to-tl to-slate-900 via-slate-700 from-amber-300/20 via-20% text-slate-100">
      {/* Header (fixed on left for large screens) */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <aside className="bg-slate-900/50 backdrop-blur-xl border lg:w-2/5 w-full flex flex-col items-center justify-center px-6 py-8 lg:py-12 lg:fixed lg:h-full lg:justify-between border-b lg:border-b-0 lg:border-r border-slate-700/30 z-10 shadow-none lg:shadow-2xl lg:shadow-slate-950/50 transition-all duration-300">
          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-1 text-slate-100">
              {rabin.firstName}{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
                {rabin.lastName}
              </span>
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold mb-4 text-slate-300">
              <span className="bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
                {rabin.title}
              </span>
            </h2>
            {/* About Section in Head */}
            <div className="mb-8 w-full">
              <p className="text-base leading-relaxed mb-4 text-slate-200 border-l-4 border-amber-400 pl-4 italic">
                {rabin.summary}
              </p>
              <div className="flex flex-wrap gap-4 text-base text-slate-400 mb-4 w-full">
                <a
                  href={`mailto:${rabin.contact.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-800/80 hover:border-amber-400 transition-all font-medium text-slate-200 w-full sm:w-auto"
                >
                  <EnvelopeIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.email}
                </a>
                <a
                  href={`tel:${rabin.contact.phone}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-800/80 hover:border-amber-400 transition-all font-medium text-slate-200 w-full sm:w-auto"
                >
                  <PhoneIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.phone}
                </a>
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 font-medium text-slate-200 w-full sm:w-auto">
                  <MapPinIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.location}
                </span>
                <a
                  href={rabin.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:bg-slate-800/80 hover:border-amber-400 transition-all font-medium text-slate-200 w-full sm:w-auto"
                >
                  <GlobeAltIcon className="w-5 h-5 text-amber-400" />
                  {rabin.contact.websiteUrl.replace(/^https?:\/\//, "")}
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {rabin.languages.map(
                  (lang: { name: string; level: string }) => (
                    <span
                      key={lang.name}
                      className="bg-slate-800/60 backdrop-blur-sm rounded-full px-3 py-1 font-medium text-slate-200 border border-slate-700/50"
                    >
                      {lang.name}{" "}
                      <span className="text-slate-400">({lang.level})</span>
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-wrap gap-1 text-xs mb-4">
                {rabin.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-full px-3 py-1 font-medium text-slate-300 border border-slate-700/40 mb-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <nav className="flex gap-6 mb-10 lg:mb-0 text-lg font-medium">
              <a
                href="#experience"
                className="hover:text-amber-400 transition-colors text-slate-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-amber-400 transition-colors text-slate-300"
              >
                Projects
              </a>
              <a
                href="#education"
                className="hover:text-amber-400 transition-colors text-slate-300"
              >
                Education
              </a>
            </nav>
          </div>
        </aside>
        {/* Main content (right half on large screens) */}
        <main className="flex-1 w-full lg:w-3/5 max-w-4xl mx-auto px-4 py-8 lg:ml-[40vw] lg:px-16 lg:py-12 transition-all duration-300">
          {/* Experience Section */}
          <section id="experience" className="mb-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
              Experience
            </h2>
            <ul className="space-y-6">
              {rabin.experiences?.map((exp: any) => (
                <li key={exp.company + exp.startDate}>
                  <div className="group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6 flex gap-4 items-start transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-[1.025] hover:bg-gradient-to-br hover:from-amber-100/10 hover:to-slate-800/70 hover:border-amber-400/40 focus-within:scale-[1.025] focus-within:shadow-2xl focus-within:bg-gradient-to-br focus-within:from-amber-100/10 focus-within:to-slate-800/70 focus-within:border-amber-300/60">
                    {exp.imagePath && (
                      <img
                        src={exp.imagePath}
                        alt={exp.company}
                        className="w-12 h-12 object-contain rounded-lg bg-slate-800/60 p-2 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
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
          <section id="projects" className="mb-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
              Projects
            </h2>
            <ul className="space-y-6">
              {rabin.projects?.map((proj: any) => (
                <li key={proj.name}>
                  <div className="group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6 flex gap-4 items-center transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-[1.025] hover:bg-gradient-to-br hover:from-amber-100/10 hover:to-slate-800/70 hover:border-amber-300/60 focus-within:scale-[1.025] focus-within:shadow-2xl focus-within:bg-gradient-to-br focus-within:from-amber-100/10 focus-within:to-slate-800/70 focus-within:border-amber-300/60">
                    {proj.imagePath && (
                      <img
                        src={proj.imagePath}
                        alt={proj.name}
                        className="w-14 h-14 object-cover rounded-lg bg-slate-800/60 p-2 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
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
          <section id="education" className="mb-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-700 bg-clip-text text-transparent">
              Education
            </h2>
            <ul className="space-y-6">
              {rabin.educations?.map((edu: any) => (
                <li key={edu.school + edu.acheivment}>
                  <div className="group bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6 flex gap-4 items-center transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-[1.025] hover:bg-gradient-to-br hover:from-amber-100/10 hover:to-slate-800/70 hover:border-amber-300/60 focus-within:scale-[1.025] focus-within:shadow-2xl focus-within:bg-gradient-to-br focus-within:from-amber-100/10 focus-within:to-slate-800/70 focus-within:border-amber-300/60">
                    {edu.imagePath && (
                      <img
                        src={edu.imagePath}
                        alt={edu.school}
                        className="w-10 h-10 object-contain rounded-lg bg-slate-800/60 p-2 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group_hover:-rotate-3"
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
        </main>
      </div>
    </div>
  );
}
