import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Background from './Background'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Background/>
      <Navbar />
      <section><Hero /></section>
      <section id="about" className='scroll-mt-30'><About /></section>
      <section id="skills" className="scroll-mt-24"><Skills /></section>
      <section id="projects" className="scroll-mt-[-50px]"><Projects /></section>
      <section id="contact"><Contact/></section>
      <section id="footer"><Footer/></section>
    </>
  )

}

export default App
