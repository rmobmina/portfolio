import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileDown } from 'lucide-react';
import { wordReveal, fadeInUp } from '../utils/animations';

const Hero = () => {
  // Split text for animation
  const firstName = "Reena";
  const lastName = "Obmina";
  const identityLine1 = "Computer Science + Bioinformatics @ University of Toronto".split(" ");
  const identityLine2 = "Full Stack Developer & Researcher".split(" ");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-stone-50 via-stone-100 to-dust-grey/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Subtle floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-muted-teal/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cotton-rose/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating DNA Helixes - Improved Design */}
        <motion.div
          className="absolute top-32 right-20 opacity-25 dark:opacity-35"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="70" height="140" viewBox="0 0 70 140" className="text-muted-teal">
            <path d="M20 10 Q35 25 20 40 Q35 55 20 70 Q35 85 20 100 Q35 115 20 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M50 10 Q35 25 50 40 Q35 55 50 70 Q35 85 50 100 Q35 115 50 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <line x1="20" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="63" x2="50" y2="63" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="77" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="93" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="107" x2="50" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="123" x2="50" y2="123" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="107" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="107" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-24 opacity-25 dark:opacity-35"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="65" height="130" viewBox="0 0 70 140" className="text-cotton-rose">
            <path d="M20 10 Q35 25 20 40 Q35 55 20 70 Q35 85 20 100 Q35 115 20 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M50 10 Q35 25 50 40 Q35 55 50 70 Q35 85 50 100 Q35 115 50 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <line x1="20" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="63" x2="50" y2="63" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="77" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="93" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="107" x2="50" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="123" x2="50" y2="123" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="107" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="107" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-60 left-32 opacity-25 dark:opacity-35"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="60" height="120" viewBox="0 0 70 140" className="text-stormy-teal">
            <path d="M20 10 Q35 25 20 40 Q35 55 20 70 Q35 85 20 100 Q35 115 20 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M50 10 Q35 25 50 40 Q35 55 50 70 Q35 85 50 100 Q35 115 50 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <line x1="20" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="63" x2="50" y2="63" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="77" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="93" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="107" x2="50" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="123" x2="50" y2="123" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="107" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="107" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-32 opacity-25 dark:opacity-35"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="68" height="136" viewBox="0 0 70 140" className="text-muted-teal">
            <path d="M20 10 Q35 25 20 40 Q35 55 20 70 Q35 85 20 100 Q35 115 20 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M50 10 Q35 25 50 40 Q35 55 50 70 Q35 85 50 100 Q35 115 50 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <line x1="20" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="63" x2="50" y2="63" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="77" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="93" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="107" x2="50" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="123" x2="50" y2="123" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="107" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="107" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-1/4 opacity-20 dark:opacity-30"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="55" height="110" viewBox="0 0 70 140" className="text-air-force-blue dark:text-muted-teal">
            <path d="M20 10 Q35 25 20 40 Q35 55 20 70 Q35 85 20 100 Q35 115 20 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M50 10 Q35 25 50 40 Q35 55 50 70 Q35 85 50 100 Q35 115 50 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <line x1="20" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="63" x2="50" y2="63" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="77" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="93" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="107" x2="50" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="123" x2="50" y2="123" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="107" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="107" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 opacity-20 dark:opacity-30"
          animate={{
            y: [0, 18, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="58" height="116" viewBox="0 0 70 140" className="text-cotton-rose">
            <path d="M20 10 Q35 25 20 40 Q35 55 20 70 Q35 85 20 100 Q35 115 20 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M50 10 Q35 25 50 40 Q35 55 50 70 Q35 85 50 100 Q35 115 50 130" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <line x1="20" y1="17" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="63" x2="50" y2="63" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="77" x2="50" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="93" x2="50" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="107" x2="50" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <line x1="20" y1="123" x2="50" y2="123" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
            <circle cx="20" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="17" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="47" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="77" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="20" cy="107" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="50" cy="107" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>

        {/* Floating Code Snippets - Real Code */}
        {/* Python - BioPython */}
        <motion.div
          className="absolute top-48 right-48 opacity-15 dark:opacity-25"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-sm text-stormy-teal dark:text-muted-teal whitespace-pre">
            {'from Bio import SeqIO\nfor record in SeqIO.parse(\n  "genome.fasta", "fasta"\n):\n  print(record.id)'}
          </code>
        </motion.div>

        {/* R - Statistical Genomics */}
        <motion.div
          className="absolute bottom-48 left-40 opacity-15 dark:opacity-25"
          animate={{
            y: [0, 12, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-xs text-air-force-blue dark:text-gray-400 whitespace-pre">
            {'library(DESeq2)\ndds <- DESeqDataSetFromMatrix(\n  countData = counts,\n  colData = metadata,\n  design = ~condition\n)'}
          </code>
        </motion.div>

        {/* JavaScript - Sequence Processing */}
        <motion.div
          className="absolute top-72 left-20 opacity-15 dark:opacity-25"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-sm text-cotton-rose dark:text-cotton-rose whitespace-pre">
            {'const complement = {\n  A: "T", T: "A",\n  G: "C", C: "G"\n};\nseq.split("").map(\n  bp => complement[bp]\n)'}
          </code>
        </motion.div>

        {/* SQL - Genomic Database Query */}
        <motion.div
          className="absolute bottom-56 right-24 opacity-15 dark:opacity-25"
          animate={{
            y: [0, 10, 0],
            x: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-xs text-muted-teal dark:text-muted-teal whitespace-pre">
            {'SELECT gene_name, \n  expression_level\nFROM rna_seq\nWHERE tissue = "brain"\n  AND fold_change > 2'}
          </code>
        </motion.div>

        {/* Bash - Bioinformatics Pipeline */}
        <motion.div
          className="absolute top-96 right-16 opacity-15 dark:opacity-25"
          animate={{
            y: [0, -12, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-sm text-stormy-teal dark:text-gray-400 whitespace-pre">
            {'#!/bin/bash\nbwa mem ref.fa \\\n  reads.fq | \\\n  samtools sort -o \\\n  aligned.bam'}
          </code>
        </motion.div>

        {/* Python - Pandas Data Analysis */}
        <motion.div
          className="absolute top-40 left-48 opacity-15 dark:opacity-25"
          animate={{
            y: [0, -14, 0],
            x: [0, -4, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-xs text-cotton-rose dark:text-gray-400 whitespace-pre">
            {'import pandas as pd\ndf = pd.read_csv(\n  "expression.csv"\n)\ndf.groupby("condition")\n  .mean()'}
          </code>
        </motion.div>

        {/* Python - NumPy Matrix Operations */}
        <motion.div
          className="absolute bottom-40 right-40 opacity-15 dark:opacity-25"
          animate={{
            y: [0, 11, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-sm text-air-force-blue dark:text-muted-teal whitespace-pre">
            {'import numpy as np\nscores = np.dot(\n  query_vec,\n  ref_matrix.T\n)'}
          </code>
        </motion.div>

        {/* Perl - Regex Pattern Matching */}
        <motion.div
          className="absolute top-52 right-32 opacity-15 dark:opacity-25"
          animate={{
            y: [0, -9, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <code className="font-mono text-xs text-stormy-teal dark:text-gray-400 whitespace-pre">
            {'while (<$fh>) {\n  if (/^>(\S+)/) {\n    $id = $1;\n  }\n}'}
          </code>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Name with Interactive Letters */}
          <div className="mb-12">
            <div className="flex justify-center items-center gap-x-3 flex-wrap">
              {/* First Name */}
              <div className="flex">
                {firstName.split('').map((letter, index) => (
                  <motion.h1
                    key={`first-${index}`}
                    custom={index}
                    variants={wordReveal}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.15,
                      color: "#ebbab9",
                      transition: { duration: 0.3 }
                    }}
                    style={{ color: "#407076" }}
                    className="text-7xl md:text-8xl lg:text-9xl font-bold dark:text-muted-teal cursor-default transition-colors duration-300"
                  >
                    {letter}
                  </motion.h1>
                ))}
              </div>

              {/* Last Name */}
              <div className="flex">
                {lastName.split('').map((letter, index) => (
                  <motion.h1
                    key={`last-${index}`}
                    custom={firstName.length + index}
                    variants={wordReveal}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.15,
                      color: "#ebbab9",
                      transition: { duration: 0.3 }
                    }}
                    style={{ color: "#407076" }}
                    className="text-7xl md:text-8xl lg:text-9xl font-bold dark:text-muted-teal cursor-default transition-colors duration-300"
                  >
                    {letter}
                  </motion.h1>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Identity Lines with Visual Emphasis */}
          <div className="mb-12 space-y-3">
            {/* Line 1 - Computer Science + Bioinformatics @ University of Toronto */}
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
              {identityLine1.map((word, index) => {
                const isHighlight = word === "Computer" || word === "Science" || word === "+" || word === "Bioinformatics" || word === "@" || word === "University" || word === "of" || word === "Toronto";
                return (
                  <motion.span
                    key={index}
                    custom={firstName.length + lastName.length + index}
                    variants={wordReveal}
                    initial="hidden"
                    animate="visible"
                    className={`text-2xl md:text-3xl lg:text-4xl font-medium transition-colors duration-300 ${
                      isHighlight
                        ? 'text-stormy-teal dark:text-muted-teal font-bold px-2 py-1 bg-cotton-rose/10 dark:bg-cotton-rose/20 rounded'
                        : 'text-air-force-blue dark:text-gray-300'
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>

            {/* Line 2 - Full Stack Developer & Researcher */}
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
              {identityLine2.map((word, index) => {
                const isHighlight = word === "Full" || word === "Stack" || word === "Developer" || word === "&" || word === "Researcher";
                return (
                  <motion.span
                    key={index}
                    custom={firstName.length + lastName.length + identityLine1.length + index}
                    variants={wordReveal}
                    initial="hidden"
                    animate="visible"
                    className={`text-2xl md:text-3xl lg:text-4xl font-medium transition-colors duration-300 ${
                      isHighlight
                        ? 'text-stormy-teal dark:text-muted-teal font-bold px-2 py-1 bg-cotton-rose/10 dark:bg-cotton-rose/20 rounded'
                        : 'text-air-force-blue dark:text-gray-300'
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-stormy-teal dark:bg-muted-teal text-white rounded-lg font-medium flex items-center gap-2 hover:bg-air-force-blue dark:hover:bg-cotton-rose hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resume"
              className="group px-8 py-4 border-2 border-stormy-teal dark:border-muted-teal text-stormy-teal dark:text-muted-teal rounded-lg font-medium flex items-center gap-2 hover:bg-stormy-teal dark:hover:bg-muted-teal hover:text-white hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <FileDown className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.2 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/rmobmina"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-dust-grey/30 dark:bg-slate-700 hover:bg-stormy-teal dark:hover:bg-muted-teal transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-stormy-teal group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/reena-obmina/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-dust-grey/30 dark:bg-slate-700 hover:bg-stormy-teal dark:hover:bg-muted-teal transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-stormy-teal group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-stormy-teal dark:border-muted-teal rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-stormy-teal dark:bg-muted-teal rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
