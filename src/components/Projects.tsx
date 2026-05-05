import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          我的
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            项目
          </span>
        </motion.h2>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-text/10 bg-text/[0.03] transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Image placeholder */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent/10 to-accent-secondary/10">
                <span className="text-4xl text-text/20">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text/60">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-text/10 px-2 py-0.5 text-xs text-text/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent transition-colors hover:text-accent-secondary"
                  >
                    在线预览 →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text/50 transition-colors hover:text-text/80"
                  >
                    GitHub
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
