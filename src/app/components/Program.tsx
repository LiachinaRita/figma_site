import React from 'react';
import { motion } from 'motion/react';
import { Map, Clock, Coffee, Building2, Ticket, Tent, Luggage, Utensils } from 'lucide-react';

const timeline = [
  {
    icon: <Map className="w-5 h-5 text-teal-400" />,
    time: "Утро",
    title: "Киржач",
    desc: "Киржач – город с древним монастырём и купеческими усадьбами. Основан в XIV веке.",
    bullets: [
      "Торговые ряды XIX века",
      "Центр города с купеческими домами",
      "Атмосферный театр «Совёнок»",
      "Выставка работ С. М. Прокудина-Горского",
      "Подвал купца Карабанова",
      "Самый длинный деревянный мост (555 м)",
      "Арт-объект «Поляна утерянных букв»"
    ]
  },
  {
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    time: "День",
    title: "Отправление в Суздаль",
    desc: "Время в пути около 2,5 часов (130 км). Путевая информация в дороге.",
  },
  {
    icon: <Utensils className="w-5 h-5 text-orange-400" />,
    time: "Обед",
    title: "Обед в кафе",
    desc: "Сытный обед в уютном кафе города Суздаль.",
  },
  {
    icon: <Building2 className="w-5 h-5 text-teal-400" />,
    time: "Вторая половина дня",
    title: "Обзорная экскурсия по Суздалю",
    desc: "Осмотр главных достопримечательностей древнего города.",
    bullets: [
      "Суздальский кремль",
      "Торговая площадь",
      "Спасо-Евфимиев монастырь",
      "Ризоположенский монастырь XIII века",
      "Покровский монастырь XIV века"
    ]
  },
  {
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    time: "Вечер",
    title: "Отправление в Нижний Новгород",
    desc: "Время в пути около 4 часов (250 км).",
  },
  {
    icon: <Luggage className="w-5 h-5 text-orange-400" />,
    time: "Заселение",
    title: "Размещение в отеле",
    desc: "Размещение в отеле «Волна» или резервных отелях.",
  },
  {
    icon: <Coffee className="w-5 h-5 text-teal-400" />,
    time: "Свободное время",
    title: "Ужин в ресторане",
    desc: "Свободное время и ужин в ресторане отеля (при покупке тура с ужинами).",
  }
];

export const Program = () => {
  return (
    <section className="py-24 bg-[#0a192f] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-4 tracking-wider uppercase">
            Маршрут
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Программа тура</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-amber-400 font-medium">День 1: Киржач – Суздаль</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 ml-4 md:ml-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 ml-8 md:ml-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] p-2 bg-[#0a192f] rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] z-10">
                  <div className="p-1.5 bg-white/5 rounded-full backdrop-blur-sm">
                    {item.icon}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">{item.title}</h3>
                    <span className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full self-start md:self-auto">
                      {item.time}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-base leading-relaxed">
                    {item.desc}
                  </p>

                  {item.bullets && (
                    <ul className="space-y-2 mt-4">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
