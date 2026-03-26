import React from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-gradient-to-t from-[#08111f] via-[#0B2447]/50 to-[#0a192f]">
      {/* Decorative Blur Circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-xl shadow-[0_0_50px_rgba(20,184,166,0.1)]"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl mb-8 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Готовы к путешествию?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Откройте школьникам живую историю, удивительную архитектуру и красоту родных просторов. Оставьте заявку, и мы свяжемся с вами для уточнения деталей.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full overflow-hidden transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(20,184,166,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-3">
              Записаться на экскурсию
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
