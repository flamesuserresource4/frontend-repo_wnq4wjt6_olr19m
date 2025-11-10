import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onCTAClick }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Subtle mouse parallax on heading
    const el = containerRef.current
    if (!el) return
    const handler = (e) => {
      const { innerWidth, innerHeight } = window
      const rx = (e.clientY / innerHeight - 0.5) * 6
      const ry = (e.clientX / innerWidth - 0.5) * -6
      el.style.setProperty('--rx', `${rx}deg`)
      el.style.setProperty('--ry', `${ry}deg`)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#05060a] text-white"
    >
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient overlay for depth (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_40%_at_70%_20%,rgba(147,51,234,0.35),transparent),radial-gradient(20%_30%_at_20%_70%,rgba(59,130,246,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            style={{ perspective: 1000 }}
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              style={{ transform: 'rotateX(var(--rx)) rotateY(var(--ry))' }}
            >
              Kito Tech Labs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">Open‑Source Community</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-2xl text-neutral-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We build futuristic tools, share knowledge, and ship together. Explore projects, join our community, and help shape the next wave of open tech.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <button
                onClick={onCTAClick}
                className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition focus:outline-none"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 blur-sm opacity-70 group-hover:opacity-100 transition" />
                <span className="relative z-10">Join Us</span>
              </button>
              <a href="#projects" className="text-cyan-300/80 hover:text-cyan-200 transition">See Projects ↓</a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
