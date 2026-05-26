import { useEffect, useState } from 'react'
import profileImg from './assets/portfolio/img1.jpg'
import taskImg from './assets/portfolio/task.png'
import aframeImg from './assets/portfolio/aframe.jpg'
import powerImg from './assets/portfolio/power.png'
import './App.css'

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'estudios', label: 'Estudios' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
]

const experiences = [
  {
    title: 'Tecnico Informatico en Practicas',
    date: '2023 - 2024',
    company: 'Empresa de Tecnologia (FCT - SMR)',
    items: [
      'Mantenimiento y reparacion de equipos informaticos.',
      'Gestion de redes locales e instalacion de cableado estructurado.',
      'Atencion al usuario y resolucion de incidencias de nivel 1.',
      'Instalacion y configuracion de sistemas operativos Windows y Linux.',
    ],
  },
  {
    title: 'Proyectos Personales / Freelance',
    date: '2024 - Presente',
    company: 'Desarrollo Independiente',
    items: [
      'Desarrollo de aplicaciones moviles y de escritorio con Java y Kotlin.',
      'Creacion de interfaces de usuario modernas y responsivas.',
      'Gestion de bases de datos relacionales como MySQL y PostgreSQL.',
      'Uso de Git y GitHub para mantener el codigo organizado.',
    ],
  },
]

const studies = [
  {
    title: 'Grado Superior (DAM)',
    date: '2024 - Presente',
    place: 'Instituto de Formacion Profesional',
    description:
      'Estudiante actual. Formacion especializada en el desarrollo, implantacion y mantenimiento de aplicaciones para diversas plataformas. Profundizando en Java, C#, Android con Kotlin, bases de datos y diseno de interfaces.',
    active: true,
  },
  {
    title: 'Grado Medio (SMR)',
    date: '2022 - 2024',
    place: 'Instituto de Formacion Profesional',
    description:
      'Titulacion obtenida con exito. Aprendizaje enfocado en la instalacion, configuracion y mantenimiento de sistemas microinformaticos, redes locales y servicios de Internet.',
    active: false,
  },
]

const skillGroups = [
  {
    title: 'Desarrollo de Software',
    outline: false,
    skills: ['Java', 'HTML', 'CSS', 'Python', 'SQL', 'Git', 'JavaScript', 'React'],
  },
  {
    title: 'Sistemas y Redes',
    outline: false,
    skills: ['Windows Server', 'Linux (Ubuntu/Debian)', 'Redes Locales', 'Hardware', 'Montaje y Mantenimiento IT'],
  },
]

const projects = [
  {
    title: 'Gestor de tareas',
    description: 'Aplicacion para gestionar tareas pendientes y organizar la agenda diaria.',
    image: taskImg,
    alt: 'Captura de un gestor de tareas',
  },
  {
    title: 'Proyecto A-Frame',
    description: 'Proyecto de realidad virtual utilizando A-Frame para crear experiencias inmersivas en la web.',
    image: aframeImg,
    alt: 'Proyecto creado con A-Frame',
  },
  {
    title: 'Aplicacion con PowerApps',
    description: 'Aplicacion desarrollada con PowerApps para automatizar procesos de un restaurante y mejorar la productividad.',
    image: powerImg,
    alt: 'Aplicacion desarrollada con PowerApps',
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    document.title = 'Portfolio | Alejandro Mora Reyes'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140

      for (const item of [...navItems].reverse()) {
        const section = document.getElementById(item.id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(item.id)
          return
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a className="logo" href="#inicio">
            Portafolio
          </a>

          <nav className="nav-links" aria-label="Principal">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            ))}
           
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="inicio" className="hero">
          <div className="hero-content">
            <h1>Desarrollador de Aplicaciones Multiplataforma</h1>
            <p>
              Hola, soy un estudiante apasionado por el desarrollo de software. Actualmente curso el
              Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y cuento con una
              solida base tecnica obtenida en mi Grado Medio de Sistemas Microinformaticos y Redes
              (SMR).
            </p>

            <div className="hero-info">
              <span>España</span>
              <span>alejandromorareyes71@gmail.com</span>
            </div>

            <div className="hero-links">
              <a
                href="https://github.com/alejandromorareyes71-spec"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-mora-reyes-a913343a1"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={profileImg} alt="Foto de perfil de Alejandro Mora Reyes" />
          </div>
        </section>

        <section id="experiencia" className="section">
          <h2>Experiencia Laboral</h2>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.title} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <h3>{experience.title}</h3>
                  <span className="date">{experience.date}</span>
                </div>
                <h4>{experience.company}</h4>
                <ul>
                  {experience.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="estudios" className="section">
          <h2>Estudios</h2>
          <div className="timeline">
            {studies.map((study) => (
              <article key={study.title} className="timeline-item">
                <div className={`timeline-dot${study.active ? ' active' : ''}`}></div>
                <div className="timeline-header">
                  <h3>{study.title}</h3>
                  <span className="date">{study.date}</span>
                </div>
                <h4>{study.place}</h4>
                <p>{study.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2>Habilidades Tecnicas</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skills-category">
                <h3>{group.title}</h3>
                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`skill-tag${group.outline ? ' outline' : ''}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-heading">
            <h2>Proyectos</h2>
           
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt={project.alt} className="project-image" />
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {currentYear} Creado por Alejandro Mora Reyes.</p>
          <a
            className="footer-link"
            href="mailto:alejandromorareyes71@gmail.com"
          >
            alejandromorareyes71@gmail.com
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
