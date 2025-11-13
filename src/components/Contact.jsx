import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { Github, Linkedin, Mail, Send, Music2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const audioRef = useRef(null)
  const [musicOn, setMusicOn] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Simulate send
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (musicOn) {
      audioRef.current.pause()
      setMusicOn(false)
    } else {
      audioRef.current.play().catch(() => {})
      setMusicOn(true)
    }
  }

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Let's build something</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Have a project in mind or just want to say hi? Drop a message and I'll get back to you.</p>

          <div className="mt-6 flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:abdulraoof@example.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Mail size={18} /> Email
            </a>
          </div>

          <button onClick={toggleMusic} className={`mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 transition ${musicOn ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'}`}>
            <Music2 size={18} /> {musicOn ? 'Pause ambience' : 'Play ambience'}
          </button>
          <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2021/11/02/audio_7a9de89942.mp3?filename=ambient-calm-110241.mp3" />
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md p-6 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-sm text-zinc-600 dark:text-zinc-300">Name</label>
              <input required type="text" className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/40 px-3 py-2 outline-none focus:ring-2 ring-indigo-500/30 focus:border-indigo-400 transition" placeholder="John Doe" />
            </div>
            <div className="group">
              <label className="block text-sm text-zinc-600 dark:text-zinc-300">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/40 px-3 py-2 outline-none focus:ring-2 ring-indigo-500/30 focus:border-indigo-400 transition" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4 group">
            <label className="block text-sm text-zinc-600 dark:text-zinc-300">Message</label>
            <textarea required rows="5" className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/40 px-3 py-2 outline-none focus:ring-2 ring-indigo-500/30 focus:border-indigo-400 transition" placeholder="Tell me about your idea..." />
          </div>
          <div className="mt-5">
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition">
              <Send size={18} /> Send Message
            </button>
            {sent && <span className="ml-3 text-sm text-emerald-600 dark:text-emerald-400">Sent! I'll be in touch.</span>}
          </div>
        </motion.form>
      </div>
    </Section>
  )
}
