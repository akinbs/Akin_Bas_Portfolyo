// src/components/Projects.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
  status: string;
  details: string;
  mockups: string[];
}

const projects: Project[] = [
  {
    id: 'pharmahan',
    title: "Pharmahan Eczane Pazaryeri",
    desc: "Modern UI, hızlı arama, kolay eczane-kullanıcı etkileşimi.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
    tags: ["React", "TypeScript", "Node.js", "Stripe API"],
    link: "#",
    category: "E-Commerce",
    status: "Live",
    details: "Türkiye'nin ilk eczane pazar yeri! Kullanıcılar modern bir arayüzle eczanelerle kolayca iletişime geçiyor. Arka planda güçlü bir TypeScript API ile Stripe ödeme entegrasyonu mevcut.",
    mockups: [
      "https://images.unsplash.com/photo-1556909114-4f7b1b0d0e6c?w=800&h=600&fit=crop", // Pharmacy dashboard
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop", // Medical products grid
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"  // Medicine search interface
    ],
  },
  {
    id: 'ai-summarizer',
    title: "Akademik AI Metin Özetleme Botu",
    desc: "GPT destekli, makale özetleyen, PDF ve Word entegrasyonlu web app.",
    image: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=800&h=400&fit=crop",
    tags: ["Python", "Flask", "GPT", "OCR"],
    link: "#",
    category: "AI/ML",
    status: "Live",
    details: "Yapay zeka ile akademik metin özetleme. PDF, Word dosyalarını yükle, özetini anında al. Flask backend, GPT desteği, OCR modülü ve kullanıcı dostu arayüz.",
    mockups: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop", // AI interface
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", // Document upload
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&h=600&fit=crop"  // Text analysis
    ],
  },
  {
    id: 'dreamx-portfolio',
    title: "DreamX - Portfolio Template",
    desc: "Ultra modern, dinamik ve animasyonlu portfolyo altyapısı.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    link: "#",
    category: "Template",
    status: "Live",
    details: "Freelancerlar ve ajanslar için tasarlanmış, hem estetik hem işlevsel portfolyo altyapısı. Parallax, glassmorphism, dinamik modüller.",
    mockups: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop", // Modern portfolio
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", // Creative layout
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"  // Designer showcase
    ],
  },
  {
    id: 'real-estate-crm',
    title: "Real Estate Management System",
    desc: "Emlak yönetimi için kapsamlı CRM ve portal sistemi.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=400&fit=crop",
    tags: ["React", "MongoDB", "Express", "Socket.io"],
    link: "#",
    category: "CRM",
    status: "Development",
    details: "Emlak firmalarına özel CRM sistemi. Müşteri takibi, mülk yönetimi, randevu sistemi ve canlı sohbet özelliği. Gerçek zamanlı bildirimler ve detaylı raporlama.",
    mockups: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop", // Real estate dashboard
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", // Property management
      "https://images.unsplash.com/photo-1556909114-4f7b1b0d0e6c?w=800&h=600&fit=crop"  // CRM interface
    ],
  },
  {
    id: 'e-learning-platform',
    title: "E-Learning Platform",
    desc: "İnteraktif online eğitim platformu ve öğrenci yönetim sistemi.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    link: "#",
    category: "Education",
    status: "Live",
    details: "Kapsamlı e-öğrenme platformu. Video konferans, canlı dersler, ödev sistemi, sınav modülü ve ilerleme takibi. Öğretmen ve öğrenci panelleri.",
    mockups: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop", // Online learning
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop", // Student dashboard
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"  // Course interface
    ],
  },
  {
    id: 'fintech-dashboard',
    title: "Fintech Dashboard",
    desc: "Finansal analiz ve yatırım takibi için interaktif dashboard.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    category: "Finance",
    status: "Live",
    details: "Finansal verilerin görselleştirilmesi ve analizi. Gerçek zamanlı borsa verileri, portföy takibi, risk analizi ve otomatik raporlama.",
    mockups: [
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=600&fit=crop", // Financial charts
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Investment tracking
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&h=600&fit=crop"  // Analytics dashboard
    ],
  },
  {
    id: 'social-media-analytics',
    title: "Social Media Analytics Tool",
    desc: "Sosyal medya performans analizi ve içerik planlama aracı.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=400&fit=crop",
    tags: ["React", "Python", "FastAPI", "Redis"],
    link: "#",
    category: "Analytics",
    status: "Beta",
    details: "Çoklu sosyal medya hesaplarının analizi. Engagement takibi, içerik planlaması, hashtag analizi ve rekabet analizi.",
    mockups: [
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop", // Social media dashboard
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop", // Analytics interface
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"  // Engagement metrics
    ],
  },
  {
    id: 'iot-monitor',
    title: "IoT Device Monitor",
    desc: "IoT cihaz yönetimi ve izleme sistemi.",
    image: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&h=400&fit=crop",
    tags: ["React", "MQTT", "InfluxDB", "Docker"],
    link: "#",
    category: "IoT",
    status: "Development",
    details: "IoT cihazlarının merkezi yönetimi. Gerçek zamanlı veri toplama, alarm sistemi, uzaktan kontrol ve grafik raporlama.",
    mockups: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop", // IoT dashboard
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop", // Device monitoring
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"  // Data visualization
    ],
  },
  {
    id: 'blog-cms',
    title: "Modern Blog CMS",
    desc: "Headless CMS ile güçlendirilmiş modern blog platformu.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=400&fit=crop",
    tags: ["Next.js", "Strapi", "GraphQL", "Vercel"],
    link: "#",
    category: "CMS",
    status: "Live",
    details: "Modern blog yazarları için optimize edilmiş CMS. SEO optimizasyonu, çoklu dil desteği, sosyal medya entegrasyonu ve performans odaklı tasarım.",
    mockups: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop", // Blog editor
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7e6?w=800&h=600&fit=crop", // Content management
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"  // Publishing interface
    ],
  },
];

export default function Projects() {
  const [modal, setModal] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [currentMockup, setCurrentMockup] = useState<number>(0);

  const categories = ["All", "E-Commerce", "AI/ML", "Template", "CRM", "Education", "Finance", "Analytics", "IoT", "CMS"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  // Reset mockup index when modal opens
  useEffect(() => {
    if (modal !== null) {
      setCurrentMockup(0);
    }
  }, [modal]);

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto my-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white/90">Proje Kataloğu</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Front-end mühendisliği projelerimde modern teknolojiler kullanarak etkileyici deneyimler yaratıyorum</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === cat
                  ? 'bg-[#71f9e4] text-gray-900 shadow-lg'
                  : 'bg-white/20 dark:bg-black/20 text-gray-700 dark:text-gray-300 hover:bg-[#71f9e4]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((pr, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setModal(i)}
            layout
          >
            <div className="relative overflow-hidden">
              <img src={pr.image} alt={pr.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
                  Concept Design
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#71f9e4]/80 text-gray-900">
                  {pr.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white/90 group-hover:text-[#71f9e4] transition-colors">
                {pr.title}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm line-clamp-2">{pr.desc}</p>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {pr.tags.slice(0, 3).map(t => (
                  <span key={t} className="px-2 py-1 bg-[#71f9e4]/20 dark:bg-[#4ce3c9]/20 rounded text-xs text-gray-800 dark:text-gray-200">
                    {t}
                  </span>
                ))}
                {pr.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">
                    +{pr.tags.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <button className="text-[#71f9e4] hover:text-[#4ce3c9] font-medium text-sm">
                  Detayları Görüntüle →
                </button>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#71f9e4] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Bu kategoride henüz proje bulunmuyor.</p>
        </div>
      )}
      <AnimatePresence>
        {modal !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div 
              className="bg-white dark:bg-[#10142a] rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-auto"
              initial={{ scale: 0.8, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="relative">
                <img src={projects[modal].image} alt={projects[modal].title} className="w-full h-64 object-cover rounded-t-3xl" />
                <button 
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  onClick={() => setModal(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white">
                    Concept Design
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#71f9e4]/90 text-gray-900">
                    {projects[modal].category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/90">{projects[modal].title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{projects[modal].details}</p>
                
                {/* Web Site Mockups Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white/90">Website Görünümleri</h3>
                  
                  {/* Main Mockup Display */}
                  <div className="relative mb-4 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <motion.img 
                      key={currentMockup}
                      src={projects[modal].mockups[currentMockup]} 
                      alt={`${projects[modal].title} mockup ${currentMockup + 1}`}
                      className="w-full h-96 object-cover"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Navigation arrows */}
                    {projects[modal].mockups.length > 1 && (
                      <>
                        <button
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          onClick={() => setCurrentMockup(currentMockup === 0 ? projects[modal].mockups.length - 1 : currentMockup - 1)}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          onClick={() => setCurrentMockup(currentMockup === projects[modal].mockups.length - 1 ? 0 : currentMockup + 1)}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {projects[modal].mockups.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentMockup ? 'bg-[#71f9e4]' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentMockup(index)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Thumbnail navigation */}
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {projects[modal].mockups.map((mockup, index) => (
                      <motion.button
                        key={index}
                        className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentMockup 
                            ? 'border-[#71f9e4] shadow-lg' 
                            : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setCurrentMockup(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img 
                          src={mockup} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white/90">Kullanılan Teknolojiler</h3>
                  <div className="flex gap-2 flex-wrap">
                    {projects[modal].tags.map((tag) => (
                      <span key={tag} className="px-3 py-2 bg-[#71f9e4]/30 dark:bg-[#4ce3c9]/20 rounded-lg text-gray-800 dark:text-gray-200 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#71f9e4] hover:bg-[#4ce3c9] text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors">
                    Canlı Demo
                  </button>
                  <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Kaynak Kod
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
