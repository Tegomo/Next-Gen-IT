import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="relative group">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-3 text-gray-400 transition-all duration-300 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-500"
          >
            Nom complet
          </label>
        </div>

        <div className="relative group">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-400 transition-all duration-300 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-500"
          >
            Email
          </label>
        </div>

        <div className="sm:col-span-2 relative group">
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
            placeholder=" "
          />
          <label
            htmlFor="subject"
            className="absolute left-4 top-3 text-gray-400 transition-all duration-300 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-500"
          >
            Sujet
          </label>
        </div>

        <div className="sm:col-span-2 relative group">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-blue-500 bg-white/50 backdrop-blur-sm resize-none"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3 text-gray-400 transition-all duration-300 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-500"
          >
            Message
          </label>
        </div>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`
            w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white 
            ${status === 'submitting' ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300
          `}
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : status === 'success' ? (
            <>
              <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Message envoyé !
            </>
          ) : (
            'Envoyer le message'
          )}
        </button>
      </div>

      {status === 'error' && (
        <div className="sm:col-span-2 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">Une erreur est survenue. Veuillez réessayer.</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
