'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, LogIn, Shield, FileCheck, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const features = [
  {
    icon: TrendingUp,
    title: '50% Cashback on Property',
    description: 'Receive a guaranteed 50% cashback on your property value, making ownership more affordable than ever.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: BarChart3,
    title: '40% Rental Return',
    description: 'Enjoy a steady passive income with a 40% rental return, pre-rented and guaranteed.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: LogIn,
    title: 'Only 10% Entry Cost',
    description: 'Start your real estate investment journey with just 10% of the property`s value.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Shield,
    title: 'RERA Registered Projects',
    description: 'Invest with confidence through RERA registered projects that ensure full transparency and compliance.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: FileCheck,
    title: 'Pre-approved Legal Structure',
    description: 'Our legal framework is pre-vetted and approved, providing a secure and hassle-free investment.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: CheckCircle,
    title: 'Defined Exit Strategy',
    description: 'A clear and defined exit strategy ensures your investment is liquid and profitable in the long term.',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-purple-50 via-pink-50/50 to-cyan-50/50 relative overflow-hidden">
      {/* Vibrant decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-pink-300/30 text-pink-700 text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ✨ Unique Advantages
          </motion.span>
          <h2 className="text-base bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold tracking-wider uppercase mb-2">
            Why Choose Opti Realty
          </h2>
          <h3 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            The Opti Realty Difference
          </h3>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-800 mx-auto leading-relaxed backdrop-blur-sm bg-white/40 px-6 py-4 rounded-2xl border border-white/50">
            We've reimagined real estate to make it more accessible, profitable, and secure for everyone. Experience the future of property investment.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.03, rotateY: 2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl h-full border-2 border-white/50 hover:border-pink-300/50 hover:shadow-pink-500/20 transition-all duration-500">
                  <div className={`flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br ${feature.color} mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl border-2 border-white/30`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">{feature.title}</h4>
                  <p className="text-base text-gray-800 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="mt-16 lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="features-swiper"
            style={{ paddingBottom: '50px' }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <SwiperSlide key={feature.title} style={{ width: '85%' }}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl h-full border border-gray-100">
                    <div className={`flex items-center justify-center h-16 w-16 rounded-2xl ${feature.color} mx-auto mb-6`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-base text-gray-600">{feature.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

