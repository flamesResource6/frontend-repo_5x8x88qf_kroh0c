import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient scrim for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10 dark:from-zinc-950/70 dark:via-zinc-950/40 dark:to-zinc-950/10 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 w-full">
        <div className="max-w-2xl py-28 md:py-36">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Abdul Raoof
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 inline-flex items-center gap-2 text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" /> Frontend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed"
          >
            I design and build immersive, accessible web experiences with a focus on performance and delightful micro-interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg shadow-zinc-900/10 dark:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 backdrop-blur-md bg-white/40 dark:bg-zinc-900/40 text-zinc-800 dark:text-zinc-200 hover:bg-white/60 dark:hover:bg-zinc-900/60 transition">Contact Me</a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-500 dark:text-zinc-400"
      >
        <div className="h-10 w-[2px] mx-auto bg-gradient-to-b from-transparent via-zinc-400/50 to-transparent animate-pulse" />
        Scroll
      </motion.div>
    </section>
  )
}
