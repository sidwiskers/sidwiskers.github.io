import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null)
  const particlesCount = 2000

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [particlesCount])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#9333ea"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        dpr={[1, 2]}
      >
        <Particles />
      </Canvas>
    </div>
  )
}
