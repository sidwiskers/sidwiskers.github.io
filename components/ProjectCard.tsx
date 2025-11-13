import { m } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardProps {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
  buttonUrl: string
  bgColor: string
  iconColor: string
  buttonColor: string
  buttonTextColor: string
  index: number
}

export default function ProjectCard({
  icon,
  title,
  description,
  buttonText,
  buttonUrl,
  bgColor,
  iconColor,
  buttonColor,
  buttonTextColor,
  index,
}: ProjectCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * 15

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className="glass-card rounded-2xl p-6 flex flex-col items-center text-center transform-gpu will-change-transform"
    >
      <m.div
        className={`p-4 ${bgColor} rounded-full mb-4`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className={iconColor}>{icon}</div>
      </m.div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <m.a
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center font-semibold ${buttonColor} ${buttonTextColor} py-2 rounded-lg transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </m.a>
    </m.div>
  )
}
