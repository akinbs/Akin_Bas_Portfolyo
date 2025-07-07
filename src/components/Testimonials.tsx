// src/components/Testimonials.tsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Elif K.",
    content: "Gerçekten hızlı ve modern bir site teslim aldık. Her detay özenliydi. Teşekkürler!",
    title: "Startup Founder"
  },
  {
    name: "Ahmet B.",
    content: "Portfolyo şablonu çok şık ve etkileyici, müşterilerimden güzel dönüşler aldım.",
    title: "Freelancer"
  },
  {
    name: "Zeynep Y.",
    content: "Birebir istediğim gibi, hatta daha fazlası oldu. Proje yönetimi ve iletişim de çok iyiydi.",
    title: "Ajans Yöneticisi"
  },
  {
    name: "Murat D.",
    content: "E-ticaret sitemiz için yaptığı çalışma mükemmeldi. Performans ve kullanıcı deneyimi harika!",
    title: "E-ticaret Müdürü"
  },
  {
    name: "Selin A.",
    content: "Responsive tasarım ve animasyonlar çok etkileyici. Müşterilerim sürekli sitemi övüyor.",
    title: "Kurumsal Müşteri"
  },
  {
    name: "Emre T.",
    content: "API entegrasyonu ve backend geliştirme konusunda gerçekten uzman. Zamanında teslim aldık.",
    title: "Yazılım Müdürü"
  },
  {
    name: "Ayşe M.",
    content: "Mobil uyumlu ve hızlı çalışan bir platform geliştirdi. Sonuçlardan çok memnunuz.",
    title: "Dijital Pazarlama Uzmanı"
  },
  {
    name: "Can O.",
    content: "Modern teknolojiler kullanarak hayal ettiğimiz projeyi hayata geçirdi. Profesyonel yaklaşım!",
    title: "Proje Yöneticisi"
  },
    {
    name: "Ali D.",
    content: "Güzel iş ahlakı ve anlayış. Hızlı geri dönüş ve pratik iş ortaklığın için teşekkürler",
    title: "Şirket Sahibi"
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="max-w-6xl mx-auto my-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/90">Müşteri Yorumları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white/60 dark:bg-black/40 rounded-2xl p-6 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}>
            <p className="text-lg italic mb-3 text-gray-700 dark:text-gray-300">"{t.content}"</p>
            <div className="flex gap-3 items-center mt-2">
              <span className="font-bold text-[#4ce3c9]">{t.name}</span>
              <span className="text-gray-600 dark:text-gray-300">| {t.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
