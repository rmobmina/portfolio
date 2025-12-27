import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

const projects = [
  {
    title: "Bio-Analytic Resource (BAR): ePlant 3.0",
    description: "Contributed to modernizing the BAR's genomics infrastructure by developing Flask-based APIs and dynamic SQLAlchemy models that serve 5+ TB of curated plant biology datasets. Improved data accessibility for 30+ research groups and streamlined preprocessing workflows.",
    tech: ["Python", "Flask", "SQLAlchemy", "React", "Bioinformatics"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Sep 2025 - Present"
  },
  {
    title: "Red Rebirth: Life on Mars",
    description: "Created a real-time OpenGL graphics scene simulating a Mars environment, featuring procedural terrain, dynamic lighting, textured models, and animated elements. Demonstrated advanced rendering techniques, shader programming, and performance optimization.",
    tech: ["C++", "OpenGL", "Shaders", "Computer Graphics"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Nov 2025 - Dec 2025"
  },
  {
    title: "TurboType: AI-Powered Typing Platform",
    description: "Co-engineered an adaptive typing platform using AI-generated prompts, Firebase authentication, Clean Architecture, and Jetpack Compose. Implemented real-time difficulty scaling, multiplayer modes, user statistics, leaderboards, gacha rewards, and personalization features.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Clean Architecture"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Oct 2025 - Nov 2025"
  },
  {
    title: "Partial Word Writer",
    description: "Built a cross-platform NLP-driven typing assistant designed for users with speech and motor barriers. Implemented probabilistic text prediction, Flask-based APIs, and an assistive UI that reduces keystrokes by up to 55% for pilot users.",
    tech: ["Python", "Flask", "Spring Boot", "NLP", "Accessibility"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Sep 2025 - Oct 2025"
  },
  {
    title: "ML-Driven Epidemiology Engine",
    description: "Designed a machine-learning workflow that processes large epidemiological datasets to predict viral transmission patterns with high accuracy. Created interactive dashboards for visualization, enabling health teams to explore outbreak scenarios.",
    tech: ["Python", "pandas", "NumPy", "PyTorch", "Machine Learning"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Aug 2025 - Sep 2025"
  },
  {
    title: "Ecological Dynamics Engine",
    description: "Developed an R Shiny platform that visualizes long-term prairie biodiversity data from 200+ field transects. Built tools to model species abundance, extinction risk, and demographic stochasticity across plot sizes.",
    tech: ["R", "ggplot", "tidyverse", "R Shiny", "Statistical Analysis"],
    github: "https://github.com/rmobmina/EEB398_Visualizer",
    demo: null,
    period: "May 2025 - Aug 2025"
  },
  {
    title: "Dr. Mario: MIPS Assembly Game",
    description: "Recreated the classic Dr. Mario game entirely in MIPS Assembly, implementing capsule movement, collision detection, gravity, row-clearing logic, sound effects, and difficulty scaling. Engineered complete gameplay loop at the low-level instruction level.",
    tech: ["MIPS Assembly", "Low Level Programming", "Memory Management"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Oct 2024 - Dec 2024"
  },
  {
    title: "Weather Insights Platform",
    description: "Built a weather analytics application using Clean Architecture principles, integrating real-time and historical APIs. Implemented interactive visualizations including bar charts, line graphs, and Mercator-projected maps.",
    tech: ["Java", "API", "JFreeChart", "JUnit", "Java Swing"],
    github: "https://github.com/rmobmina/CSC207-Project",
    demo: null,
    period: "Sep 2024 - Dec 2024"
  },
  {
    title: "Graph-Based Movie Recommender",
    description: "Designed a Python recommendation engine using advanced data structures, including weighted graphs and trees, to model relationships between movies. Analyzed Rotten Tomatoes scores, genres, and user preferences.",
    tech: ["Python", "pandas", "NetworkX", "Matplotlib", "Tkinter"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Mar 2024 - Apr 2024"
  },
  {
    title: "Campus Quest: UofT Puzzle Adventure",
    description: "Developed a Python adventure game set on the UofT campus where players search for essential exam items. Designed interactive scenes, puzzles, and progression mechanics using object-oriented programming.",
    tech: ["Python", "OOP", "Game Design", "UI/UX"],
    github: "https://github.com/rmobmina",
    demo: null,
    period: "Jan 2024 - Feb 2024"
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 border border-dust-grey/30 dark:border-gray-700 hover:border-muted-teal dark:hover:border-muted-teal transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-muted-teal/5 to-cotton-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-stormy-teal dark:text-muted-teal mb-2 group-hover:text-air-force-blue dark:group-hover:text-cotton-rose transition-colors">
          {project.title}
        </h3>

        {/* Period */}
        {project.period && (
          <p className="text-sm text-cotton-rose dark:text-cotton-rose/80 mb-3 font-medium">
            {project.period}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-dust-grey/20 dark:bg-slate-700 text-stormy-teal dark:text-muted-teal rounded-full border border-muted-teal/20 dark:border-gray-600 group-hover:bg-muted-teal/20 dark:group-hover:bg-muted-teal/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stormy-teal dark:text-muted-teal hover:text-air-force-blue dark:hover:text-cotton-rose font-medium transition-colors group/link"
          >
            <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
            Code
          </a>
          {project.demo && (
            <>
              <span className="text-dust-grey">|</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stormy-teal dark:text-muted-teal hover:text-air-force-blue dark:hover:text-cotton-rose font-medium transition-colors group/link"
              >
                <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                Live Demo
              </a>
            </>
          )}
        </div>
      </div>

      {/* Accent border on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-muted-teal via-cotton-rose to-muted-teal rounded-b-xl"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-stone-50 to-dust-grey/10 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated divider at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-teal to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stormy-teal dark:text-muted-teal mb-4 inline-block relative transition-colors duration-300">
              Featured Projects
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-1 bg-cotton-rose"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto transition-colors duration-300">
              A selection of projects showcasing my work in full-stack development, bioinformatics, and software engineering.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated divider at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-teal to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />
    </section>
  );
};

export default Projects;
