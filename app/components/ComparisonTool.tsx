'use client';

import { motion } from 'framer-motion';
import { Check, X, TrendingUp } from 'lucide-react';

const traditionalFeatures = [
  { text: '100% upfront payment required', check: false },
  { text: 'No cashback on purchase', check: false },
  { text: 'Uncertain rental income', check: false },
  { text: 'High entry barrier', check: false },
  { text: 'Long waiting period for returns', check: false },
];

const optiFeatures = [
  { text: 'Only 10% entry cost', check: true },
  { text: '50% cashback guaranteed', check: true },
  { text: '40% guaranteed rental returns', check: true },
  { text: 'Pre-rented properties', check: true },
  { text: 'Immediate returns', check: true },
];

export default function ComparisonTool() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Traditional vs Opti Realty
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference between traditional real estate investment and our revolutionary model
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-200 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Traditional Real Estate</h3>
              <div className="space-y-4">
                {traditionalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gray-100 rounded-2xl">
                <div className="text-sm text-gray-600 mb-2">Example: ₹50L Property</div>
                <div className="text-2xl font-bold text-gray-800">₹50L Investment</div>
                <div className="text-sm text-gray-500 mt-2">No cashback, uncertain returns</div>
              </div>
            </div>
          </motion.div>

          {/* Opti Realty */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-bold">Opti Realty Model</h3>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                  ✨ Revolutionary
                </span>
              </div>
              <div className="space-y-4">
                {optiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-sm opacity-90 mb-2">Example: ₹50L Property</div>
                <div className="text-2xl font-bold mb-1">₹5L Investment</div>
                <div className="text-sm opacity-80">
                  ₹25L cashback + ₹20L/year rental = ₹45L returns in 1 year!
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Savings Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 p-8 rounded-3xl shadow-2xl text-white text-center">
            <div className="text-3xl md:text-4xl font-extrabold mb-2">
              Save 90% on Entry Cost
            </div>
            <div className="text-lg opacity-90">
              With Opti Realty, you invest just 10% and get 50% cashback, making your effective investment only 5% of property value!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

