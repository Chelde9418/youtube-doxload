/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  PlayCircle, 
  HelpCircle, 
  Link as LinkIcon, 
  Wand2, 
  Video, 
  Music, 
  Download, 
  Copy, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Format = 'mp4' | 'mp3';

interface VideoPreview {
  title: string;
  author: string;
  views: string;
  duration: string;
  resolution: string;
  size: string;
  thumbnail: string;
}

export default function App() {
  const [url, setUrl] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [format, setFormat] = useState<Format>('mp4');
  const [preview, setPreview] = useState<VideoPreview | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleConvert = () => {
    if (!url.trim()) return;
    
    setIsConverting(true);
    // Simulate API call
    setTimeout(() => {
      setPreview({
        title: "Comment maîtriser le minimalisme en design UI",
        author: "Design Studio Pro",
        views: "1.2M vues",
        duration: "10:42",
        resolution: format === 'mp4' ? "4K Ultra HD" : "320kbps",
        size: format === 'mp4' ? "124.5 MB" : "12.8 MB",
        thumbnail: "https://picsum.photos/seed/design/640/360"
      });
      setIsConverting(false);
    }, 1500);
  };

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0505] text-slate-100 font-sans selection:bg-red-500/30">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            <CheckCircle2 className="size-5" />
            <span className="font-medium">Téléchargement lancé !</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform">
            <PlayCircle className="size-6 fill-current" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Stream<span className="text-red-600">Save</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
            <HelpCircle className="size-4" />
            Comment ça marche
          </button>
          <div className="size-10 rounded-full border-2 border-red-600/20 p-0.5 overflow-hidden cursor-pointer hover:border-red-600/50 transition-colors">
            <img 
              className="w-full h-full object-cover rounded-full" 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-3xl text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Téléchargez vos vidéos <br />
            <span className="text-red-600">préférées</span> en un clic
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-xl max-w-xl mx-auto px-4"
          >
            La solution la plus rapide et simple pour convertir vos liens YouTube en formats haute qualité.
          </motion.p>

          {/* Search Bar Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-10 space-y-6"
          >
            <div className="relative group max-w-2xl mx-auto px-2 sm:px-0">
              <div className="absolute inset-y-0 left-4 sm:left-0 pl-5 flex items-center pointer-events-none">
                <LinkIcon className="size-5 text-slate-500 group-focus-within:text-red-600 transition-colors" />
              </div>
              <input 
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-[#1a0b0b] border-2 border-white/5 rounded-2xl py-4 md:py-5 pl-14 pr-14 md:pr-40 text-base md:text-lg focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all placeholder:text-slate-600 shadow-2xl"
                placeholder="Collez l'URL ici..."
              />
              <button 
                onClick={handleConvert}
                disabled={isConverting || !url}
                className="absolute right-4 md:right-2.5 top-2.5 bottom-2.5 bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 md:px-8 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-600/30"
              >
                {isConverting ? (
                  <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Wand2 className="size-5" />
                )}
                <span className="hidden md:inline">Convertir</span>
              </button>
            </div>

            {/* Format Selectors */}
            <div className="flex justify-center gap-2 sm:gap-3">
              <button 
                onClick={() => setFormat('mp4')}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  format === 'mp4' 
                    ? 'bg-red-600/10 border border-red-600/30 text-red-600' 
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-100'
                }`}
              >
                <Video className="size-4" />
                MP4 (Vidéo)
              </button>
              <button 
                onClick={() => setFormat('mp3')}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  format === 'mp3' 
                    ? 'bg-red-600/10 border border-red-600/30 text-red-600' 
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-100'
                }`}
              >
                <Music className="size-4" />
                MP3 (Audio)
              </button>
            </div>
          </motion.div>
        </section>

        {/* Preview Section */}
        <AnimatePresence>
          {preview && (
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl px-4 mb-16 md:mb-24"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-5 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-center border border-white/10 shadow-2xl">
                {/* Thumbnail */}
                <div className="relative w-full md:w-72 aspect-video rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    className="w-full h-full object-cover" 
                    src={preview.thumbnail} 
                    alt="Thumbnail"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="size-12 text-white" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {preview.duration}
                  </div>
                </div>

                {/* Video Details */}
                <div className="flex-1 space-y-5 md:space-y-6 w-full">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-2 leading-tight">
                      {preview.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-2 flex items-center gap-2">
                      {preview.author} • {preview.views}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                      <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Résolution</p>
                      <p className="text-xs md:text-sm font-semibold text-slate-200">{preview.resolution}</p>
                    </div>
                    <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                      <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Taille</p>
                      <p className="text-xs md:text-sm font-semibold text-slate-200">{preview.size}</p>
                    </div>
                  </div>

                  <button 
                    onClick={handleDownload}
                    className="w-full py-3.5 md:py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-[0.98]"
                  >
                    <Download className="size-5" />
                    Télécharger maintenant
                  </button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* How it works */}
        <section className="w-full max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Comment l'utiliser</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Copy className="size-8" />,
                title: "1. Copiez le lien",
                desc: "Copiez l'URL de votre vidéo YouTube préférée depuis votre navigateur."
              },
              {
                icon: <LinkIcon className="size-8" />,
                title: "2. Collez le lien",
                desc: "Collez-le dans la barre de recherche ci-dessus et choisissez le format."
              },
              {
                icon: <Download className="size-8" />,
                title: "3. Téléchargez",
                desc: "Cliquez sur convertir puis sur télécharger pour récupérer votre fichier."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 p-10 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 border border-white/5 hover:border-red-600/30 transition-all"
              >
                <div className="size-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 mt-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            <PlayCircle className="size-5" />
            <span className="text-sm font-bold tracking-tight">StreamSave</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-red-600 transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-red-600 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-red-600 transition-colors">Support technique</a>
            <a href="#" className="hover:text-red-600 transition-colors flex items-center gap-1">
              API <ExternalLink className="size-3" />
            </a>
          </nav>
          
          <p className="text-xs text-slate-600">
            © 2024 StreamSave. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
