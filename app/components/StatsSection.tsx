'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Properties',
    description: 'RERA Registered Projects',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Happy Investors',
    description: 'Trusted by families',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Rental Returns',
    description: 'Guaranteed annually',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    value: '50%',
    label: 'Cashback',
    description: 'On property value',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Opti Realty by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by investors, delivering exceptional returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xl font-bold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

