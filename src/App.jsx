
import styles from './App.module.css'
import { Formation } from './components/formation/Formation'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Formation />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
