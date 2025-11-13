'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Home } from 'lucide-react';

export default function InvestmentCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [years, setYears] = useState(5);

  // Calculations
  const entryCost = propertyValue * 0.1; // 10%
  const cashback = propertyValue * 0.5; // 50%
  const annualRentalReturn = propertyValue * 0.4; // 40%
  const totalRentalReturns = annualRentalReturn * years;
  const totalReturns = cashback + totalRentalReturns;
  const netInvestment = entryCost;
  const roi = ((totalReturns - netInvestment) / netInvestment) * 100;
  const effectiveCost = entryCost - cashback;

  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 mb-4 shadow-2xl border-2 border-white/30">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Calculate Your Returns
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto backdrop-blur-sm bg-white/40 px-6 py-4 rounded-2xl border border-white/50">
            See how much you can earn with Opti Realty's unique investment model
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-white/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Property Value (₹)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="2000000"
                    max="20000000"
                    step="500000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹20L</span>
                    <span>₹2Cr</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl border-2 border-pink-300/30">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{(propertyValue / 100000).toFixed(1)}L
                  </div>
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="2000000"
                    max="20000000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Investment Period (Years)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>10 Years</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-xl border-2 border-cyan-300/30 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">{years} Years</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                key={`entry-${entryCost}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 p-6 rounded-2xl text-white shadow-2xl border-2 border-white/30 backdrop-blur-sm"
              >
                <Home className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-90 mb-1">Entry Cost (10%)</div>
                <div className="text-2xl font-bold">₹{(entryCost / 100000).toFixed(1)}L</div>
              </motion.div>

              <motion.div
                key={`cashback-${cashback}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 p-6 rounded-2xl text-white shadow-2xl border-2 border-white/30 backdrop-blur-sm"
              >
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-90 mb-1">Cashback (50%)</div>
                <div className="text-2xl font-bold">₹{(cashback / 100000).toFixed(1)}L</div>
              </motion.div>
            </div>

            {/* Total Returns */}
            <motion.div
              key={`returns-${totalReturns}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden border-2 border-white/30 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="relative z-10">
                <TrendingUp className="w-8 h-8 mb-4" />
                <div className="text-sm opacity-90 mb-2">Total Returns ({years} Years)</div>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  ₹{(totalReturns / 100000).toFixed(1)}L
                </div>
                <div className="text-sm opacity-80">
                  ₹{(annualRentalReturn / 100000).toFixed(1)}L/year rental + ₹{(cashback / 100000).toFixed(1)}L cashback
                </div>
              </div>
            </motion.div>

            {/* ROI & Effective Cost */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                key={`roi-${roi}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border-2 border-orange-300/50"
              >
                <div className="text-sm text-gray-600 mb-1">ROI</div>
                <div className="text-3xl font-extrabold text-orange-600">{roi.toFixed(0)}%</div>
              </motion.div>

              <motion.div
                key={`effective-${effectiveCost}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border-2 border-cyan-300/50"
              >
                <div className="text-sm text-gray-600 mb-1">Effective Cost</div>
                <div className="text-2xl font-extrabold text-cyan-600">
                  ₹{(effectiveCost / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-gray-500 mt-1">After cashback</div>
              </motion.div>
            </div>

            {/* Visual Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border-2 border-white/50"
            >
              <div className="text-sm font-semibold text-gray-700 mb-4">Investment Breakdown</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Your Investment</span>
                    <span>₹{(entryCost / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(entryCost / propertyValue) * 100}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Cashback Return</span>
                    <span>₹{(cashback / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(cashback / propertyValue) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Rental Returns ({years} years)</span>
                    <span>₹{(totalRentalReturns / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((totalRentalReturns / propertyValue) * 100, 100)}%` }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

