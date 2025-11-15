import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Lightweight animated line chart using Canvas for sleek performance
function Sparkline({ color = '#22d3ee' }) {
  useEffect(() => {
    const canvas = document.getElementById(`spark-${color}`)
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0
    let raf

    const dpr = window.devicePixelRatio || 1
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    function draw() {
      t += 0.02
      ctx.clearRect(0, 0, width, height)

      // grid
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 1
      for (let x = 0; x < width; x += 24) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // animated line
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = color
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin((x + t * 60) * 0.02) * 16 + Math.cos((x + t * 30) * 0.04) * 10
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // glow
      ctx.shadowColor = color
      ctx.shadowBlur = 12
      ctx.stroke()
      ctx.shadowBlur = 0

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [color])

  return <canvas id={`spark-${color}`} className="w-full h-28" />
}

function ChartsPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {["#22d3ee", "#a78bfa", "#22d3ee"].map((c, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -2 }}
          className="rounded-xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/0 p-4"
        >
          <div className="text-cyan-200/70 text-sm mb-3">Channel {i + 1}</div>
          <Sparkline color={c} />
        </motion.div>
      ))}
    </div>
  )
}

export default ChartsPanel
