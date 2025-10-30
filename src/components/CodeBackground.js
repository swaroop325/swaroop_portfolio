import React, { useEffect, useRef, useState } from 'react'

const CodeBackground = () => {
  const canvasRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Code snippets to display
    const codeSnippets = [
      'const dev = true;',
      'function build() {',
      'return <App />;',
      'npm install',
      'git commit -m',
      'async await',
      'useEffect(() => {',
      'export default',
      'import React',
      '=> { ... }',
      'console.log(',
      'className=',
      'useState(',
      'map((item)',
      '.forEach(',
      'if (true) {',
      'try { catch',
      'const [data]',
      'fetch(api)',
      'Promise.all',
      '.then(res)',
      'style={{ }}',
      'onClick={',
      'props.data',
      'return null',
    ]

    class CodeParticle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.opacity = Math.random() * 0.5 + 0.3
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -50
        this.speed = Math.random() * 1 + 0.5
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.fontSize = Math.random() * 6 + 10
        this.opacity = Math.random() * 0.5 + 0.3
        this.drift = Math.random() * 0.5 - 0.25
      }

      update() {
        this.y += this.speed
        this.x += this.drift

        if (this.y > canvas.height + 50) {
          this.reset()
        }

        if (this.x < -100 || this.x > canvas.width + 100) {
          this.reset()
        }
      }

      draw() {
        ctx.font = `${this.fontSize}px 'Fira Code', 'Monaco', 'Courier New', monospace`
        ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`
        ctx.fillText(this.text, this.x, this.y)
      }
    }

    // Create particles
    const particleCount = 80
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new CodeParticle())
    }

    // Animation loop
    let animationFrameId
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 25, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          backgroundColor: '#0a0a19',
        }}
      />
    )
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          backgroundColor: '#0a0a19',
        }}
      />
      {/* Dark overlay for better contrast */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'radial-gradient(circle at center, rgba(10, 10, 25, 0.3), rgba(10, 10, 25, 0.8))',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}

export default CodeBackground
