import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import RevealAnimation from './animations/RevealAnimation';

const TOTAL_IMAGES = 40;
const PAGE_SIZE = 20; // 4 x 5

const buildImageList = () => Array.from({ length: TOTAL_IMAGES }, (_, i) => `/gallery/${i + 1}.jpg`);

const GallerySection = () => {
  const images = useMemo(buildImageList, []);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageImages = images.slice(startIndex, startIndex + PAGE_SIZE);

  const gotoPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <RevealAnimation width="100%">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Galleri</h2>
              <p className="text-muted-foreground mt-2">Et utvalg av våre prosjekter</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" onClick={() => gotoPage(currentPage - 1)} disabled={currentPage === 1}>Forrige</Button>
              </motion.div>
              <div className="text-sm text-foreground/80">Side {currentPage} av {totalPages}</div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" onClick={() => gotoPage(currentPage + 1)} disabled={currentPage === totalPages}>Neste</Button>
              </motion.div>
            </div>
          </div>
        </RevealAnimation>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {pageImages.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.05,
                  ease: "easeOut"
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button 
                      className="group relative overflow-hidden rounded-md border border-border bg-card shadow-sm hover:shadow-md transition-shadow focus:outline-none w-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={src}
                          alt={`Galleri bilde ${(startIndex + idx + 1)}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 bg-black/90 border-border max-h-[90vh] overflow-hidden">
                    <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
                      <motion.img 
                        src={src} 
                        alt="Zoomed" 
                        className="max-w-full max-h-[calc(80vh-2rem)] object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <RevealAnimation delay={0.3} width="100%">
          <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="sm" onClick={() => gotoPage(currentPage - 1)} disabled={currentPage === 1}>Forrige</Button>
            </motion.div>
            <div className="text-xs text-foreground/80">Side {currentPage} av {totalPages}</div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="sm" onClick={() => gotoPage(currentPage + 1)} disabled={currentPage === totalPages}>Neste</Button>
            </motion.div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.4} width="100%">
          <div className="mt-6 hidden md:flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <motion.button
                key={page}
                onClick={() => gotoPage(page)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${page === currentPage ? 'bg-primary' : 'bg-foreground/30 hover:bg-foreground/60'}`}
                aria-label={`Gå til side ${page}`}
                whileHover={{ scale: 1.5 }}
                animate={page === currentPage ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default GallerySection;