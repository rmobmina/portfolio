import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Mail } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

// RECRUITER-OPTIMIZED: Key information at a glance
// This section is designed for recruiters who scan resumes in 6-8 seconds
const QuickSummary = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-dust-grey/30 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Quick Stats Grid - Optimized for Quick Scanning */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Education */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 border border-muted-teal/20 dark:border-gray-600 hover:scale-105 transition-transform"
            >
              <GraduationCap className="w-6 h-6 text-stormy-teal dark:text-muted-teal flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Education</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Computer Science</p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 border border-muted-teal/20 dark:border-gray-600 hover:scale-105 transition-transform"
            >
              <Briefcase className="w-6 h-6 text-stormy-teal dark:text-muted-teal flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Role</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Researcher</p>
              </div>
            </motion.div>

            {/* Specialization */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 border border-muted-teal/20 dark:border-gray-600 hover:scale-105 transition-transform"
            >
              <Award className="w-6 h-6 text-stormy-teal dark:text-muted-teal flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Focus</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Bioinformatics</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 border border-muted-teal/20 dark:border-gray-600 hover:scale-105 transition-transform"
            >
              <MapPin className="w-6 h-6 text-stormy-teal dark:text-muted-teal flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Location</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Toronto</p>
              </div>
            </motion.div>

            {/* Status/Availability */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-dust-grey/20 to-muted-teal/10 dark:from-slate-800 dark:to-slate-700 border border-muted-teal/20 dark:border-gray-600 hover:scale-105 transition-transform"
            >
              <Mail className="w-6 h-6 text-stormy-teal dark:text-muted-teal flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Status</p>
                <p className="text-sm font-bold text-green-600 dark:text-green-400">Open</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickSummary;
