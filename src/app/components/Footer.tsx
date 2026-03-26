import React from 'react';
import { Compass, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050B14] py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Compass className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold text-white tracking-wide">Русские Просторы</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Школьные туры по Золотому кольцу России. Открываем историю, культуру и архитектуру родной страны для молодого поколения.
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>+7 (800) 555-00-00</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>tour@russia-school.ru</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 hover:text-teal-400 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Правила перевозки детей
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Тур «Путешествие по Золотому кольцу России». Все права защищены.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white">VK</div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white">TG</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
