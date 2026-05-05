import { motion } from 'framer-motion'
import { Mail, Github, Twitter, MessageCircle, Send, MapPin } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: Mail,
    color: 'from-red-500 to-orange-500',
  },
  {
    label: 'GitHub',
    value: '@CodePhantom',
    href: 'https://github.com/wxjb0',
    icon: Github,
    color: 'from-gray-600 to-gray-800',
  },
  {
    label: 'Twitter / X',
    value: '@CodePhantom',
    href: 'https://twitter.com/example',
    icon: Twitter,
    color: 'from-blue-400 to-blue-600',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-text/20" />
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <MessageCircle className="h-8 w-8 text-accent" />
            联系
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
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-text/60">
            <MapPin className="h-4 w-4 text-accent" />
            <span>基于中国，面向全球</span>
          </div>
          <p className="mt-4 text-text/50">
            如果你有任何问题或合作意向，欢迎随时联系我
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  contact.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="group flex items-center gap-4 rounded-xl border border-text/10 bg-text/[0.02] p-4 transition-all hover:border-accent/30 hover:bg-accent/5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${contact.color} text-white shadow-lg transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-text/50">{contact.label}</p>
                  <p className="font-medium text-text">{contact.value}</p>
                </div>
                <Send className="h-5 w-5 text-text/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6"
        >
          <p className="text-sm text-text/60">
            期待与你的交流！无论是技术讨论、项目合作还是单纯的打招呼，都欢迎联系我。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
