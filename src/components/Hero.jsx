import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#06070d]">
      {/* 3D Black Hole / Orb */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient HUD overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,24,35,0)_0%,rgba(6,7,13,0.6)_60%,#06070d_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/10 to-transparent blur-xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 via-fuchsia-500/10 to-transparent blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.25)]"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Quantum Ops Command Dashboard
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-cyan-200/80"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Monitor real-time metrics across systems with a high-fidelity, sci‑fi interface. Distortion layers, particle drift, and gravitational pulls create an immersive feel.
        </motion.p>

        {/* HUD chips */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {['Warp', 'Flux', 'IOPS', 'Latency', 'Temp', 'Power'].map((t, i) => (
            <motion.div
              key={t}
              className="rounded-md bg-white/5 backdrop-blur border border-cyan-500/20 px-3 py-2 text-xs text-cyan-200/80 shadow-[0_0_20px_rgba(99,102,241,0.15)_inset] hover:border-fuchsia-500/30 transition-colors"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
