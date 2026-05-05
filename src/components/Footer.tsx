import { Heart, Github, Twitter, Mail, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-text/10 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-lg font-bold text-transparent">
              CodePhantom
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/wxjb0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-text/10 text-text/50 transition-all hover:border-accent/50 hover:text-accent"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-text/10 text-text/50 transition-all hover:border-accent/50 hover:text-accent"
              title="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-text/10 text-text/50 transition-all hover:border-accent/50 hover:text-accent"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="flex items-center gap-1 text-sm text-text/40">
            <span>© {new Date().getFullYear()}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="h-3 w-3 fill-red-500 text-red-500" />
              using React + Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
