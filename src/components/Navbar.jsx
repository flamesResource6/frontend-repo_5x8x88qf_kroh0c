import React, { useEffect, useMemo, useState } from 'react'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    links.forEach((l) => {
      const el = document.getElementById(l.href.substring(1))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const gradientBorder = useMemo(
    () => ({
      background:
        'linear-gradient(var(--tw-gradient-angle, 120deg), rgba(244,244,245,0.8), rgba(244,244,245,0.65)) padding-box, linear-gradient(120deg, rgba(99,102,241,0.6), rgba(14,165,233,0.6)) border-box',
    }),
    []
  )

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="rounded-2xl border bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_10px_35px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.5)] border-transparent"
          style={gradientBorder}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              <span className="relative">
                <Sparkles className="absolute -left-4 -top-3 text-indigo-500/70" size={14} />
                AR.
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                    active === l.href.substring(1)
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70'
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 transition"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setOpen(!open)}
                className="p-2 rounded-xl md:hidden hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 transition"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-zinc-200/60 dark:border-zinc-800/60 px-4 py-2">
              <div className="flex flex-col py-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                      active === l.href.substring(1)
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                        : 'text-zinc-700 hover:bg-zinc-100/70 dark:text-zinc-300 dark:hover:bg-zinc-800/70'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}

                <div className="flex items-center gap-3 pt-2 text-zinc-700 dark:text-zinc-300">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:opacity-80"><Github size={18} /></a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:opacity-80"><Linkedin size={18} /></a>
                  <a href="mailto:abdulraoof@example.com" className="hover:opacity-80"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
