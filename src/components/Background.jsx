import React from 'react'
import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.08)_0%,rgba(14,165,233,0)_55%)] dark:bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.12)_0%,rgba(14,165,233,0)_60%)]" />

      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.6), rgba(99,102,241,0))' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 70% 70%, rgba(34,197,94,0.5), rgba(34,197,94,0))' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
        className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.6), rgba(14,165,233,0))' }}
      />
    </div>
  )
}
