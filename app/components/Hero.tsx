'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Home, DollarSign } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '50%', label: 'Cashback', icon: DollarSign, color: 'from-emerald-400 to-green-500' },
    { value: '40%', label: 'Rental Return', icon: TrendingUp, color: 'from-cyan-400 to-blue-500' },
    { value: '10%', label: 'Entry Cost', icon: Home, color: 'from-orange-400 to-pink-500' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 flex flex-col items-center justify-center px-4 md:px-0 overflow-hidden">
      {/* Vibrant animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 150, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -150, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Own More.
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Pay Less.
              </span>
              <span className="block bg-gradient-to-r from-orange-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-2xl">
                Profit Always.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed backdrop-blur-sm bg-white/5 px-4 py-3 rounded-2xl border border-white/20"
            >
              Real Estate reimagined with <span className="font-bold text-cyan-300">Cashback + Rental Earnings</span>. Own property for just <span className="font-bold text-pink-300">10% of its value</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 hover:from-orange-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:shadow-pink-500/50 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden backdrop-blur-sm border border-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Link>
              <Link
                href="/projects"
                className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 w-full"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`text-center p-4 bg-gradient-to-br ${stat.color} backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl hover:shadow-${stat.color.split('-')[1]}-500/50 transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white mx-auto mb-2 drop-shadow-lg" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">{stat.value}</div>
                    <div className="text-xs text-white/90 font-semibold">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right SVG Illustration */}
          <div className="flex-1 flex items-center justify-center min-h-[400px] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full max-w-[600px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <svg
                  viewBox="0 0 600 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-2xl"
                >
                  <style>{`
                    .or-bar {
                      transform-origin: bottom;
                      animation: orBarGrow 2.8s cubic-bezier(.4,2,.6,1) infinite alternate;
                    }
                    .or-bar2 { animation-delay: 0.5s; }
                    .or-bar3 { animation-delay: 1s; }
                    @keyframes orBarGrow {
                      0% { transform: scaleY(0.7); }
                      100% { transform: scaleY(1); }
                    }
                    .or-coin {
                      animation: orCoinFloat 3.2s ease-in-out infinite alternate;
                    }
                    .or-coin2 { animation-delay: 1.2s; }
                    .or-coin3 { animation-delay: 2.1s; }
                    @keyframes orCoinFloat {
                      0% { transform: translateY(0); }
                      100% { transform: translateY(-22px); }
                    }
                    .or-home {
                      animation: orHomePulse 2.5s cubic-bezier(.4,2,.6,1) infinite alternate;
                    }
                    @keyframes orHomePulse {
                      0% { transform: scale(1) translateY(0); }
                      100% { transform: scale(1.04) translateY(-8px); }
                    }
                    .or-glow {
                      filter: drop-shadow(0 0 24px rgba(236, 72, 153, 0.8));
                    }
                    .or-glass {
                      fill: url(#glassGrad);
                      opacity: 0.9;
                      backdrop-filter: blur(8px);
                    }
                  `}</style>
                  <defs>
                    <radialGradient id="glassGrad" cx="50%" cy="50%" r="80%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.7" />
                    </radialGradient>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="300" cy="410" rx="210" ry="22" fill="#fff" opacity="0.2" />
                  <g>
                    <rect x="90" y="170" width="54" height="180" rx="14" fill="#ec4899" className="or-glow" />
                    <rect x="110" y="190" width="16" height="140" rx="6" fill="#fff" opacity="0.9" />
                    <rect x="60" y="220" width="24" height="100" rx="8" fill="#06b6d4" />
                    <rect x="160" y="210" width="18" height="120" rx="7" fill="#fff" opacity="0.95" />
                    <rect x="100" y="210" width="8" height="18" rx="2" fill="#fff" opacity="0.7" />
                    <rect x="100" y="250" width="8" height="18" rx="2" fill="#fff" opacity="0.7" />
                    <rect x="100" y="290" width="8" height="18" rx="2" fill="#fff" opacity="0.7" />
                  </g>
                  <g>
                    <rect x="230" y="260" width="22" height="70" rx="7" fill="#06b6d4" className="or-bar" />
                    <rect x="260" y="230" width="22" height="100" rx="7" fill="#ec4899" className="or-bar or-bar2" />
                    <rect x="290" y="200" width="22" height="130" rx="7" fill="#a855f7" className="or-bar or-bar3" />
                    <polyline
                      points="255,220 270,200 285,220"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g className="or-home">
                    <rect x="400" y="250" width="70" height="54" rx="12" className="or-glass" />
                    <rect
                      x="400"
                      y="250"
                      width="70"
                      height="54"
                      rx="12"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="3"
                    />
                    <polygon points="435,230 400,250 470,250" fill="#06b6d4" />
                    <rect x="432" y="278" width="16" height="20" rx="3" fill="#ec4899" />
                    <text x="440" y="270" fontSize="22" fontWeight="bold" fill="#06b6d4">
                      ₹
                    </text>
                  </g>
                  <g className="or-glow">
                    <rect x="340" y="120" width="60" height="36" rx="10" fill="#fff" stroke="#06b6d4" strokeWidth="2" />
                    <rect x="355" y="135" width="28" height="7" rx="2" fill="#ec4899" />
                    <circle cx="385" cy="150" r="5" fill="#06b6d4" />
                  </g>
                  <g>
                    <circle
                      cx="180"
                      cy="110"
                      r="15"
                      fill="#f97316"
                      stroke="#fff"
                      strokeWidth="3"
                      className="or-coin or-coin1"
                    />
                    <circle
                      cx="320"
                      cy="80"
                      r="11"
                      fill="#f97316"
                      stroke="#fff"
                      strokeWidth="2"
                      className="or-coin or-coin2"
                    />
                    <circle
                      cx="470"
                      cy="160"
                      r="13"
                      fill="#f97316"
                      stroke="#fff"
                      strokeWidth="2"
                      className="or-coin or-coin3"
                    />
                  </g>
                  <g opacity="0.8">
                    <polygon points="210,340 250,320 290,340 250,360" fill="url(#glassGrad)" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
