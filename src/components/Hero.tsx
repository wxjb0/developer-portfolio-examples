import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent-secondary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mb-8 h-32 w-32"
        >
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-accent to-accent-secondary opacity-50 blur-xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent/20 to-accent-secondary/20 backdrop-blur-sm">
            <Code2 className="h-14 w-14 text-accent" strokeWidth={1.5} />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute -right-2 -top-2"
          >
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="mb-2 text-lg text-text/50">Hello World, I'm</p>
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
            <span className="relative">
              <span className="bg-gradient-to-r from-accent via-purple-400 to-accent-secondary bg-clip-text text-transparent">
                CodePhantom
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-accent to-accent-secondary"
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-text/60 md:text-xl">
            <span className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-accent" />
              全栈开发工程师
            </span>
            <span className="text-text/30">•</span>
            <span>热爱构建优雅的 Web 应用</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-8 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <span className="relative z-10">查看项目</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-text/20 px-8 py-3 text-sm font-medium text-text/80 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-text hover:shadow-lg hover:shadow-accent/10"
          >
            联系我
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-text/30 transition-colors hover:text-accent"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
