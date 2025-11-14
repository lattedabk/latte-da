import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Menu, X, Facebook, Instagram, Mail, MapPin, Clock, Phone } from 'lucide-react'

// Menu Item Component
function MenuItem({ name, price, description }) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className="text-latte-blue font-semibold ml-4">${price}</span>
    </div>
  )
}

// Coffee Beans Separator Component
function CoffeeBeansSeparator() {
  return (
    <div className="flex justify-center items-center space-x-4 py-8">
      <img src="/coffee beans.svg" alt="" className="w-8 h-8 opacity-30" />
      <div className="w-2 h-2 bg-latte-jade rounded-full" />
      <img src="/coffee cup.svg" alt="" className="w-8 h-8 opacity-30" />
      <div className="w-2 h-2 bg-latte-blue rounded-full" />
      <img src="/coffee beans.svg" alt="" className="w-8 h-8 opacity-30" />
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenuCategory, setActiveMenuCategory] = useState('espresso')

  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const menuRef = useRef(null)
  const menuInView = useInView(menuRef, { once: true, amount: 0.2 })
  const hiringRef = useRef(null)
  const hiringInView = useInView(hiringRef, { once: true, amount: 0.2 })
  const footerRef = useRef(null)
  const footerInView = useInView(footerRef, { once: true, amount: 0.2 })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const menuCategories = {
    espresso: {
      title: 'Espresso Drinks',
      items: [
        { name: 'Espresso', description: 'Single or double shot', price: '3.50' },
        { name: 'Americano', description: 'Espresso with hot water', price: '4.00' },
        { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, foam', price: '5.00' },
        { name: 'Latte', description: 'Espresso with steamed milk', price: '5.50' },
        { name: 'Flat White', description: 'Double shot with microfoam', price: '5.50' },
        { name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: '4.50' },
        { name: 'Macchiato', description: 'Espresso with a dollop of foam', price: '4.00' },
        { name: 'Mocha', description: 'Chocolate espresso with steamed milk', price: '6.00' },
      ]
    },
    coffee: {
      title: 'Coffee',
      items: [
        { name: 'Drip Coffee', description: 'House blend, freshly brewed', price: '3.00' },
        { name: 'Pour Over', description: 'Single origin, hand-poured', price: '5.00' },
        { name: 'Cold Brew', description: 'Smooth, low-acid, served over ice', price: '4.50' },
        { name: 'Nitro Cold Brew', description: 'Creamy cold brew on tap', price: '5.50' },
        { name: 'French Press', description: 'Full-bodied, 12oz serving', price: '4.50' },
        { name: 'Iced Coffee', description: 'Fresh brewed, served over ice', price: '3.50' },
      ]
    },
    specialty: {
      title: 'Specialty Drinks',
      items: [
        { name: 'Matcha Latte', description: 'Ceremonial grade matcha with milk', price: '6.00' },
        { name: 'Chai Latte', description: 'Spiced tea with steamed milk', price: '5.50' },
        { name: 'Golden Milk', description: 'Turmeric, ginger, cinnamon blend', price: '6.00' },
        { name: 'Hot Chocolate', description: 'Rich Belgian chocolate', price: '5.00' },
        { name: 'Seasonal Special', description: 'Ask about our current creation', price: '6.50' },
        { name: 'Iced Matcha', description: 'Ceremonial matcha over ice', price: '6.50' },
        { name: 'Lavender Latte', description: 'House-made lavender syrup', price: '6.00' },
      ]
    },
    food: {
      title: 'Pastries & Light Bites',
      items: [
        { name: 'Croissant', description: 'Buttery, flaky, fresh-baked', price: '4.50' },
        { name: 'Avocado Toast', description: 'Sourdough, avocado, everything seasoning', price: '8.00' },
        { name: 'Granola Bowl', description: 'House granola, yogurt, seasonal fruit', price: '7.50' },
        { name: 'Breakfast Sandwich', description: 'Egg, cheese, choice of protein', price: '8.50' },
        { name: 'Bagel & Cream Cheese', description: 'NYC bagel, plain or everything', price: '4.00' },
        { name: 'Almond Croissant', description: 'Filled with almond cream', price: '5.50' },
        { name: 'Banana Bread', description: 'House-made, served warm', price: '4.00' },
        { name: 'Overnight Oats', description: 'Chia, almond milk, berries', price: '6.50' },
      ]
    }
  }

  const categoryButtons = Object.keys(menuCategories).map(key => ({
    id: key,
    label: menuCategories[key].title
  }))

  const hiringBenefits = [
    'Creative studio-style workspace',
    'Collaborative team energy',
    'Training with head roaster & beverage leads',
    'Flexible scheduling & community events',
  ]

  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 8:00 PM' },
  ]

  return (
    <div className="min-h-screen bg-latte-light font-helvetica">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <img
                src="/latte da full logo title.svg"
                alt="Latte Da"
                className="h-12 md:h-16 w-auto cursor-pointer"
                onClick={() => scrollToSection('home')}
              />
              <div className="hidden md:flex items-center gap-3">
                <span className="text-gray-400 text-xl">•</span>
                <span className="text-gray-500 text-sm font-medium tracking-[0.3em]">BROOKLYN</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-latte-blue transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-latte-blue transition-colors duration-200"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-latte-blue transition-colors duration-200"
              >
                The Latte Da Way
              </button>

              {/* Now Hiring Badge */}
              <motion.button
                onClick={() => scrollToSection('hiring')}
                className="bg-latte-jade text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Now Hiring
              </motion.button>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-latte-blue transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-latte-blue transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:hello@latteda.com"
                  className="text-gray-600 hover:text-latte-blue transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-latte-blue transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 p-4 space-y-2 relative z-50 bg-white rounded-lg shadow-lg"
              style={{ position: 'relative', zIndex: 9999 }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-latte-blue active:text-latte-blue transition-colors duration-200 py-3 px-2 rounded hover:bg-latte-light cursor-pointer"
                type="button"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left text-gray-700 hover:text-latte-blue active:text-latte-blue transition-colors duration-200 py-3 px-2 rounded hover:bg-latte-light cursor-pointer"
                type="button"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-latte-blue active:text-latte-blue transition-colors duration-200 py-3 px-2 rounded hover:bg-latte-light cursor-pointer"
                type="button"
              >
                The Latte Da Way
              </button>
              <button
                onClick={() => scrollToSection('hiring')}
                className="block w-full text-left bg-latte-jade text-white px-4 py-3 rounded-full font-medium hover:bg-opacity-90 active:bg-opacity-80 transition-all duration-200 mt-2 cursor-pointer"
                type="button"
              >
                Now Hiring
              </button>

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-300">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-latte-blue transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-latte-blue transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:hello@latteda.com"
                  className="text-gray-600 hover:text-latte-blue transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section - Keeping the current one as requested */}
        <section id="home" className="scroll-mt-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-latte-light to-white">
          {/* Lime Wash Texture Overlay */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            style={{
              backgroundImage: 'url(/limewash.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'multiply'
            }}
          />

          <div className="container mx-auto px-4 h-full">
            <div className="grid lg:grid-cols-2 gap-8 min-h-[calc(100vh-80px)] items-center relative">

              {/* Left Content Area - Asymmetric Placement */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Small eyebrow text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="block"
                  >
                    <span className="text-latte-jade text-sm md:text-base font-medium tracking-wider uppercase">
                      Brooklyn, NY • Est. 2025
                    </span>
                  </motion.div>

                  {/* Bold, left-aligned headline */}
                  <div className="relative inline-block">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-latte-jade leading-tight">
                      A Small
                      <br />
                      Ritual
                      <br />
                      Done Right
                    </h1>
                    {/* Coffee Beans - Positioned after "A Small" */}
                    <motion.img
                      src="/coffee beans.svg"
                      alt=""
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                      animate={{ opacity: 0.3, scale: 1, rotate: 15 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="absolute -right-24 md:-right-32 lg:-right-40 top-0 md:top-2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                    />
                  </div>

                  {/* Subheading with breathing room */}
                  <div className="space-y-4 max-w-lg">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                      Brooklyn's newest neighborhood spot for crisp espresso and quietly exceptional coffee.
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      Drop in for something freshly made. Stay for the warm, <span className="whitespace-nowrap">cozy vibe.</span>
                    </p>
                  </div>

                  {/* CTAs - Stacked vertically for visual interest */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      onClick={() => scrollToSection('menu')}
                      className="bg-latte-blue text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl"
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Menu →
                    </motion.button>

                    <motion.button
                      onClick={() => scrollToSection('about')}
                      className="bg-white text-latte-blue border-2 border-latte-blue px-10 py-5 rounded-full text-lg font-medium hover:bg-latte-blue hover:text-white transition-all duration-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      The Latte Da Way
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual Area - Large Scale Mascot & Coffee Elements */}
              <div className="relative h-[500px] lg:h-full flex items-center justify-center">
                {/* Coffee ring stain background */}
                <motion.img
                  src="/coffee ring stain.svg"
                  alt=""
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute w-[700px] h-[700px] opacity-20 -right-20"
                />

                {/* Large Hero Mascot - Main Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative z-10"
                >
                  <motion.img
                    src="/latte da mascot iso.svg"
                    alt="Latte Da Mascot"
                    className="w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] drop-shadow-2xl"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Coffee Cup with Steam - Overlapping Element */}
                <motion.img
                  src="/coffee cup.svg"
                  alt=""
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section - "The Latte Da Way" from latte-da-opus */}
        <section id="about" className="scroll-mt-24 py-20 bg-latte-cream relative overflow-visible" ref={aboutRef}>
          {/* Cappuccino Foam Top Border - extends into hero section above */}
          <div className="absolute -top-24 md:-top-32 left-0 w-full overflow-visible leading-none z-50">
            <svg
              className="relative block w-full h-32 md:h-48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 0 1750 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#f4ebe5" />
                  <stop offset="60%" stopColor="#e6dcd5" />
                  <stop offset="70%" stopColor="#d9cec8" />
                  <stop offset="100%" stopColor="#d9cec8" />
                </linearGradient>
              </defs>

              {/* Organic froth body */}
              <path
                d="M-50 150 C 40 30 230 90 360 65 C 520 40 700 120 860 55 C 1040 -10 1220 95 1380 55 C 1500 15 1650 90 1720 45 L 1720 260 L -50 260 Z"
                fill="url(#foamGradient)"
              />

            </svg>
          </div>

          {/* Background decorative elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
            <img src="/leaf-green.svg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 rotate-180">
            <img src="/leaf-green.svg" alt="" className="w-full h-full" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-latte-blue mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  The Latte Da Way
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-latte-jade mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={aboutInView ? { width: 96 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Philosophy Text */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="text-2xl font-bold text-latte-jade">Latte Da</span> is more than a coffee shop—it's
                    a small ritual done right. Where a French bistro's charm meets the tranquil energy of a
                    rainforest retreat, all wrapped up in Brooklyn's unmistakable hip vibe.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We believe coffee should fit effortlessly into your day. Drop in for a crisp espresso
                    on your way to work, or wander by for something freshly made and quietly exceptional.
                    Our craft is simple: beans at their peak freshness, ingredients we're proud of, and
                    recipes that honor both tradition and innovation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The room feels easy—warm wood, soft light, and a cozy atmosphere that invites you to
                    linger. No frills or pretense, just the focus on what matters: the cup in your hand
                    and the moment of peace it brings.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    A neighborhood spot that knows your order, remembers your name, and sends you back
                    into the day a little lighter than you arrived.
                  </p>
                </motion.div>

                {/* Right Column - Visual Elements */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                    {/* Central Logo */}
                    <div className="flex justify-center mb-6">
                      <img
                        src="/latte da circle.svg"
                        alt="Latte Da Logo"
                        className="w-48 h-48"
                      />
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-latte-light rounded-xl p-4">
                        <div className="text-2xl font-bold text-latte-blue mb-1">Fresh</div>
                        <div className="text-sm text-gray-600">Peak Quality Beans</div>
                      </div>
                      <div className="bg-latte-light rounded-xl p-4">
                        <div className="text-2xl font-bold text-latte-jade mb-1">Local</div>
                        <div className="text-sm text-gray-600">Brooklyn Born</div>
                      </div>
                      <div className="bg-latte-light rounded-xl p-4">
                        <div className="text-2xl font-bold text-latte-jade mb-1">Mindful</div>
                        <div className="text-sm text-gray-600">Holistic Approach</div>
                      </div>
                      <div className="bg-latte-light rounded-xl p-4">
                        <div className="text-2xl font-bold text-latte-blue mb-1">Crafted</div>
                        <div className="text-sm text-gray-600">With Purpose</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 opacity-50"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <img src="/coffee beans.svg" alt="" className="w-full h-full" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 opacity-50"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img src="/coffee cup.svg" alt="" className="w-full h-full" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Quote */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <blockquote className="text-2xl md:text-3xl text-latte-jade font-light italic">
                  "Where every sip feels like coming home"
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section - Switchable menu from latte-da-opus */}
        <section id="menu" className="scroll-mt-24 py-20 bg-latte-light relative overflow-hidden" ref={menuRef}>
          {/* Background decoration */}
          <div className="absolute top-10 right-10 w-96 h-96 opacity-5">
            <img src="/coffee ring stain.svg" alt="" className="w-full h-full" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-latte-blue mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Our Menu
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Carefully crafted beverages and fresh bites, made with love and the finest ingredients
                </motion.p>
                <motion.div
                  className="w-24 h-1 bg-latte-jade mx-auto rounded-full mt-4"
                  initial={{ width: 0 }}
                  animate={menuInView ? { width: 96 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>

              {/* Category Tabs */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={menuInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {categoryButtons.map((cat) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveMenuCategory(cat.id)}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all ${
                      activeMenuCategory === cat.id
                        ? 'bg-latte-blue text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </motion.div>

              {/* Menu Items */}
              <motion.div
                className="bg-white rounded-3xl shadow-xl p-6 md:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={activeMenuCategory}
              >
                <div className="grid gap-6 md:gap-8">
                  {menuCategories[activeMenuCategory].items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="text-center border-b border-gray-100 pb-4 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-latte-blue mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Category-specific note */}
                <motion.div
                  className="mt-8 p-4 bg-latte-cream rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-sm text-gray-600 text-center">
                    {activeMenuCategory === 'espresso' && 'All espresso drinks available with oat, almond, or soy milk +$0.50'}
                    {activeMenuCategory === 'coffee' && 'We rotate our single origin beans weekly - ask your barista for current selection'}
                    {activeMenuCategory === 'specialty' && 'All drinks can be customized to your preference - just ask!'}
                    {activeMenuCategory === 'food' && 'Fresh items delivered daily from local Brooklyn bakeries'}
                  </p>
                </motion.div>
              </motion.div>

              {/* Bottom decoration with coffee elements */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={menuInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <CoffeeBeansSeparator />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hiring Section - From latte-da-codex */}
        <motion.section
          id="hiring"
          className="scroll-mt-24 bg-latte-cream px-6 py-24"
          ref={hiringRef}
          initial={{ opacity: 0, y: 60 }}
          animate={hiringInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              {/* Section Header */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.45em] text-latte-blue/70">Careers</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                  We're hiring experienced baristas who love great coffee.
                </h2>
                <p className="text-base text-slate-600 max-w-3xl">
                  If you're passionate about coffee craft and creating memorable experiences, we want to meet you.
                </p>
              </div>
              <ul className="space-y-3">
                {hiringBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-latte-jade" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl border border-latte-blue/10 bg-white/80 p-5 text-sm text-slate-700">
                Send questions to{' '}
                <a href="mailto:hello@lattedacafes.com" className="font-semibold text-latte-blue underline">
                  hello@lattedacafes.com
                </a>{' '}
                or drop your info below. We review applications weekly.
              </div>
            </div>
            <form
              className="rounded-[32px] border border-latte-blue/10 bg-white p-6 shadow-2xl shadow-latte-blue/10"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4">
                <label className="text-sm font-semibold text-slate-700">
                  Name
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-latte-light px-4 py-3 text-sm focus:border-latte-blue focus:outline-none"
                  />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Email
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-latte-light px-4 py-3 text-sm focus:border-latte-blue focus:outline-none"
                  />
                </label>
                <div className="text-sm">
                  <p className="font-semibold text-slate-700 mb-2">Position</p>
                  <div className="rounded-2xl border border-latte-jade bg-latte-light/50 px-4 py-3">
                    <span className="text-latte-jade font-medium">Barista Position</span>
                  </div>
                </div>
                <label className="text-sm font-semibold text-slate-700">
                  Message
                  <textarea
                    rows={4}
                    placeholder="Tell us about your vibe, experience, and availability..."
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-latte-light px-4 py-3 text-sm focus:border-latte-blue focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-latte-jade px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer - From latte-da-opus with black and white map */}
      <footer className="bg-latte-cream" ref={footerRef}>
        {/* Map Section */}
        <div className="w-full h-96 md:h-[450px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6056.586508311418!2d-74.03144750000001!3d40.62341429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24f8ab538ceab%3A0xe3fceff89813cec2!2s280%2086th%20St%2C%20Brooklyn%2C%20NY%2011209!5e0!3m2!1sen!2sus!4v1762979855840!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(100%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Latte Da Location Map"
          />
        </div>

        {/* Info Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <img
                src="/latte da full logo title.svg"
                alt="Latte Da"
                className="h-12 mb-4"
              />
              <p className="text-gray-700 text-sm">
                A small ritual done right. Your neighborhood coffee shop in the heart of Brooklyn.
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-latte-blue mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Hours
              </h3>
              <div className="space-y-2">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="text-sm">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600 block">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-latte-blue mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+17189998888"
                  className="flex items-center gap-2 text-gray-700 hover:text-latte-jade transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(718) 999-8888</span>
                </a>
                <a
                  href="mailto:hello@latteda.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-latte-jade transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@latteda.com</span>
                </a>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">280 86th St, Brooklyn</span>
                </div>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold text-latte-blue mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-latte-jade hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-latte-jade hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:hello@latteda.com"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-latte-jade hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-sm text-gray-600">
                Follow us for daily specials and coffee tips!
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2025 Latte Da. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-latte-jade transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-latte-jade transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App
