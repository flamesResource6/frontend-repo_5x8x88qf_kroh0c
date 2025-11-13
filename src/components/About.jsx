import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" className="relative">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">About Me</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I'm Abdul Raoof, a passionate Frontend Developer who loves crafting delightful, accessible, and performant user interfaces. I focus on building user-friendly experiences with React, Tailwind CSS, and modern JavaScript.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {["Component-driven", "Accessible", "Performant", "Well-tested"].map((badge) => (
              <div key={badge} className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/60 p-4 text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 mr-2 align-middle" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-indigo-400 via-sky-400 to-cyan-400 p-[3px]">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-cyan-400/0 blur-xl opacity-0 group-hover:opacity-100 transition" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
