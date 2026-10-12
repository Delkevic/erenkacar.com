# Turkish copy review — Phase 2B-1

Extracted from the current working tree on branch `codex/i18n-phase-2a` (HEAD `dcd10463c7cdca7c56c048c98b40c042e659f0eb`). This document records implemented copy for owner review; it contains no replacement translations.

Dictionary snapshot SHA-256: `82933476af4974e9ebb74d2ca47d87aa4a4a199b88ae1f30f6faf857baba7c9a`. Source and key references describe this current uncommitted implementation, not historical copy.

Dictionary source: [src/i18n/tr.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/tr.ts). Key references below begin at the exported `turkish` object. Imported identities and technology labels are resolved from the actual current imports. Component links identify where each group is rendered.

Quoted entries preserve the source strings exactly, including punctuation and capitalization. CSS uppercase styling is presentation; source capitalization is retained here. Explicit JavaScript uppercase output in social images is shown separately. Page order follows component rendering order, with side-by-side content grouped by its component. Decorative symbols and constructed labels are identified rather than treated as translated prose.

Verification: rendered the four current Turkish route wrappers with their actual Turkish root layout in memory, then compared their ordered text nodes and image/ARIA labels with the existing production HTML. All four matched exactly. Resolved metadata also matches those existing page heads. No build, formatter, website edit, staging, commit, push or deployment is part of this extraction.

## 1. Homepage

Route: `/tr`. View: `src/components/views/home.tsx`.

### Header and navigation

Component: [src/components/layout/site-header.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-header.tsx).

**Skip link** — `turkish.shared.skipLink`

> İçeriğe geç

**Decorative symbol** — `src/components/layout/site-header.tsx → brand__mark (aria-hidden)`

> EK

**Brand** — `src/config/site.ts → siteConfig.name`

> Eren Kaçar

**English language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> EN

**Decorative symbol** — `src/components/layout/language-switcher.tsx → separator (aria-hidden)`

> |

**Turkish language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> TR

**Navigation 1** — `turkish.shared.navigation[0].label`

> Seçili Projeler

**Navigation destination** — `turkish.shared.navigation[0].href`

> /tr#work

**Navigation 2** — `turkish.shared.navigation[1].label`

> Deneyim

**Navigation destination** — `turkish.shared.navigation[1].href`

> /tr#experience

**Navigation 3** — `turkish.shared.navigation[2].label`

> Yetkinlikler

**Navigation destination** — `turkish.shared.navigation[2].href`

> /tr#skills

**Navigation 4** — `turkish.shared.navigation[3].label`

> Hakkımda

**Navigation destination** — `turkish.shared.navigation[3].href`

> /tr#about

**Navigation 5** — `turkish.shared.navigation[4].label`

> İletişim

**Navigation destination** — `turkish.shared.navigation[4].href`

> /tr#contact

**Link destination** — `turkish.links.home`

> /tr

Language destinations for this page: `/` and `/tr`. Source: `getPublicPath(page, locale)` in `src/i18n/routes.ts`. Accessible labels are inventoried in section 7.

### Hero and supporting text

Component: [src/components/sections/hero.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/hero.tsx).

**eyebrow** — `turkish.home.hero.eyebrow`

> Yazılım Mühendisi

**title** — `turkish.home.hero.title`

> Masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiriyorum.

**lead** — `turkish.home.hero.lead`

> Masaüstü ve web için kullanılabilir yazılımlar geliştiriyorum. Gerçek zamanlı sistemlere, ürün mimarisine, performansa, güvenliğe ve prototipten dağıtıma hazır ürüne uzanan sürece odaklanıyorum.

**explore** — `turkish.home.hero.explore`

> Seçili Projeleri Keşfet

**Link destination** — `turkish.links.work`

> /tr#work

**Secondary button** — `turkish.home.hero.about`

> Hakkımda

**Link destination** — `turkish.links.about`

> /tr#about

**GitHub link** — `turkish.shared.github`

> GitHub

**Decorative symbol** — `src/components/sections/hero.tsx → external-link indicator (aria-hidden)`

> ↗

**GitHub destination** — `src/config/site.ts → siteConfig.githubUrl`

> https://github.com/Delkevic

**LinkedIn link** — `turkish.shared.linkedin`

> LinkedIn

**Decorative symbol** — `src/components/sections/hero.tsx → external-link indicator (aria-hidden)`

> ↗

**LinkedIn destination** — `src/config/site.ts → siteConfig.linkedinUrl`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**CV download link** — `turkish.shared.downloadCv`

> CV'yi İndir

**CV destination** — `src/config/site.ts → siteConfig.resumePath`

> /resume/eren-kacar-resume.pdf

### Current focus

Component: [src/components/sections/hero.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/hero.tsx).

**focusTitle** — `turkish.home.hero.focusTitle`

> Şu anki odağım

**focus** — `turkish.home.hero.focus`

> GuitarSense'i geliştiriyor ve gerçek zamanlı bir masaüstü ürününün arkasındaki mühendislik kararlarını belgeliyorum.

### Featured GuitarSense

Component: [src/components/sections/featured-project.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/featured-project.tsx).

**eyebrow** — `turkish.home.featured.eyebrow`

> 01 / Öne Çıkan Proje

**title** — `turkish.home.featured.title`

> Ürünü tüm katmanlarıyla geliştiriyorum.

**intro** — `turkish.home.featured.intro`

> Arayüz tasarımı, ses işleme, pratik araçları, performans ve paketlemeyi kapsayan bir masaüstü ürünü.

The library image precedes the project card in component order. Its alt text is in section 7.

**Library image caption** — `turkish.content.guitarSenseImages.library.caption`: `null`; no string is rendered.

**eyebrow** — `turkish.content.featuredProject.eyebrow`

> Öne Çıkan Proje

**name** — `turkish.content.featuredProject.name`

> GuitarSense

**summary** — `turkish.content.featuredProject.summary`

> Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiği için geliştirilmiş bir masaüstü uygulaması.

**Proof point 1** — `turkish.content.featuredProject.proofPoints[0]`

> TÜBİTAK 2209-A destekli

**Proof point 2** — `turkish.content.featuredProject.proofPoints[1]`

> Paketlenmiş Windows beta sürümü

**Proof point 3** — `turkish.content.featuredProject.proofPoints[2]`

> Gerçek zamanlı ses işleme

**Technology 1** — `turkish.content.featuredProject.tags[0]`

> Electron

**Technology 2** — `turkish.content.featuredProject.tags[1]`

> React

**Technology 3** — `turkish.content.featuredProject.tags[2]`

> TypeScript

**Technology 4** — `turkish.content.featuredProject.tags[3]`

> Python

**Technology 5** — `turkish.content.featuredProject.tags[4]`

> ZMQ

**Technology 6** — `turkish.content.featuredProject.tags[5]`

> PortAudio

**Case-study link** — `turkish.shared.readCaseStudy`

> Proje Detaylarını İncele

**Decorative symbol** — `src/components/sections/featured-project.tsx → link indicator (aria-hidden)`

> →

**Link destination** — `turkish.content.featuredProject.href`

> /tr/projects/guitarsense

### Selected projects

Component: [src/components/sections/selected-projects.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/selected-projects.tsx).

**eyebrow** — `turkish.home.selected.eyebrow`

> 02 / Seçili Projeler

**title** — `turkish.home.selected.title`

> Full-stack sistemler ve otomasyon alanından seçili projeler.

### Selected project — Nexora

Component: [src/components/ui/project-card.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/ui/project-card.tsx).

**Card number** — `ProjectCard → String(index).padStart(2, "0")`

> 02

**Homepage image caption** — `turkish.content.selectedProjects[0].image.caption`: `null`; no string is rendered.

**eyebrow** — `turkish.content.selectedProjects[0].eyebrow`

> Full-stack Sosyal Platform

**name** — `turkish.content.selectedProjects[0].name`

> Nexora

**summary** — `turkish.content.selectedProjects[0].summary`

> Güvenli hesap akışları, Firebase ile gerçek zamanlı mesajlaşma, sosyal keşif ve yapay zekâ destekli içerik analizi sunan full-stack sosyal platform.

**Feature point 1** — `turkish.content.selectedProjects[0].proofPoints[0]`

> Güvenli hesap akışları

**Feature point 2** — `turkish.content.selectedProjects[0].proofPoints[1]`

> Firebase ile gerçek zamanlı mesajlaşma

**Feature point 3** — `turkish.content.selectedProjects[0].proofPoints[2]`

> Yapay zekâ destekli içerik analizi ve keşfi

**Technology 1** — `turkish.content.selectedProjects[0].tags[0]`

> React

**Technology 2** — `turkish.content.selectedProjects[0].tags[1]`

> Go

**Technology 3** — `turkish.content.selectedProjects[0].tags[2]`

> Gin

**Technology 4** — `turkish.content.selectedProjects[0].tags[3]`

> MySQL

**Technology 5** — `turkish.content.selectedProjects[0].tags[4]`

> Firebase

**Technology 6** — `turkish.content.selectedProjects[0].tags[5]`

> Gemini API

**Project link** — `turkish.shared.viewProject`

> Projeyi İncele

**Decorative symbol** — `src/components/ui/project-card.tsx → link indicator (aria-hidden)`

> →

**Link destination** — `turkish.content.selectedProjects[0].href`

> /tr/projects/nexora

### Selected project — Grade Watcher

Component: [src/components/ui/project-card.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/ui/project-card.tsx).

**Card number** — `ProjectCard → String(index).padStart(2, "0")`

> 03

**Flow stage 1** — `turkish.content.gradeWatcherCaseStudy.homepageFlow[0].label`

> Öğrenci portalı

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Flow stage 2** — `turkish.content.gradeWatcherCaseStudy.homepageFlow[1].label`

> Playwright oturumu

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Flow stage 3** — `turkish.content.gradeWatcherCaseStudy.homepageFlow[2].label`

> Değişiklik tespiti

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Flow stage 4** — `turkish.content.gradeWatcherCaseStudy.homepageFlow[3].label`

> Telegram bildirimi

**eyebrow** — `turkish.content.selectedProjects[1].eyebrow`

> Tarayıcı Otomasyonu

**name** — `turkish.content.selectedProjects[1].name`

> Grade Watcher

**summary** — `turkish.content.selectedProjects[1].summary`

> Akademik sonuçlardaki değişiklikleri izleyen ve yeni sonuçlar tespit edildiğinde Telegram bildirimleri gönderen özel bir tarayıcı otomasyonu sistemi.

**Feature point 1** — `turkish.content.selectedProjects[1].proofPoints[0]`

> Kimliği doğrulanmış oturumların yönetimi

**Feature point 2** — `turkish.content.selectedProjects[1].proofPoints[1]`

> Sonuç değişikliklerinin tespiti

**Feature point 3** — `turkish.content.selectedProjects[1].proofPoints[2]`

> Tekrarlanmayan bildirimler

**Technology 1** — `turkish.content.selectedProjects[1].tags[0]`

> Python

**Technology 2** — `turkish.content.selectedProjects[1].tags[1]`

> Playwright

**Technology 3** — `turkish.content.selectedProjects[1].tags[2]`

> Telegram Bot API

**Technology 4** — `turkish.content.selectedProjects[1].tags[3]`

> Otomasyon

**Project link** — `turkish.shared.viewProject`

> Projeyi İncele

**Decorative symbol** — `src/components/ui/project-card.tsx → link indicator (aria-hidden)`

> →

**Link destination** — `turkish.content.selectedProjects[1].href`

> /tr/projects/grade-watcher

### Experience

Component: [src/components/sections/experience.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/experience.tsx).

**eyebrow** — `turkish.home.experience.eyebrow`

> 03 / Deneyim

**title** — `turkish.home.experience.title`

> İş akışları geliştirirken sistemleri içeriden tanıyorum.

### Experience — Trakya Üniversitesi Öğrenci İşleri

Component: [src/components/sections/experience.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/experience.tsx).

**organization** — `turkish.content.experience[0].organization`

> Trakya Üniversitesi Öğrenci İşleri

**role** — `turkish.content.experience[0].role`

> Yazılım Geliştirici

**Displayed date** — `turkish.content.experience[0].date`

> Mart 2025 — Haziran 2026

**Summary** — `turkish.content.experience[0].summary`

> Bimser Synergy low-code platformuyla öğrenci işleri süreçleri geliştirdim ve sürdürdüm. Go, React ve MySQL ile destekleyici kurum içi araçların geliştirilmesine de katkıda bulundum.

**Highlight 1** — `turkish.content.experience[0].highlights[0]`

> Bimser Synergy üzerinde iş akışı tabanlı idari süreçler geliştirdim ve sürdürdüm.

**Highlight 2** — `turkish.content.experience[0].highlights[1]`

> 1.000'den fazla öğrenci talebinin işleme alındığı süreçlere katkıda bulundum.

**Highlight 3** — `turkish.content.experience[0].highlights[2]`

> Operasyonel iş akışlarını anlamak ve iyileştirmek için idari kullanıcılarla doğrudan çalıştım.

**Technology 1** — `turkish.content.experience[0].technologies[0]`

> Bimser Synergy

**Technology 2** — `turkish.content.experience[0].technologies[1]`

> İş Akışı Otomasyonu

**Technology 3** — `turkish.content.experience[0].technologies[2]`

> Go

**Technology 4** — `turkish.content.experience[0].technologies[3]`

> React

**Technology 5** — `turkish.content.experience[0].technologies[4]`

> MySQL

### Experience — Turkcell

Component: [src/components/sections/experience.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/experience.tsx).

**organization** — `turkish.content.experience[1].organization`

> Turkcell

**role** — `turkish.content.experience[1].role`

> Linux Sistem Yönetimi Stajyeri

**Displayed date** — `turkish.content.experience[1].date`: `null`; no string is rendered.

**Summary** — `turkish.content.experience[1].summary`

> Linux sistem yönetimi iş akışlarında çalıştım; kurumsal altyapıyı, operasyonel uygulamaları ve teknik dokümantasyon süreçlerini gözlemledim.

**Highlight 1** — `turkish.content.experience[1].highlights[0]`

> Linux yönetimi ve sistem işletimi iş akışlarında çalıştım.

**Highlight 2** — `turkish.content.experience[1].highlights[1]`

> Kurumsal altyapıyı ve operasyonel süreçleri gözlemledim.

**Highlight 3** — `turkish.content.experience[1].highlights[2]`

> Teknik görevleri ve sistem uygulamalarını belgeledim.

**Technology 1** — `turkish.content.experience[1].technologies[0]`

> Linux

**Technology 2** — `turkish.content.experience[1].technologies[1]`

> Sistem Yönetimi

**Technology 3** — `turkish.content.experience[1].technologies[2]`

> Altyapı

**Technology 4** — `turkish.content.experience[1].technologies[3]`

> Teknik Dokümantasyon

### Skills / Toolkit

Component: [src/components/sections/toolkit.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/toolkit.tsx).

**eyebrow** — `turkish.home.toolkit.eyebrow`

> 04 / Yetkinlikler

**title** — `turkish.home.toolkit.title`

> Ürünü ileri taşımak için seçtiğim araçlar.

**intro** — `turkish.home.toolkit.intro`

> Arayüz, backend, masaüstü, ses ve otomasyon çalışmalarında kullandığım teknolojiler.

**Group heading** — `turkish.content.toolkit[0].title`

> Programlama Dilleri

**Technology 1** — `turkish.content.toolkit[0].items[0]`

> TypeScript

**Technology 2** — `turkish.content.toolkit[0].items[1]`

> JavaScript

**Technology 3** — `turkish.content.toolkit[0].items[2]`

> Python

**Technology 4** — `turkish.content.toolkit[0].items[3]`

> Go

**Technology 5** — `turkish.content.toolkit[0].items[4]`

> Kotlin

**Technology 6** — `turkish.content.toolkit[0].items[5]`

> SQL

**Group heading** — `turkish.content.toolkit[1].title`

> Frontend

**Technology 1** — `turkish.content.toolkit[1].items[0]`

> React

**Technology 2** — `turkish.content.toolkit[1].items[1]`

> Next.js

**Technology 3** — `turkish.content.toolkit[1].items[2]`

> HTML

**Technology 4** — `turkish.content.toolkit[1].items[3]`

> CSS

**Technology 5** — `turkish.content.toolkit[1].items[4]`

> Ekrana Uyumlu Arayüz

**Group heading** — `turkish.content.toolkit[2].title`

> Backend ve Veri

**Technology 1** — `turkish.content.toolkit[2].items[0]`

> Go

**Technology 2** — `turkish.content.toolkit[2].items[1]`

> Gin

**Technology 3** — `turkish.content.toolkit[2].items[2]`

> REST APIs

**Technology 4** — `turkish.content.toolkit[2].items[3]`

> MySQL

**Technology 5** — `turkish.content.toolkit[2].items[4]`

> GORM

**Group heading** — `turkish.content.toolkit[3].title`

> Masaüstü ve Sistemler

**Technology 1** — `turkish.content.toolkit[3].items[0]`

> Electron

**Technology 2** — `turkish.content.toolkit[3].items[1]`

> IPC

**Technology 3** — `turkish.content.toolkit[3].items[2]`

> ZMQ

**Technology 4** — `turkish.content.toolkit[3].items[3]`

> Linux

**Technology 5** — `turkish.content.toolkit[3].items[4]`

> Windows Paketleme

**Group heading** — `turkish.content.toolkit[4].title`

> Ses ve Otomasyon

**Technology 1** — `turkish.content.toolkit[4].items[0]`

> PortAudio

**Technology 2** — `turkish.content.toolkit[4].items[1]`

> WASAPI

**Technology 3** — `turkish.content.toolkit[4].items[2]`

> ASIO

**Technology 4** — `turkish.content.toolkit[4].items[3]`

> Playwright

**Technology 5** — `turkish.content.toolkit[4].items[4]`

> Telegram Bot API

### About

Component: [src/components/sections/about.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/about.tsx).

**eyebrow** — `turkish.home.about.eyebrow`

> 05 / Hakkımda

**title** — `turkish.home.about.title`

> Uygulamayla şekillenen ürün yaklaşımı.

**introduction** — `turkish.home.about.introduction`

> İstanbul'da yaşayan bir Bilgisayar Mühendisliği mezunuyum. Karmaşık fikirleri insanların kullanabileceği yazılımlara dönüştürmekten keyif alıyorum; özellikle masaüstü, web ve gerçek zamanlı sistemlerde. Çalışmalarım arayüz geliştirme, backend servisleri, iş akışı otomasyonu, ses işleme, paketleme ve yayına alma süreçlerini kapsıyor.

**approach** — `turkish.home.about.approach`

> Bir özelliğin çalışmasını sağlamanın ötesine bakıyorum. Performansı ölçüyor; hata durumlarını, güvenliği, kullanılabilirliği ve geliştirme sürümünden güvenilir bir ürüne geçişi tasarımın parçası olarak ele alıyorum.

### Other Work

Component: [src/components/sections/other-work.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/other-work.tsx).

**eyebrow** — `turkish.home.otherWork.eyebrow`

> Ek Projeler

**title** — `turkish.home.otherWork.title`

> Diğer Projeler

**name** — `turkish.content.otherWork[0].name`

> Medipan Medical Center

**summary** — `turkish.content.otherWork[0].summary`

> Yerel bir tıp merkezi için geliştirilen, farklı ekran boyutlarına uyum sağlayan kurumsal web sitesi.

**Technology 1** — `turkish.content.otherWork[0].tags[0]`

> HTML

**Technology 2** — `turkish.content.otherWork[0].tags[1]`

> CSS

**Technology 3** — `turkish.content.otherWork[0].tags[2]`

> JavaScript

**Technology 4** — `turkish.content.otherWork[0].tags[3]`

> Ekrana Uyumlu Tasarım

**name** — `turkish.content.otherWork[1].name`

> Cleaning Tracking System

**summary** — `turkish.content.otherWork[1].summary`

> Temizlik operasyonlarının atanması, takibi ve yönetimi için geliştirilen, rol tabanlı bir kurum içi uygulama.

**Technology 1** — `turkish.content.otherWork[1].tags[0]`

> React

**Technology 2** — `turkish.content.otherWork[1].tags[1]`

> Go

**Technology 3** — `turkish.content.otherWork[1].tags[2]`

> MySQL

**name** — `turkish.content.otherWork[2].name`

> Android Sleep Alarm

**summary** — `turkish.content.otherWork[2].summary`

> Mikrofon düzeyini zaman pencereleri üzerinden değerlendiren ve cihaz kilidi açıldığında izleme davranışını sıfırlayan bir Android prototipi.

**Technology 1** — `turkish.content.otherWork[2].tags[0]`

> Kotlin

**Technology 2** — `turkish.content.otherWork[2].tags[1]`

> Android

**Technology 3** — `turkish.content.otherWork[2].tags[2]`

> Ses İzleme

### Contact

Component: [src/components/sections/contact.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/contact.tsx).

**eyebrow** — `turkish.home.contact.eyebrow`

> 06 / İletişim

**title** — `turkish.home.contact.title`

> Birlikte faydalı bir ürün geliştirelim.

**Visible email address** — `src/config/site.ts → siteConfig.email`

> erenkacr@gmail.com

**Email destination** — `src/config/site.ts → siteConfig.contactUrl`

> mailto:erenkacr@gmail.com

**note** — `turkish.home.contact.note`

> Masaüstü ürünleri, full-stack sistemler, otomasyon ve gerçek zamanlı uygulamalar alanındaki yazılım mühendisliği pozisyonları ve iş birlikleriyle ilgileniyorum.

**emailMe** — `turkish.home.contact.emailMe`

> E-posta Gönder

**GitHub link** — `turkish.shared.github`

> GitHub

**Decorative symbol** — `src/components/sections/contact.tsx → external-link indicator (aria-hidden)`

> ↗

**GitHub destination** — `src/config/site.ts → siteConfig.githubUrl`

> https://github.com/Delkevic

**LinkedIn link** — `turkish.shared.linkedin`

> LinkedIn

**Decorative symbol** — `src/components/sections/contact.tsx → external-link indicator (aria-hidden)`

> ↗

**LinkedIn destination** — `src/config/site.ts → siteConfig.linkedinUrl`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**CV download link** — `turkish.shared.downloadCv`

> CV'yi İndir

**CV destination** — `src/config/site.ts → siteConfig.resumePath`

> /resume/eren-kacar-resume.pdf

### Footer

Component: [src/components/layout/site-footer.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-footer.tsx).

**footerIdentity** — `turkish.shared.footerIdentity`

> Eren Kaçar — Yazılım Mühendisi

**systems** — `turkish.shared.systems`

> Masaüstü · Web · Gerçek zamanlı sistemler

**github** — `turkish.shared.github`

> GitHub

**linkedin** — `turkish.shared.linkedin`

> LinkedIn

**email** — `turkish.shared.email`

> E-posta

**GitHub destination** — `src/config/site.ts → siteConfig.githubUrl`

> https://github.com/Delkevic

**LinkedIn destination** — `src/config/site.ts → siteConfig.linkedinUrl`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**Email destination** — `src/config/site.ts → siteConfig.contactUrl`

> mailto:erenkacr@gmail.com

## 2. GuitarSense case study

Route: `/tr/projects/guitarsense`.

### Header and navigation

Component: [src/components/layout/site-header.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-header.tsx).

**Skip link** — `turkish.shared.skipLink`

> İçeriğe geç

**Decorative symbol** — `src/components/layout/site-header.tsx → brand__mark (aria-hidden)`

> EK

**Brand** — `src/config/site.ts → siteConfig.name`

> Eren Kaçar

**English language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> EN

**Decorative symbol** — `src/components/layout/language-switcher.tsx → separator (aria-hidden)`

> |

**Turkish language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> TR

**Navigation 1** — `turkish.shared.navigation[0].label`

> Seçili Projeler

**Navigation destination** — `turkish.shared.navigation[0].href`

> /tr#work

**Navigation 2** — `turkish.shared.navigation[1].label`

> Deneyim

**Navigation destination** — `turkish.shared.navigation[1].href`

> /tr#experience

**Navigation 3** — `turkish.shared.navigation[2].label`

> Yetkinlikler

**Navigation destination** — `turkish.shared.navigation[2].href`

> /tr#skills

**Navigation 4** — `turkish.shared.navigation[3].label`

> Hakkımda

**Navigation destination** — `turkish.shared.navigation[3].href`

> /tr#about

**Navigation 5** — `turkish.shared.navigation[4].label`

> İletişim

**Navigation destination** — `turkish.shared.navigation[4].href`

> /tr#contact

**Link destination** — `turkish.links.home`

> /tr

Language destinations for this page: `/projects/guitarsense` and `/tr/projects/guitarsense`. Source: `getPublicPath(page, locale)` in `src/i18n/routes.ts`. Accessible labels are inventoried in section 7.

### Hero and project facts

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Decorative symbol** — `src/components/views/guitarsense.tsx → back-link indicator (aria-hidden)`

> ←

**Back link** — `turkish.caseStudies.common.back`

> Seçili Projelere Dön

**Link destination** — `turkish.links.work`

> /tr#work

**eyebrow** — `turkish.caseStudies.guitarsense.eyebrow`

> Öne Çıkan Proje

**name** — `turkish.caseStudies.guitarsense.name`

> GuitarSense

**Introduction** — `turkish.content.guitarSenseCaseStudy.introduction`

> Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiğine yönelik bir masaüstü uygulaması.

**Fact 1** — `turkish.content.guitarSenseCaseStudy.facts[0]`

> Masaüstü uygulaması

**Fact 2** — `turkish.content.guitarSenseCaseStudy.facts[1]`

> TÜBİTAK 2209-A destekli

**Fact 3** — `turkish.content.guitarSenseCaseStudy.facts[2]`

> Windows beta sürümü

**Fact 4** — `turkish.content.guitarSenseCaseStudy.facts[3]`

> Electron + Python

### Primary image

Component: [src/components/ui/screenshot-figure.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/ui/screenshot-figure.tsx).

**Practice image caption** — `turkish.content.guitarSenseImages.practiceView.caption`: `null`; no string is rendered.

The practice image is rendered here. Its URL and alt text are in section 7.

### Overview

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Heading** — `turkish.caseStudies.common.overview`

> Genel Bakış

**Paragraph** — `turkish.content.guitarSenseCaseStudy.overview`

> GuitarSense, kullanıcı etkileşimlerine hızlı yanıt vermek üzere tasarlanan bir masaüstü uygulamasında gitar sesi işlemeyi ve etkileşimli pratiği bir araya getirir.

### My role

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Heading** — `turkish.caseStudies.common.role`

> Projedeki Rolüm

**Paragraph** — `turkish.content.guitarSenseCaseStudy.role`

> Uygulamanın masaüstü arayüzünü, ses motoru entegrasyonunu ve temel pratik akışlarını tasarlayıp geliştirdim. Performans, paketleme ve uygulama güvenilirliği üzerinde de çalıştım.

### Core capabilities and image caption

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Heading** — `turkish.caseStudies.common.capabilities`

> Temel Özellikler

**Card 1 heading** — `turkish.content.guitarSenseCaseStudy.capabilities[0].title`

> Gerçek zamanlı gitar sesi

**Card 1 text** — `turkish.content.guitarSenseCaseStudy.capabilities[0].description`

> Ayarlanabilir tonlar ve efektlerle gitar sesi işleme.

**Card 2 heading** — `turkish.content.guitarSenseCaseStudy.capabilities[1].title`

> Etkileşimli pratik

**Card 2 text** — `turkish.content.guitarSenseCaseStudy.capabilities[1].description`

> Gerçek zamanlı geri bildirim sunan, tablatür tabanlı pratik araçları.

**Card 3 heading** — `turkish.content.guitarSenseCaseStudy.capabilities[2].title`

> Masaüstü uygulaması

**Card 3 text** — `turkish.content.guitarSenseCaseStudy.capabilities[2].description`

> Farklı yazılım bileşenlerini tutarlı bir kullanıcı deneyiminde birleştiren, paketlenmiş bir Windows uygulaması.

**Preset editor image caption** — `turkish.content.guitarSenseImages.presetEditor.caption`

> Gitar tonu ve efekt kontrolleri.

### Engineering highlights

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Heading** — `turkish.caseStudies.guitarsense.highlights`

> Mühendislikte Öne Çıkanlar

**Card 1 heading** — `turkish.content.guitarSenseCaseStudy.highlights[0].title`

> Gerçek zamanlı ses performansı

**Card 1 text** — `turkish.content.guitarSenseCaseStudy.highlights[0].body`

> ASIO ve WASAPI backend'lerinde ses yapılandırmalarının performansı karşılaştırıldı. Test edilen 64 örnekli yapılandırmalarda backend tarafından bildirilen değerler ASIO için yaklaşık 6 ms, WASAPI için yaklaşık 46 ms idi.

**Card 1 qualification** — `turkish.content.guitarSenseCaseStudy.highlights[0].qualification`

> Bu değerler backend tarafından bildirilmiştir; bağımsız olarak ölçülmüş uçtan uca gidiş-dönüş gecikmesi değildir.

**Card 2 heading** — `turkish.content.guitarSenseCaseStudy.highlights[1].title`

> Masaüstü entegrasyonu

**Card 2 text** — `turkish.content.guitarSenseCaseStudy.highlights[1].body`

> Electron tabanlı arayüzü, Python ile geliştirilen ses işleme backend'iyle entegre ettim.

**Card 3 heading** — `turkish.content.guitarSenseCaseStudy.highlights[2].title`

> Arayüzün tepki hızı

**Card 3 text** — `turkish.content.guitarSenseCaseStudy.highlights[2].body`

> Pratik sırasında arayüzün hızlı yanıt vermesini sağlamak için sık yapılan arayüz güncellemelerini optimize ettim.

**Card 4 heading** — `turkish.content.guitarSenseCaseStudy.highlights[3].title`

> Paketleme ve güvenilirlik

**Card 4 text** — `turkish.content.guitarSenseCaseStudy.highlights[3].body`

> Uygulama güvenilirliğini gözeterek dağıtılabilir bir Windows beta sürümü hazırlayıp doğruladım.

### Technologies

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Heading** — `turkish.caseStudies.guitarsense.technologies`

> Teknolojiler

**Technology 1** — `turkish.content.guitarSenseCaseStudy.technologies[0]`

> Electron

**Technology 2** — `turkish.content.guitarSenseCaseStudy.technologies[1]`

> React

**Technology 3** — `turkish.content.guitarSenseCaseStudy.technologies[2]`

> TypeScript

**Technology 4** — `turkish.content.guitarSenseCaseStudy.technologies[3]`

> Python

**Technology 5** — `turkish.content.guitarSenseCaseStudy.technologies[4]`

> ZMQ

**Technology 6** — `turkish.content.guitarSenseCaseStudy.technologies[5]`

> PortAudio

**Technology 7** — `turkish.content.guitarSenseCaseStudy.technologies[6]`

> ASIO

**Technology 8** — `turkish.content.guitarSenseCaseStudy.technologies[7]`

> WASAPI

Technology values resolve through `src/data/case-study.ts → guitarSenseCaseStudy.technologies`; no prose is reconstructed from that module.

### Results

Component: [src/components/views/guitarsense.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/guitarsense.tsx).

**Heading** — `turkish.caseStudies.guitarsense.results`

> Sonuçlar

**Result 1** — `turkish.content.guitarSenseCaseStudy.results[0]`

> TÜBİTAK 2209-A desteği

**Result 2** — `turkish.content.guitarSenseCaseStudy.results[1]`

> Paketlenmiş Windows beta sürümü

**Result 3** — `turkish.content.guitarSenseCaseStudy.results[2]`

> Test edilen 64 örnekli yapılandırmalarda backend tarafından bildirilen, ASIO ile yaklaşık 6 ms ve WASAPI ile yaklaşık 46 ms ses değerleri

### Footer

Component: [src/components/layout/site-footer.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-footer.tsx).

**footerIdentity** — `turkish.shared.footerIdentity`

> Eren Kaçar — Yazılım Mühendisi

**systems** — `turkish.shared.systems`

> Masaüstü · Web · Gerçek zamanlı sistemler

**github** — `turkish.shared.github`

> GitHub

**linkedin** — `turkish.shared.linkedin`

> LinkedIn

**email** — `turkish.shared.email`

> E-posta

**GitHub destination** — `src/config/site.ts → siteConfig.githubUrl`

> https://github.com/Delkevic

**LinkedIn destination** — `src/config/site.ts → siteConfig.linkedinUrl`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**Email destination** — `src/config/site.ts → siteConfig.contactUrl`

> mailto:erenkacr@gmail.com

## 3. Nexora case study

Route: `/tr/projects/nexora`.

### Header and navigation

Component: [src/components/layout/site-header.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-header.tsx).

**Skip link** — `turkish.shared.skipLink`

> İçeriğe geç

**Decorative symbol** — `src/components/layout/site-header.tsx → brand__mark (aria-hidden)`

> EK

**Brand** — `src/config/site.ts → siteConfig.name`

> Eren Kaçar

**English language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> EN

**Decorative symbol** — `src/components/layout/language-switcher.tsx → separator (aria-hidden)`

> |

**Turkish language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> TR

**Navigation 1** — `turkish.shared.navigation[0].label`

> Seçili Projeler

**Navigation destination** — `turkish.shared.navigation[0].href`

> /tr#work

**Navigation 2** — `turkish.shared.navigation[1].label`

> Deneyim

**Navigation destination** — `turkish.shared.navigation[1].href`

> /tr#experience

**Navigation 3** — `turkish.shared.navigation[2].label`

> Yetkinlikler

**Navigation destination** — `turkish.shared.navigation[2].href`

> /tr#skills

**Navigation 4** — `turkish.shared.navigation[3].label`

> Hakkımda

**Navigation destination** — `turkish.shared.navigation[3].href`

> /tr#about

**Navigation 5** — `turkish.shared.navigation[4].label`

> İletişim

**Navigation destination** — `turkish.shared.navigation[4].href`

> /tr#contact

**Link destination** — `turkish.links.home`

> /tr

Language destinations for this page: `/projects/nexora` and `/tr/projects/nexora`. Source: `getPublicPath(page, locale)` in `src/i18n/routes.ts`. Accessible labels are inventoried in section 7.

### Hero and project facts

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Decorative symbol** — `src/components/views/nexora.tsx → back-link indicator (aria-hidden)`

> ←

**Back link** — `turkish.caseStudies.common.back`

> Seçili Projelere Dön

**Link destination** — `turkish.links.work`

> /tr#work

**eyebrow** — `turkish.caseStudies.nexora.eyebrow`

> FULL-STACK SOSYAL PLATFORM

**name** — `turkish.caseStudies.nexora.name`

> Nexora

**introduction** — `turkish.caseStudies.nexora.introduction`

> Güvenli hesap akışlarını, gerçek zamanlı mesajlaşmayı, içerik keşfini, kısa formatlı medyayı ve Gemini destekli içerik deneyimlerini bir araya getiren full-stack sosyal platform.

**Fact 1** — `turkish.content.nexoraCaseStudy.facts[0]`

> React frontend

**Fact 2** — `turkish.content.nexoraCaseStudy.facts[1]`

> Go ve Gin backend

**Fact 3** — `turkish.content.nexoraCaseStudy.facts[2]`

> MySQL veri katmanı

**Fact 4** — `turkish.content.nexoraCaseStudy.facts[3]`

> Firebase mesajlaşması

**Fact 5** — `turkish.content.nexoraCaseStudy.facts[4]`

> Gemini entegrasyonu

### Primary image caption

Component: [src/components/ui/screenshot-figure.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/ui/screenshot-figure.tsx).

**Explore image caption** — `turkish.content.nexoraImages.explore.caption`

> Filtreler ve popüler etiketler, içerikleri keşfetmek için farklı başlangıç noktaları sunar.

### Overview

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Heading** — `turkish.caseStudies.common.overview`

> Genel Bakış

**Paragraph** — `turkish.content.nexoraCaseStudy.overview`

> Nexora, modern bir sosyal platformun akış, keşif, kısa formatlı medya, mesajlaşma ve hesap güvenliğini tutarlı bir deneyimde nasıl birleştirebileceğini araştırır. Proje; React arayüzünü, Go backend servislerini, MySQL veri saklama katmanını, Firebase mesajlaşmasını ve Gemini destekli içerik analizini bir araya getirir.

### My role

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Heading** — `turkish.caseStudies.common.role`

> Projedeki Rolüm

**Paragraph** — `turkish.content.nexoraCaseStudy.role`

> Uygulamanın frontend ve backend katmanlarında çalıştım. Hesap akışları, sosyal özellikler, akış ve keşif arayüzleri, mesajlaşma entegrasyonu, veri yönetimi ve yapay zekâ destekli içerik deneyimleri üzerinde görev aldım.

### Capabilities

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Heading** — `turkish.caseStudies.common.capabilities`

> Temel Özellikler

**Card 1 heading** — `turkish.content.nexoraCaseStudy.capabilities[0].title`

> Güvenli hesap akışları

**Card 1 text** — `turkish.content.nexoraCaseStudy.capabilities[0].description`

> Kayıt, e-posta doğrulama, hesaba erişimi kurtarma ve iki faktörlü kimlik doğrulama.

**Card 2 heading** — `turkish.content.nexoraCaseStudy.capabilities[1].title`

> Akış ve keşif

**Card 2 text** — `turkish.content.nexoraCaseStudy.capabilities[1].description`

> Ana akış, arama, Keşfet filtreleri, etiketler ve içeriklere göz atma.

**Card 3 heading** — `turkish.content.nexoraCaseStudy.capabilities[2].title`

> Gerçek zamanlı mesajlaşma

**Card 3 text** — `turkish.content.nexoraCaseStudy.capabilities[2].description`

> Firebase destekli görüşmeler ve çevrimiçi iletişim akışları.

**Card 4 heading** — `turkish.content.nexoraCaseStudy.capabilities[3].title`

> Sosyal etkileşim

**Card 4 text** — `turkish.content.nexoraCaseStudy.capabilities[3].description`

> Gönderiler, yorumlar, bildirimler, beğeniler, kaydedilen içerikler ve profiller.

**Card 5 heading** — `turkish.content.nexoraCaseStudy.capabilities[4].title`

> Kısa formatlı medya

**Card 5 text** — `turkish.content.nexoraCaseStudy.capabilities[4].description`

> Reels içeriklerine göz atma ve içerik oluşturma deneyimleri.

**Card 6 heading** — `turkish.content.nexoraCaseStudy.capabilities[5].title`

> Yapay zekâ destekli deneyimler

**Card 6 text** — `turkish.content.nexoraCaseStudy.capabilities[5].description`

> Gemini destekli içerik analizi ve sohbet desteği.

### Product walkthrough

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**walkthrough** — `turkish.caseStudies.nexora.walkthrough`

> Ürün Turu

**walkthroughIntro** — `turkish.caseStudies.nexora.walkthroughIntro`

> Sosyal platformun hesap güvenliği ve gerçek zamanlı iletişim özelliklerini gösteren seçili arayüzler.

### Walkthrough — account access

Component: [src/components/case-study/product-walkthrough-row.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/case-study/product-walkthrough-row.tsx).

**heading** — `turkish.caseStudies.nexora.authentication.heading`

> Hesaba erişimi koru

**text** — `turkish.caseStudies.nexora.authentication.text`

> E-posta doğrulama ve iki faktörlü kimlik doğrulama, hesap oluşturma ve giriş akışlarına açık doğrulama adımları ekler.

**Image caption** — `turkish.content.nexoraImages.authentication.caption`

> Doğrulama, hesap etkinleştirmeyi kullanıcının tamamladığı açık bir adıma dönüştürür.

### Walkthrough — messaging

Component: [src/components/case-study/product-walkthrough-row.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/case-study/product-walkthrough-row.tsx).

**heading** — `turkish.caseStudies.nexora.messaging.heading`

> Görüşmeleri gerçek zamanlı sürdür

**text** — `turkish.caseStudies.nexora.messaging.text`

> Firebase destekli mesajlaşma; görüşme listelerini, çevrimiçi durumunu ve doğrudan mesaj güncellemelerini bu amaçla tasarlanmış bir arayüzde birleştirir.

**Image caption** — `turkish.content.nexoraImages.messaging.caption`

> Çevrimiçi durumunu, teslim durumunu ve görüşmeleri gerçek zamanlı güncelleyen Firebase destekli doğrudan mesajlaşma.

### Technical architecture and diagram labels

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Heading** — `turkish.caseStudies.nexora.architecture`

> Teknik Mimari

**Resolved client label** — ``${turkish.content.nexoraArchitecture.client} ${turkish.caseStudies.nexora.client}``

> React İstemci

**Decorative symbol** — `src/components/views/nexora.tsx → core architecture arrow (aria-hidden)`

> →

**Resolved API label** — ``${turkish.content.nexoraArchitecture.api} ${turkish.caseStudies.nexora.api}``

> Go / Gin API

**Decorative symbol** — `src/components/views/nexora.tsx → core architecture arrow (aria-hidden)`

> →

**Database** — `turkish.content.nexoraArchitecture.database`

> MySQL

**Service** — `turkish.content.nexoraArchitecture.firebase`

> Firebase

**Service description** — `turkish.caseStudies.nexora.firebaseDescription`

> Gerçek zamanlı mesajlaşma

**Service** — `turkish.content.nexoraArchitecture.gemini`

> Gemini API

**Service description** — `turkish.caseStudies.nexora.geminiDescription`

> İçerik analizi ve sohbet desteği

Fixed architecture identities resolve from `src/data/nexora-architecture.ts`. The two fragment keys used above are inventoried separately in section 5.

### Technical decisions

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Heading** — `turkish.caseStudies.common.decisions`

> Mühendislik Kararları

**Card 1 heading** — `turkish.content.nexoraCaseStudy.decisions[0].title`

> Gerçek zamanlı iletişimi ayrı yönetmek

**Card 1 text** — `turkish.content.nexoraCaseStudy.decisions[0].body`

> Gerçek zamanlı görüşmeler Firebase üzerinden yönetilirken ana uygulama verileri ve backend iş akışları Go ve MySQL üzerinde tutuldu.

**Card 2 heading** — `turkish.content.nexoraCaseStudy.decisions[1].title`

> Hesap güvenliği adımları

**Card 2 text** — `turkish.content.nexoraCaseStudy.decisions[1].body`

> E-posta doğrulama, hesap kurtarma ve iki faktörlü kimlik doğrulama, kullanıcının doğrudan takip edebileceği akışlar olarak tasarlandı.

**Card 3 heading** — `turkish.content.nexoraCaseStudy.decisions[2].title`

> Tutarlı sosyal gezinme

**Card 3 text** — `turkish.content.nexoraCaseStudy.decisions[2].body`

> Akış, Keşfet, Reels, mesajlar, bildirimler ve profiller ortak ve kalıcı bir gezinme yapısı kullanır. Böylece kullanıcılar sosyal iş akışları arasında bağlamı kaybetmeden geçiş yapabilir.

**Card 4 heading** — `turkish.content.nexoraCaseStudy.decisions[3].title`

> Destekleyici bir katman olarak yapay zekâ

**Card 4 text** — `turkish.content.nexoraCaseStudy.decisions[3].body`

> Gemini, içerikleri analiz etmek ve kullanıcılara yardımcı olmak için kullanıldı. Uygulamanın temel sosyal etkileşim ve keşif deneyimleri, tamamen üretilen çıktılara bağımlı olmadan kullanılabilir durumda kaldı.

### Closing summary

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**Heading** — `turkish.caseStudies.nexora.closing`

> Proje Özeti

**Paragraph** — `turkish.content.nexoraCaseStudy.closing`

> Nexora; güvenli hesap akışlarını, sosyal keşfi, Firebase mesajlaşmasını ve yapay zekâ destekli içerik analizi ile keşfini tek bir full-stack üründe birleştirir. Bu proje anlatımı, yayına alma veya kullanım sonuçlarına ilişkin iddialarda bulunmadan, doğrulanmış ürün özelliklerine ve teknik sınırlara odaklanır.

### Footer

Component: [src/components/layout/site-footer.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-footer.tsx).

**footerIdentity** — `turkish.shared.footerIdentity`

> Eren Kaçar — Yazılım Mühendisi

**systems** — `turkish.shared.systems`

> Masaüstü · Web · Gerçek zamanlı sistemler

**github** — `turkish.shared.github`

> GitHub

**linkedin** — `turkish.shared.linkedin`

> LinkedIn

**email** — `turkish.shared.email`

> E-posta

**GitHub destination** — `src/config/site.ts → siteConfig.githubUrl`

> https://github.com/Delkevic

**LinkedIn destination** — `src/config/site.ts → siteConfig.linkedinUrl`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**Email destination** — `src/config/site.ts → siteConfig.contactUrl`

> mailto:erenkacr@gmail.com

## 4. Grade Watcher case study

Route: `/tr/projects/grade-watcher`.

### Header and navigation

Component: [src/components/layout/site-header.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-header.tsx).

**Skip link** — `turkish.shared.skipLink`

> İçeriğe geç

**Decorative symbol** — `src/components/layout/site-header.tsx → brand__mark (aria-hidden)`

> EK

**Brand** — `src/config/site.ts → siteConfig.name`

> Eren Kaçar

**English language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> EN

**Decorative symbol** — `src/components/layout/language-switcher.tsx → separator (aria-hidden)`

> |

**Turkish language link** — `src/components/layout/language-switcher.tsx → locale.toUpperCase()`

> TR

**Navigation 1** — `turkish.shared.navigation[0].label`

> Seçili Projeler

**Navigation destination** — `turkish.shared.navigation[0].href`

> /tr#work

**Navigation 2** — `turkish.shared.navigation[1].label`

> Deneyim

**Navigation destination** — `turkish.shared.navigation[1].href`

> /tr#experience

**Navigation 3** — `turkish.shared.navigation[2].label`

> Yetkinlikler

**Navigation destination** — `turkish.shared.navigation[2].href`

> /tr#skills

**Navigation 4** — `turkish.shared.navigation[3].label`

> Hakkımda

**Navigation destination** — `turkish.shared.navigation[3].href`

> /tr#about

**Navigation 5** — `turkish.shared.navigation[4].label`

> İletişim

**Navigation destination** — `turkish.shared.navigation[4].href`

> /tr#contact

**Link destination** — `turkish.links.home`

> /tr

Language destinations for this page: `/projects/grade-watcher` and `/tr/projects/grade-watcher`. Source: `getPublicPath(page, locale)` in `src/i18n/routes.ts`. Accessible labels are inventoried in section 7.

### Hero and project facts

Component: [src/components/views/grade-watcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/grade-watcher.tsx).

**Decorative symbol** — `src/components/views/grade-watcher.tsx → back-link indicator (aria-hidden)`

> ←

**Back link** — `turkish.caseStudies.common.back`

> Seçili Projelere Dön

**Link destination** — `turkish.links.work`

> /tr#work

**eyebrow** — `turkish.caseStudies.gradeWatcher.eyebrow`

> TARAYICI OTOMASYONU

**name** — `turkish.caseStudies.gradeWatcher.name`

> Grade Watcher

**introduction** — `turkish.caseStudies.gradeWatcher.introduction`

> Akademik sonuçlardaki değişiklikleri izleyen ve yeni sonuçlar tespit edildiğinde Telegram bildirimleri gönderen özel bir otomasyon aracı.

**Fact 1** — `turkish.content.gradeWatcherCaseStudy.facts[0]`

> Python

**Fact 2** — `turkish.content.gradeWatcherCaseStudy.facts[1]`

> Playwright

**Fact 3** — `turkish.content.gradeWatcherCaseStudy.facts[2]`

> Telegram Bot API

**Fact 4** — `turkish.content.gradeWatcherCaseStudy.facts[3]`

> Özel proje

### Architecture diagram / stages

Component: [src/components/ui/automation-flow.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/ui/automation-flow.tsx).

**Stage 1** — `turkish.content.gradeWatcherCaseStudy.architecture[0].label`

> Yerel çalıştırıcı

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Stage 2** — `turkish.content.gradeWatcherCaseStudy.architecture[1].label`

> Playwright tarayıcısı

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Stage 3** — `turkish.content.gradeWatcherCaseStudy.architecture[2].label`

> Oturum açılmış akademik portal

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Stage 4** — `turkish.content.gradeWatcherCaseStudy.architecture[3].label`

> Sonuç ayrıştırıcısı

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Stage 5** — `turkish.content.gradeWatcherCaseStudy.architecture[4].label`

> Durum kaydı karşılaştırması

**Decorative symbol** — `src/components/ui/automation-flow.tsx → arrow (aria-hidden)`

> →

**Stage 6** — `turkish.content.gradeWatcherCaseStudy.architecture[5].label`

> Telegram Bot API

### Overview

Component: [src/components/views/grade-watcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/grade-watcher.tsx).

**Heading** — `turkish.caseStudies.common.overview`

> Genel Bakış

**Paragraph** — `turkish.content.gradeWatcherCaseStudy.overview`

> Yeni yayımlanan sonuçları görmek için akademik bir portalı tekrar tekrar kontrol etmek, küçük ama dikkat dağıtan bir manuel iştir. Grade Watcher, oturum açılmış tarayıcıdaki iş akışını otomatikleştirir, görünür sonuç durumunu normalleştirir ve yalnızca anlamlı bir değişiklik tespit edildiğinde bildirim gönderir.

### My role

Component: [src/components/views/grade-watcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/grade-watcher.tsx).

**Heading** — `turkish.caseStudies.common.role`

> Projedeki Rolüm

**Paragraph** — `turkish.content.gradeWatcherCaseStudy.role`

> Tarayıcı oturumlarının yönetimi, sonuçların ayrıştırılması, durum karşılaştırması, izleme modunda çalışma ve Telegram bildirimleri dâhil olmak üzere otomasyon akışını tasarlayıp geliştirdim.

### Workflow

Component: [src/components/views/grade-watcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/grade-watcher.tsx).

**Heading** — `turkish.caseStudies.gradeWatcher.workflow`

> Nasıl Çalışır?

**Step number** — `GradeWatcherView → String(index + 1).padStart(2, "0") (aria-hidden)`

> 01

**title** — `turkish.content.gradeWatcherCaseStudy.workflow[0].title`

> İzleyiciyi başlat

**body** — `turkish.content.gradeWatcherCaseStudy.workflow[0].body`

> Özel araç, yapılandırılmış hesap ve bildirim ayarlarıyla yerel olarak başlatılır.

**Step number** — `GradeWatcherView → String(index + 1).padStart(2, "0") (aria-hidden)`

> 02

**title** — `turkish.content.gradeWatcherCaseStudy.workflow[1].title`

> Kimliği doğrulanmış bir oturum aç

**body** — `turkish.content.gradeWatcherCaseStudy.workflow[1].body`

> Playwright, akademik portalda gezinir ve gerekli tarayıcı oturumunu sürdürür.

**Step number** — `GradeWatcherView → String(index + 1).padStart(2, "0") (aria-hidden)`

> 03

**title** — `turkish.content.gradeWatcherCaseStudy.workflow[2].title`

> Sonuç durumunu oku

**body** — `turkish.content.gradeWatcherCaseStudy.workflow[2].body`

> Görünür sonuç satırları ayrıştırılır ve tutarlı bir iç veri biçimine dönüştürülür.

**Step number** — `GradeWatcherView → String(index + 1).padStart(2, "0") (aria-hidden)`

> 04

**title** — `turkish.content.gradeWatcherCaseStudy.workflow[3].title`

> Önceki durum kaydıyla karşılaştır

**body** — `turkish.content.gradeWatcherCaseStudy.workflow[3].body`

> Anlamlı eklemeleri veya güncellemeleri belirlemek için mevcut durum, son bilinen durumla karşılaştırılır.

**Step number** — `GradeWatcherView → String(index + 1).padStart(2, "0") (aria-hidden)`

> 05

**title** — `turkish.content.gradeWatcherCaseStudy.workflow[4].title`

> Telegram bildirimi gönder

**body** — `turkish.content.gradeWatcherCaseStudy.workflow[4].body`

> Yalnızca yeni bir sonuç veya ilgili bir değişiklik tespit edildiğinde bildirim gönderilir.

**Step number** — `GradeWatcherView → String(index + 1).padStart(2, "0") (aria-hidden)`

> 06

**title** — `turkish.content.gradeWatcherCaseStudy.workflow[5].title`

> İzlemeye devam et

**body** — `turkish.content.gradeWatcherCaseStudy.workflow[5].body`

> İzleme modu, aynı bildirimi tekrar göndermeden süreci yineler.

### Technical decisions

Component: [src/components/views/grade-watcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/grade-watcher.tsx).

**Heading** — `turkish.caseStudies.common.decisions`

> Mühendislik Kararları

**Card 1 heading** — `turkish.content.gradeWatcherCaseStudy.decisions[0].title`

> Oturum sürekliliği

**Card 1 text** — `turkish.content.gradeWatcherCaseStudy.decisions[0].body`

> İş akışı, portalda gezinme ve yönlendirmeler sırasında tarayıcı durumunu koruyarak oturum sürekliliğini sağlar.

**Card 2 heading** — `turkish.content.gradeWatcherCaseStudy.decisions[1].title`

> Dayanıklı sonuç ayrıştırma

**Card 2 text** — `turkish.content.gradeWatcherCaseStudy.decisions[1].body`

> Sonuç verileri karşılaştırılmadan önce normalleştirilir. Böylece yalnızca sunumdan kaynaklanan farklılıklar otomatik olarak yanlış değişiklik tespitlerine dönüşmez.

**Card 3 heading** — `turkish.content.gradeWatcherCaseStudy.decisions[2].title`

> Tekrarlanmayan bildirimler

**Card 3 text** — `turkish.content.gradeWatcherCaseStudy.decisions[2].body`

> Daha önce görülen sonuç durumu saklanır; böylece aynı güncelleme tekrar tekrar Telegram mesajı gönderilmesine yol açmaz.

**Card 4 heading** — `turkish.content.gradeWatcherCaseStudy.decisions[3].title`

> Özel yapılandırma

**Card 4 text** — `turkish.content.gradeWatcherCaseStudy.decisions[3].body`

> Hesap ve bildirim yapılandırması, kamuya açık portfolyo içeriğinin dışında tutulur. Projenin kaynak kodu deposuna siteden erişim verilmez.

### Status

Component: [src/components/views/grade-watcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/grade-watcher.tsx).

**Heading** — `turkish.caseStudies.gradeWatcher.status`

> Mevcut Durum

**Status item 1** — `turkish.content.gradeWatcherCaseStudy.status[0]`

> Özel yardımcı araç projesi

**Status item 2** — `turkish.content.gradeWatcherCaseStudy.status[1]`

> Yerel olarak ve izleme modunda çalışma

**Status item 3** — `turkish.content.gradeWatcherCaseStudy.status[2]`

> Telegram bildirim akışı geliştirildi

**Status item 4** — `turkish.content.gradeWatcherCaseStudy.status[3]`

> Kamuya açık kaynak kodu deposu veya canlı demo yok

**Status description** — `turkish.content.gradeWatcherCaseStudy.statusSummary`

> Grade Watcher, özel kullanım için geliştirilen bir yardımcı araçtır. Bu proje anlatımı, hesap bilgilerini veya portala özgü iç ayrıntıları paylaşmadan otomasyon tasarımına ve güvenilirlik kararlarına odaklanır.

### Footer

Component: [src/components/layout/site-footer.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-footer.tsx).

**footerIdentity** — `turkish.shared.footerIdentity`

> Eren Kaçar — Yazılım Mühendisi

**systems** — `turkish.shared.systems`

> Masaüstü · Web · Gerçek zamanlı sistemler

**github** — `turkish.shared.github`

> GitHub

**linkedin** — `turkish.shared.linkedin`

> LinkedIn

**email** — `turkish.shared.email`

> E-posta

**GitHub destination** — `src/config/site.ts → siteConfig.githubUrl`

> https://github.com/Delkevic

**LinkedIn destination** — `src/config/site.ts → siteConfig.linkedinUrl`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**Email destination** — `src/config/site.ts → siteConfig.contactUrl`

> mailto:erenkacr@gmail.com

## 5. Shared UI

### Navigation, language switcher and global labels

Component: [src/components/layout/language-switcher.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/language-switcher.tsx).

**skipLink** — `turkish.shared.skipLink`

> İçeriğe geç

**homeLabel** — `turkish.shared.homeLabel`

> Eren Kaçar, ana sayfa

**primaryNavigation** — `turkish.shared.primaryNavigation`

> Ana gezinme

**languageNavigation** — `turkish.shared.languageNavigation`

> Dil seçimi

**englishVersion** — `turkish.shared.englishVersion`

> Bu sayfanın İngilizce sürümünü görüntüle

**turkishVersion** — `turkish.shared.turkishVersion`

> Bu sayfanın Türkçe sürümünü görüntüle

**label** — `turkish.shared.navigation[0].label`

> Seçili Projeler

**href** — `turkish.shared.navigation[0].href`

> /tr#work

**label** — `turkish.shared.navigation[1].label`

> Deneyim

**href** — `turkish.shared.navigation[1].href`

> /tr#experience

**label** — `turkish.shared.navigation[2].label`

> Yetkinlikler

**href** — `turkish.shared.navigation[2].href`

> /tr#skills

**label** — `turkish.shared.navigation[3].label`

> Hakkımda

**href** — `turkish.shared.navigation[3].href`

> /tr#about

**label** — `turkish.shared.navigation[4].label`

> İletişim

**href** — `turkish.shared.navigation[4].href`

> /tr#contact

Visible language tokens are `EN`, `|`, `TR`, as shown in each page's header. They resolve from the enabled `en` / `tr` locales and the literal separator; the current Turkish link receives `aria-current="page"`.

| Page | EN destination | TR destination |
| --- | --- | --- |
| home | `/` | `/tr` |
| guitarsense | `/projects/guitarsense` | `/tr/projects/guitarsense` |
| nexora | `/projects/nexora` | `/tr/projects/nexora` |
| grade-watcher | `/projects/grade-watcher` | `/tr/projects/grade-watcher` |

### Buttons, back links, downloads and link labels

Component: [src/components/sections/hero.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/sections/hero.tsx).

**readCaseStudy** — `turkish.shared.readCaseStudy`

> Proje Detaylarını İncele

**viewProject** — `turkish.shared.viewProject`

> Projeyi İncele

**downloadCv** — `turkish.shared.downloadCv`

> CV'yi İndir

**downloadCvLabel** — `turkish.shared.downloadCvLabel`

> Eren Kaçar'ın CV'sini PDF olarak indir

**github** — `turkish.shared.github`

> GitHub

**linkedin** — `turkish.shared.linkedin`

> LinkedIn

**email** — `turkish.shared.email`

> E-posta

**explore** — `turkish.home.hero.explore`

> Seçili Projeleri Keşfet

**about** — `turkish.home.hero.about`

> Hakkımda

**Contact email action** — `turkish.home.contact.emailMe`

> E-posta Gönder

**Case-study back link** — `turkish.caseStudies.common.back`

> Seçili Projelere Dön

**home** — `turkish.links.home`

> /tr

**work** — `turkish.links.work`

> /tr#work

**about** — `turkish.links.about`

> /tr#about

**Shared CV destination** — `src/config/site.ts → siteConfig.resumePath`

> /resume/eren-kacar-resume.pdf

The download label refers to the shared existing English PDF; no Turkish CV text is authored. `/cv` is the shared inline-PDF endpoint, not a translated page.

### Footer labels

Component: [src/components/layout/site-footer.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/site-footer.tsx).

**footerIdentity** — `turkish.shared.footerIdentity`

> Eren Kaçar — Yazılım Mühendisi

**systems** — `turkish.shared.systems`

> Masaüstü · Web · Gerçek zamanlı sistemler

**footerLinks** — `turkish.shared.footerLinks`

> Alt bilgi profil bağlantıları

**github** — `turkish.shared.github`

> GitHub

**linkedin** — `turkish.shared.linkedin`

> LinkedIn

**email** — `turkish.shared.email`

> E-posta

### Accessible list-label templates

Component: [src/i18n/format.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/format.ts).

**technologies** — `turkish.shared.technologies`

> {name} teknolojileri

**proofPoints** — `turkish.shared.proofPoints`

> {name} projesinin öne çıkan yönleri

**featurePoints** — `turkish.shared.featurePoints`

> {name} özellikleri

**experienceTechnologies** — `turkish.shared.experienceTechnologies`

> {name} bünyesinde kullanılan teknolojiler

**homepageAutomationLabel** — `turkish.shared.homepageAutomationLabel`

> Grade Watcher otomasyon akışı

These `{name}` values are the literal source templates. Their actual resolved usages are listed individually in section 7.

### Nexora architecture fragments

Component: [src/components/views/nexora.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/nexora.tsx).

**client** — `turkish.caseStudies.nexora.client`

> İstemci

**api** — `turkish.caseStudies.nexora.api`

> API

**client** — `turkish.content.nexoraArchitecture.client`

> React

**api** — `turkish.content.nexoraArchitecture.api`

> Go / Gin

These fragments are rendered as `React İstemci` and `Go / Gin API`, shown with their construction in section 3.

### Error-page copy — defined Turkish segment view

Component: [src/components/views/not-found.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/views/not-found.tsx).

**eyebrow** — `turkish.notFound.eyebrow`

> Sayfaya ulaşılamıyor

**code** — `turkish.notFound.code`

> 404

**title** — `turkish.notFound.title`

> Sayfa bulunamadı

**description** — `turkish.notFound.description`

> İstediğiniz sayfa mevcut değil. Ana sayfaya dönebilir veya seçili projelerin detaylarını inceleyebilirsiniz.

**home** — `turkish.notFound.home`

> Ana Sayfaya Dön

**work** — `turkish.notFound.work`

> Seçili Projeleri İncele

Source wrapper: `src/app/tr/not-found.tsx`. Recovery destinations are `/tr` and `/tr#work`. This is the complete implemented Turkish dictionary/view copy, not the content currently served for arbitrary unknown `/tr/...` URLs. Those URLs use `src/app/global-not-found.tsx`, which explicitly renders the English dictionary with an English document language. This existing routing limitation is not a missing Turkish dictionary string.

## 6. Metadata

### Root defaults, title template and structured-data labels

Component: [src/i18n/metadata.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/metadata.ts).

**homeTitle** — `turkish.metadata.homeTitle`

> Eren Kaçar — Yazılım Mühendisi

**titleTemplate** — `turkish.metadata.titleTemplate`

> %s — Eren Kaçar

**description** — `turkish.metadata.description`

> Ürün mimarisi, otomasyon, ses sistemleri, performans ve güvenlik alanlarında çalışarak masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiren yazılım mühendisi.

**personJobTitle** — `turkish.metadata.personJobTitle`

> Yazılım Mühendisi

**alumni** — `turkish.metadata.alumni`

> Trakya Üniversitesi

**Application name** — `src/i18n/metadata.ts → siteConfig.name`

> Eren Kaçar

**Author name** — `src/i18n/metadata.ts → siteConfig.name`

> Eren Kaçar

**Creator** — `src/i18n/metadata.ts → siteConfig.name`

> Eren Kaçar

**Open Graph site name (homepage)** — `src/i18n/metadata.ts → siteConfig.name`

> Eren Kaçar

**Person website URL** — `src/components/views/home.tsx → Person.url`

> https://www.erenkacar.com

**Person contact** — `src/components/views/home.tsx → Person.email`

> mailto:erenkacr@gmail.com

**GitHub profile** — `src/components/views/home.tsx → Person.sameAs[0]`

> https://github.com/Delkevic

**LinkedIn profile** — `src/components/views/home.tsx → Person.sameAs[1]`

> https://www.linkedin.com/in/eren-kacar-7bb143251/

**Resolved Turkish WebSite URL** — `src/components/views/home.tsx → `${siteConfig.siteUrl}/tr``

> https://www.erenkacar.com/tr

**WebSite language** — `src/components/views/home.tsx → dictionary.locale`

> tr

### Page metadata — https://www.erenkacar.com/tr

Component: [src/i18n/metadata.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/metadata.ts).

**Title source value** — `turkish.metadata.homeTitle`

> Eren Kaçar — Yazılım Mühendisi

**Resolved HTML title** — `turkish.metadata.homeTitle`

> Eren Kaçar — Yazılım Mühendisi

**Meta description** — `turkish.metadata.description`

> Ürün mimarisi, otomasyon, ses sistemleri, performans ve güvenlik alanlarında çalışarak masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiren yazılım mühendisi.

**Open Graph title** — `turkish.metadata.homeTitle`

> Eren Kaçar — Yazılım Mühendisi

**Open Graph description** — `turkish.metadata.description`

> Ürün mimarisi, otomasyon, ses sistemleri, performans ve güvenlik alanlarında çalışarak masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiren yazılım mühendisi.

**Open Graph URL** — `Resolved createRootMetadata/createProjectMetadata → openGraph.url`

> https://www.erenkacar.com/tr

**Open Graph locale** — `src/i18n/metadata.ts → openGraphLocales.tr`

> tr_TR

**Open Graph alternate locale** — `src/i18n/metadata.ts → alternateLocale`

> en_US

**Open Graph image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/home

**Open Graph image description** — `turkish.social.home.alt`

> Eren Kaçar — Yazılım Mühendisi

**Twitter title** — `turkish.metadata.homeTitle`

> Eren Kaçar — Yazılım Mühendisi

**Twitter description** — `turkish.metadata.description`

> Ürün mimarisi, otomasyon, ses sistemleri, performans ve güvenlik alanlarında çalışarak masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiren yazılım mühendisi.

**Twitter image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/twitter

**Twitter image description** — `turkish.social.home.alt`

> Eren Kaçar — Yazılım Mühendisi

Canonical: `https://www.erenkacar.com/tr`. Language alternates: en `https://www.erenkacar.com/`; tr `https://www.erenkacar.com/tr`; x-default `https://www.erenkacar.com/`. These URLs resolve from the current route registry and production origin.

### Page metadata — https://www.erenkacar.com/tr/projects/guitarsense

Component: [src/i18n/metadata.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/metadata.ts).

**Title source value** — `turkish.metadata.guitarsense.title`

> GuitarSense

**Resolved HTML title** — `turkish.metadata.guitarsense.title + turkish.metadata.titleTemplate (Next.js title resolution)`

> GuitarSense — Eren Kaçar

**Meta description** — `turkish.metadata.guitarsense.description`

> Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiğine yönelik bir masaüstü uygulaması.

**Open Graph title** — `turkish.metadata.guitarsense.socialTitle`

> GuitarSense — Eren Kaçar

**Open Graph description** — `turkish.metadata.guitarsense.description`

> Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiğine yönelik bir masaüstü uygulaması.

**Open Graph URL** — `Resolved createRootMetadata/createProjectMetadata → openGraph.url`

> https://www.erenkacar.com/tr/projects/guitarsense

**Open Graph locale** — `src/i18n/metadata.ts → openGraphLocales.tr`

> tr_TR

**Open Graph alternate locale** — `src/i18n/metadata.ts → alternateLocale`

> en_US

**Open Graph image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/guitarsense

**Open Graph image description** — `turkish.social.guitarsense.alt`

> GuitarSense — Gitar pratiği için masaüstü uygulaması

**Twitter title** — `turkish.metadata.guitarsense.socialTitle`

> GuitarSense — Eren Kaçar

**Twitter description** — `turkish.metadata.guitarsense.description`

> Gerçek zamanlı ses işlemeyi, gitar efektlerini ve etkileşimli pratik araçlarını bir araya getiren, gitar pratiğine yönelik bir masaüstü uygulaması.

**Twitter image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/guitarsense

**Twitter image description** — `turkish.social.guitarsense.alt`

> GuitarSense — Gitar pratiği için masaüstü uygulaması

Canonical: `https://www.erenkacar.com/tr/projects/guitarsense`. Language alternates: en `https://www.erenkacar.com/projects/guitarsense`; tr `https://www.erenkacar.com/tr/projects/guitarsense`; x-default `https://www.erenkacar.com/projects/guitarsense`. These URLs resolve from the current route registry and production origin.

### Page metadata — https://www.erenkacar.com/tr/projects/nexora

Component: [src/i18n/metadata.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/metadata.ts).

**Title source value** — `turkish.metadata.nexora.title`

> Nexora

**Resolved HTML title** — `turkish.metadata.nexora.title + turkish.metadata.titleTemplate (Next.js title resolution)`

> Nexora — Eren Kaçar

**Meta description** — `turkish.metadata.nexora.description`

> React, Go, MySQL, Firebase ve Gemini destekli içerik deneyimleriyle geliştirilen full-stack sosyal platform.

**Open Graph title** — `turkish.metadata.nexora.socialTitle`

> Nexora — Eren Kaçar

**Open Graph description** — `turkish.metadata.nexora.description`

> React, Go, MySQL, Firebase ve Gemini destekli içerik deneyimleriyle geliştirilen full-stack sosyal platform.

**Open Graph URL** — `Resolved createRootMetadata/createProjectMetadata → openGraph.url`

> https://www.erenkacar.com/tr/projects/nexora

**Open Graph locale** — `src/i18n/metadata.ts → openGraphLocales.tr`

> tr_TR

**Open Graph alternate locale** — `src/i18n/metadata.ts → alternateLocale`

> en_US

**Open Graph image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/nexora

**Open Graph image description** — `turkish.social.nexora.alt`

> Nexora — Full-stack sosyal platform

**Twitter title** — `turkish.metadata.nexora.socialTitle`

> Nexora — Eren Kaçar

**Twitter description** — `turkish.metadata.nexora.description`

> React, Go, MySQL, Firebase ve Gemini destekli içerik deneyimleriyle geliştirilen full-stack sosyal platform.

**Twitter image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/nexora

**Twitter image description** — `turkish.social.nexora.alt`

> Nexora — Full-stack sosyal platform

Canonical: `https://www.erenkacar.com/tr/projects/nexora`. Language alternates: en `https://www.erenkacar.com/projects/nexora`; tr `https://www.erenkacar.com/tr/projects/nexora`; x-default `https://www.erenkacar.com/projects/nexora`. These URLs resolve from the current route registry and production origin.

### Page metadata — https://www.erenkacar.com/tr/projects/grade-watcher

Component: [src/i18n/metadata.ts](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/i18n/metadata.ts).

**Title source value** — `turkish.metadata["grade-watcher"].title`

> Grade Watcher

**Resolved HTML title** — `turkish.metadata["grade-watcher"].title + turkish.metadata.titleTemplate (Next.js title resolution)`

> Grade Watcher — Eren Kaçar

**Meta description** — `turkish.metadata["grade-watcher"].description`

> Akademik sonuçlardaki değişiklikleri izleyip Telegram bildirimleri gönderen, Playwright tabanlı özel bir otomasyon projesi.

**Open Graph title** — `turkish.metadata["grade-watcher"].socialTitle`

> Grade Watcher — Eren Kaçar

**Open Graph description** — `turkish.metadata["grade-watcher"].description`

> Akademik sonuçlardaki değişiklikleri izleyip Telegram bildirimleri gönderen, Playwright tabanlı özel bir otomasyon projesi.

**Open Graph URL** — `Resolved createRootMetadata/createProjectMetadata → openGraph.url`

> https://www.erenkacar.com/tr/projects/grade-watcher

**Open Graph locale** — `src/i18n/metadata.ts → openGraphLocales.tr`

> tr_TR

**Open Graph alternate locale** — `src/i18n/metadata.ts → alternateLocale`

> en_US

**Open Graph image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/grade-watcher

**Open Graph image description** — `turkish.social["grade-watcher"].alt`

> Grade Watcher — Özel tarayıcı otomasyonu

**Twitter title** — `turkish.metadata["grade-watcher"].socialTitle`

> Grade Watcher — Eren Kaçar

**Twitter description** — `turkish.metadata["grade-watcher"].description`

> Akademik sonuçlardaki değişiklikleri izleyip Telegram bildirimleri gönderen, Playwright tabanlı özel bir otomasyon projesi.

**Twitter image URL** — `src/i18n/social-images.ts + metadataBase`

> https://www.erenkacar.com/social/tr/grade-watcher

**Twitter image description** — `turkish.social["grade-watcher"].alt`

> Grade Watcher — Özel tarayıcı otomasyonu

Canonical: `https://www.erenkacar.com/tr/projects/grade-watcher`. Language alternates: en `https://www.erenkacar.com/projects/grade-watcher`; tr `https://www.erenkacar.com/tr/projects/grade-watcher`; x-default `https://www.erenkacar.com/projects/grade-watcher`. These URLs resolve from the current route registry and production origin.

### Social-image source strings

Component: [src/components/metadata/social-card.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/metadata/social-card.tsx).

**brand** — `turkish.social.brand`

> Eren Kaçar · Portfolyo

**supportingLine** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

**title** — `turkish.social.home.title`

> Eren Kaçar

**label** — `turkish.social.home.label`

> Yazılım Mühendisi

**alt** — `turkish.social.home.alt`

> Eren Kaçar — Yazılım Mühendisi

**title** — `turkish.social.guitarsense.title`

> GuitarSense

**label** — `turkish.social.guitarsense.label`

> Gitar pratiği için masaüstü uygulaması

**alt** — `turkish.social.guitarsense.alt`

> GuitarSense — Gitar pratiği için masaüstü uygulaması

**title** — `turkish.social.nexora.title`

> Nexora

**label** — `turkish.social.nexora.label`

> Full-stack sosyal platform

**alt** — `turkish.social.nexora.alt`

> Nexora — Full-stack sosyal platform

**title** — `turkish.social["grade-watcher"].title`

> Grade Watcher

**label** — `turkish.social["grade-watcher"].label`

> Özel tarayıcı otomasyonu

**alt** — `turkish.social["grade-watcher"].alt`

> Grade Watcher — Özel tarayıcı otomasyonu

### Resolved text drawn in each Turkish social image

Component: [src/components/metadata/social-card.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/metadata/social-card.tsx).

#### /social/tr/home

Route handler: `src/app/social/tr/home/route.ts`. Entries follow the renderer's text order; the supporting line appears twice.

**Brand (resolved uppercase)** — `turkish.social.brand.toLocaleUpperCase("tr-TR")`

> EREN KAÇAR · PORTFOLYO

**Label (resolved uppercase)** — `turkish.social.home.label.toLocaleUpperCase("tr-TR")`

> YAZILIM MÜHENDİSİ

**Title** — `turkish.social.home.title`

> Eren Kaçar

**Main supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

**Footer domain** — `src/config/site.ts → siteConfig.displayDomain`

> erenkacar.com

**Footer supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

#### /social/tr/twitter

Route handler: `src/app/social/tr/twitter/route.ts`. Entries follow the renderer's text order; the supporting line appears twice.

**Brand (resolved uppercase)** — `turkish.social.brand.toLocaleUpperCase("tr-TR")`

> EREN KAÇAR · PORTFOLYO

**Label (resolved uppercase)** — `turkish.social.home.label.toLocaleUpperCase("tr-TR")`

> YAZILIM MÜHENDİSİ

**Title** — `turkish.social.home.title`

> Eren Kaçar

**Main supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

**Footer domain** — `src/config/site.ts → siteConfig.displayDomain`

> erenkacar.com

**Footer supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

#### /social/tr/guitarsense

Route handler: `src/app/social/tr/guitarsense/route.ts`. Entries follow the renderer's text order; the supporting line appears twice.

**Brand (resolved uppercase)** — `turkish.social.brand.toLocaleUpperCase("tr-TR")`

> EREN KAÇAR · PORTFOLYO

**Label (resolved uppercase)** — `turkish.social.guitarsense.label.toLocaleUpperCase("tr-TR")`

> GİTAR PRATİĞİ İÇİN MASAÜSTÜ UYGULAMASI

**Title** — `turkish.social.guitarsense.title`

> GuitarSense

**Main supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

**Footer domain** — `src/config/site.ts → siteConfig.displayDomain`

> erenkacar.com

**Footer supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

#### /social/tr/nexora

Route handler: `src/app/social/tr/nexora/route.ts`. Entries follow the renderer's text order; the supporting line appears twice.

**Brand (resolved uppercase)** — `turkish.social.brand.toLocaleUpperCase("tr-TR")`

> EREN KAÇAR · PORTFOLYO

**Label (resolved uppercase)** — `turkish.social.nexora.label.toLocaleUpperCase("tr-TR")`

> FULL-STACK SOSYAL PLATFORM

**Title** — `turkish.social.nexora.title`

> Nexora

**Main supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

**Footer domain** — `src/config/site.ts → siteConfig.displayDomain`

> erenkacar.com

**Footer supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

#### /social/tr/grade-watcher

Route handler: `src/app/social/tr/grade-watcher/route.ts`. Entries follow the renderer's text order; the supporting line appears twice.

**Brand (resolved uppercase)** — `turkish.social.brand.toLocaleUpperCase("tr-TR")`

> EREN KAÇAR · PORTFOLYO

**Label (resolved uppercase)** — `turkish.social["grade-watcher"].label.toLocaleUpperCase("tr-TR")`

> ÖZEL TARAYICI OTOMASYONU

**Title** — `turkish.social["grade-watcher"].title`

> Grade Watcher

**Main supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

**Footer domain** — `src/config/site.ts → siteConfig.displayDomain`

> erenkacar.com

**Footer supporting line** — `turkish.social.supportingLine`

> Masaüstü · Web · Gerçek zamanlı sistemler

## 7. Accessibility

### Image alt text and image-source inventory

Component: [src/components/ui/screenshot-figure.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/ui/screenshot-figure.tsx).

#### guitarSenseImages.library

**Image URL** — `turkish.content.guitarSenseImages.library.src`

> /images/projects/guitarsense/library.png

**Alt text** — `turkish.content.guitarSenseImages.library.alt`

> Kaydedilmiş pratik projelerini gösteren GuitarSense kütüphanesi

**Caption (also inventoried at its page position)** — `turkish.content.guitarSenseImages.library.caption`: `null`; no string is rendered.

#### guitarSenseImages.practiceView

**Image URL** — `turkish.content.guitarSenseImages.practiceView.src`

> /images/projects/guitarsense/practice-view.png

**Alt text** — `turkish.content.guitarSenseImages.practiceView.alt`

> Tablatür, oynatma kontrolleri ve pratik geri bildirimi içeren GuitarSense pratik ekranı

**Caption (also inventoried at its page position)** — `turkish.content.guitarSenseImages.practiceView.caption`: `null`; no string is rendered.

#### guitarSenseImages.presetEditor

**Image URL** — `turkish.content.guitarSenseImages.presetEditor.src`

> /images/projects/guitarsense/preset-editor.png

**Alt text** — `turkish.content.guitarSenseImages.presetEditor.alt`

> Gitar tonu ve efekt kontrollerini gösteren GuitarSense preset düzenleyicisi

**Caption (also inventoried at its page position)** — `turkish.content.guitarSenseImages.presetEditor.caption`

> Gitar tonu ve efekt kontrolleri.

#### nexoraImages.homeFeed

**Image URL** — `turkish.content.nexoraImages.homeFeed.src`

> /images/projects/nexora/ana-ekran.png

**Alt text** — `turkish.content.nexoraImages.homeFeed.alt`

> Yapay zekâ destekli içerik analizi ve Reels önizlemesi içeren Nexora ana akışı

**Caption (also inventoried at its page position)** — `turkish.content.nexoraImages.homeFeed.caption`: `null`; no string is rendered.

#### nexoraImages.explore

**Image URL** — `turkish.content.nexoraImages.explore.src`

> /images/projects/nexora/feed.png

**Alt text** — `turkish.content.nexoraImages.explore.alt`

> Filtreler, popüler etiketler ve içerik ızgarası içeren Nexora Keşfet arayüzü

**Caption (also inventoried at its page position)** — `turkish.content.nexoraImages.explore.caption`

> Filtreler ve popüler etiketler, içerikleri keşfetmek için farklı başlangıç noktaları sunar.

#### nexoraImages.authentication

**Image URL** — `turkish.content.nexoraImages.authentication.src`

> /images/projects/nexora/2fa.png

**Alt text** — `turkish.content.nexoraImages.authentication.alt`

> Altı haneli kod isteyen Nexora e-posta doğrulama arayüzü

**Caption (also inventoried at its page position)** — `turkish.content.nexoraImages.authentication.caption`

> Doğrulama, hesap etkinleştirmeyi kullanıcının tamamladığı açık bir adıma dönüştürür.

#### nexoraImages.messaging

**Image URL** — `turkish.content.nexoraImages.messaging.src`

> /images/projects/nexora/messaging.png

**Alt text** — `turkish.content.nexoraImages.messaging.alt`

> Çevrimiçi bir demo görüşmesini ve gerçek zamanlı mesaj güncellemelerini gösteren Nexora doğrudan mesajlaşma arayüzü

**Caption (also inventoried at its page position)** — `turkish.content.nexoraImages.messaging.caption`

> Çevrimiçi durumunu, teslim durumunu ve görüşmeleri gerçek zamanlı güncelleyen Firebase destekli doğrudan mesajlaşma.

The homepage Nexora card uses the same `localizedNexoraImages.homeFeed` object under this additional dictionary key:

**src** — `turkish.content.selectedProjects[0].image.src`

> /images/projects/nexora/ana-ekran.png

**alt** — `turkish.content.selectedProjects[0].image.alt`

> Yapay zekâ destekli içerik analizi ve Reels önizlemesi içeren Nexora ana akışı

**caption** — `turkish.content.selectedProjects[0].image.caption`: `null`; no string is rendered.

### Actual ARIA / image-label usages, in page order

Component: [src/components/layout/document-shell.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/document-shell.tsx).

#### https://www.erenkacar.com/tr

**Label 1** — `turkish.shared.homeLabel`

> Eren Kaçar, ana sayfa

**Label 2** — `turkish.shared.languageNavigation`

> Dil seçimi

**Label 3** — `turkish.shared.englishVersion`

> Bu sayfanın İngilizce sürümünü görüntüle

**Label 4** — `turkish.shared.turkishVersion`

> Bu sayfanın Türkçe sürümünü görüntüle

**Label 5** — `turkish.shared.primaryNavigation`

> Ana gezinme

**Label 6** — `turkish.home.hero.profileLinks`

> Profil ve CV bağlantıları

**Label 7** — `turkish.shared.downloadCvLabel`

> Eren Kaçar'ın CV'sini PDF olarak indir

**Label 8** — `turkish.home.hero.focusTitle`

> Şu anki odağım

**Label 9** — `turkish.content.guitarSenseImages.library.alt`

> Kaydedilmiş pratik projelerini gösteren GuitarSense kütüphanesi

**Label 10 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.proofPoints, turkish.content.featuredProject.name)`

> GuitarSense projesinin öne çıkan yönleri

**Label 11 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.technologies, turkish.content.featuredProject.name)`

> GuitarSense teknolojileri

**Label 12** — `turkish.content.nexoraImages.homeFeed.alt`

> Yapay zekâ destekli içerik analizi ve Reels önizlemesi içeren Nexora ana akışı

**Label 13 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.featurePoints, turkish.content.selectedProjects[0].name)`

> Nexora özellikleri

**Label 14 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.technologies, turkish.content.selectedProjects[0].name)`

> Nexora teknolojileri

**Label 15** — `turkish.shared.homepageAutomationLabel`

> Grade Watcher otomasyon akışı

**Label 16 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.featurePoints, turkish.content.selectedProjects[1].name)`

> Grade Watcher özellikleri

**Label 17 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.technologies, turkish.content.selectedProjects[1].name)`

> Grade Watcher teknolojileri

**Label 18 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.experienceTechnologies, turkish.content.experience[0].organization)`

> Trakya Üniversitesi Öğrenci İşleri bünyesinde kullanılan teknolojiler

**Label 19 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.experienceTechnologies, turkish.content.experience[1].organization)`

> Turkcell bünyesinde kullanılan teknolojiler

**Label 20 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.technologies, turkish.content.otherWork[0].name)`

> Medipan Medical Center teknolojileri

**Label 21 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.technologies, turkish.content.otherWork[1].name)`

> Cleaning Tracking System teknolojileri

**Label 22 — resolved** — `src/i18n/format.ts → labelWithName(turkish.shared.technologies, turkish.content.otherWork[2].name)`

> Android Sleep Alarm teknolojileri

**Label 23** — `turkish.home.contact.emailLabel`

> Eren Kaçar'a e-posta gönder

**Label 24** — `turkish.home.contact.linksLabel`

> İletişim ve profil bağlantıları

**Label 25** — `turkish.shared.downloadCvLabel`

> Eren Kaçar'ın CV'sini PDF olarak indir

**Label 26** — `turkish.shared.footerLinks`

> Alt bilgi profil bağlantıları

#### https://www.erenkacar.com/tr/projects/guitarsense

**Label 1** — `turkish.shared.homeLabel`

> Eren Kaçar, ana sayfa

**Label 2** — `turkish.shared.languageNavigation`

> Dil seçimi

**Label 3** — `turkish.shared.englishVersion`

> Bu sayfanın İngilizce sürümünü görüntüle

**Label 4** — `turkish.shared.turkishVersion`

> Bu sayfanın Türkçe sürümünü görüntüle

**Label 5** — `turkish.shared.primaryNavigation`

> Ana gezinme

**Label 6** — `turkish.caseStudies.common.facts`

> Proje Bilgileri

**Label 7** — `turkish.content.guitarSenseImages.practiceView.alt`

> Tablatür, oynatma kontrolleri ve pratik geri bildirimi içeren GuitarSense pratik ekranı

**Label 8** — `turkish.content.guitarSenseImages.presetEditor.alt`

> Gitar tonu ve efekt kontrollerini gösteren GuitarSense preset düzenleyicisi

**Label 9** — `turkish.caseStudies.guitarsense.technologiesLabel`

> GuitarSense teknolojileri

**Label 10** — `turkish.shared.footerLinks`

> Alt bilgi profil bağlantıları

#### https://www.erenkacar.com/tr/projects/nexora

**Label 1** — `turkish.shared.homeLabel`

> Eren Kaçar, ana sayfa

**Label 2** — `turkish.shared.languageNavigation`

> Dil seçimi

**Label 3** — `turkish.shared.englishVersion`

> Bu sayfanın İngilizce sürümünü görüntüle

**Label 4** — `turkish.shared.turkishVersion`

> Bu sayfanın Türkçe sürümünü görüntüle

**Label 5** — `turkish.shared.primaryNavigation`

> Ana gezinme

**Label 6** — `turkish.caseStudies.common.facts`

> Proje Bilgileri

**Label 7** — `turkish.content.nexoraImages.explore.alt`

> Filtreler, popüler etiketler ve içerik ızgarası içeren Nexora Keşfet arayüzü

**Label 8** — `turkish.content.nexoraImages.authentication.alt`

> Altı haneli kod isteyen Nexora e-posta doğrulama arayüzü

**Label 9** — `turkish.content.nexoraImages.messaging.alt`

> Çevrimiçi bir demo görüşmesini ve gerçek zamanlı mesaj güncellemelerini gösteren Nexora doğrudan mesajlaşma arayüzü

**Label 10** — `turkish.caseStudies.nexora.architectureLabel`

> Temel uygulama mimarisi

**Label 11** — `turkish.shared.footerLinks`

> Alt bilgi profil bağlantıları

#### https://www.erenkacar.com/tr/projects/grade-watcher

**Label 1** — `turkish.shared.homeLabel`

> Eren Kaçar, ana sayfa

**Label 2** — `turkish.shared.languageNavigation`

> Dil seçimi

**Label 3** — `turkish.shared.englishVersion`

> Bu sayfanın İngilizce sürümünü görüntüle

**Label 4** — `turkish.shared.turkishVersion`

> Bu sayfanın Türkçe sürümünü görüntüle

**Label 5** — `turkish.shared.primaryNavigation`

> Ana gezinme

**Label 6** — `turkish.caseStudies.common.facts`

> Proje Bilgileri

**Label 7** — `turkish.caseStudies.gradeWatcher.architectureLabel`

> Grade Watcher otomasyon mimarisi

**Label 8** — `turkish.shared.footerLinks`

> Alt bilgi profil bağlantıları

#### Turkish segment error view (defined; native global fallback remains English)

**Label 1** — `turkish.shared.homeLabel`

> Eren Kaçar, ana sayfa

**Label 2** — `turkish.shared.languageNavigation`

> Dil seçimi

**Label 3** — `turkish.shared.englishVersion`

> Bu sayfanın İngilizce sürümünü görüntüle

**Label 4** — `turkish.shared.turkishVersion`

> Bu sayfanın Türkçe sürümünü görüntüle

**Label 5** — `turkish.shared.primaryNavigation`

> Ana gezinme

**Label 6** — `turkish.shared.footerLinks`

> Alt bilgi profil bağlantıları

### Skip link and aria-labelledby target strings

Component: [src/components/layout/document-shell.tsx](C:/Users/erenk/OneDrive/Desktop/Klasor/Kod/erenkacar.com/src/components/layout/document-shell.tsx).

**Skip-link text** — `turkish.shared.skipLink`

> İçeriğe geç

Skip-link destination: `#main-content`. These heading references expose the already rendered source strings; distinct strings inside one target are kept separate below.

#### #hero-title

**Target string** — `turkish.home.hero.title`

> Masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiriyorum.

#### #featured-project-title

**Target string** — `turkish.content.featuredProject.name`

> GuitarSense

#### #selected-projects-title

**Target string** — `turkish.home.selected.eyebrow`

> 02 / Seçili Projeler

**Target string** — `turkish.home.selected.title`

> Full-stack sistemler ve otomasyon alanından seçili projeler.

#### #experience-title

**Target string** — `turkish.home.experience.eyebrow`

> 03 / Deneyim

**Target string** — `turkish.home.experience.title`

> İş akışları geliştirirken sistemleri içeriden tanıyorum.

#### #toolkit-title

**Target string** — `turkish.home.toolkit.eyebrow`

> 04 / Yetkinlikler

**Target string** — `turkish.home.toolkit.title`

> Ürünü ileri taşımak için seçtiğim araçlar.

**Target string** — `turkish.home.toolkit.intro`

> Arayüz, backend, masaüstü, ses ve otomasyon çalışmalarında kullandığım teknolojiler.

#### #about-title

**Target string** — `turkish.home.about.title`

> Uygulamayla şekillenen ürün yaklaşımı.

#### #other-work-title

**Target string** — `turkish.home.otherWork.title`

> Diğer Projeler

#### #contact-title

**Target string** — `turkish.home.contact.title`

> Birlikte faydalı bir ürün geliştirelim.

SVG icons, decorative arrows, the `EK` brand mark and numeric card/workflow indices are `aria-hidden`; there is no additional translated screen-reader text in those decorations. The document's language is the literal `tr` locale supplied by the current Turkish root layout.

## Potential editorial review points

These are review observations only. No alternative wording or replacement translation is supplied, and no source value has been changed.

### Long headings and abstract phrasing

Source: `turkish.home.hero.title`.

> Masaüstü, web ve gerçek zamanlı ürünleri uçtan uca geliştiriyorum.

Source: `turkish.home.selected.title`.

> Full-stack sistemler ve otomasyon alanından seçili projeler.

Both headings are long for mobile reading. The implemented ≤360px hero size adjustment prevents clipping; the remaining concern is editorial cadence and prominence, not a newly identified layout defect.

Source: `turkish.home.experience.title`.

> İş akışları geliştirirken sistemleri içeriden tanıyorum.

Source: `turkish.home.about.title`.

> Uygulamayla şekillenen ürün yaklaşımı.

“İçeriden tanıyorum” is a broad metaphor whose intended professional meaning may not be immediately clear. “Uygulamayla” can refer to an application or to putting an idea into practice; the heading's intended sense is less explicit than the supporting paragraphs.

### GuitarSense latency terminology

Source: `turkish.content.guitarSenseCaseStudy.results.2`.

> Test edilen 64 örnekli yapılandırmalarda backend tarafından bildirilen, ASIO ile yaklaşık 6 ms ve WASAPI ile yaklaşık 46 ms ses değerleri

Source: `turkish.content.guitarSenseCaseStudy.highlights.0.qualification`.

> Bu değerler backend tarafından bildirilmiştir; bağımsız olarak ölçülmüş uçtan uca gidiş-dönüş gecikmesi değildir.

The result calls the millisecond measurements “ses değerleri,” which does not itself identify the measured quantity. “64 örnekli yapılandırmalar” also assumes technical context. Review clarity while retaining the tested configuration, figures and explicit backend-reported versus independently measured round-trip qualification. The qualification is present in the engineering card and must remain intact.

### Nexora messaging referents

Source: `turkish.caseStudies.nexora.messaging.text`.

> Firebase destekli mesajlaşma; görüşme listelerini, çevrimiçi durumunu ve doğrudan mesaj güncellemelerini bu amaçla tasarlanmış bir arayüzde birleştirir.

Source: `turkish.content.nexoraImages.messaging.caption`.

> Çevrimiçi durumunu, teslim durumunu ve görüşmeleri gerçek zamanlı güncelleyen Firebase destekli doğrudan mesajlaşma.

The phrases containing “çevrimiçi durumunu” do not specify whose status is meant. The caption also pairs that phrase with “teslim durumunu” without naming the message or participant. This is a referent/clarity question, rather than evidence of a missing feature.

### Other Work technical clarity

Source: `turkish.content.otherWork.2.summary`.

> Mikrofon düzeyini zaman pencereleri üzerinden değerlendiren ve cihaz kilidi açıldığında izleme davranışını sıfırlayan bir Android prototipi.

“Mikrofon düzeyini zaman pencereleri üzerinden değerlendiren” is dense technical phrasing, and the relationship between unlocking the device and the monitoring behavior is not explained. Review whether the current one-sentence description is clear to its intended audience.

### Grade Watcher status style

Source: `turkish.content.gradeWatcherCaseStudy.status.1`.

> Yerel olarak ve izleme modunda çalışma

Source: `turkish.content.gradeWatcherCaseStudy.status.2`.

> Telegram bildirim akışı geliştirildi

The first status is a noun phrase, while the next is a completed-action sentence. This is a minor parallelism/style choice for owner review; the document preserves both as implemented.

### Professional scope and factual sign-off

Source: `turkish.home.featured.title`.

> Ürünü tüm katmanlarıyla geliştiriyorum.

Source: `turkish.content.guitarSenseCaseStudy.role`.

> Uygulamanın masaüstü arayüzünü, ses motoru entegrasyonunu ve temel pratik akışlarını tasarlayıp geliştirdim. Performans, paketleme ve uygulama güvenilirliği üzerinde de çalıştım.

Source: `turkish.content.experience.0.highlights.1`.

> 1.000'den fazla öğrenci talebinin işleme alındığı süreçlere katkıda bulundum.

“Tüm katmanlarıyla” and the first-person design/development statement communicate broad personal responsibility. The owner should confirm that this is the intended scope of the GuitarSense role. No contradiction is established by this extraction. The 1,000-request statement is already scoped to contributing to the processes, rather than personally handling every request; retain that distinction. Existing role titles and dates were extracted without reinterpretation.

### Terminology and confidentiality findings

No concrete terminology inconsistency requiring correction was established. Retained software/API names and terms such as frontend, backend, full-stack, low-code, preset and Reels are deliberate technical wording; their presence alone is not an editorial defect.

No wording explicitly revealing an unreleased GuitarSense feature was found in the extracted current Turkish copy. High-level processing, effects, practice, integration, Windows beta and performance wording remains general. This finding uses the current implementation only; no historical or unreleased content was used as a reference.

### Missing or unclear source values and verification limits

- No required Turkish copy source is missing or untraceable. All 365 nonstructural string leaves in the actual Turkish dictionary are represented, including fixed names, technologies and URLs. Internal IDs, icon identifiers, frame/placement identifiers and the structural locale field are not editorial prose.
- GuitarSense library/practice-view captions and the Nexora homepage-feed caption are explicitly `null`; they do not render captions. The preset-editor and three Nexora case-study captions are included in full.
- Turkcell's date is explicitly `null`; no date is displayed or inferred.
- The localized Turkish error copy exists in the dictionary/segment view, but arbitrary unknown Turkish URLs use the English native global error document. This behavior is identified in section 5 rather than represented as a Turkish live 404.
- The four rendered pages match the existing production HTML in all 379 ordered text nodes and 55 image/ARIA labels. The defined Turkish segment error view adds six image/ARIA-label usages; all 61 usages are inventoried. Page-title, description, OG/Twitter text and image-description extraction was checked against the existing production heads.
- Verification was read-only and in memory. It did not rebuild or alter the website, regenerate images, run formatters, stage files, commit, push or deploy.

Only `docs/localization-turkish-copy-review.md` was added for this task. All 120 pre-existing non-ignored working-tree files, the branch, HEAD and staged-file state were checked for preservation.
