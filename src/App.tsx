import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette, Printer, Image as ImageIcon, Gift, Phone, Mail, MapPin, Instagram, Facebook, ShoppingCart } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    { icon: <Printer size={32} />, title: 'Photo Printing', description: 'High-quality photo prints in various sizes' },
    { icon: <Palette size={32} />, title: 'Digital Designs', description: 'Creative digital artwork and designs' },
    { icon: <ImageIcon size={32} />, title: 'Flex Designs', description: 'Eye-catching flex banners and displays' },
    { icon: <Camera size={32} />, title: 'Lamination', description: 'Professional document lamination services' },
    { icon: <Gift size={32} />, title: 'Photo Printed Cups', description: 'Personalized photo mugs and cups' },
    { icon: <Gift size={32} />, title: 'Customized Gifts', description: 'Unique customized gift items' }
  ];

  const projects = [
    'https://images.unsplash.com/photo-1542744094-24638eff58bb',
    'https://images.unsplash.com/photo-1542744173-05336fcc7ad4',
    'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    'https://images.unsplash.com/photo-1542744095-291d1f67b221'
  ];

  const products = [
    { name: 'Custom Photo Frame', price: '₹999', image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e' },
    { name: 'Personalized Mug', price: '₹399', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d' },
    { name: 'Canvas Print', price: '₹1499', image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1' },
    { name: 'Photo Album', price: '₹899', image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e' }
  ];

  const floatingElements = Array(20).fill(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-blue-400/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Muruga Designs
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transforming your moments into timeless memories through creative design
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Started
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                  alt="Hero"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl group"
                style={{ willChange: 'transform, opacity' }} // Optimization for smoother hover
              >
                <motion.div 
                  className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(project)}
              >
                <img
                  src={project}
                  alt={`Project ${index + 1}`}
                  className="w-full h-72 object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg bg-white/5 p-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold text-blue-400 mt-4">{product.name}</h3>
                <p className="text-gray-300 mt-2">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-800 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Contact Us</h2>
          <div className="flex justify-center">
            <form className="w-full md:w-1/2 bg-white/5 p-8 rounded-xl shadow-lg space-y-6 backdrop-blur-md">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-xl text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-xl text-white"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-xl text-white"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="text-gray-400">© 2024 Muruga Designs. All rights reserved.</p>
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            src={selectedImage} 
            alt="Project" 
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
          />
        </motion.div>
      )}
    </div>
  );
}

export default App;
