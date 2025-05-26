import rabin from "../rabin";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 bg-gradient-to-br to-slate-900 via-slate-700 from-amber-200/40 via-20% text-slate-100">
      {/* Header (fixed on left for large screens) */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <aside className="bg-slate-900/50 backdrop-blur-xl border lg:w-2/5 w-full flex flex-col items-center justify-center px-6 py-8 lg:py-12 lg:fixed lg:h-full lg:justify-between border-b lg:border-b-0 lg:border-r border-slate-700/30 z-10 shadow-none lg:shadow-2xl lg:shadow-slate-950/50 transition-all duration-300">
          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-1 text-slate-100">
              {rabin.firstName}{" "}
              <span className="text-amber-400">{rabin.lastName}</span>
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold mb-4 text-slate-300">
              {rabin.title}
            </h2>
            {/* About Section in Head */}
            <div className="mb-6 w-full">
              <p className="text-base leading-relaxed mb-3 text-slate-200 border-l-4 border-amber-400 pl-4 italic">
                {rabin.summary}
              </p>
              <div className="flex flex-col gap-1 text-xs text-slate-400 mb-3">
                <span>
                  <span className="font-semibold text-slate-200">Email:</span>{" "}
                  <a
                    href={`mailto:${rabin.contact.email}`}
                    className="underline hover:text-amber-400 transition-colors"
                  >
                    {rabin.contact.email}
                  </a>
                </span>
                <span>
                  <span className="font-semibold text-slate-200">Phone:</span>{" "}
                  {rabin.contact.phone}
                </span>
                <span>
                  <span className="font-semibold text-slate-200">
                    Location:
                  </span>{" "}
                  {rabin.contact.location}
                </span>
                <span>
                  <span className="font-semibold text-slate-200">Website:</span>{" "}
                  <a
                    href={rabin.contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-400 transition-colors"
                  >
                    {rabin.contact.websiteUrl.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
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
              <div className="flex flex-wrap gap-1 text-xs">
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
            <nav className="flex gap-6 mb-8 lg:mb-0 text-lg font-medium">
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
              <a
                href="#tools"
                className="hover:text-amber-400 transition-colors text-slate-300"
              >
                Tools
              </a>
            </nav>
          </div>
          <div className="hidden lg:flex flex-col gap-4 items-start w-full max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              {rabin.socials?.insagram && (
                <a
                  href={rabin.socials.insagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-slate-300"
                >
                  Instagram
                </a>
              )}
              {rabin.socials?.twitter && (
                <a
                  href={rabin.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-slate-300"
                >
                  Twitter
                </a>
              )}
              {rabin.socials?.dribbble && (
                <a
                  href={rabin.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-slate-300"
                >
                  Dribbble
                </a>
              )}
              {rabin.socials?.linkedin && (
                <a
                  href={rabin.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-slate-300"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </aside>
        {/* Main content (right half on large screens) */}
        <main className="flex-1 w-full lg:w-3/5 max-w-4xl mx-auto px-4 py-8 lg:ml-[40vw] lg:px-16 lg:py-12 transition-all duration-300">
          {/* Experience Section */}
          <section
            id="experience"
            className="mb-16 bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-400">
              Experience
            </h2>
            <ul className="space-y-6">
              {rabin.experiences?.map((exp: any) => (
                <li
                  key={exp.company + exp.startDate}
                  className="flex gap-4 items-start"
                >
                  {exp.imagePath && (
                    <img
                      src={exp.imagePath}
                      alt={exp.company}
                      className="w-12 h-12 object-contain rounded-lg bg-slate-800/60 p-2 border border-slate-700/50"
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
                </li>
              ))}
            </ul>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="mb-16 bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-400">
              Education
            </h2>
            <ul className="space-y-6">
              {rabin.educations?.map((edu: any) => (
                <li
                  key={edu.school + edu.acheivment}
                  className="flex gap-4 items-center"
                >
                  {edu.imagePath && (
                    <img
                      src={edu.imagePath}
                      alt={edu.school}
                      className="w-10 h-10 object-contain rounded-lg bg-slate-800/60 p-2 border border-slate-700/50"
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
                </li>
              ))}
            </ul>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-16 bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-400">Projects</h2>
            <ul className="space-y-6">
              {rabin.projects?.map((proj: any) => (
                <li key={proj.name} className="flex gap-4 items-center">
                  {proj.imagePath && (
                    <img
                      src={proj.imagePath}
                      alt={proj.name}
                      className="w-14 h-14 object-cover rounded-lg bg-slate-800/60 p-2 border border-slate-700/50"
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
                </li>
              ))}
            </ul>
          </section>

          {/* Tools Section */}
          <section
            id="tools"
            className="mb-16 bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-400">Tools</h2>
            <ul className="flex flex-wrap gap-4">
              {rabin.tools?.map((tool: any) => (
                <li
                  key={tool.name + tool.usage}
                  className="flex flex-col items-center w-24 bg-slate-800/20 hover:bg-slate-700/30 rounded-lg p-3 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200"
                >
                  {tool.iconPath && (
                    <img
                      src={tool.iconPath}
                      alt={tool.name}
                      className="w-10 h-10 object-contain mb-2"
                    />
                  )}
                  <div className="font-semibold text-xs text-center text-slate-200">
                    {tool.name}
                  </div>
                  <div className="text-xs text-slate-400 text-center">
                    {tool.usage}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      {/* Footer for mobile only */}
      <footer className="bg-slate-900/50 backdrop-blur-xl w-full py-4 px-4 flex flex-col items-center border-t border-slate-700/40 text-sm text-slate-400 lg:hidden transition-all duration-300">
        <div className="flex gap-4 mb-2">
          {rabin.socials?.insagram && (
            <a
              href={rabin.socials.insagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
            >
              Instagram
            </a>
          )}
          {rabin.socials?.twitter && (
            <a
              href={rabin.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
            >
              Twitter
            </a>
          )}
          {rabin.socials?.dribbble && (
            <a
              href={rabin.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
            >
              Dribbble
            </a>
          )}
          {rabin.socials?.linkedin && (
            <a
              href={rabin.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
          )}
        </div>
        <span className="text-slate-400">
          &copy; {new Date().getFullYear()} {rabin.firstName} {rabin.lastName}
        </span>
      </footer>
    </div>
  );
}
