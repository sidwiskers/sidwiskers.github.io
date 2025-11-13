import { m } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [displayText, setDisplayText] = useState('')
  const originalText = 'LastLife'
  const chars = '!<>-_\\/[]{}—=+*^?#_@&%'

  useEffect(() => {
    let frame = 0
    const queue: Array<{
      from: string
      to: string
      start: number
      end: number
      char: string
    }> = []

    for (let i = 0; i < originalText.length; i++) {
      const from = originalText[i]
      const to = originalText[i]
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      queue.push({ from, to, start, end, char: from })
    }

    const interval = setInterval(() => {
      let output = ''
      let complete = 0

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i]
        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28) {
            queue[i].char = chars[Math.floor(Math.random() * chars.length)]
          }
          output += queue[i].char
        } else {
          output += from
        }
      }

      setDisplayText(output)

      if (complete === queue.length) {
        clearInterval(interval)
      }
      frame++
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <m.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center pt-20 pb-12"
    >
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
        <span className="animated-gradient-text">{displayText}</span>
      </h1>
      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-300 font-light"
      >
        Curious Human <span className="text-cyan-400 mx-2">✨</span>
      </m.p>
    </m.header>
  )
}
