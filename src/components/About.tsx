import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function About() {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          关于
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            我
          </span>
        </motion.h2>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-lg leading-relaxed text-text/70">
            我是一名全栈开发工程师，拥有多年的 Web 开发经验。专注于使用 React 和
            TypeScript 构建高性能、用户友好的 Web 应用。热衷于探索新技术，持续学习并将其应用到实际项目中。
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text/70">
            在工作之余，我喜欢参与开源社区，分享技术博客，并探索 UI/UX 设计。
            我相信优秀的代码应该兼具可读性与性能。
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="mb-6 text-xl font-semibold">技术栈</h3>
          {categories.map((category) => (
            <div key={category} className="mb-6">
              <h4 className="mb-3 text-sm font-medium text-text/50">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent transition-colors hover:border-accent/40"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
