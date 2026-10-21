import React, { useState } from 'react';
import { Camera, Calendar, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ALBUMS } from '../../data/galleries';
import { Language, GalleryAlbum } from '../../types';

interface GalleryViewProps {
  lang: Language;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ lang }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const openLightbox = (album: GalleryAlbum, idx: number) => {
    setSelectedAlbum(album);
    setActiveImageIdx(idx);
  };

  const nextImage = () => {
    if (!selectedAlbum) return;
    setActiveImageIdx((prev) => (prev + 1) % selectedAlbum.images.length);
  };

  const prevImage = () => {
    if (!selectedAlbum) return;
    setActiveImageIdx((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{lang === 'bn' ? 'মিডিয়া' : 'Media'}</span>
            <span>/</span>
            <span className="text-blue-900 font-semibold">{lang === 'bn' ? 'ফটোগ্যালারী' : 'Photo Gallery'}</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === 'bn' ? 'শাহজাদপুর সরকারি কলেজ ছবি গ্যালারী' : 'Photo Gallery'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'bn'
                ? 'কলেজ ক্যাম্পাসের সবুজ চত্বর, বৃক্ষরোপণ, অধ্যক্ষ মহোদয় ও শিক্ষকদের পরিদর্শন এবং বর্ষবরণ উৎসবের দুর্লভ চিত্র।'
                : 'Photographic records of campus life, flower garden inspection with Principal, Pahela Baishakh rally, and ceremonies.'}
            </p>
          </div>
        </div>

        {/* Albums Grid */}
        <div className="space-y-10">
          {GALLERY_ALBUMS.map((album) => {
            const albumTitle = lang === 'bn' ? (album.titleBn || album.title) : (album.titleEn || album.title);
            return (
              <div
                key={album.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {albumTitle}
                    </h3>
                    {album.date && (
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <span>{album.date}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full">
                    {album.images.length} {lang === 'bn' ? 'টি ছবি' : 'Photos'}
                  </span>
                </div>

                {/* Photos inside album */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {album.images.map((img, idx) => {
                    const caption = lang === 'bn'
                      ? (img.captionBn || img.caption || albumTitle)
                      : (img.captionEn || img.caption || albumTitle);
                    return (
                      <div
                        key={idx}
                        onClick={() => openLightbox(album, idx)}
                        className="group relative h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-md transition-all"
                      >
                        <img
                          src={img.url}
                          alt={caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <div className="text-white text-xs">
                            <p className="line-clamp-2 font-medium">{caption}</p>
                            <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 mt-1">
                              <ZoomIn className="w-3 h-3" />
                              <span>{lang === 'bn' ? 'বড় করে দেখুন' : 'Click to Enlarge'}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <button
            onClick={() => setSelectedAlbum(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white text-slate-900 transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white hover:text-slate-900" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedAlbum.images[activeImageIdx]?.url}
              alt="Enlarged"
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center text-white mt-4 space-y-1">
              <p className="text-sm font-semibold">
                {lang === 'bn'
                  ? (selectedAlbum.images[activeImageIdx]?.captionBn || selectedAlbum.images[activeImageIdx]?.caption || selectedAlbum.title)
                  : (selectedAlbum.images[activeImageIdx]?.captionEn || selectedAlbum.images[activeImageIdx]?.caption || selectedAlbum.titleEn || selectedAlbum.title)}
              </p>
              <p className="text-xs text-slate-400">
                {lang === 'bn'
                  ? `ছবি ${activeImageIdx + 1} / ${selectedAlbum.images.length}`
                  : `Photo ${activeImageIdx + 1} of ${selectedAlbum.images.length}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
