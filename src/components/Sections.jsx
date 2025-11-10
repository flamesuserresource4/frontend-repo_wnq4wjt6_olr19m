import React, { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const Section = ({ id, kicker, title, children }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id={id} ref={ref} className="relative w-full min-h-[90svh] py-28 sm:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(20%_30%_at_80%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(20%_30%_at_10%_80%,rgba(147,51,234,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.p
          className="text-sm uppercase tracking-widest text-cyan-300/70"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {kicker}
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="mt-6 text-neutral-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export const About = () => (
  <Section id="about" kicker="The Story" title="From sparks to a constellation of builders">
    <p>
      Kito Tech Labs began as a tiny signal in the noise—makers sharing late‑night experiments. Each commit, each conversation, a star added to the map. Today, we	re a constellation of open‑source explorers connecting ideas into galaxies.
    </p>
  </Section>
)

export const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section id="projects" ref={ref} className="relative w-full min-h-[90svh] py-28 sm:py-32">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none bg-[radial-gradient(25%_40%_at_20%_20%,rgba(59,130,246,0.12),transparent),radial-gradient(25%_40%_at_80%_80%,rgba(147,51,234,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Projects that bend light</h2>
        <p className="mt-4 max-w-3xl text-neutral-300">We prototype fast and publish openly—tools for dev‑experience, design systems, and AI‑assisted workflows. A few recent experiments:</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Nebula UI', desc: 'A neon‑lit component system for rapid prototyping.' },
            { title: 'Pulse CI', desc: 'Minimal CI with streaming logs and instant previews.' },
            { title: 'Holo Docs', desc: 'Docs that animate as you read using motion semantics.' },
            { title: 'Vector Forge', desc: 'Embedding toolkit for search + recommendations.' },
            { title: 'Glyph Lab', desc: 'Iconography pipeline with parametric styles.' },
            { title: 'Flux Agent', desc: 'Composable agent runtime for OSS repos.' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-cyan-500/10 opacity-0 hover:opacity-100 transition" />
              <h3 className="relative z-10 text-lg font-semibold text-white">{card.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-neutral-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Community = () => (
  <Section id="community" kicker="People" title="An orbit where everyone can contribute">
    <p>
      Maintainers guide, newcomers ask, mentors uplift—our gravity is generosity. From issues to ideation, we optimize for learning and impact.
    </p>
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {[
        'Weekly build nights with live pairing',
        'Beginner‑friendly labels and first‑timer tours',
        'Design critiques and motion labs',
        'Open governance and public roadmaps',
      ].map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="flex items-start gap-3 text-neutral-300"
        >
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {item}
        </motion.li>
      ))}
    </ul>
  </Section>
)

export const CTA = () => (
  <section id="join" className="relative w-full py-24">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(30%_30%_at_50%_0%,rgba(34,211,238,0.18),transparent)]" />
    <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build with us?</h2>
      <p className="mt-3 text-neutral-300">Join our open‑source orbit—discover issues, propose ideas, and launch features together.</p>
      <div className="mt-8 flex justify-center">
        <a href="#" className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 blur-sm opacity-70 group-hover:opacity-100 transition" />
          <span className="relative z-10">Join Us</span>
        </a>
      </div>
    </div>
  </section>
)

export default Section
