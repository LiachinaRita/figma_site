import React from 'react';
import { motion } from 'motion/react';
import { Compass, Camera, Map, Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: <Map className="w-8 h-8 text-amber-400" />,
    title: "5 городов",
    description: "Киржач, Суздаль, Нижний Новгород, Гороховец и Владимир."
  },
  {
    icon: <Home className="w-8 h-8 text-amber-400" />,
    title: "Архитектура",
    description: "Шедевры Владимира и жемчужина Золотого кольца – Суздаль."
  },
  {
    icon: <Camera className="w-8 h-8 text-amber-400" />,
    title: "Культура",
    description: "Нижегородский кремль и музей-усадьба купца Рукавишникова."
  },
  {
    icon: <Compass className="w-8 h-8 text-amber-400" />,
    title: "История",
    description: "Погружение в эпоху с интерактивными экскурсиями."
  }
];

export const AboutTour = () => {
  return (
    <section className="py-20 bg-[#08111f] relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                О туре <br/>
                <span className="text-teal-400">Маршрут впечатлений</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                По маршруту вы посетите Киржач, Суздаль, Нижний Новгород, Гороховец и Владимир. Вы увидите архитектурные шедевры г. Владимира, прогуляетесь по жемчужине Золотого кольца – Суздалю, осмотрите Нижегородский кремль, посетите музей-усадьбу купца Рукавишникова и поднимитесь по Чкаловской лестнице.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="mb-4 bg-white/10 p-3 rounded-xl inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <ImageWithFallback 
                src="https://i.postimg.cc/2jWrY0wT/BS_00aac9468a2788456652efb3952c2cfa9e9e02f061874587a8acb411a3e1ffe9.jpg"
                alt="Суздаль" 
                className="w-full h-64 object-cover rounded-3xl shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              />
              <ImageWithFallback 
                src="https://i.postimg.cc/DyKFw1pm/BS_e0c13b2d344822ac7c69a6e8dad4c5eb4a9fb549b114986d58ce332ad069da26.jpg" 
                alt="Золотое кольцо" 
                className="w-full h-48 object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <ImageWithFallback 
                src="https://i.postimg.cc/tCHy4FSL/BS_1480a14e9ca95a12effa30fdefa6ba7c8428a9ab3073c364fa8cbbd9b31cb1dc.jpg" 
                alt="Нижний Новгород" 
                className="w-full h-48 object-cover rounded-3xl shadow-lg"
              />
              <ImageWithFallback 
                src="https://i.postimg.cc/y6RsKLj1/BS_383c896b8ff5bdf760b7c1219c10a1257d792b3d02e763f6c52e01785131aff7.jpg" 
                alt="Природа России" 
                className="w-full h-64 object-cover rounded-3xl shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
