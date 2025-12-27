import { motion } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeInUp } from '../utils/animations';

const Resume = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="resume" className="py-20 bg-white relative overflow-hidden">
      {/* Animated divider at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-teal to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Background accent shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-muted-teal/20 to-cotton-rose/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stormy-teal mb-6 relative inline-block">
            Resume
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 bg-cotton-rose"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </h2>

          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Interested in working together? Download my resume to learn more about my experience,
            skills, and projects. Let's build something amazing!
          </p>

          {/* Download Button with Animation */}
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-stormy-teal to-air-force-blue text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-air-force-blue to-muted-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <FileDown className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </a>
          </motion.div>

          {/* Additional CTA */}
          <motion.p
            className="mt-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            or view my{' '}
            <a href="#projects" className="text-stormy-teal font-medium hover:text-air-force-blue underline">
              projects
            </a>
            {' '}and{' '}
            <a href="#experience" className="text-stormy-teal font-medium hover:text-air-force-blue underline">
              experience
            </a>
          </motion.p>
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

export default Resume;
