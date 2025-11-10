import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import { About, Projects, Community, CTA } from './components/Sections'

function App() {
  // Global parallax background dots
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -80])
  const y2 = useTransform(scrollY, [0, 1000], [0, -140])

  const handleJoin = () => {
    const el = document.querySelector('#join')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.classList.add('bg-[#05060a]')
    return () => document.body.classList.remove('bg-[#05060a]')
  }, [])

  return (
    <div className="min-h-screen text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* Parallax backdrop layers */}
      <motion.div style={{ y: y1 }} className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(1px_1px_at_10%_20%,rgba(255,255,255,0.06)_0,transparent_1px),radial-gradient(1px_1px_at_80%_60%,rgba(255,255,255,0.05)_0,transparent_1px)] [background-size:40px_40px] opacity-60" />
      <motion.div style={{ y: y2 }} className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(600px_200px_at_50%_10%,rgba(88,28,135,0.18),transparent),radial-gradient(400px_160px_at_20%_80%,rgba(8,145,178,0.14),transparent)]" />

      <Hero onCTAClick={handleJoin} />
      <About />
      <Projects />
      <Community />
      <CTA />

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-neutral-400">
        <p>© {new Date().getFullYear()} Kito Tech Labs — Open‑Source Community</p>
      </footer>
    </div>
  )
}

export default App
