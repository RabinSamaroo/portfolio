import rabin from "../rabin";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-base leading-relaxed mb-4">{rabin.summary}</p>
        <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
          <span>Email: {rabin.contact.email}</span>
          <span>Phone: {rabin.contact.phone}</span>
          <span>Location: {rabin.contact.location}</span>
          <a
            href={rabin.contact.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Website
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {rabin.languages.map((lang: { name: string; level: string }) => (
            <span key={lang.name} className="bg-foreground/5 rounded px-2 py-1">
              {lang.name} ({lang.level})
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {rabin.skills.map((skill: string) => (
            <span key={skill} className="bg-foreground/10 rounded px-2 py-1">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
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
                  className="w-12 h-12 object-contain rounded bg-white p-1 border border-foreground/10"
                />
              )}
              <div>
                <div className="font-semibold text-lg">
                  {exp.position}{" "}
                  <span className="text-foreground/60 font-normal">
                    @ {exp.company}
                  </span>
                </div>
                <div className="text-sm text-foreground/60 mb-1">
                  {exp.startDate} – {exp.endDate} | {exp.location}
                </div>
                <div className="text-sm text-foreground/80">
                  {exp.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
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
                  className="w-10 h-10 object-contain rounded bg-white p-1 border border-foreground/10"
                />
              )}
              <div>
                <div className="font-semibold">{edu.school}</div>
                <div className="text-sm text-foreground/60">
                  {edu.acheivment} ({edu.endDate})
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="space-y-6">
          {rabin.projects?.map((proj: any) => (
            <li key={proj.name} className="flex gap-4 items-center">
              {proj.imagePath && (
                <img
                  src={proj.imagePath}
                  alt={proj.name}
                  className="w-14 h-14 object-cover rounded bg-white p-1 border border-foreground/10"
                />
              )}
              <div>
                <div className="font-semibold">{proj.name}</div>
                <div className="text-sm text-foreground/80">
                  {proj.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Tools Section */}
      <section id="tools" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Tools</h2>
        <ul className="flex flex-wrap gap-4">
          {rabin.tools?.map((tool: any) => (
            <li
              key={tool.name + tool.usage}
              className="flex flex-col items-center w-24"
            >
              {tool.iconPath && (
                <img
                  src={tool.iconPath}
                  alt={tool.name}
                  className="w-10 h-10 object-contain mb-1"
                />
              )}
              <div className="font-semibold text-xs text-center">
                {tool.name}
              </div>
              <div className="text-xs text-foreground/60 text-center">
                {tool.usage}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
