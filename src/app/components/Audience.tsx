import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap } from 'lucide-react';

export const Audience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#08111f] to-[#0a192f] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Для кого тур</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-200 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group shadow-[0_0_20px_rgba(20,184,166,0.05)] hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Первая группа</h3>
            <p className="text-4xl font-extrabold text-teal-400 mb-4">4–5 класс</p>
            <p className="text-slate-400">Адаптированная программа, игровая форма подачи материала, не утомительные переезды.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Вторая группа</h3>
            <p className="text-4xl font-extrabold text-amber-400 mb-4">6–8 класс</p>
            <p className="text-slate-400">Углубленное изучение истории, интерактивные квесты и знакомство с культурой.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
