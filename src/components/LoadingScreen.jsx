import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#070812] text-white overflow-hidden flex items-center justify-center">
      {/* Subtle starfield */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.2)_0,transparent_60%),radial-gradient(1px_1px_at_130px_80px,rgba(255,255,255,0.15)_0,transparent_60%),radial-gradient(1px_1px_at_300px_200px,rgba(255,255,255,0.15)_0,transparent_60%)] [background-size:200px_200px,260px_260px,340px_340px]" />

      {/* Spinning singularity */}
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, #000 0%, #06060a 45%, transparent 46%), conic-gradient(from 0deg, rgba(121,86,255,0.15), rgba(0,212,255,0.25), rgba(121,86,255,0.15))',
            filter: 'drop-shadow(0 0 30px rgba(93, 0, 255, 0.45))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-cyan-400/30"
          style={{ boxShadow: '0 0 40px 5px rgba(0, 255, 255, 0.2) inset' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 0.85, 0.8], opacity: [0.2, 0.9, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-20 h-20 rounded-full bg-black shadow-[0_0_60px_20px_rgba(106,0,255,0.35)]" />
        </motion.div>
      </div>

      <div className="absolute bottom-16 text-center select-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm tracking-[0.3em] text-cyan-300/80"
        >
          INITIALIZING QUANTUM INTERFACE
        </motion.div>
        <motion.div
          className="mt-2 h-1 w-48 mx-auto bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left center' }}
        />
      </div>
    </div>
  )
}

export default LoadingScreen
