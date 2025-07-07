// src/components/Contact.tsx
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    // Let the form submit naturally to FormSubmit
    alert('Mesajınız gönderiliyor...');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contact"
      className="max-w-xl mx-auto my-20 bg-white/60 dark:bg-black/40 rounded-2xl shadow-2xl p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white/90">İletişim</h2>
      <form 
        action="https://formsubmit.co/akinbas2002@gmail.com" 
        method="POST"
        className="flex flex-col gap-4" 
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="Portfolio İletişim Formu" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://yoursite.com" />
        
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Adınız" 
          required
          className="p-3 rounded-lg bg-white/20 text-gray-900 dark:text-white/90 placeholder-gray-700 dark:placeholder-white/60 focus:bg-white/30 dark:focus:bg-black/40 outline-none"
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-posta" 
          required
          className="p-3 rounded-lg bg-white/20 text-gray-900 dark:text-white/90 placeholder-gray-700 dark:placeholder-white/60 focus:bg-white/30 dark:focus:bg-black/40 outline-none"
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mesajınız" 
          required
          rows={5}
          className="p-3 rounded-lg bg-white/20 text-gray-900 dark:text-white/90 placeholder-gray-700 dark:placeholder-white/60 focus:bg-white/30 dark:focus:bg-black/40 outline-none resize-none"
        />
        <button type="submit" className="bg-[#71f9e4] text-[#113f47] py-3 rounded-lg font-bold hover:bg-[#4ce3c9] transition">Gönder</button>
      </form>
      <div className="flex gap-6 justify-center mt-7">
        <a href="mailto:akinbas2002@gmail.com"><FaEnvelope size={28} className="text-gray-900 dark:text-white/90 hover:text-[#4ce3c9] transition" /></a>
        <a href="https://www.linkedin.com/in/akinbas/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} className="text-gray-900 dark:text-white/90 hover:text-[#4ce3c9] transition" /></a>
      </div>
    </motion.section>
  );
}
