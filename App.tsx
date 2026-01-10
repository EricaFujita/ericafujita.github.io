
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Globe, 
  ExternalLink, 
  Award, 
  BookOpen, 
  MessageCircle, 
  Github, 
  Twitter, 
  ArrowRight,
  Menu,
  X,
  Target,
  Mail
} from 'lucide-react';

// Reusable Components
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const apps = [
    { 
      name: "AtoZ Dictionary", 
      description: "A comprehensive and user-friendly dictionary application featured in major Japanese media outlets.", 
      link: "https://apps.apple.com/az/app/atoz-dictionary/id6474067784" 
    },
    { 
      name: "Life Bingo", 
      description: "Gamify your daily goals and life achievements with this interactive tool.", 
      link: "https://ericafujita.github.io/LifeBingo/" 
    },
    { 
      name: "8 iOS Apps", 
      description: "A diverse portfolio of applications released on the App Store, ranging from utility to lifestyle.", 
      link: "https://apps.apple.com/az/developer/erika-fujita/id1554660176" 
    }
  ];

  const news = [
    { 
      date: "Feb 2024", 
      source: "Tsunagugu Press", 
      title: "Latest App 'AtoZ Dictionary' Featured in Press Release", 
      type: "Press",
      url: "https://press.portal-th.com/archives/21494"
    },
    { 
      date: "Feb 2024", 
      source: "Appliv", 
      title: "In-depth App Review of AtoZ Dictionary Published", 
      type: "Review",
      url: "https://app-liv.jp/5349880/" 
    },
    { 
      date: "May 2023 - March 2024", 
      source: "NIKKEI Reskilling", 
      title: "Ongoing Series: Programming Diary of a Professional in her 40s", 
      type: "Media",
      url: "https://reskill.nikkei.com/article/DGXZQOLM157NA0V11C23A2000000/"
    }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Apps', href: '#apps' },
    { name: 'Media', href: '#media' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-2xl font-serif font-bold tracking-tight">Erika Fujita</a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-600 transition">{link.name}</a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">Get in Touch</a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
          ))}
          <a href="#contact" className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full" onClick={() => setIsMenuOpen(false)}>Close</button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-blue-50 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase">
              Global Product Manager & Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Bridging Tech, Business, and <span className="gradient-text italic">Global Strategy.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Leading global products and developing mobile experiences that impact lives. Erika Fujita is a dedicated creator with 8+ App Store releases and a background in international research.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://apps.apple.com/az/developer/erika-fujita/id1554660176" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition shadow-xl">
                View My Apps <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="https://apps.apple.com/az/app/atoz-dictionary/id6474067784" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition">
                AtoZ Dictionary <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] md:h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Technology and Strategy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">8+</p>
                  <p className="text-xs text-slate-500 font-medium">Apps Released</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="About Me" subtitle="A fusion of product management expertise and a passion for mobile development." />
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold">Global Mindset</h3>
              <p className="text-slate-500 leading-relaxed">As a Global Product Manager, I navigate complex markets and diverse user needs to build scalable digital solutions.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold">Continuous Learner</h3>
              <p className="text-slate-500 leading-relaxed">From Hamburg research to the "Programming Diary" series on NIKKEI, learning is at the heart of my professional journey.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold">Product-Led Development</h3>
              <p className="text-slate-500 leading-relaxed">I don't just write code; I design products that solve real problems, ensuring high quality and user satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Portfolio Section */}
      <section id="apps" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="iOS Applications" 
            subtitle="Specializing in intuitive mobile experiences. With over 8 apps released, I bridge the gap between technical possibility and user delight."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {apps.map((app, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 card-hover flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{app.description}</p>
                </div>
                <a href={app.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline group">
                  Explore Project <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Press Section */}
      <section id="media" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Media & Recognition" subtitle="My work and journey have been recognized by leading business and technology publications." />
          <div className="space-y-6">
            {news.map((item, i) => (
              <a 
                key={i} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition group"
              >
                <div className="md:w-56 text-sm font-bold text-blue-600 mb-2 md:mb-0">{item.date}</div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 block">{item.source} • {item.type}</span>
                  <h4 className="text-lg font-bold group-hover:text-blue-600 transition">{item.title}</h4>
                </div>
                <div className="mt-4 md:mt-0">
                   <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-medium flex items-center">
                     Read Article <ExternalLink size={14} className="ml-2" />
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-10">
          <Award size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Global Experience & Education</h2>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                  <h3 className="text-xl font-bold mb-2">Research Residency in Hamburg, Germany</h3>
                  <p className="text-blue-400 text-sm font-bold mb-3 uppercase tracking-wider italic">Tobitate! Young Ambassador Program (14th Cohort)</p>
                  <p className="text-slate-400 leading-relaxed">Selected for the prestigious public-private partnership program to conduct specialized research in Hamburg, Germany, fostering a global perspective in technical research.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                  <h3 className="text-xl font-bold mb-2">Global Product Management</h3>
                  <p className="text-blue-400 text-sm font-bold mb-3 uppercase tracking-wider italic">Current Professional Focus</p>
                  <p className="text-slate-400 leading-relaxed">Spearheading product strategy and lifecycle management on a global scale, effectively merging technical development with market-driven strategy.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80" alt="Hamburg Germany" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden translate-y-8 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" alt="Collaboration" className="w-full h-full object-cover opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs & Other Links Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Writings & Creative Work" subtitle="A collection of my thoughts, professional insights, and creative digital assets." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a href="https://note.com/erica_pon" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-100 rounded-xl bg-slate-50 card-hover flex flex-col items-center text-center">
              <BookOpen className="text-green-600 mb-4" />
              <h4 className="font-bold mb-1">note</h4>
              <p className="text-xs text-slate-500">Thoughts & Stories (JP)</p>
            </a>
            <a href="https://medium.com/@erica0116sl" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-100 rounded-xl bg-slate-50 card-hover flex flex-col items-center text-center">
              <Globe className="text-black mb-4" />
              <h4 className="font-bold mb-1">Medium</h4>
              <p className="text-xs text-slate-500">Professional Insights</p>
            </a>
            <a href="https://store.line.me/stickershop/product/16030017/ja?from=sticker" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-100 rounded-xl bg-slate-50 card-hover flex flex-col items-center text-center">
              <MessageCircle className="text-blue-500 mb-4" />
              <h4 className="font-bold mb-1">LINE Stickers</h4>
              <p className="text-xs text-slate-500">Digital Illustration</p>
            </a>
            <a href="https://erikafujita.studio.site/" target="_blank" rel="noopener noreferrer" className="p-6 border border-slate-100 rounded-xl bg-slate-50 card-hover flex flex-col items-center text-center">
              <Target className="text-red-500 mb-4" />
              <h4 className="font-bold mb-1">Studio Portfolio</h4>
              <p className="text-xs text-slate-500">Visual Portfolio</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Let's build something <span className="underline decoration-blue-300 italic">impactful</span> together.</h2>
          <p className="text-xl text-blue-100 mb-12">Open to discussions on global product strategy, iOS development, or collaborative creative ventures.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-10">
            <a href="mailto:erica0116sl@gmail.com" className="flex items-center px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-2xl">
              <Mail className="mr-2" /> Email Me
            </a>
            <div className="flex space-x-8">
              <a href="https://x.com/ilovemovies___" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition" aria-label="X (Twitter)">
                <Twitter size={32} />
              </a>
              <a href="https://github.com/EricaFujita" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition" aria-label="GitHub">
                <Github size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Erika Fujita. All rights reserved.
          </div>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-600 transition">{link.name}</a>
            ))}
            <a href="https://qiita.com/Erica_pon/private/04fd478c984bfb277990" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
