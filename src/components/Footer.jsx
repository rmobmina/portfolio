import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-stormy-teal to-air-force-blue text-white py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            {/* Name/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold mb-2">Reena Obmina</h3>
              <p className="text-dust-grey">Personal Portfolio</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/rmobmina"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-white group-hover:text-stormy-teal transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/reena-obmina/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-stormy-teal transition-colors" />
              </a>
              <a
                href="mailto:rmobmina@gmail.com"
                className="group p-3 bg-white/10 rounded-full hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-white group-hover:text-stormy-teal transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-white/20 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dust-grey"
          >
            <p className="flex items-center gap-2">
              © {currentYear} Reena Obmina. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-cotton-rose fill-cotton-rose animate-pulse" /> using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
