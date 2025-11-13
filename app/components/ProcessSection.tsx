'use client';

import { motion } from 'framer-motion';
import { Search, FileCheck, Handshake, Home } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Choose Your Property',
    description: 'Browse our curated selection of RERA-registered properties in prime locations.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileCheck,
    step: '02',
    title: '10% Down Payment',
    description: 'Secure your investment with just 10% of the property value. No hidden costs.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Get 50% Cashback',
    description: 'Receive 50% cashback on your property value, making ownership incredibly affordable.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Home,
    step: '04',
    title: 'Earn 40% Rental Returns',
    description: 'Enjoy guaranteed 40% rental returns from pre-rented properties. Passive income starts immediately.',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How Opti Realty Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to property ownership and guaranteed returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="relative group"
              >
                {/* Connecting line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                    />
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl font-extrabold text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

