import React from 'react';
interface ClientData {
  name: string;
  phone: string;
  email: string;
  comment: string;
  agreeTerms: boolean;
}
interface ClientFormProps {
  data: ClientData;
  onChange: (data: ClientData) => void;
  errors: Record<string, string>;
}
export function ClientForm({ data, onChange, errors }: ClientFormProps) {
  const update = (field: keyof ClientData, value: string | boolean) => {
    onChange({
      ...data,
      [field]: value
    });
  };
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-dark mb-2">
        Ваши данные
      </h2>
      <p className="text-gray-500 mb-8">
        Заполните контактную информацию для подтверждения записи
      </p>

      <div className="max-w-lg space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="client-name"
            className="block text-sm font-semibold text-dark mb-2">

            Имя <span className="text-coral">*</span>
          </label>
          <input
            id="client-name"
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Введите ваше имя"
            className={`w-full px-4 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium transition-colors focus:outline-none focus:ring-0 ${errors.name ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal'}`} />

          {errors.name &&
          <p className="mt-1.5 text-sm text-coral font-medium">
              {errors.name}
            </p>
          }
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="client-phone"
            className="block text-sm font-semibold text-dark mb-2">

            Телефон <span className="text-coral">*</span>
          </label>
          <input
            id="client-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+7 (999) 123-45-67"
            className={`w-full px-4 py-3 rounded-xl border-2 text-dark placeholder-gray-300 font-medium transition-colors focus:outline-none focus:ring-0 ${errors.phone ? 'border-coral bg-coral/[0.03]' : 'border-gray-100 focus:border-teal'}`} />

          {errors.phone &&
          <p className="mt-1.5 text-sm text-coral font-medium">
              {errors.phone}
            </p>
          }
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="client-email"
            className="block text-sm font-semibold text-dark mb-2">

            Email
          </label>
          <input
            id="client-email"
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="email@example.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-dark placeholder-gray-300 font-medium transition-colors focus:outline-none focus:ring-0 focus:border-teal" />

        </div>

        {/* Comment */}
        <div>
          <label
            htmlFor="client-comment"
            className="block text-sm font-semibold text-dark mb-2">

            Комментарий
          </label>
          <textarea
            id="client-comment"
            value={data.comment}
            onChange={(e) => update('comment', e.target.value)}
            placeholder="Пожелания или дополнительная информация"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-dark placeholder-gray-300 font-medium transition-colors focus:outline-none focus:ring-0 focus:border-teal resize-none" />

        </div>

        {/* Terms */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="mt-0.5">
              <input
                type="checkbox"
                checked={data.agreeTerms}
                onChange={(e) => update('agreeTerms', e.target.checked)}
                className="sr-only" />

              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${data.agreeTerms ? 'bg-teal border-teal' : errors.agreeTerms ? 'border-coral' : 'border-gray-300 group-hover:border-gray-400'}`}>

                {data.agreeTerms &&
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}>

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7" />

                  </svg>
                }
              </div>
            </div>
            <span
              className={`text-sm leading-snug ${errors.agreeTerms ? 'text-coral' : 'text-gray-600'}`}>

              Я согласен(а) с{' '}
              <a href="#" className="text-teal font-semibold hover:underline">
                условиями обработки персональных данных
              </a>{' '}
              и{' '}
              <a href="#" className="text-teal font-semibold hover:underline">
                политикой конфиденциальности
              </a>
            </span>
          </label>
          {errors.agreeTerms &&
          <p className="mt-1.5 text-sm text-coral font-medium">
              {errors.agreeTerms}
            </p>
          }
        </div>
      </div>
    </div>);

}