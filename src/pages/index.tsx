import rabin from "../rabin";

export default function Home() {
  return (
    <>
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
