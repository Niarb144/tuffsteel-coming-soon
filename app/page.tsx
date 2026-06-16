'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer'

export default function ComingSoonPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center space-y-4">
              <img
                src="/images/tsl.jpg"
                alt="Tuffsteel"
                className="w-14 h-14 mx-auto rounded"
              />

              <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              <p className="text-zinc-400 text-sm tracking-widest">
                Loading Tuffsteel...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN PAGE */}
      <div className="relative min-h-screen text-white overflow-hidden flex flex-col md:block">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* LOGO */}
        <div className="relative md:absolute top-0 left-0 z-20 p-5 md:top-5 md:left-10 md:p-0 flex md:block justify-start md:justify-start">
          <img
            src="/images/tsl.jpg"
            alt="Tuffsteel Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded"
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-20 flex flex-col md:flex-row flex-1 mt-6">

          {/* LEFT */}
          <div className="flex-1 flex flex-col justify-start md:items-end p-6 md:p-12 pt-6 md:pt-12 space-y-6">

            <div className="max-w-xl space-y-5 md:space-y-6 md:text-left">

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                COMING <br /> SOON
              </h1>

              <p className="text-zinc-200 text-base md:text-xl">
                We are working on something new. Stay tuned.
              </p>

              {/* CONTACT */}
              <div className="space-y-2 pt-1">

                <a
                  href="mailto:info@tuffsteel.co.ke"
                  className="block text-blue-400 hover:text-blue-300 text-base md:text-lg font-semibold transition"
                >
                  info@tuffsteel.co.ke
                </a>

                <a
                  href="tel:0788887788"
                  className="block text-blue-400 hover:text-blue-300 text-base md:text-lg font-semibold transition"
                >
                  020 515 2000
                </a>

              </div>

              {/* PROGRESS */}
              <div className="w-56 md:w-72 h-1 bg-white/10 rounded-full overflow-hidden mt-5 mx-auto md:mx-0">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                />
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex-1 flex items-center justify-center p-6 md:p-12">

            <div className="w-full max-w-md space-y-4">

              {/* MAP */}
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7478163943547!2d36.8783110735008!3d-1.3272872356692398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12716197b8c7%3A0x517042b7c949a63f!2sTuffsteel%20Limited!5e0!3m2!1sen!2ske!4v1781597795442!5m2!1sen!2ske"
                  className="w-full h-[220px] md:h-[300px]"
                  loading="lazy"
                />
              </div>

              {/* ADDRESS */}
              <div className="bg-black/40 border border-white/10 p-4 md:p-5 rounded-xl backdrop-blur-md">
                <h3 className="text-base md:text-lg font-bold mb-2">
                  Our Location
                </h3>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  Tuffsteel Limited<br />
                  Mombasa Road, Nairobi<br />
                  Kenya
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}