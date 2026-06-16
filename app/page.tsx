'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.jpg')", 
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Logo (Top Left) */}
      <div className="absolute top-6 left-10 z-20">
        <Image 
          src="/images/tsl.jpg"
          alt='Tuffsteel Logo'
          width={60}
          height={60}
        />
      </div>

      {/* Main Layout */}
      <div className="relative z-20 min-h-screen flex flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="flex-1 flex items-end p-6 md:p-12">
          <div className="max-w-xl space-y-6">

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              COMING <br />
              SOON
            </h1>

            <p className="text-zinc-200 text-lg md:text-xl">
              We are working on something new. Stay tuned
            </p>

            {/* Contact Links */}
            <div className="space-y-2 pt-2">

              <a
                href="mailto:info@tuffsteel.co.ke"
                className="block text-blue-400 hover:text-yellow-300 text-lg font-semibold transition"
              >
                info@tuffsteel.co.ke
              </a>

              <a
                href="tel:0788887788"
                className="block text-blue-400 hover:text-yellow-300 text-lg font-semibold transition"
              >
                0788 887788
              </a>

            </div>

            {/* Progress Bar */}
            <div className="w-72 h-1 bg-white/10 rounded-full overflow-hidden mt-6">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <p className="text-zinc-400 text-sm pt-2">
              © {new Date().getFullYear()} Tuffsteel ltd. All rights reserved.
            </p>

          </div>
        </div>

        {/* RIGHT SIDE (MAP + ADDRESS) */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12">

          <div className="w-full max-w-md space-y-4">

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7478163943547!2d36.8783110735008!3d-1.3272872356692398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12716197b8c7%3A0x517042b7c949a63f!2sTuffsteel%20Limited!5e0!3m2!1sen!2ske!4v1781597795442!5m2!1sen!2ske" // replace with real embed
                width="100%"
                height="300"
                loading="lazy"
                className="w-full"
              />
            </div>

            {/* Address Block */}
            <div className="bg-black/40 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">
                Our Location
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Tuffsteel Limited<br />
                Mombasa Road, Nairobi<br />
                Kenya
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}