import { motion } from 'framer-motion'
import { Home, Activity, BarChart3, Settings, Cpu, Layers, Zap, Grid } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active }) => (
  <motion.button
    whileHover={{ x: 6, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      active
        ? 'bg-gradient-to-r from-fuchsia-600/30 to-cyan-500/20 text-white shadow-[0_0_20px_rgba(0,255,255,0.12)]'
        : 'text-cyan-200/70 hover:text-cyan-100 hover:bg-white/5'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm tracking-wide">{label}</span>
  </motion.button>
)

function Sidebar() {
  return (
    <div className="h-full w-64 shrink-0 bg-[#0a0c16]/80 backdrop-blur-md border-r border-white/10 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-6 px-2">
        <Cpu className="w-5 h-5 text-fuchsia-400" />
        <span className="text-cyan-100/90 tracking-widest text-xs">NEBULA OPS</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {[Zap, Layers, Grid, Activity].map((Icon, i) => (
          <motion.div key={i} whileHover={{ y: -2 }} className="rounded-lg p-3 bg-white/5 border border-white/10">
            <Icon className="w-4 h-4 text-cyan-300" />
          </motion.div>
        ))}
      </div>

      <nav className="space-y-2">
        <NavItem icon={Home} label="Overview" active />
        <NavItem icon={Activity} label="Telemetry" />
        <NavItem icon={BarChart3} label="Analytics" />
        <NavItem icon={Settings} label="Systems" />
      </nav>

      <div className="mt-auto pt-6 text-xs text-cyan-200/40">
        v1.0 Quantum UI
      </div>
    </div>
  )
}

export default Sidebar
