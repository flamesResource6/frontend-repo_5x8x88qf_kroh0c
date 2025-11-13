import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background from './components/Background'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors">
      <Navbar />
      <Background />

      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Abdul Raoof. All rights reserved.
      </footer>
    </div>
  )
}

export default App
