"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

export default function ProjectGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel rounded-xl overflow-hidden aspect-video cursor-pointer group relative"
            onClick={() => openModal(idx)}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={img}
              alt={`Gallery image ${idx + 1}`}
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-4xl scale-75 group-hover:scale-100 transition-transform">
                zoom_in
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <ImageModal
        images={images}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
