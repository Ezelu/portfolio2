import React from 'react'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import About from '../../components/About/About'

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
    </div>
  )
}
