import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { staggerContainer, staggerItem } from '../utils/animations';

const experiences = [
  {
    role: "Volunteer",
    organization: "Women's College Hospital",
    period: "Oct 2025 - Present",
    description: [
      "Supporting hospital operations and patient-centered initiatives as part of Women's College Hospital's volunteer program",
      "Assisting staff and visitors in navigating clinical and research spaces to enhance the patient experience",
      "Engaging with community health programs that promote accessibility, inclusion, and preventive care",
      "Gaining firsthand exposure to healthcare environments that integrate innovation, research, and compassionate service"
    ]
  },
  {
    role: "Student Researcher",
    organization: "University of Toronto - Department of Cell and Systems Biology",
    period: "Aug 2025 - Present",
    supervisor: "Dr. Nicholas Provart & Vincent Lau",
    description: [
      "Contribute to bioinformatics research exploring plant gene expression and environmental stress responses",
      "Develop and test computational tools for data visualization and analysis within the Bio-Analytic Resource (BAR) platform",
      "Implement pipelines for large-scale gene expression datasets, supporting reproducibility and usability for plant science researchers",
      "Collaborate with graduate students and developers to modernize backend systems, integrating Flask APIs, SQL databases, and data validation workflows"
    ]
  },
  {
    role: "Student Researcher",
    organization: "University of Toronto - Department of Ecology and Evolutionary Biology",
    period: "Apr 2025 - Aug 2025",
    supervisor: "Dr. Benjamin Gilbert & Grace Walker Mitchell",
    description: [
      "Collected and analyzed biodiversity data across fragmented prairie habitats to study species dominance and extinction dynamics",
      "Applied statistical and visualization methods in R (tidyverse) to evaluate population fluctuations and community stability",
      "Presented findings through a research poster highlighting the ecological effects of demographic stochasticity on restoration success"
    ]
  },
  {
    role: "Social Events Associate",
    organization: "Computer Science Student Union - University of Toronto",
    period: "Jul 2024 - Present",
    description: [
      "Plan and coordinate large-scale social and networking events for 100+ Computer Science students to strengthen community engagement",
      "Collaborate with the executive team to design inclusive and accessible programming tailored to diverse student interests",
      "Manage event logistics, budgeting, and communications across multiple platforms, ensuring smooth execution from planning to post-event reflection",
      "Support promotional campaigns that increased student participation in union events by fostering welcoming and creative atmospheres"
    ]
  },
  {
    role: "Cashier",
    organization: "Shoppers Drug Mart",
    period: "Sep 2022 - Aug 2023",
    description: [
      "Delivered friendly and efficient customer service in a fast-paced retail environment",
      "Operated point-of-sale systems and managed cash transactions with accuracy and professionalism",
      "Assisted in maintaining inventory, restocking shelves, and supporting daily store operations to enhance customer satisfaction",
      "Strengthened teamwork and communication skills through consistent collaboration with diverse staff and clientele"
    ]
  },
];

const ExperienceItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={staggerItem}
      className="relative flex items-center gap-8 mb-12 last:mb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div
          className="w-4 h-4 bg-stormy-teal rounded-full border-4 border-white shadow-lg"
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      </div>

      {/* Content card */}
      <motion.div
        className={`w-full md:w-5/12 ${isEven ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-dust-grey/30 dark:border-gray-700 hover:border-muted-teal dark:hover:border-muted-teal">
          <div className={`flex flex-col ${isEven ? 'items-start' : 'md:items-end items-start'}`}>
            <span className="text-sm text-cotton-rose font-medium mb-2 px-3 py-1 bg-cotton-rose/10 rounded-full">
              {experience.period}
            </span>
            <h3 className="text-xl font-bold text-stormy-teal dark:text-muted-teal mb-1 transition-colors duration-300">
              {experience.role}
            </h3>
            <p className="text-air-force-blue dark:text-gray-300 font-medium transition-colors duration-300">
              {experience.organization}
            </p>
            {experience.supervisor && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-1 mb-3">
                Under the supervision of {experience.supervisor}
              </p>
            )}
            {!experience.supervisor && <div className="mb-4" />}
          </div>

          <ul className={`space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 ${isEven ? 'text-left' : 'md:text-right text-left'}`}>
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`text-muted-teal mt-1 ${isEven ? '' : 'md:order-2'}`}>•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
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
            <h2 className="text-4xl md:text-5xl font-bold text-stormy-teal mb-4 inline-block relative">
              Experience
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-1 bg-cotton-rose"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              My professional journey in software development and research.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-muted-teal via-air-force-blue to-muted-teal hidden md:block"
              style={{ height: '100%' }}
              initial={{ scaleY: 0 }}
              animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Experience items */}
            <motion.div variants={staggerContainer}>
              {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} index={index} />
              ))}
            </motion.div>
          </div>
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

export default Experience;
