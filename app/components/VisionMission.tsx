'use client';

import { motion } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Our Vision & Mission
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To unlock the hidden potential of underutilized real estate assets, creating value for both investors and the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-left bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower homeowners with innovative and cost-effective ownership solutions that disrupt traditional real estate models.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

