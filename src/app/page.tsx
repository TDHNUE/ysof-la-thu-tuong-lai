'use client';

import { useState } from 'react';
import WriteNoteModal from '@/components/WriteNoteModal';
import Particles from '@/components/Particles';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PenLine, Layout } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleNoteCreated = () => {
    // When a note is created on the main page, automatically navigate to the wall
    router.push('/wall');
  };

  return (
    <div 
      className="relative flex flex-col flex-1 items-center justify-end min-h-[calc(100vh-100px)] p-4 sm:p-8 pb-12 sm:pb-20"
    >
      {/* Particles layer */}
      <Particles />
      
      {/* Header */}
      <motion.header
        className="relative z-10 text-center max-w-3xl mx-auto w-full p-4 sm:p-8"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
      >

        

        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ 
            opacity: { delay: 0.6, duration: 0.5 },
            y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 } 
          }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 group"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #4f46e5 100%)',
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
            }}
          >
            <span className="inline-block group-hover:-rotate-6 transition-transform mr-2">
              <PenLine className="w-5 h-5" />
            </span> 
            Viết một note mới
          </button>
          
          <Link
            href="/wall"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-blue-900 font-bold text-lg shadow-lg hover:bg-white border focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105 transition-all duration-300 active:scale-95 group"
          >
            <span className="inline-block group-hover:scale-110 transition-transform mr-2">
              <Layout className="w-5 h-5" />
            </span> 
            Xem bức tường
          </Link>
        </motion.div>
      </motion.header>

      {/* Write note modal */}
      <WriteNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNoteCreated={handleNoteCreated}
      />
    </div>
  );
}
