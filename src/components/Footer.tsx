import React from 'react';
export function Footer() {
  return (
    <footer className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-black text-coral">
              Clientix
            </a>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              CRM-платформа для управления записями и клиентами в сфере красоты
              и здоровья.
            </p>
          </div>

          {/* Продукт */}
          <div>
            <h4 className="text-white font-bold mb-4">Продукт</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Возможности
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Тарифы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Интеграции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h4 className="text-white font-bold mb-4">Компания</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Блог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Карьера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="text-white font-bold mb-4">Поддержка</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Центр помощи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Документация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Статус
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors">

                  Связаться
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Clientix. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors">

              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors">

              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>);

}