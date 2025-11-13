import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

const experiences = [
  {
    title: 'Built interactive web apps',
    time: '2022 — Present',
    desc: 'Designed and developed responsive React applications with modern state management and UI systems.',
  },
  {
    title: 'Worked with REST APIs',
    time: '2021 — Present',
    desc: 'Integrated third-party APIs, optimized data fetching, and improved perceived performance with caching.',
  },
  {
    title: 'Deployed to Netlify / Vercel',
    time: '2021 — Present',
    desc: 'Automated deployments with CI/CD, preview builds, and SEO-friendly optimizations.',
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Experience</h2>
      </div>
      <div className="relative ml-4">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
        {experiences.map((ex, i) => (
          <motion.div
            key={ex.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="pl-6 pb-10 relative"
          >
            <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{ex.title}</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{ex.time}</p>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{ex.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
