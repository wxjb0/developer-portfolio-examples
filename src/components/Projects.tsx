import { motion } from 'framer-motion'
import { Folder, ExternalLink, Github, Layers } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-accent-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-text/20" />
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <Folder className="h-8 w-8 text-accent" />
            我的
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              项目
            </span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-text/20" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-text/10 bg-text/[0.02] transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/5 via-accent-secondary/5 to-accent/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Layers className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/80 text-white backdrop-blur-sm transition-colors hover:bg-accent"
                    title="在线预览"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-text/80 text-bg backdrop-blur-sm transition-colors hover:bg-text"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text/60">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-text/5 px-2.5 py-1 text-xs text-text/60 transition-colors group-hover:bg-accent/10 group-hover:text-accent/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-text/10 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-secondary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    在线预览
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text/50 transition-colors hover:text-text"
                  >
                    <Github className="h-4 w-4" />
                    源代码
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
