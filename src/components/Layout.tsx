import rabin from "../rabin";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Header (fixed on left for large screens) */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <aside className="lg:w-1/2 w-full flex flex-col items-center justify-center px-8 py-12 lg:py-0 lg:fixed lg:h-full lg:justify-between border-b lg:border-b-0 lg:border-r border-foreground/10 bg-background z-10">
          <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              {rabin.firstName} {rabin.lastName}
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium mb-6 text-foreground/70">
              {rabin.title}
            </h2>
            <nav className="flex gap-6 mb-8 lg:mb-0 text-lg font-medium">
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a
                href="#experience"
                className="hover:text-accent transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a
                href="#education"
                className="hover:text-accent transition-colors"
              >
                Education
              </a>
              <a href="#tools" className="hover:text-accent transition-colors">
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
                  className="hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              )}
              {rabin.socials?.twitter && (
                <a
                  href={rabin.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Twitter
                </a>
              )}
              {rabin.socials?.dribbble && (
                <a
                  href={rabin.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Dribbble
                </a>
              )}
              {rabin.socials?.linkedin && (
                <a
                  href={rabin.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </aside>
        {/* Main content (right half on large screens) */}
        <main className="flex-1 w-full lg:w-1/2 max-w-3xl mx-auto px-4 py-12 lg:ml-[50vw] lg:px-16 lg:py-24">
          {children}
        </main>
      </div>
      {/* Footer for mobile only */}
      <footer className="w-full py-6 px-4 flex flex-col items-center border-t border-foreground/10 text-sm text-foreground/60 lg:hidden">
        <div className="flex gap-4 mb-2">
          {rabin.socials?.insagram && (
            <a
              href={rabin.socials.insagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
          {rabin.socials?.twitter && (
            <a
              href={rabin.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          )}
          {rabin.socials?.dribbble && (
            <a
              href={rabin.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          )}
          {rabin.socials?.linkedin && (
            <a
              href={rabin.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>
        <span>
          &copy; {new Date().getFullYear()} {rabin.firstName} {rabin.lastName}
        </span>
      </footer>
    </div>
  );
}
