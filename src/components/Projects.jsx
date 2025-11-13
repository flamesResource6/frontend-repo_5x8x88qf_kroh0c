import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'

const allProjects = [
  { id: 1, title: 'React UI Kit', tag: 'React', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop', desc: 'Component library with polished interactions.', link: '#' },
  { id: 2, title: 'Crypto Dashboard', tag: 'Full Apps', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', desc: 'Real-time charts and API integrations.', link: '#' },
  { id: 3, title: 'Landing Page', tag: 'UI Design', img: 'https://images.unsplash.com/photo-1523473827532-05d4a1cb1ef7?q=80&w=1200&auto=format&fit=crop', desc: 'High-converting marketing site.', link: '#' },
  { id: 4, title: 'E-commerce Frontend', tag: 'React', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', desc: 'Product catalog, cart, and checkout.', link: '#' },
  { id: 5, title: 'Portfolio Template', tag: 'UI Design', img: 'https://images.unsplash.com/photo-1547658719-3c2d02c57f37?q=80&w=1200&auto=format&fit=crop', desc: 'Stylish and responsive layout.', link: '#' },
  { id: 6, title: 'Weather App', tag: 'Full Apps', img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop', desc: 'Geolocation and forecast API.', link: '#' },
]

const tags = ['All', 'React', 'UI Design', 'Full Apps']

export default function Projects() {
  const [active, setActive] = useState('All')
  const projects = useMemo(() => {
    if (active === 'All') return allProjects
    return allProjects.filter((p) => p.tag === active)
  }, [active])

  return (
    <Section id="projects">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Projects</h2>
        <div className="hidden sm:flex gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-3 py-1.5 rounded-xl text-sm border transition ${
                active === t
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-zinc-900 dark:border-white shadow'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="sm:hidden mb-6">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 p-2"
        >
          {tags.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {projects.map((p) => (
            <motion.a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] transition-shadow"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">{p.tag}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
              </div>
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/0 via-indigo-500/25 to-cyan-400/0 blur-2xl" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
