import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onFinish, minimum = 1400 }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true)
      onFinish?.()
    }, minimum)
    return () => clearTimeout(t)
  }, [minimum, onFinish])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#05060a] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Scanlines overlay */}
          <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-20" />

          {/* Star glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(80,0,120,0.35),transparent_60%)]" />

          {/* Spinning singularity */}
          <motion.div
            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-800 via-black to-fuchsia-900 shadow-[0_0_160px_40px_rgba(120,0,255,0.28)]"
            initial={{ scale: 0.6, filter: 'blur(8px)' }}
            animate={{ scale: [0.8, 1.06, 0.95, 1], filter: ['blur(8px)','blur(3px)','blur(6px)','blur(4px)'] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          >
            {/* Event horizon ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-indigo-500/40"
              style={{ boxShadow: '0 0 60px 10px rgba(99,102,241,0.25) inset' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
            />
            {/* Accretion disk arc */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{
                background:
                  'conic-gradient(from 90deg, rgba(168,85,247,0.0) 0 60%, rgba(56,189,248,0.75) 72%, rgba(99,102,241,0.0) 84%)',
                filter: 'blur(14px)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>

          {/* HUD text */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-cyan-300/80">Initializing quantum dashboard</p>
            <motion.div
              className="mx-auto mt-4 h-[2px] w-48 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-transparent"
              animate={{ width: ['20%', '60%', '100%', '60%'] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
