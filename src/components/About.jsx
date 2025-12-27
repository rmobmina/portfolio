import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
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
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stormy-teal dark:text-muted-teal mb-4 relative inline-block transition-colors duration-300">
              About Me
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-cotton-rose"
                initial={{ width: 0 }}
                animate={isVisible ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            </h2>
          </motion.div>

          {/* About Content with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Headshot Image */}
            <motion.div
              variants={staggerItem}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-muted-teal/20 to-cotton-rose/20 rounded-full blur-2xl"></div>
                <img
                  src={`${import.meta.env.BASE_URL}headshot.png`}
                  alt="Reena Obmina"
                  className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </motion.div>
            </motion.div>

            {/* About Text */}
            <motion.div variants={staggerItem} className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p>
              I'm a <span className="font-semibold text-stormy-teal dark:text-muted-teal transition-colors duration-300">Computer Science and Bioinformatics</span> student
              at the <span className="font-semibold text-stormy-teal dark:text-muted-teal transition-colors duration-300">University of Toronto</span> focused on building
              computational tools that make complex biological questions tangible. My work spans molecular data pipelines, interactive visualization, and interdisciplinary
              research that bridges lab science with software engineering.
            </p>

            <p>
              As a <span className="font-semibold text-stormy-teal dark:text-muted-teal transition-colors duration-300">Student Researcher</span> at the Provart Lab,
              I've contributed to modernizing the Bio-Analytic Resource (BAR) with Flask-based APIs and SQLAlchemy models that expose 5+ TB of curated gene expression
              data. I've also analyzed prairie biodiversity across 200+ field transects, building R Shiny platforms to model extinction risk and ecological resilience.
            </p>

            <p>
              Whether developing ML-driven epidemiology engines, building accessibility-focused NLP typing assistants, or creating low-level assembly games, I'm driven
              by curiosity about how algorithms, statistics, and biological systems intertwine. I'm energized by roles that blend biology, computation, and design—creating
              better tools that unlock better scientific questions.
            </p>
            </motion.div>
          </div>

          {/* Highlighted Stats or Quick Facts */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-muted-teal/20 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-stormy-teal dark:text-muted-teal mb-2 transition-colors duration-300">CS + Bio</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Interdisciplinary Approach</p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-muted-teal/20 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-stormy-teal dark:text-muted-teal mb-2 transition-colors duration-300">Full-Stack</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">End-to-End Development</p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-muted-teal/20 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-stormy-teal dark:text-muted-teal mb-2 transition-colors duration-300">UofT</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Toronto, Canada</p>
            </motion.div>
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

export default About;
