import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import ChartsPanel from './components/ChartsPanel'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#050712] text-white">
      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle backdrop grid and glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_30%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 flex">
        {/* Hologram Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 p-6 lg:p-10 space-y-8">
          {/* Hero with black hole */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <div className="absolute inset-0 pointer-events-none">
              {/* lensing rings */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.6),transparent_60%)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-cyan-400/20" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-fuchsia-400/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6 lg:p-10">
              <div className="space-y-4 pr-0 lg:pr-8">
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-cyan-300/80 text-xs tracking-[0.25em]">MISSION CONTROL</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  High-End Futuristic Dashboard
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-cyan-100/70">
                  Fast, sleek, and immersive interface with neon accents, smooth motion, and 3D depth.
                </motion.p>

                <div className="flex gap-3 pt-2">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="relative overflow-hidden rounded-lg px-4 py-2 text-sm bg-cyan-500/20 border border-cyan-400/30">
                    <span className="relative z-10">Engage Systems</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="relative overflow-hidden rounded-lg px-4 py-2 text-sm bg-white/5 border border-white/10">
                    View Telemetry
                  </motion.button>
                </div>
              </div>

              {/* 3D Black Hole Spline scene */}
              <div className="relative h-[380px] lg:h-[520px]">
                <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" />

                {/* particles pulled inward */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
                      style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * -120],
                        y: [0, (Math.random() - 0.5) * -120],
                        opacity: [0.2, 1, 0],
                        scale: [0.5, 1.2, 0.3],
                      }}
                      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeIn' }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Real-time stats */}
          <StatsCards />

          {/* Charts */}
          <ChartsPanel />
        </div>
      </div>
    </div>
  )
}

export default App
