import { motion } from 'framer-motion'
import { User, Code, Database, Wrench, Terminal, Palette } from 'lucide-react'
import { skills } from '../data/skills'

const categoryIcons: Record<string, React.ReactNode> = {
  前端: <Palette className="h-4 w-4" />,
  后端: <Terminal className="h-4 w-4" />,
  数据库: <Database className="h-4 w-4" />,
  工具: <Wrench className="h-4 w-4" />,
}

export default function About() {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-text/20" />
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <User className="h-8 w-8 text-accent" />
            关于
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              我
            </span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-text/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="rounded-xl border border-text/10 bg-text/[0.02] p-6 backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-text/70">
              我是一名全栈开发工程师，拥有多年的 Web 开发经验。专注于使用 React 和
              TypeScript 构建高性能、用户友好的 Web 应用。热衷于探索新技术，持续学习并将其应用到实际项目中。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text/70">
              在工作之余，我喜欢参与开源社区，分享技术博客，并探索 UI/UX 设计。
              我相信优秀的代码应该兼具可读性与性能。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <Code className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-semibold">技术栈</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * catIndex, duration: 0.5 }}
                className="rounded-xl border border-text/10 bg-text/[0.02] p-4"
              >
                <div className="mb-3 flex items-center gap-2 text-accent">
                  {categoryIcons[category]}
                  <h4 className="text-sm font-medium">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm text-accent/90 transition-all hover:border-accent/40 hover:bg-accent/10"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
