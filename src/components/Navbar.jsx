import React, { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'

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

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/60 shadow-lg shadow-black/5 border border-zinc-200/60 dark:border-zinc-800/70 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">AR.</a>

            <div className="hidden md:flex items-center gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    active === l.href.substring(1)
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
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
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 px-4 py-2">
              <div className="flex flex-col py-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      active === l.href.substring(1)
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                        : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
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
