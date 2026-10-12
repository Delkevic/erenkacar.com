import { siteConfig } from "@/config/site";
import { guitarSenseCaseStudy } from "@/data/case-study";
import { experience } from "@/data/experience";
import { gradeWatcherCaseStudy } from "@/data/grade-watcher";
import { guitarSenseImages } from "@/data/guitarsense-images";
import { nexoraArchitecture } from "@/data/nexora-architecture";
import { nexoraImages } from "@/data/nexora-images";
import { featuredProject, selectedProjects, otherWork } from "@/data/projects";
import { toolkit } from "@/data/toolkit";
import { routeRegistry } from "@/i18n/routes";
import type { DictionaryFor } from "@/i18n/schema";

// Reviewed modules retain fixed identities, technologies and image properties.
// Every prose value below is authored explicitly for the Turkish dictionary.
const localizedGuitarSenseImages = {
  library: {
    src: guitarSenseImages.library.src,
    width: guitarSenseImages.library.width,
    height: guitarSenseImages.library.height,
    alt: "Kaydedilmiş pratik projelerini gösteren GuitarSense kütüphanesi",
    caption: null,
    placement: guitarSenseImages.library.placement,
    frame: guitarSenseImages.library.frame,
    replaceBeforeLaunch: guitarSenseImages.library.replaceBeforeLaunch,
  },
  practiceView: {
    src: guitarSenseImages.practiceView.src,
    width: guitarSenseImages.practiceView.width,
    height: guitarSenseImages.practiceView.height,
    alt: "Tablatür, oynatma kontrolleri ve pratik geri bildirimi içeren GuitarSense pratik ekranı",
    caption: null,
    placement: guitarSenseImages.practiceView.placement,
    frame: guitarSenseImages.practiceView.frame,
    replaceBeforeLaunch: guitarSenseImages.practiceView.replaceBeforeLaunch,
  },
  presetEditor: {
    src: guitarSenseImages.presetEditor.src,
    width: guitarSenseImages.presetEditor.width,
    height: guitarSenseImages.presetEditor.height,
    alt: "Gitar tonu ve efekt kontrollerini gösteren GuitarSense preset düzenleyicisi",
    caption: "Gitar tonu ve efekt kontrolleri.",
    placement: guitarSenseImages.presetEditor.placement,
    frame: guitarSenseImages.presetEditor.frame,
    replaceBeforeLaunch: guitarSenseImages.presetEditor.replaceBeforeLaunch,
  },
} as const;

const localizedNexoraImages = {
  homeFeed: {
    src: nexoraImages.homeFeed.src,
    width: nexoraImages.homeFeed.width,
    height: nexoraImages.homeFeed.height,
    alt: "Yapay zekâ destekli içerik analizi ve Reels önizlemesi içeren Nexora ana akışı",
    caption: null,
    placement: nexoraImages.homeFeed.placement,
    frame: nexoraImages.homeFeed.frame,
    replaceBeforeLaunch: nexoraImages.homeFeed.replaceBeforeLaunch,
    replacementReason: null,
  },
  explore: {
    src: nexoraImages.explore.src,
    width: nexoraImages.explore.width,
    height: nexoraImages.explore.height,
    alt: "Filtreler, popüler etiketler ve içerik ızgarası içeren Nexora Keşfet arayüzü",
    caption: "Filtreler ve popüler etiketler, içerikleri keşfetmek için farklı başlangıç noktaları sunar.",
    placement: nexoraImages.explore.placement,
    frame: nexoraImages.explore.frame,
    replaceBeforeLaunch: nexoraImages.explore.replaceBeforeLaunch,
    replacementReason: null,
  },
  authentication: {
    src: nexoraImages.authentication.src,
    width: nexoraImages.authentication.width,
    height: nexoraImages.authentication.height,
    alt: "Altı haneli kod isteyen Nexora e-posta doğrulama arayüzü",
    caption: "Doğrulama, hesap etkinleştirmeyi kullanıcının tamamladığı açık bir adıma dönüştürür.",
    placement: nexoraImages.authentication.placement,
    frame: nexoraImages.authentication.frame,
    replaceBeforeLaunch: nexoraImages.authentication.replaceBeforeLaunch,
    replacementReason: null,
  },
  messaging: {
    src: nexoraImages.messaging.src,
    width: nexoraImages.messaging.width,
    height: nexoraImages.messaging.height,
    alt: "Çevrimiçi bir demo görüşmesini ve gerçek zamanlı mesaj güncellemelerini gösteren Nexora doğrudan mesajlaşma arayüzü",
    caption: "Firebase ile geliştirilen, çevrimiçi kullanıcı durumunu ve mesaj teslim bilgilerini gösteren gerçek zamanlı mesajlaşma arayüzü.",
    placement: nexoraImages.messaging.placement,
    frame: nexoraImages.messaging.frame,
    replaceBeforeLaunch: nexoraImages.messaging.replaceBeforeLaunch,
    replacementReason: null,
  },
} as const;

const localizedGuitarSenseCaseStudy = {
  introduction: "Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiğine yönelik bir masaüstü uygulaması.",
  facts: [
    "Masaüstü uygulaması",
    "TÜBİTAK 2209-A destekli",
    "Windows beta sürümü",
    "Electron + Python",
  ],
  overview: "GuitarSense, kullanıcı etkileşimlerine hızlı yanıt vermek üzere tasarlanan bir masaüstü uygulamasında gitar sesi işlemeyi ve etkileşimli pratiği bir araya getirir.",
  role: "Uygulamanın masaüstü arayüzünü, ses motoru entegrasyonunu ve temel pratik akışlarını tasarlayıp geliştirdim. Performans, paketleme ve uygulama güvenilirliği üzerinde de çalıştım.",
  capabilities: [
    {
      title: "Gerçek zamanlı gitar sesi",
      description: "Ayarlanabilir tonlar ve efektlerle gitar sesi işleme.",
    },
    {
      title: "Etkileşimli pratik",
      description: "Gerçek zamanlı geri bildirim sunan, tablatür tabanlı pratik araçları.",
    },
    {
      title: "Masaüstü uygulaması",
      description: "Farklı yazılım bileşenlerini tutarlı bir kullanıcı deneyiminde birleştiren, paketlenmiş bir Windows uygulaması.",
    },
  ],
  highlights: [
    {
      title: "Gerçek zamanlı ses performansı",
      body: "ASIO ve WASAPI backend'lerinde ses yapılandırmalarının performansı karşılaştırıldı. Test edilen 64 örnekli yapılandırmalarda backend tarafından bildirilen değerler ASIO için yaklaşık 6 ms, WASAPI için yaklaşık 46 ms idi.",
      qualification: "Bu değerler backend tarafından bildirilmiştir; bağımsız olarak ölçülmüş uçtan uca gidiş-dönüş gecikmesi değildir.",
    },
    {
      title: "Masaüstü entegrasyonu",
      body: "Electron tabanlı arayüzü, Python ile geliştirilen ses işleme backend'iyle entegre ettim.",
    },
    {
      title: "Arayüzün tepki hızı",
      body: "Pratik sırasında arayüzün hızlı yanıt vermesini sağlamak için sık yapılan arayüz güncellemelerini optimize ettim.",
    },
    {
      title: "Paketleme ve güvenilirlik",
      body: "Uygulama güvenilirliğini gözeterek dağıtılabilir bir Windows beta sürümü hazırlayıp doğruladım.",
    },
  ],
  technologies: guitarSenseCaseStudy.technologies,
  results: [
    "TÜBİTAK 2209-A desteği",
    "Paketlenmiş Windows beta sürümü",
    "Test edilen 64 örnekli yapılandırmalarda backend tarafından raporlanan yaklaşık 6 ms ASIO ve 46 ms WASAPI gecikme değerleri.",
  ],
} as const;

const localizedNexoraCaseStudy = {
  facts: [
    "React frontend",
    "Go ve Gin backend",
    "MySQL veri katmanı",
    "Firebase mesajlaşması",
    "Gemini entegrasyonu",
  ],
  overview: "Nexora, modern bir sosyal platformun akış, keşif, kısa formatlı medya, mesajlaşma ve hesap güvenliğini tutarlı bir deneyimde nasıl birleştirebileceğini araştırır. Proje; React arayüzünü, Go backend servislerini, MySQL veri saklama katmanını, Firebase mesajlaşmasını ve Gemini destekli içerik analizini bir araya getirir.",
  role: "Uygulamanın frontend ve backend katmanlarında çalıştım. Hesap akışları, sosyal özellikler, akış ve keşif arayüzleri, mesajlaşma entegrasyonu, veri yönetimi ve yapay zekâ destekli içerik deneyimleri üzerinde görev aldım.",
  capabilities: [
    {
      title: "Güvenli hesap akışları",
      description: "Kayıt, e-posta doğrulama, hesaba erişimi kurtarma ve iki faktörlü kimlik doğrulama.",
    },
    {
      title: "Akış ve keşif",
      description: "Ana akış, arama, Keşfet filtreleri, etiketler ve içeriklere göz atma.",
    },
    {
      title: "Gerçek zamanlı mesajlaşma",
      description: "Firebase destekli görüşmeler ve çevrimiçi iletişim akışları.",
    },
    {
      title: "Sosyal etkileşim",
      description: "Gönderiler, yorumlar, bildirimler, beğeniler, kaydedilen içerikler ve profiller.",
    },
    {
      title: "Kısa formatlı medya",
      description: "Reels içeriklerine göz atma ve içerik oluşturma deneyimleri.",
    },
    {
      title: "Yapay zekâ destekli deneyimler",
      description: "Gemini destekli içerik analizi ve sohbet desteği.",
    },
  ],
  decisions: [
    {
      title: "Gerçek zamanlı iletişimi ayrı yönetmek",
      body: "Gerçek zamanlı görüşmeler Firebase üzerinden yönetilirken ana uygulama verileri ve backend iş akışları Go ve MySQL üzerinde tutuldu.",
    },
    {
      title: "Hesap güvenliği adımları",
      body: "E-posta doğrulama, hesap kurtarma ve iki faktörlü kimlik doğrulama, kullanıcının doğrudan takip edebileceği akışlar olarak tasarlandı.",
    },
    {
      title: "Tutarlı sosyal gezinme",
      body: "Akış, Keşfet, Reels, mesajlar, bildirimler ve profiller ortak ve kalıcı bir gezinme yapısı kullanır. Böylece kullanıcılar sosyal iş akışları arasında bağlamı kaybetmeden geçiş yapabilir.",
    },
    {
      title: "Destekleyici bir katman olarak yapay zekâ",
      body: "Gemini, içerikleri analiz etmek ve kullanıcılara yardımcı olmak için kullanıldı. Uygulamanın temel sosyal etkileşim ve keşif deneyimleri, tamamen üretilen çıktılara bağımlı olmadan kullanılabilir durumda kaldı.",
    },
  ],
  closing: "Nexora; güvenli hesap akışlarını, sosyal keşfi, Firebase mesajlaşmasını ve yapay zekâ destekli içerik analizini tek bir full-stack üründe birleştirir.",
} as const;

const localizedGradeWatcherCaseStudy = {
  facts: ["Python", "Playwright", "Telegram Bot API", "Özel proje"],
  overview: "Yeni yayımlanan sonuçları görmek için akademik bir portalı tekrar tekrar kontrol etmek, küçük ama dikkat dağıtan bir manuel iştir. Grade Watcher, oturum açılmış tarayıcıdaki iş akışını otomatikleştirir, görünür sonuç durumunu normalleştirir ve yalnızca anlamlı bir değişiklik tespit edildiğinde bildirim gönderir.",
  role: "Tarayıcı oturumlarının yönetimi, sonuçların ayrıştırılması, durum karşılaştırması, izleme modunda çalışma ve Telegram bildirimleri dâhil olmak üzere otomasyon akışını tasarlayıp geliştirdim.",
  homepageFlow: [
    { label: "Öğrenci portalı", icon: gradeWatcherCaseStudy.homepageFlow[0].icon },
    { label: "Playwright oturumu", icon: gradeWatcherCaseStudy.homepageFlow[1].icon },
    { label: "Değişiklik tespiti", icon: gradeWatcherCaseStudy.homepageFlow[2].icon },
    { label: "Telegram bildirimi", icon: gradeWatcherCaseStudy.homepageFlow[3].icon },
  ],
  architecture: [
    { label: "Yerel çalıştırıcı", icon: gradeWatcherCaseStudy.architecture[0].icon },
    { label: "Playwright tarayıcısı", icon: gradeWatcherCaseStudy.architecture[1].icon },
    { label: "Oturum açılmış akademik portal", icon: gradeWatcherCaseStudy.architecture[2].icon },
    { label: "Sonuç ayrıştırıcısı", icon: gradeWatcherCaseStudy.architecture[3].icon },
    { label: "Durum kaydı karşılaştırması", icon: gradeWatcherCaseStudy.architecture[4].icon },
    { label: "Telegram Bot API", icon: gradeWatcherCaseStudy.architecture[5].icon },
  ],
  workflow: [
    {
      title: "İzleyiciyi başlat",
      body: "Özel araç, yapılandırılmış hesap ve bildirim ayarlarıyla yerel olarak başlatılır.",
    },
    {
      title: "Kimliği doğrulanmış bir oturum aç",
      body: "Playwright, akademik portalda gezinir ve gerekli tarayıcı oturumunu sürdürür.",
    },
    {
      title: "Sonuç durumunu oku",
      body: "Görünür sonuç satırları ayrıştırılır ve tutarlı bir iç veri biçimine dönüştürülür.",
    },
    {
      title: "Önceki durum kaydıyla karşılaştır",
      body: "Anlamlı eklemeleri veya güncellemeleri belirlemek için mevcut durum, son bilinen durumla karşılaştırılır.",
    },
    {
      title: "Telegram bildirimi gönder",
      body: "Yalnızca yeni bir sonuç veya ilgili bir değişiklik tespit edildiğinde bildirim gönderilir.",
    },
    {
      title: "İzlemeye devam et",
      body: "İzleme modu, aynı bildirimi tekrar göndermeden süreci yineler.",
    },
  ],
  decisions: [
    {
      title: "Oturum sürekliliği",
      body: "İş akışı, portalda gezinme ve yönlendirmeler sırasında tarayıcı durumunu koruyarak oturum sürekliliğini sağlar.",
    },
    {
      title: "Dayanıklı sonuç ayrıştırma",
      body: "Sonuç verileri karşılaştırılmadan önce normalleştirilir. Böylece yalnızca sunumdan kaynaklanan farklılıklar otomatik olarak yanlış değişiklik tespitlerine dönüşmez.",
    },
    {
      title: "Tekrarlanmayan bildirimler",
      body: "Daha önce görülen sonuç durumu saklanır; böylece aynı güncelleme tekrar tekrar Telegram mesajı gönderilmesine yol açmaz.",
    },
    {
      title: "Özel yapılandırma",
      body: "Hesap ve bildirim yapılandırması, kamuya açık portfolyo içeriğinin dışında tutulur. Projenin kaynak kodu deposuna siteden erişim verilmez.",
    },
  ],
  status: [
    "Özel yardımcı araç projesi",
    "Yerel ortamda izleme desteği",
    "Telegram bildirim sistemi",
    "Kamuya açık kaynak kodu deposu veya canlı demo yok",
  ],
  statusSummary: "Grade Watcher, özel kullanım için geliştirilen bir yardımcı araçtır. Bu proje anlatımı, hesap bilgilerini veya portala özgü iç ayrıntıları paylaşmadan otomasyon tasarımına ve güvenilirlik kararlarına odaklanır.",
} as const;

export const turkish = {
  locale: "tr",
  links: {
    home: routeRegistry.home.tr,
    work: `${routeRegistry.home.tr}#work`,
    about: `${routeRegistry.home.tr}#about`,
  },
  shared: {
    skipLink: "İçeriğe geç",
    homeLabel: "Eren Kaçar, ana sayfa",
    primaryNavigation: "Ana gezinme",
    languageNavigation: "Dil seçimi",
    englishVersion: "Bu sayfanın İngilizce sürümünü görüntüle",
    turkishVersion: "Bu sayfanın Türkçe sürümünü görüntüle",
    navigation: [
      { label: "Seçili Projeler", href: `${routeRegistry.home.tr}#work` },
      { label: "Deneyim", href: `${routeRegistry.home.tr}#experience` },
      { label: "Yetkinlikler", href: `${routeRegistry.home.tr}#skills` },
      { label: "Hakkımda", href: `${routeRegistry.home.tr}#about` },
      { label: "İletişim", href: `${routeRegistry.home.tr}#contact` },
    ],
    footerIdentity: "Eren Kaçar — Yazılım Mühendisi",
    systems: "Masaüstü · Web · Gerçek zamanlı sistemler",
    footerLinks: "Alt bilgi profil bağlantıları",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-posta",
    downloadCv: "CV'yi İndir",
    downloadCvLabel: "Eren Kaçar'ın CV'sini PDF olarak indir",
    technologies: "{name} teknolojileri",
    proofPoints: "{name} projesinin öne çıkan yönleri",
    featurePoints: "{name} özellikleri",
    experienceTechnologies: "{name} bünyesinde kullanılan teknolojiler",
    readCaseStudy: "Proje Detaylarını İncele",
    viewProject: "Projeyi İncele",
    homepageAutomationLabel: "Grade Watcher otomasyon akışı",
  },
  home: {
    hero: {
      eyebrow: "Yazılım Mühendisi",
      title: "Masaüstü, web ve gerçek zamanlı yazılım ürünleri geliştiriyorum.",
      lead: "Masaüstü ve web uygulamaları geliştiriyorum. Gerçek zamanlı sistemler, yazılım mimarisi, performans ve kullanıcı deneyimiyle ilgileniyorum. Projelerimi fikir aşamasından kullanılabilir bir ürüne dönüştürmeye odaklanıyorum.",
      explore: "Seçili Projeleri Keşfet",
      about: "Hakkımda",
      profileLinks: "Profil ve CV bağlantıları",
      focusTitle: "Şu anki odağım",
      focus: "GuitarSense'i geliştiriyor ve gerçek zamanlı bir masaüstü ürününün arkasındaki mühendislik kararlarını belgeliyorum.",
    },
    featured: {
      eyebrow: "01 / Öne Çıkan Proje",
      title: "Fikirden çalışan bir masaüstü uygulamasına.",
      intro: "Arayüz tasarımı, ses işleme, pratik araçları, performans ve paketlemeyi kapsayan bir masaüstü ürünü.",
    },
    selected: {
      eyebrow: "02 / Seçili Projeler",
      title: "Web geliştirme ve otomasyon projelerim.",
    },
    experience: {
      eyebrow: "03 / Deneyim",
      title: "Yazılım geliştirme ve sistem yönetimi deneyimim.",
    },
    toolkit: {
      eyebrow: "04 / Yetkinlikler",
      title: "Kullandığım teknolojiler ve araçlar.",
      intro: "Arayüz, backend, masaüstü, ses ve otomasyon çalışmalarında kullandığım teknolojiler.",
    },
    about: {
      eyebrow: "05 / Hakkımda",
      title: "Yazılım geliştirmeye yaklaşımım.",
      introduction: "İstanbul'da yaşayan bir Bilgisayar Mühendisliği mezunuyum. Özellikle masaüstü, web ve gerçek zamanlı sistemler üzerinde çalışmayı seviyorum. Fikirleri çalışan ve kullanılabilir yazılımlara dönüştürmekten keyif alıyorum. Çalışmalarım arayüz geliştirme, backend servisleri, iş akışı otomasyonu, ses işleme, paketleme ve yayına alma süreçlerini kapsıyor.",
      approach: "Bir özelliğin çalışmasını sağlamanın ötesine bakıyorum. Performansı ölçüyor; hata durumlarını, güvenliği, kullanılabilirliği ve geliştirme sürümünden güvenilir bir ürüne geçişi tasarımın parçası olarak ele alıyorum.",
    },
    otherWork: { eyebrow: "Ek Projeler", title: "Diğer Projeler" },
    contact: {
      eyebrow: "06 / İletişim",
      title: "Birlikte faydalı bir ürün geliştirelim.",
      emailLabel: "Eren Kaçar'a e-posta gönder",
      note: "Masaüstü ürünleri, full-stack sistemler, otomasyon ve gerçek zamanlı uygulamalar alanındaki yazılım mühendisliği pozisyonları ve iş birlikleriyle ilgileniyorum.",
      linksLabel: "İletişim ve profil bağlantıları",
      emailMe: "E-posta Gönder",
    },
  },
  caseStudies: {
    common: {
      back: "Seçili Projelere Dön",
      facts: "Proje Bilgileri",
      overview: "Genel Bakış",
      role: "Projedeki Rolüm",
      capabilities: "Temel Özellikler",
      decisions: "Mühendislik Kararları",
    },
    guitarsense: {
      name: "GuitarSense",
      eyebrow: "Öne Çıkan Proje",
      highlights: "Mühendislikte Öne Çıkanlar",
      technologies: "Teknolojiler",
      technologiesLabel: "GuitarSense teknolojileri",
      results: "Sonuçlar",
    },
    nexora: {
      name: "Nexora",
      eyebrow: "FULL-STACK SOSYAL PLATFORM",
      introduction: "Güvenli hesap akışlarını, gerçek zamanlı mesajlaşmayı, içerik keşfini, kısa formatlı medyayı ve Gemini destekli içerik deneyimlerini bir araya getiren full-stack sosyal platform.",
      walkthrough: "Ürün Turu",
      walkthroughIntro: "Sosyal platformun hesap güvenliği ve gerçek zamanlı iletişim özelliklerini gösteren seçili arayüzler.",
      authentication: {
        heading: "Hesaba erişimi koru",
        text: "E-posta doğrulama ve iki faktörlü kimlik doğrulama, hesap oluşturma ve giriş akışlarına açık doğrulama adımları ekler.",
      },
      messaging: {
        heading: "Görüşmeleri gerçek zamanlı sürdür",
        text: "Firebase tabanlı mesajlaşma sistemi, kullanıcıların gerçek zamanlı iletişim kurmasını ve görüşmelerini tek bir arayüzden yönetmesini sağlar.",
      },
      architecture: "Teknik Mimari",
      architectureLabel: "Temel uygulama mimarisi",
      client: "İstemci",
      api: "API",
      firebaseDescription: "Gerçek zamanlı mesajlaşma",
      geminiDescription: "İçerik analizi ve sohbet desteği",
      closing: "Proje Özeti",
    },
    gradeWatcher: {
      name: "Grade Watcher",
      eyebrow: "TARAYICI OTOMASYONU",
      introduction: "Akademik sonuçlardaki değişiklikleri izleyen ve yeni sonuçlar tespit edildiğinde Telegram bildirimleri gönderen özel bir otomasyon aracı.",
      architectureLabel: "Grade Watcher otomasyon mimarisi",
      workflow: "Nasıl Çalışır?",
      status: "Mevcut Durum",
    },
  },
  notFound: {
    eyebrow: "Sayfaya ulaşılamıyor",
    code: "404",
    title: "Sayfa bulunamadı",
    description: "İstediğiniz sayfa mevcut değil. Ana sayfaya dönebilir veya seçili projelerin detaylarını inceleyebilirsiniz.",
    home: "Ana Sayfaya Dön",
    work: "Seçili Projeleri İncele",
  },
  metadata: {
    homeTitle: "Eren Kaçar — Yazılım Mühendisi",
    titleTemplate: "%s — Eren Kaçar",
    description: "Ürün mimarisi, otomasyon, ses sistemleri, performans ve güvenlik alanlarında çalışarak masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiren yazılım mühendisi.",
    personJobTitle: "Yazılım Mühendisi",
    alumni: "Trakya Üniversitesi",
    guitarsense: {
      title: "GuitarSense",
      socialTitle: "GuitarSense — Eren Kaçar",
      description: localizedGuitarSenseCaseStudy.introduction,
    },
    nexora: {
      title: "Nexora",
      socialTitle: "Nexora — Eren Kaçar",
      description: "React, Go, MySQL, Firebase ve Gemini destekli içerik deneyimleriyle geliştirilen full-stack sosyal platform.",
    },
    "grade-watcher": {
      title: "Grade Watcher",
      socialTitle: "Grade Watcher — Eren Kaçar",
      description: "Akademik sonuçlardaki değişiklikleri izleyip Telegram bildirimleri gönderen, Playwright tabanlı özel bir otomasyon projesi.",
    },
  },
  social: {
    brand: "Eren Kaçar · Portfolyo",
    supportingLine: "Masaüstü · Web · Gerçek zamanlı sistemler",
    home: { title: siteConfig.name, label: "Yazılım Mühendisi", alt: "Eren Kaçar — Yazılım Mühendisi" },
    guitarsense: { title: "GuitarSense", label: "Gitar pratiği için masaüstü uygulaması", alt: "GuitarSense — Gitar pratiği için masaüstü uygulaması" },
    nexora: { title: "Nexora", label: "Full-stack sosyal platform", alt: "Nexora — Full-stack sosyal platform" },
    "grade-watcher": { title: "Grade Watcher", label: "Özel tarayıcı otomasyonu", alt: "Grade Watcher — Özel tarayıcı otomasyonu" },
  },
  content: {
    featuredProject: {
      id: featuredProject.id,
      name: featuredProject.name,
      eyebrow: "Öne Çıkan Proje",
      summary: "Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiği için geliştirilmiş bir masaüstü uygulaması.",
      tags: featuredProject.tags,
      proofPoints: [
        "TÜBİTAK 2209-A destekli",
        "Paketlenmiş Windows beta sürümü",
        "Gerçek zamanlı ses işleme",
      ],
      href: routeRegistry.guitarsense.tr,
      featured: featuredProject.featured,
    },
    selectedProjects: [
      {
        id: selectedProjects[0].id,
        name: selectedProjects[0].name,
        eyebrow: "Full-stack Sosyal Platform",
        summary: "Güvenli hesap akışları, Firebase ile gerçek zamanlı mesajlaşma, sosyal keşif ve yapay zekâ destekli içerik analizi sunan full-stack sosyal platform.",
        tags: selectedProjects[0].tags,
        proofPoints: [
          "Güvenli hesap akışları",
          "Firebase ile gerçek zamanlı mesajlaşma",
          "Yapay zekâ destekli içerik analizi ve keşfi",
        ],
        href: routeRegistry.nexora.tr,
        featured: selectedProjects[0].featured,
        image: localizedNexoraImages.homeFeed,
      },
      {
        id: selectedProjects[1].id,
        name: selectedProjects[1].name,
        eyebrow: "Tarayıcı Otomasyonu",
        summary: "Akademik sonuçlardaki değişiklikleri izleyen ve yeni sonuçlar tespit edildiğinde Telegram bildirimleri gönderen özel bir tarayıcı otomasyonu sistemi.",
        tags: [
          selectedProjects[1].tags[0],
          selectedProjects[1].tags[1],
          selectedProjects[1].tags[2],
          "Otomasyon",
        ],
        proofPoints: [
          "Kimliği doğrulanmış oturumların yönetimi",
          "Sonuç değişikliklerinin tespiti",
          "Tekrarlanmayan bildirimler",
        ],
        href: routeRegistry["grade-watcher"].tr,
        featured: selectedProjects[1].featured,
        visual: selectedProjects[1].visual,
      },
    ],
    otherWork: [
      {
        name: otherWork[0].name,
        summary: "Yerel bir tıp merkezi için geliştirilen, farklı ekran boyutlarına uyum sağlayan kurumsal web sitesi.",
        tags: [otherWork[0].tags[0], otherWork[0].tags[1], otherWork[0].tags[2], "Ekrana Uyumlu Tasarım"],
      },
      {
        name: otherWork[1].name,
        summary: "Temizlik operasyonlarının atanması, takibi ve yönetimi için geliştirilen, rol tabanlı bir kurum içi uygulama.",
        tags: otherWork[1].tags,
      },
      {
        name: otherWork[2].name,
        summary: "Mikrofon verilerini belirli aralıklarla analiz eden ve cihazın kilit durumuna göre izleme davranışını yöneten bir Android uygulama prototipi.",
        tags: [otherWork[2].tags[0], otherWork[2].tags[1], "Ses İzleme"],
      },
    ],
    experience: [
      {
        organization: "Trakya Üniversitesi Öğrenci İşleri",
        role: "Yazılım Geliştirici",
        date: "Mart 2025 — Haziran 2026",
        summary: "Bimser Synergy low-code platformuyla öğrenci işleri süreçleri geliştirdim ve sürdürdüm. Go, React ve MySQL ile destekleyici kurum içi araçların geliştirilmesine de katkıda bulundum.",
        highlights: [
          "Bimser Synergy üzerinde iş akışı tabanlı idari süreçler geliştirdim ve sürdürdüm.",
          "1.000'den fazla öğrenci talebinin işleme alındığı süreçlere katkıda bulundum.",
          "Operasyonel iş akışlarını anlamak ve iyileştirmek için idari kullanıcılarla doğrudan çalıştım.",
        ],
        technologies: [
          experience[0].technologies[0],
          "İş Akışı Otomasyonu",
          experience[0].technologies[2],
          experience[0].technologies[3],
          experience[0].technologies[4],
        ],
      },
      {
        organization: "Turkcell",
        role: "Linux Sistem Yönetimi Stajyeri",
        date: null,
        summary: "Linux sistem yönetimi iş akışlarında çalıştım; kurumsal altyapıyı, operasyonel uygulamaları ve teknik dokümantasyon süreçlerini gözlemledim.",
        highlights: [
          "Linux yönetimi ve sistem işletimi iş akışlarında çalıştım.",
          "Kurumsal altyapıyı ve operasyonel süreçleri gözlemledim.",
          "Teknik görevleri ve sistem uygulamalarını belgeledim.",
        ],
        technologies: [experience[1].technologies[0], "Sistem Yönetimi", "Altyapı", "Teknik Dokümantasyon"],
      },
    ],
    toolkit: [
      { id: toolkit[0].id, title: "Programlama Dilleri", items: toolkit[0].items },
      {
        id: toolkit[1].id,
        title: "Frontend",
        items: [toolkit[1].items[0], toolkit[1].items[1], toolkit[1].items[2], toolkit[1].items[3], "Ekrana Uyumlu Arayüz"],
      },
      { id: toolkit[2].id, title: "Backend ve Veri", items: toolkit[2].items },
      {
        id: toolkit[3].id,
        title: "Masaüstü ve Sistemler",
        items: [toolkit[3].items[0], toolkit[3].items[1], toolkit[3].items[2], toolkit[3].items[3], "Windows Paketleme"],
      },
      { id: toolkit[4].id, title: "Ses ve Otomasyon", items: toolkit[4].items },
    ],
    guitarSenseCaseStudy: localizedGuitarSenseCaseStudy,
    nexoraCaseStudy: localizedNexoraCaseStudy,
    gradeWatcherCaseStudy: localizedGradeWatcherCaseStudy,
    guitarSenseImages: localizedGuitarSenseImages,
    nexoraImages: localizedNexoraImages,
    nexoraArchitecture,
  },
} as const satisfies DictionaryFor<"tr">;
