'use client';
import { useState, FormEvent } from 'react';

export default function Iletisim() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construct email body
    const emailBody = `
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Mesaj: ${formData.message}
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:Baran.saran@icloud.com?subject=İletişim Formu&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
          Talebiniz alındı
        </div>
      )}
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-6">İletişim</h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mesajınız</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8">
              <h2 className="text-xl font-semibold mb-4">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <p>
                  <strong>Adres:</strong><br />
                  MUSTAFA KEMAL ATATÜRK CADDESİ 46/B<br />
                  KÜÇÜKYALI/İSTANBUL
                </p>
                <p>
                  <strong>Telefon:</strong><br />
                  +90 535 219 83 77
                </p>
                <p>
                  <strong>E-posta:</strong><br />
                  Baran.saran@icloud.com
                </p>
                <div className="mt-6 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6039.905522648828!2d29.117492574576377!3d40.93967504871454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79f5ab0c017%3A0x342769e85c76095f!2zS8O8w6fDvGt5YWzEsSwgTWFsdGVwZS_EsHN0YW5idWw!5e1!3m2!1str!2str!4v1710835000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 