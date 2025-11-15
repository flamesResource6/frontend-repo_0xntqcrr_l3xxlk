import { motion } from 'framer-motion'
import { Activity, Cpu, CloudLightning, Shield } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.4, ease: 'easeOut' } }),
}

const StatCard = ({ icon: Icon, label, value, delta, i }) => (
  <motion.div
    custom={i}
    variants={cardVariants}
    initial="hidden"
    animate="show"
    whileHover={{ y: -2 }}
    className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/0 p-4 shadow-[0_0_35px_rgba(0,255,255,0.08)]"
  >
    <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-cyan-400/10" />
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
          <Icon className="w-4 h-4 text-cyan-300" />
        </div>
        <div>
          <div className="text-cyan-200/80 text-xs">{label}</div>
          <div className="text-white text-xl font-semibold tracking-tight">{value}</div>
        </div>
      </div>
      <div className={`text-xs ${delta.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{delta}</div>
    </div>
  </motion.div>
)

function StatsCards() {
  const cards = [
    { icon: Activity, label: 'Quantum Throughput', value: '212.4 Tb/s', delta: '+4.3%' },
    { icon: Cpu, label: 'Core Utilization', value: '68%', delta: '+1.2%' },
    { icon: CloudLightning, label: 'Flux Stability', value: '99.982%', delta: '+0.02%' },
    { icon: Shield, label: 'Security Events', value: '12', delta: '-8.6%' },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <StatCard key={i} {...c} i={i} />
      ))}
    </div>
  )
}

export default StatsCards
