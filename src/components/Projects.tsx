import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";

interface Project {
  id:         string;
  title:      string;
  image:      string;
  imageFit?:  "cover" | "contain";
  tags:       string[];
  link:       string;
  demoLink?:  string;
  category:   string;
  status:     string;
  mockups:     string[];
  mockupFit?:  "cover" | "contain";
  mockupType?: "phone" | "desktop";
  tr:         { desc: string; details: string; highlights?: string[]; architecture?: string };
  en:         { desc: string; details: string; highlights?: string[]; architecture?: string };
}

const projects: Project[] = [
  {
    id:        "voltora",
    title:     "Voltora Electronics",
    image:     "/voltora/cover.png",
    imageFit:  "contain",
    tags:      ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM", "Lucide React", "Firebase"],
    link:      "https://github.com/akinbs/Voltora",
    category:  "E-Commerce",
    status:    "Live",
    mockups:   [
      "/voltora/01-hero.png",
      "/voltora/03-categories.png",
      "/voltora/04-products.png",
      "/voltora/05-newarrivals.png",
      "/voltora/06-cart.png",
      "/voltora/07-listing.png",
    ],
    mockupFit: "contain",
    tr: {
      desc: "Elektronik parçalar ve geliştirme kartları için tasarlanmış premium e-ticaret frontend'i. React, TypeScript ve Framer Motion ile geliştirilmiş, Firebase entegrasyonuna hazır tam kapsamlı alışveriş arayüzü.",
      details: "Voltora, elektronik parçalar, sensörler, geliştirme kartları ve maker ekipmanlarına yönelik geliştirilmiş premium bir e-ticaret frontend projesidir. Neo Lab Store konseptiyle tasarlanan platform; mühendisler, öğrenciler ve maker topluluğu için temiz, işlevsel ve modern bir alışveriş deneyimi sunar.\n\nReact ve TypeScript kombinasyonu type-safe bir geliştirme ortamı sağlarken, Framer Motion ile sayfa geçişleri ve mikro animasyonlar arayüzü dinamik bir deneyime taşıyor. Ürün keşfinden ödeme akışına kadar modern bir e-ticaret platformunun beklediği tüm frontend akışlarını eksiksiz içermektedir.\n\nFirebase Authentication ve Firestore entegrasyonuna hazır bir mimari üzerine inşa edilmiştir. Backend bağlandığı anda üretime alınabilir duruma gelecek olan Voltora, kapsamlı bir frontend referans proje niteliği taşımaktadır.",
      highlights: [
        "Kategori bazlı ürün keşif sistemi",
        "Gelişmiş filtreleme, arama ve sıralama",
        "Grid / Liste görünüm geçişi",
        "Ürün detay sayfası ve teknik özellik tablosu",
        "Sepet yönetimi ve checkout mock akışı",
        "Wishlist sayfası",
        "Login, register ve forgot password UI",
        "Profil dashboard, siparişler ve ayarlar",
        "Framer Motion sayfa geçişleri ve animasyonlar",
        "Açılır/kapanır sidebar navigasyon",
      ],
    },
    en: {
      desc: "A premium electronics e-commerce frontend built on the Neo Lab Store concept. Full shopping flow from product discovery to checkout, Firebase-ready architecture.",
      details: "Voltora is a premium electronics e-commerce frontend built on the Neo Lab Store concept, targeting engineers, students, and the maker community. It delivers a clean, modern shopping experience covering the full product-to-checkout flow.\n\nReact and TypeScript provide a type-safe foundation, while Framer Motion drives page transitions and micro-interactions. The project includes category browsing, advanced filtering and sorting, product detail pages with spec tables, cart management, wishlist, and a full user account section.\n\nThe architecture is Firebase-ready — Authentication and Firestore integration is in place, making the platform production-deployable the moment the backend is connected.",
      highlights: [
        "Category-based product discovery",
        "Advanced filtering, search and sorting",
        "Grid / List view toggle",
        "Product detail page with spec table",
        "Cart management and mock checkout flow",
        "Wishlist page",
        "Login, register and forgot password UI",
        "Profile dashboard, orders and settings",
        "Framer Motion transitions and micro-animations",
        "Collapsible sidebar navigation",
      ],
    },
  },
  {
    id:        "estateflow",
    title:     "EstateFlow",
    image:     "/estateflow/cover.png",
    imageFit:  "contain",
    tags:      ["React", "TypeScript", "FastAPI", "Python", "Firebase Auth", "Firestore", "Firebase Storage", "Zustand", "Axios", "Leaflet", "Tailwind CSS"],
    link:      "https://github.com/akinbs/EstateFlow",
    category:  "Full-Stack",
    status:    "Live",
    mockups:   [
      "/estateflow/01-hero.png",
      "/estateflow/02-listings.png",
      "/estateflow/03-detail-map.png",
      "/estateflow/04-admin-dashboard.png",
      "/estateflow/05-admin-listings.png",
      "/estateflow/06-admin-new.png",
    ],
    mockupFit: "contain",
    tr: {
      desc: "Satılık ve kiralık emlak ilanlarını harita destekli modern bir arayüzde listeleyen, FastAPI backend ve Firebase altyapısıyla geliştirilmiş full-stack bir emlak platformu.",
      details: "EstateFlow, frontend demo değil gerçek bir ürün mimarisiyle geliştirilmiş full-stack bir emlak platformudur. React frontend, ilan verilerini doğrudan Firestore'dan okumaz; tüm CRUD işlemleri FastAPI üzerinden yönetilir. Kullanıcı Firebase Auth ile giriş yapar, backend Firebase Admin SDK ile token'ı doğrular ve rol kontrolü uygular. Admin işlemleri backend tarafında role guard ile korunur; ilanlar Storage'a yüklenen görselleriyle birlikte FastAPI → Firestore akışıyla kaydedilir.",
      highlights: [
        "Grid / Liste / Harita görünüm modları",
        "Leaflet + OpenStreetMap harita entegrasyonu",
        "Gelişmiş filtreleme ve query param senkronizasyonu",
        "İlan favorileme ve karşılaştırma",
        "Firebase Auth + FastAPI token doğrulama",
        "Rol tabanlı erişim kontrolü (RBAC)",
        "Firebase Storage görsel yükleme akışı",
        "Soft delete ve ilan durum yönetimi",
        "Lead / müşteri talebi takibi",
        "Admin dashboard istatistikleri",
      ],
      architecture: "React → FastAPI → Firestore\nFirebase Auth token → Admin SDK doğrulama → Role Guard\nAdmin: Storage upload → URL + metadata → FastAPI → Firestore",
    },
    en: {
      desc: "A full-stack real estate platform built with React, FastAPI, and Firebase — featuring map-based listing, role-based admin panel, and secure token authentication.",
      details: "EstateFlow is a full-stack real estate platform built with a real product architecture, not a frontend demo. The React frontend never reads or writes property data directly to Firestore — all CRUD operations go through FastAPI. Users authenticate via Firebase Auth; the backend verifies tokens with Firebase Admin SDK and enforces role-based access. Admin operations are protected by a backend role guard. Property images upload to Firebase Storage; the download URL and metadata are written to Firestore through FastAPI.",
      highlights: [
        "Grid / List / Map view modes",
        "Leaflet + OpenStreetMap map integration",
        "Advanced filtering with query param sync",
        "Property favorites and comparison",
        "Firebase Auth + FastAPI token verification",
        "Role-based access control (RBAC)",
        "Firebase Storage image upload flow",
        "Soft delete and listing status management",
        "Lead / inquiry tracking",
        "Admin dashboard analytics",
      ],
      architecture: "React → FastAPI → Firestore\nFirebase Auth token → Admin SDK verification → Role Guard\nAdmin: Storage upload → URL + metadata → FastAPI → Firestore",
    },
  },
  {
    id:          "paczone",
    title:       "PacZone",
    image:       "/paczone/cover.png",
    imageFit:    "contain",
    tags:        ["Flutter", "Dart", "FastAPI", "Python", "OSMnx", "PostGIS", "MapLibre", "Firebase"],
    link:        "https://github.com/akinbs/PacZone",
    category:    "Mobile Game",
    status:      "Prototype",
    mockups:     [
      "/paczone/01-splash.png",
      "/paczone/02-onboard1.png",
      "/paczone/03-onboard2.png",
      "/paczone/04-onboard3.png",
      "/paczone/05-character.png",
      "/paczone/06-map.png",
      "/paczone/07-game.png",
    ],
    mockupType:  "phone",
    tr: {
      desc: "Gerçek konum tabanlı, OpenStreetMap üzerinde çalışan arcade tarzı mobil oyun. Sokaklar oyun koridoruna, kavşaklar stratejik noktalara dönüşüyor.",
      details: "PacZone, gerçek dünya coğrafyasını arcade oyun mecrasına taşıyan bir mobil oyun prototipidir. Uygulama çevresindeki yaya yolları OSMnx ile analiz edilerek oyun haritasına dönüştürülür; oyuncu kendi konumunu kontrol ederek coin toplar ve hayaletlerden kaçar.\n\nFlutter ile geliştirilen çapraz platform uygulama; özelleştirilebilir avatar sistemi, onboarding akışı, harita tabanlı oyun modu ve Chomp Mode ekranlarını içerir. Backend tarafında FastAPI + OSMnx sokak grafı analizi yapar, PostGIS mekansal sorguları işler.\n\nProje bir prototip aşamasında olup gerçek dünya konum verisini oyuna entegre eden teknik altyapının kurulmasına odaklanmaktadır.",
      highlights: [
        "Gerçek sokak haritası → oyun koridoru dönüşümü",
        "OSMnx ile yaya yolu analizi",
        "PostGIS mekansal sorgu altyapısı",
        "Özelleştirilebilir avatar ve aksesuar sistemi",
        "Onboarding akışı",
        "Harita tabanlı konum takibi",
        "Chomp Mode oyun ekranı",
        "Flutter çapraz platform mimari",
      ],
    },
    en: {
      desc: "A real location-based arcade mobile game running on OpenStreetMap. Streets become game corridors, intersections become strategic points.",
      details: "PacZone is a mobile game prototype that brings real-world geography into the arcade space. Nearby pedestrian paths are analyzed via OSMnx and converted into a live game map — the player controls their avatar using their real location, collecting coins and avoiding ghosts.\n\nThe Flutter app includes a customizable avatar system, onboarding flow, map-based gameplay, and a Chomp Mode screen. On the backend, FastAPI + OSMnx handles street graph analysis and PostGIS processes spatial queries.\n\nThe project is in prototype stage, focused on establishing the technical foundation for integrating real-world location data into gameplay.",
      highlights: [
        "Real street map → game corridor conversion",
        "OSMnx pedestrian path analysis",
        "PostGIS spatial query infrastructure",
        "Customizable avatar and accessory system",
        "Onboarding flow",
        "Map-based live location tracking",
        "Chomp Mode game screen",
        "Flutter cross-platform architecture",
      ],
    },
  },
  {
    id:        "parkinson-detection",
    title:     "Parkinson Detection",
    image:     "/parkinson/cover.png",
    imageFit:  "contain",
    tags:      ["Python", "FastAPI", "Scikit-learn", "React", "TypeScript", "Vite", "Tailwind CSS", "pandas", "NumPy", "joblib", "Gini Index", "REST API"],
    link:      "https://github.com/akinbs/Parkinson-Detection-with-Gini-index",
    category:  "AI / ML",
    status:    "Live",
    mockups:   [
      "https://github.com/user-attachments/assets/572e7eb4-ae9e-4d74-9682-518764c650ad",
      "https://github.com/user-attachments/assets/4e81fe53-8c9e-4f05-8b5d-3703e60dc457",
      "https://github.com/user-attachments/assets/25e5eb27-9fdb-48d5-865f-aa0b1acf5897",
      "https://github.com/user-attachments/assets/c2e037fe-1978-4a7e-b3af-5e51ea48227e",
    ],
    mockupFit: "contain",
    tr: {
      desc: "Parkinson hastalığı riskini ses/biyomedikal özellikler üzerinden tahmin eden, CSV/Excel yükleme destekli, FastAPI + React tabanlı uçtan uca web uygulaması.",
      details: "Parkinson Detection with Gini Index, Parkinson hastalığı riskini ses/veri seti özellikleri üzerinden tahmin etmeye yönelik geliştirilmiş full-stack bir makine öğrenmesi projesidir. Gini Index tabanlı sınıflandırma yaklaşımı kullanılarak hasta verileri analiz edilir ve her kayıt için \"Parkinson\" veya \"Healthy\" tahmini üretilir.\n\nBu proje, yalnızca bir model denemesi olarak değil, kullanıcıların CSV veya Excel formatındaki veri setlerini yükleyip tahmin sonuçlarını arayüz üzerinden inceleyebileceği uçtan uca bir web uygulaması olarak tasarlanmıştır. Sistem dosyadaki gerekli biyomedikal/ses özelliklerini kontrol eder, modeli çalıştırır ve hasta bazlı tahmin sonuçlarını olasılık değeriyle birlikte listeler.\n\nFrontend tarafında React, TypeScript, Vite ve Tailwind CSS kullanılarak sade, modern bir tahmin paneli geliştirilmiştir. Backend tarafında Python ve FastAPI ile tahmin servisi oluşturulmuş; CSV, XLSX ve XLS formatlarını kabul eden API, feature doğrulama ve veri temizleme süreçlerini yürütür.",
      highlights: [
        "CSV ve Excel dosyası yükleme desteği",
        "Parkinson risk tahmini için eğitilmiş model entegrasyonu",
        "Hasta bazlı tahmin sonucu gösterimi",
        "Parkinson olasılığını yüzde formatında görüntüleme",
        "\"Parkinson\", \"Healthy\" ve \"Tümü\" filtreleriyle sonuç ayırma",
        "Gerçek etiket varsa karşılaştırmalı analiz imkânı",
        "FastAPI tabanlı backend mimarisi",
        "Veri doğrulama ve eksik sütun kontrolü",
      ],
      architecture: "CSV / Excel upload → FastAPI endpoint\nFeature validation & preprocessing → Gini Index model\nPrediction: label + probability → React sonuç tablosu",
    },
    en: {
      desc: "End-to-end ML web app for Parkinson's risk prediction from voice/biomedical features — CSV/Excel upload, FastAPI backend, React + TypeScript frontend.",
      details: "Parkinson Detection with Gini Index is a full-stack machine learning project for predicting Parkinson's disease risk from voice and biomedical dataset features. A Gini Index-based classification model analyzes patient records and produces a \"Parkinson\" or \"Healthy\" prediction for each entry.\n\nThe project goes beyond a notebook experiment — users can upload CSV or Excel datasets, and the system validates the required biomedical/voice feature columns, runs the model, and lists patient-level predictions alongside probability scores.\n\nThe frontend is built with React, TypeScript, Vite, and Tailwind CSS, providing a clean prediction dashboard with file upload, result filtering, and a summary panel. The FastAPI backend accepts CSV, XLSX, and XLS files, handles feature validation, data cleaning, and serves the trained model via a REST endpoint.",
      highlights: [
        "CSV and Excel file upload support",
        "Trained Gini Index model integration",
        "Per-patient prediction result display",
        "Parkinson probability shown as percentage",
        "Filter results by Parkinson / Healthy / All",
        "Comparative analysis when ground-truth labels are present",
        "FastAPI-based backend architecture",
        "Feature validation and missing column detection",
      ],
      architecture: "CSV / Excel upload → FastAPI endpoint\nFeature validation & preprocessing → Gini Index model\nPrediction: label + probability → React result table",
    },
  },
  {
    id:        "darc-ui",
    title:     "DARC UI Framework",
    image:     "/darc-ui/cover.png",
    imageFit:  "contain",
    tags:      ["React", "TypeScript", "Vite", "pnpm Workspaces", "tsup", "ESM / CJS", "CSS-in-JS", "ESLint"],
    link:      "https://github.com/akinbs/DARC-UI-FrameWork",
    category:  "UI Framework",
    status:    "Development",
    mockups:   [
      "/darc-ui/01-intro.png",
      "/darc-ui/02-playground.png",
      "/darc-ui/03-grid.png",
      "/darc-ui/04-spacer.png",
      "/darc-ui/05-show-hide.png",
      "/darc-ui/06-autogrid.png",
    ],
    mockupFit: "contain",
    tr: {
      desc: "React uygulamalarında tekrar tekrar yazılan layout yapılarını standartlaştırmak için geliştirilmiş, primitive-first yaklaşımı benimseyen modern bir responsive layout framework'ü.",
      details: "DARC UI Framework, React uygulamalarında tekrar tekrar yazılan layout yapılarını standartlaştırmak için geliştirilmiş, primitive-first yaklaşımı benimseyen modern bir responsive layout framework'üdür. Proje; sayfa container'ları, grid sistemleri, dikey ve yatay hizalama yapıları, breakpoint tabanlı görünürlük kontrolü, sidebar düzenleri ve reusable page shell yapıları gibi temel arayüz mimarisi ihtiyaçlarını merkezi ve ölçeklenebilir bir sistem altında toplamayı amaçlar.\n\nGeleneksel UI kütüphanelerinden farklı olarak DARC UI, görsel olarak hazır butonlar veya kartlar sunmak yerine, uygulamanın iskeletini oluşturan yapısal bileşenlere odaklanır. Bu sayede geliştiriciler her projede aynı layout problemlerini yeniden çözmek zorunda kalmadan daha tutarlı, sürdürülebilir ve responsive arayüzler oluşturabilir.\n\nProje monorepo mimarisiyle yapılandırılmıştır. packages/darc-layout altında framework'ün ana layout paketi, apps/darc-playground altında ise bileşenlerin canlı olarak test edilebildiği playground uygulaması yer alır. Bu yapı, framework geliştirme süreci ile demo/dokümantasyon deneyimini birbirinden ayırarak daha düzenli ve genişletilebilir bir geliştirme ortamı sağlar.\n\nFramework'ün merkezinde breakpoint tabanlı responsive değer çözümleme sistemi bulunur. base, sm, md, lg, xl ve 2xl breakpoint değerlerini kullanan yapı, component prop'larının ekran genişliğine göre davranmasını sağlar. useBreakpoint hook'u ile mevcut ekran genişliği takip edilir; Container, Grid, Stack ve visibility bileşenleri aynı merkezi breakpoint mantığı üzerinden çalışır.",
      highlights: [
        "Primitive-first layout mimarisi",
        "Breakpoint tabanlı responsive değer çözümleme",
        "Type-safe component API yapısı",
        "Container, Stack, Inline, Spacer ve Center bileşenleri",
        "AutoGrid ve 12-column Grid desteği",
        "Show / Hide / Only ile görünürlük kontrolü",
        "SidebarLayout ile responsive dashboard yapısı",
        "PageShell ile hazır sayfa iskeleti",
        "Playground uygulaması ile canlı bileşen testi",
        "ESM / CJS build ve TypeScript declaration desteği",
      ],
      architecture: "packages/darc-layout  →  @darc/layout (ESM + CJS + .d.ts)\napps/darc-playground  →  Vite dev server / canlı test\npnpm Workspaces  →  tsup build pipeline\nuseBreakpoint hook  →  runtime breakpoint yönetimi",
    },
    en: {
      desc: "A modern, primitive-first responsive layout framework for React — standardizing layout patterns like grids, sidebars, visibility control and page shells across applications.",
      details: "DARC UI Framework is a modern responsive layout framework for React built on a primitive-first philosophy. It standardizes recurring layout patterns — page containers, grid systems, alignment structures, breakpoint-based visibility control, sidebar layouts, and reusable page shells — under a single, scalable system.\n\nUnlike traditional UI libraries that provide visual components like buttons or cards, DARC UI focuses exclusively on structural components that form the skeleton of an application. Developers can stop re-solving the same layout problems in every project and instead build more consistent, maintainable, and responsive UIs from day one.\n\nThe project is structured as a monorepo. The core layout package lives under packages/darc-layout, while apps/darc-playground provides a live environment for testing and documenting each component. This separation keeps framework development cleanly decoupled from the demo experience.\n\nAt the heart of the framework is a breakpoint-based responsive value resolution system. Using base, sm, md, lg, xl, and 2xl breakpoints, component props can accept either a single value or a responsive map. The useBreakpoint hook tracks the current screen width at runtime, and all layout components — Container, Grid, Stack, and visibility components — share the same central breakpoint logic.",
      highlights: [
        "Primitive-first layout architecture",
        "Breakpoint-based responsive value resolution",
        "Type-safe component API",
        "Container, Stack, Inline, Spacer and Center components",
        "AutoGrid and 12-column Grid support",
        "Show / Hide / Only for visibility control",
        "SidebarLayout for responsive dashboard layouts",
        "PageShell for ready-made page scaffolding",
        "Playground app for live component testing",
        "ESM / CJS build with TypeScript declarations",
      ],
      architecture: "packages/darc-layout  →  @darc/layout (ESM + CJS + .d.ts)\napps/darc-playground  →  Vite dev server / live testing\npnpm Workspaces  →  tsup build pipeline\nuseBreakpoint hook  →  runtime breakpoint resolution",
    },
  },
  {
    id:          "innerhue",
    title:       "InnerHue",
    image:       "/innerhue/cover.png",
    imageFit:    "cover",
    tags:        ["Flutter", "Dart", "Mobile"],
    link:        "https://github.com/akinbs/InnerHue",
    category:    "Mobile App",
    status:      "Development",
    mockups:     [
      "/innerhue/01-splash.png",
      "/innerhue/02-welcome.png",
      "/innerhue/03-name.png",
      "/innerhue/04-birthdate.png",
      "/innerhue/05-nationality.png",
      "/innerhue/06-story-intro.png",
      "/innerhue/07-story-q1.png",
      "/innerhue/08-story-q10.png",
      "/innerhue/09-story-q11.png",
      "/innerhue/10-result-aura.png",
      "/innerhue/11-result-layers.png",
      "/innerhue/12-result-detail.png",
      "/innerhue/13-result-calc.png",
    ],
    mockupType:  "phone",
    tr: {
      desc: "İsim, burç, uyruk ve 15 sahneli hikaye seçimlerini birleştirerek sana özgü bir RGB aura spektrumu üreten deneysel Flutter mobil uygulaması.",
      details: "InnerHue, seni klinik değil sembolik bir perspektifle tanımlayan deneysel bir Flutter mobil uygulamasıdır. İsmin, doğum tarihin, uyruğun ve 15 sahneli bir anlatı yolculuğundaki seçimlerin; RGB renk uzayında birleşerek sana özgü bir spektrum üretir.\n\nHer girdi bağımsız bir 'katman' olarak işlenir. İsim katmanı harf skorları, sesli/sessiz oranı ve Türkçe karakter tespiti ile RGB delta üretir. Burç katmanı element, modalite, polarite ve kavşak gün tespitine göre yön ekler. Uyruk katmanı seçilen ülkenin bayrak renklerinden sembolik bir imza çıkarır. Hikaye katmanı ise 15 sahnelik anlatı içindeki seçimleri beş eksende — aktivasyon, zemin, yansıma, açıklık, eşik — analiz ederek en belirleyici delta'yı hesaplar.\n\nTüm katman delta'ları merkezi bir algoritmayla birleştirilir ve final spektrum üretilir. Sonuç; spektrum adı, baskın kanal ve yoğunluk etiketleri, trait tag'leri ve paylaşılabilir bir renk kartı ile sunulur. Teknik şeffaflık modu her katmanın hesaplama detaylarını kullanıcıya açar.",
      highlights: [
        "İsim katmanı: harf skoru, sesli/sessiz oranı, uzunluk analizi",
        "Burç katmanı: element, modalite, polarite ve kavşak gün tespiti",
        "Uyruk katmanı: bayrak rengi sembolik imzası",
        "15 sahneli hikaye katmanı (5 eksen analizi)",
        "Tüm katmanların RGB delta birleşimi ile final spektrum",
        "Aura ismi ve personality trait tag üretimi",
        "Paylaşılabilir spektrum kartı",
        "Teknik şeffaflık modu (katman bazlı hesaplama detayı)",
      ],
    },
    en: {
      desc: "An experimental Flutter mobile app that merges name, zodiac, nationality, and 15-scene story choices into a unique RGB aura spectrum.",
      details: "InnerHue is an experimental Flutter mobile app that defines you through a symbolic, not clinical, lens. Your name, birth date, nationality, and choices across a 15-scene narrative journey combine in the RGB color space to produce a spectrum that is uniquely yours.\n\nEach input is processed as an independent layer. The name layer generates RGB deltas from letter scores, vowel/consonant ratio, and Turkish character detection. The zodiac layer adds directional weight based on element, modality, polarity, and cusp-day detection. The nationality layer extracts a symbolic color signature from the flag colors of the selected country. The story layer analyzes 15 narrative scene choices across five axes — activation, grounding, reflection, openness, and threshold — and calculates the dominant delta.\n\nAll layer deltas are merged through a central algorithm to produce the final spectrum. The result is presented with a spectrum name, dominant channel and intensity tags, personality trait tags, and a shareable color card. A technical transparency mode exposes the per-layer calculation detail to the user.",
      highlights: [
        "Name layer: letter scores, vowel/consonant ratio, length analysis",
        "Zodiac layer: element, modality, polarity, cusp-day detection",
        "Nationality layer: symbolic flag color signature",
        "15-scene story layer with 5-axis analysis",
        "Final spectrum from combined RGB deltas of all layers",
        "Aura name and personality trait generation",
        "Shareable spectrum card",
        "Technical transparency mode (per-layer calculation detail)",
      ],
    },
  },
  {
    id:        "travella",
    title:     "Travella",
    image:     "/travella/cover.jpg",
    imageFit:  "contain",
    tags:      ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore", "Firebase Storage", "Google Maps Flutter", "Geolocator", "Provider", "Flutter Rating Bar", "URL Launcher"],
    link:      "https://github.com/akinbs/travella",
    category:  "Mobile App",
    status:    "Development",
    mockups:   [
      "/travella/01-screenshot.png",
      "/travella/02-screenshot.png",
      "/travella/03-screenshot.png",
      "/travella/04-screenshot.png",
    ],
    mockupType: "phone",
    tr: {
      desc:    "Yapay zeka destekli kişiselleştirilmiş tatil rotaları oluşturan, Google Maps entegrasyonlu mobil turizm rehberi uygulaması.",
      details: "Travella, kullanıcıların tatil ve gezi planlama sürecini daha kolay, kişisel ve keşif odaklı hale getirmek için geliştirilmiş yapay zeka destekli bir mobil turizm rehberi uygulamasıdır. Uygulama; kullanıcının ilgi alanlarına, gezmek istediği turizm türlerine ve konum bilgisine göre kişiselleştirilmiş tatil rotaları oluşturmayı hedefler.\n\nProje; doğa turizmi, tarihî alanlar, yaylalar, plajlar ve inanç turizmi gibi farklı gezi kategorilerini tek bir mobil deneyimde birleştirir. Kullanıcılar turistik yerleri keşfedebilir, detaylı bilgi sayfalarını inceleyebilir, fotoğraf galerilerine göz atabilir, yorum ve puanlama yapabilir, favori noktalarını belirleyebilir ve seçilen lokasyonları harita üzerinde görüntüleyebilir.\n\nFlutter ile geliştirilmiş uygulama; Firebase Authentication, Firestore/Storage altyapısı, Google Maps entegrasyonu, kullanıcı yorumları, puanlama sistemi ve rota kategorileri gibi modern mobil özellikler içermektedir.",
      highlights: [
        "Yapay zeka destekli kişiselleştirilmiş tatil rotası oluşturma",
        "Google Maps entegrasyonu ile konum ve yol tarifi desteği",
        "Mekan detay sayfaları, açıklamalar ve fotoğraf galerileri",
        "Kullanıcı puanlama ve yorum sistemi",
        "Favori noktalar ve 'Buraya Gittim' etkileşimi",
        "Doğa, tarih, yayla, deniz ve inanç turizmi kategorileri",
        "Firebase Authentication ile kullanıcı oturum yönetimi",
        "Kullanıcı konumunu harita üzerinde görüntüleme",
      ],
    },
    en: {
      desc:    "AI-powered mobile tourism guide app that generates personalized travel routes with Google Maps integration.",
      details: "Travella is an AI-powered mobile tourism guide designed to make holiday and travel planning easier, more personal, and discovery-focused. The app generates personalized travel routes based on the user's interests, preferred tourism types, and location data.\n\nThe project brings together different travel categories — nature tourism, historical sites, mountain plateaus, beaches, and religious tourism — into a single mobile experience. Users can discover tourist spots, browse detailed info pages, explore photo galleries, rate and review places, save favorites, and view selected locations on the map.\n\nBuilt with Flutter, the app includes Firebase Authentication, Firestore/Storage infrastructure, Google Maps integration, location services, user reviews, a rating system, and route categories.",
      highlights: [
        "AI-powered personalized travel route generation",
        "Google Maps integration with directions support",
        "Venue detail pages, descriptions, and photo galleries",
        "User rating and review system",
        "Favorites and 'Been Here' interaction",
        "Nature, history, plateau, beach & religious tourism categories",
        "Firebase Authentication for user session management",
        "Live user location display on map",
      ],
    },
  },
];

const statusStyle: Record<string, string> = {
  Live:        "text-emerald-400 border-emerald-400/30",
  Development: "text-amber-400  border-amber-400/30",
  Prototype:   "text-purple-400 border-purple-400/30",
  Beta:        "text-blue-400   border-blue-400/30",
};

const categories = ["All", "E-Commerce", "Full-Stack", "Mobile Game", "AI / ML", "UI Framework", "Mobile App"];

export default function Projects() {
  const { lang, t } = useLang();
  const [modal,  setModal]  = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [mockup, setMockup] = useState(0);

  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  useEffect(() => { if (modal !== null) setMockup(0); }, [modal]);
  useEffect(() => {
    document.body.style.overflow = modal !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
      if (e.key === "ArrowRight" && modal !== null) setModal(m => m! < projects.length - 1 ? m! + 1 : 0);
      if (e.key === "ArrowLeft"  && modal !== null) setModal(m => m! > 0 ? m! - 1 : projects.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);
  const STACK_BASE_TOP = 88;
  const STACK_OFFSET = 16;

  const getStackTop = (index: number) => STACK_BASE_TOP + index * STACK_OFFSET;

  const stackBottomSpace =
    filtered.length > 0
      ? "clamp(140px, 28vh, 320px)"
      : "0px";

  const currentProject = modal !== null ? projects[modal] : null;

  return (
    <section id="projects" className="bg-black">

      <div className="py-28 px-6">
        <div className="max-w-[1078px] mx-auto">
          <motion.div
            className="flex items-baseline gap-5 mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">02</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-2">{t.projects.heading}</h2>
              <p className="text-white/38 font-light text-sm">{t.projects.subheading}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-pill text-sm font-light transition-all duration-200 border ${
                  filter === cat
                    ? "border-white/55 text-white bg-white/8"
                    : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/70"
                }`}
              >
                {cat === "All" ? t.projects.allLabel : cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="px-6">
        <div
          className="max-w-[1078px] mx-auto relative"
          style={{ paddingBottom: stackBottomSpace }}
        >

          {filtered.length === 0 && (
            <p className="text-center py-20 text-white/28 font-light text-sm">
              {t.projects.empty}
            </p>
          )}

          {filtered.map((pr, i) => (
            <div
              key={pr.id}
              className="sticky mb-6"
              style={{
                top: `${getStackTop(i)}px`,
                zIndex: 10 + i,
              }}
            >
            <article
              className="h-[620px] md:h-[480px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c0c] cursor-pointer hover:border-white/[0.14] transition-colors duration-200"
              onClick={() => setModal(projects.indexOf(pr))}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                  <div className="relative h-56 md:h-full overflow-hidden">
                    <img
                      src={pr.image}
                      alt={pr.title}
                      loading="lazy"
                      className={pr.imageFit === "contain"
                        ? "absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto min-w-full transition-transform duration-700 hover:scale-[1.03]"
                        : "w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      }
                      style={{ filter: "grayscale(15%)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0c0c0c]/50" />

                    <div className="absolute left-5 top-5 w-9 h-9 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm flex items-center justify-center text-[11px] font-light text-white/60 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                    <div>
                      <div className="flex items-center gap-2.5 mb-6">
                        <span className="px-3 py-1 rounded-pill border border-white/12 text-[11px] font-light text-white/45">
                          {pr.category}
                        </span>
                        <span className={`px-3 py-1 rounded-pill border text-[11px] font-light ${statusStyle[pr.status] ?? "text-white/40 border-white/15"}`}>
                          {pr.status}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4 leading-tight">
                        {pr.title}
                      </h3>

                      <p
                        className="text-white/40 font-light leading-relaxed text-sm md:text-base overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {pr[lang].desc}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="flex flex-wrap gap-2 mb-7">
                        {pr.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-pill border border-white/10 text-[11px] text-white/38 font-light">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        className="btn-ghost text-sm py-2.5 px-6"
                        onClick={e => { e.stopPropagation(); setModal(projects.indexOf(pr)); }}
                      >
                        {t.projects.viewDetails}
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            </div>
          ))}
          
        </div>
      </div>

      <AnimatePresence>
        {modal !== null && currentProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: "rgba(4,4,4,0.97)", backdropFilter: "blur(32px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              className="flex flex-col w-full h-full"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              exit={{    y: 48, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >

              <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/[0.05] flex-shrink-0">

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-white/20 font-light tabular-nums tracking-[0.2em]">
                    {String(modal + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}
                  </span>
                  <div className="w-px h-3 bg-white/12" />
                  <span className="text-[11px] font-light text-white/35 tracking-wide">{currentProject.category}</span>
                </div>

                <span className="hidden md:block text-sm font-light text-white/55 tracking-tight">
                  {currentProject.title}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setModal(modal > 0 ? modal - 1 : projects.length - 1)}
                    className="w-8 h-8 rounded-full border border-white/10 text-white/40 flex items-center justify-center hover:text-white hover:border-white/28 transition-all"
                    aria-label="Önceki"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button
                    onClick={() => setModal(modal < projects.length - 1 ? modal + 1 : 0)}
                    className="w-8 h-8 rounded-full border border-white/10 text-white/40 flex items-center justify-center hover:text-white hover:border-white/28 transition-all"
                    aria-label="Sonraki"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  <button
                    onClick={() => setModal(null)}
                    className="w-8 h-8 rounded-full border border-white/10 text-white/40 flex items-center justify-center hover:text-white hover:border-white/28 transition-all"
                    aria-label="Kapat"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

                <div className={`relative md:w-[54%] flex-shrink-0 h-[38vh] md:h-auto overflow-hidden ${
                  currentProject.mockupType === "phone"
                    ? "bg-[#07071a]"
                    : currentProject.mockupFit === "contain" ? "bg-[#f0f0f0]" : "bg-[#030303]"
                }`}>

                  {currentProject.mockupType === "phone" ? (
                    /* ── Phone gallery ── */
                    <div className="absolute inset-0 pb-14 flex items-center justify-center overflow-hidden">
                      {/* Main phone — tek, merkeze hizalı */}
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`phone-${modal}-${mockup}`}
                          src={currentProject.mockups[mockup]}
                          className="h-full w-auto object-contain flex-shrink-0 z-10 rounded-[2rem]"
                          style={{ filter: "drop-shadow(0 12px 48px rgba(100,40,220,0.5))" }}
                          initial={{ opacity: 0, scale: 0.93 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{    opacity: 0, scale: 0.93 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* ── Desktop image ── */
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${modal}-${mockup}`}
                        src={currentProject.mockups[mockup]}
                        alt={currentProject.title}
                        className={`absolute inset-0 w-full h-full ${currentProject.mockupFit === "contain" ? "object-contain" : "object-cover"}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1   }}
                        exit={{    opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.38, ease: "easeOut" }}
                      />
                    </AnimatePresence>
                  )}

                  {/* Gradients — desktop only */}
                  {currentProject.mockupType !== "phone" && (
                    <>
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to right, transparent 70%, rgba(4,4,4,0.5))" }} />
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(4,4,4,0.7) 0%, transparent 40%)" }} />
                    </>
                  )}

                  {/* Nav arrows */}
                  {currentProject.mockups.length > 1 && (
                    <>
                      <button
                        onClick={() => setMockup(m => m === 0 ? currentProject.mockups.length - 1 : m - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all"
                        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button
                        onClick={() => setMockup(m => m === currentProject.mockups.length - 1 ? 0 : m + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all"
                        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </>
                  )}

                  {/* Thumbnail strip */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 px-4">
                    {currentProject.mockups.map((src, idx) => {
                      const isPhone = currentProject.mockupType === "phone";
                      return (
                        <button
                          key={idx}
                          onClick={() => setMockup(idx)}
                          className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-250"
                          style={{
                            width:  isPhone ? 22 : 52,
                            height: isPhone ? 38 : 36,
                            border: `1.5px solid ${idx === mockup ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.08)"}`,
                            opacity: idx === mockup ? 1 : 0.32,
                            transform: idx === mockup ? "scale(1)" : "scale(0.93)",
                          }}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="flex-1 overflow-y-auto flex flex-col"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex-1 flex flex-col px-8 md:px-12 pt-10 pb-0">

                    <span
                      className="font-light text-white select-none tabular-nums leading-[0.85] mb-0 pointer-events-none"
                      style={{ fontSize: "clamp(72px, 9vw, 110px)", opacity: 0.032 }}
                    >
                      {String(modal + 1).padStart(2, "0")}
                    </span>

                    <div className="-mt-4 mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-pill border text-[10px] font-light ${statusStyle[currentProject.status] ?? "text-white/40 border-white/15"}`}>
                          {currentProject.status}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-light text-white tracking-tight leading-[1.05]">
                        {currentProject.title}
                      </h2>
                    </div>

                    <p className="text-base text-white/55 font-light leading-relaxed mb-8">
                      {currentProject[lang].desc}
                    </p>

                    <div className="h-px bg-white/[0.05] mb-8" />

                    <div className="mb-8">
                      <p className="text-[10px] text-white/20 font-light tracking-[0.32em] uppercase mb-4">
                        {lang === "tr" ? "Proje Detayı" : "Project Detail"}
                      </p>
                      <div className="flex flex-col gap-4">
                        {currentProject[lang].details.split("\n\n").map((para, i) => (
                          <p key={i} className="text-sm text-white/38 font-light leading-[1.9]">{para}</p>
                        ))}
                      </div>
                    </div>

                    {currentProject[lang].highlights && (
                      <div className="mb-8">
                        <p className="text-[10px] text-white/20 font-light tracking-[0.32em] uppercase mb-4">
                          {lang === "tr" ? "Öne Çıkan Özellikler" : "Key Features"}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {currentProject[lang].highlights!.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <span className="mt-[5px] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                              <span className="text-[12px] text-white/42 font-light leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentProject[lang].architecture && (
                      <div className="mb-8">
                        <p className="text-[10px] text-white/20 font-light tracking-[0.32em] uppercase mb-4">
                          {lang === "tr" ? "Mimari Akış" : "Architecture"}
                        </p>
                        <div className="px-4 py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.025]">
                          <pre className="text-[11px] text-white/32 font-mono leading-relaxed whitespace-pre-wrap tracking-wide">
                            {currentProject[lang].architecture}
                          </pre>
                        </div>
                      </div>
                    )}

                    <div className="mb-10">
                      <p className="text-[10px] text-white/20 font-light tracking-[0.32em] uppercase mb-4">
                        {t.projects.techLabel}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-pill border border-white/[0.09] text-[11px] text-white/42 font-light hover:border-white/20 hover:text-white/65 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1" />
                  </div>

                  <div className="px-8 md:px-12 pb-10 flex-shrink-0">
                    <div className="h-px bg-white/[0.05] mb-6" />
                    <div className="flex gap-3">
                      {currentProject.demoLink && (
                        <a href={currentProject.demoLink} target="_blank" rel="noopener noreferrer"
                          className="flex-1 btn-solid py-3.5 text-sm text-center">
                          {t.projects.liveDemo}
                        </a>
                      )}
                      <a href={currentProject.link} target="_blank" rel="noopener noreferrer"
                        className="flex-1 btn-ghost py-3.5 text-sm justify-center">
                        {t.projects.github}
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
