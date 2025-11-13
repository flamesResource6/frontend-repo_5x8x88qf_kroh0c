import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { Code2, Blocks, GitBranch, Layout } from 'lucide-react'

const skills = [
  {
    title: 'Core Web',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'Responsive Design'],
  },
  {
    title: 'Frontend Stack',
    icon: Blocks,
    items: ['React.js', 'Vite', 'Tailwind CSS', 'Chakra UI'],
  },
  {
    title: 'Collaboration',
    icon: GitBranch,
    items: ['Git & GitHub', 'REST APIs', 'CI/CD', 'Netlify / Vercel'],
  },
  {
    title: 'UI Craft',
    icon: Layout,
    items: ['Design Systems', 'Accessibility', 'Animation', 'Prototyping'],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Skills</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md p-6 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.18)] transition"
          >
            <div className="flex items-center gap-3">
              <group.icon className="text-indigo-500" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{group.title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300 text-sm">
              {group.items.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
