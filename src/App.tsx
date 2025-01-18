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
        {/* Animated background elements */}
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
              <motion.div
                className="absolute inset-0 -z-10 bg-blue-500/20 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
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
      <section className="py-20 px-4 md:px-8 bg-black/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Our Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer relative group"
                onClick={() => setSelectedImage(url)}
              >
                <img 
                  src={url} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-blue-400 font-bold mb-4">{product.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-600 transition-all"
                  >
                    <ShoppingCart size={18} />
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
              alt="Owner" 
              className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg" 
            />
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} className="text-blue-400" />
                <span>+91 98765 43210</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} className="text-blue-400" />
                <span>contact@murugadesigns.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin size={20} className="text-blue-400" />
                <span>123 Design Street, Creative City, 600001</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
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