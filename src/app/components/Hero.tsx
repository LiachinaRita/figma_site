import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595922234439-b115384fa6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXNzaWFuJTIwb3J0aG9kb3glMjBjaHVyY2glMjBuYXR1cmV8ZW58MXx8fHwxNzc0NTI1MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111f]/60 via-[#08111f]/70 to-[#08111f]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <MapPin size={18} className="text-teal-400" />
          <span className="text-sm font-medium tracking-wide uppercase text-teal-50">Школьный тур</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Путешествие по <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Золотому кольцу России
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm"
        >
          Откройте для себя богатую историю и культуру русских городов. Приглашаем вас в увлекательное путешествие по живописным уголкам России!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-2">
              Записаться на экскурсию
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-teal-400 mb-2 uppercase tracking-widest text-[10px] font-semibold">Узнать больше</span>
        <ChevronDown size={24} className="text-teal-400" />
      </motion.div>
    </section>
  );
};
