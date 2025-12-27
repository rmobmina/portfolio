import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

const skillsData = {
  "Programming Languages": [
    "Python",
    "Java",
    "C",
    "C++",
    "Kotlin",
    "R",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "MIPS Assembly"
  ],
  "Development Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "RStudio",
    "Android Studio",
    "JetBrains Toolbox",
    "Linux (GCC, Make, Valgrind, gprof, SSH/SCP)",
    "Figma",
    "Canva",
    "Adobe Creative Cloud"
  ],
  "Frameworks & Libraries": [
    "Flask",
    "SQLAlchemy",
    "Spring Boot",
    "React",
    "Tailwind CSS",
    "Jetpack Compose",
    "Node.js",
    "PyTorch",
    "pandas",
    "NumPy",
    "tidyverse",
    "R Shiny",
    "ggplot2",
    "Matplotlib",
    "Plotly",
    "NetworkX",
    "Tkinter",
    "Java Swing",
    "JFreeChart",
    "JUnit"
  ],
  "Databases & Cloud": [
    "PostgreSQL",
    "SQL",
    "Firebase",
    "Docker",
    "AWS"
  ],
  "Scientific & Lab Techniques": [
    "PCR",
    "Gel Electrophoresis",
    "Micropipetting",
    "Vegetation Surveys",
    "Ecological Field Sampling",
    "DNA Extraction",
    "Spectrophotometry",
    "Spectroscopy",
    "Microbial Culture Handling",
    "Aseptic Technique",
    "Literature Review"
  ],
  "Specialized Skills": [
    "Bioinformatics",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Graphics",
    "Game Design",
    "Statistical Data Analysis",
    "Clean Architecture",
    "Accessibility Design"
  ],
  "Certifications": [
    "Good Clinical Practice (GCP)",
    "CPR-C + AED (First Aid)",
    "TCPS 2: CORE (2022)",
    "WHMIS"
  ]
};

const SkillCategory = ({ category, skills, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="mb-10"
    >
      <h3 className="text-xl font-bold text-stormy-teal dark:text-muted-teal mb-4 flex items-center gap-2 transition-colors duration-300">
        <span className="w-2 h-2 bg-cotton-rose rounded-full" />
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-dust-grey/40 dark:border-gray-600 text-air-force-blue dark:text-gray-300 rounded-full font-medium hover:border-muted-teal hover:bg-muted-teal/10 dark:hover:bg-muted-teal/20 hover:text-stormy-teal dark:hover:text-muted-teal transition-all duration-300 cursor-default hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1 + i * 0.03,
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={{ y: -2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-stone-50 to-dust-grey/10 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
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
              Skills & Technologies
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-1 bg-cotton-rose"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto transition-colors duration-300">
              A comprehensive toolkit spanning full-stack development and bioinformatics.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            {Object.entries(skillsData).map(([category, skills], index) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                index={index}
              />
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

export default Skills;
