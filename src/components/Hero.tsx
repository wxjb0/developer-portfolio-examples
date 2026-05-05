import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent to-accent-secondary p-1"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-bg text-4xl">
            👨‍💻
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-5xl font-bold leading-tight md:text-7xl"
        >
          你好，我是
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            {' '}
            张三
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8 text-lg text-text/60 md:text-xl"
        >
          全栈开发工程师 · 热爱构建优雅的 Web 应用
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-text/20 px-8 py-3 text-sm font-medium text-text/80 transition-colors hover:border-text/40 hover:text-text"
          >
            联系我
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce text-text/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
