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
      title: 'espresso',
      items: [
        { name: 'espresso', price: '3.50' },
        { name: 'americano', price: '4.00' },
        { name: 'cappuccino', price: '5.00' },
        { name: 'latte', price: '5.50' },
        { name: 'flat white', price: '5.50' },
        { name: 'cortado', price: '4.50' },
        { name: 'macchiato', price: '4.00' },
        { name: 'mocha', price: '6.00' },
        { name: 'shaken espresso', price: '5.50' },
      ]
    },
    coffee: {
      title: 'iced iced baby',
      items: [
        { name: 'iced latte', price: '5.50' },
        { name: 'iced macchiato', price: '5.00' },
        { name: 'cold brew', price: '4.50' },
        { name: 'espresso tonic', price: '6.00' },
        { name: 'coconut espresso', price: '6.00' },
        { name: 'coconut matcha', price: '6.50' },
        { name: 'shaken espresso', price: '5.50' },
      ]
    },
    specialty: {
      title: 'specialty drinks',
      items: [
        { name: 'spanish latte', price: '6.00' },
        { name: 'brown sugar shaken espresso', price: '6.00' },
        { name: 'black raspberry chip latte', price: '6.50' },
        { name: 'strawberry matcha', price: '6.50' },
        { name: 'honey almond shaken espresso', price: '6.00' },
        { name: 'maple cinnamon latte', price: '6.00' },
        { name: 'caramel sea salt latte', price: '6.00' },
      ]
    },
    notespresso: {
      title: 'not espresso',
      items: [
        { name: 'matcha latte', price: '6.00' },
        { name: 'matcha lemonade', price: '6.00' },
        { name: 'lavender matcha', price: '6.50' },
        { name: 'chai latte', price: '5.50' },
        { name: 'london fog', price: '5.50' },
      ]
    },
    nocaffeine: {
      title: 'no caffeine',
      items: [
        { name: 'hot chocolate', price: '5.00' },
        { name: 'steamer', price: '4.50' },
        { name: 'tea', price: '4.00' },
        { name: 'decaf drip', price: '3.50' },
      ]
    },
    tea: {
      title: 'tea',
      items: [
        { name: 'chamomile', price: '4.00' },
        { name: 'earl grey', price: '4.00' },
        { name: 'white peach', price: '4.00' },
        { name: 'chai', price: '4.00' },
      ]
    },
    food: {
      title: 'pastries & light bites',
      items: [
        { name: 'croissant', price: '4.50' },
        { name: 'granola bowl', price: '7.50' },
        { name: 'banana bread', price: '4.00' },
        { name: 'overnight oats', price: '6.50' },
        { name: 'donuts', price: '3.50' },
        { name: 'danishes', price: '4.50' },
        { name: 'cookies', price: '3.00' },
      ]
    }
  }

  const categoryButtons = Object.keys(menuCategories).map(key => ({
    id: key,
    label: menuCategories[key].title
  }))

  const hiringBenefits = [
    'creative studio-style workspace',
    'collaborative team energy',
    'training with head roaster & beverage leads',
    'flexible scheduling & community events',
  ]

  const hours = [
    { day: 'monday - friday', time: '7:00 am - 4:00 pm' },
    { day: 'saturday', time: '8:00 am - 5:00 pm' },
    { day: 'sunday', time: '8:00 am - 5:00 pm' },
  ]

  return (
    <div className="min-h-screen bg-latte-light font-helvetica">
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#FDF6E3' }}>
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
                src="/latte-da-new-logo.svg"
                alt="Latte Da"
                className="h-8 md:h-10 w-auto cursor-pointer"
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
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
              >
                home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-latte-blue transition-colors duration-200"
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
              >
                menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-latte-blue transition-colors duration-200"
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
              >
                about us
              </button>

              {/* Now Hiring Badge */}
              <motion.button
                onClick={() => scrollToSection('hiring')}
                className="bg-latte-jade text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                now hiring
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
                  href="mailto:hello@lattedacafes.com"
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
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                type="button"
              >
                home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left text-gray-700 hover:text-latte-blue active:text-latte-blue transition-colors duration-200 py-3 px-2 rounded hover:bg-latte-light cursor-pointer"
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                type="button"
              >
                menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-latte-blue active:text-latte-blue transition-colors duration-200 py-3 px-2 rounded hover:bg-latte-light cursor-pointer"
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                type="button"
              >
                about us
              </button>
              <button
                onClick={() => scrollToSection('hiring')}
                className="block w-full text-left bg-latte-jade text-white px-4 py-3 rounded-full font-medium hover:bg-opacity-90 active:bg-opacity-80 transition-all duration-200 mt-2 cursor-pointer"
                style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                type="button"
              >
                now hiring
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
                  href="mailto:hello@lattedacafes.com"
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
        <section id="home" className="scroll-mt-24 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FDF6E3' }}>
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
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-latte-jade leading-tight" style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}>
                      a small
                      <br />
                      <span className="text-latte-blue">ritual</span>
                      <br />
                      done right
                    </h1>
                    {/* Coffee Beans - Positioned after "A Small" */}
                    <motion.img
                      src="/coffee beans.svg"
                      alt=""
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                      animate={{ opacity: 0.3, scale: 1, rotate: 15 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="absolute -right-12 md:-right-32 lg:-right-40 top-0 md:top-2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 pointer-events-none"
                    />
                  </div>

                  {/* CTAs - Stacked vertically for visual interest */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      onClick={() => scrollToSection('menu')}
                      className="bg-latte-jade text-white px-10 py-5 rounded-full text-lg hover:bg-opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl"
                      style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      menu
                    </motion.button>

                    <motion.button
                      onClick={() => scrollToSection('about')}
                      className="bg-latte-jade text-white px-10 py-5 rounded-full text-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
                      style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      about us
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
                  className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] opacity-20 -right-10 md:-right-20 pointer-events-none"
                />

                {/* Large Hero Mascot - Main Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative z-10"
                >
                  <motion.img
                    src="/latte-da-dude.svg"
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
                  className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section - "The Latte Da Way" from latte-da-opus */}
        <section id="about" className="scroll-mt-24 py-20 relative overflow-visible" style={{ backgroundColor: '#FDF6E3' }} ref={aboutRef}>
          {/* Cappuccino Foam Top Border - extends into hero section above */}
          <div className="absolute -top-24 md:-top-32 left-0 w-full overflow-visible leading-none z-50 pointer-events-none">
            <svg
              className="relative block w-full h-32 md:h-48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 0 1750 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FDF6E3" />
                  <stop offset="35%" stopColor="#FDF6E3" />
                  <stop offset="60%" stopColor="#FDF6E3" />
                  <stop offset="70%" stopColor="#FDF6E3" />
                  <stop offset="100%" stopColor="#FDF6E3" />
                </linearGradient>
              </defs>

              {/* Organic froth body */}
              <path
                d="M-50 150 C 40 30 230 90 360 65 C 520 40 700 120 860 55 C 1040 -10 1220 95 1380 55 C 1500 15 1650 90 1720 45 L 1720 260 L -50 260 Z"
                fill="url(#foamGradient)"
              />

              {/* Large foam bubbles - back layer */}
              <circle cx="50" cy="120" r="35" fill="#fff" opacity="0.3" />
              <circle cx="180" cy="100" r="40" fill="#fff" opacity="0.3" />
              <circle cx="350" cy="110" r="38" fill="#fff" opacity="0.3" />
              <circle cx="520" cy="95" r="42" fill="#fff" opacity="0.3" />
              <circle cx="700" cy="105" r="36" fill="#fff" opacity="0.3" />
              <circle cx="880" cy="90" r="44" fill="#fff" opacity="0.3" />
              <circle cx="1050" cy="100" r="38" fill="#fff" opacity="0.3" />
              <circle cx="1220" cy="95" r="40" fill="#fff" opacity="0.3" />
              <circle cx="1400" cy="105" r="35" fill="#fff" opacity="0.3" />
              <circle cx="1580" cy="95" r="42" fill="#fff" opacity="0.3" />

              {/* Medium foam bubbles - middle layer */}
              <circle cx="80" cy="85" r="22" fill="#fff" opacity="0.5" />
              <circle cx="140" cy="100" r="18" fill="#fff" opacity="0.5" />
              <circle cx="220" cy="75" r="25" fill="#fff" opacity="0.5" />
              <circle cx="300" cy="90" r="20" fill="#fff" opacity="0.5" />
              <circle cx="380" cy="80" r="23" fill="#fff" opacity="0.5" />
              <circle cx="460" cy="95" r="19" fill="#fff" opacity="0.5" />
              <circle cx="540" cy="70" r="26" fill="#fff" opacity="0.5" />
              <circle cx="620" cy="85" r="21" fill="#fff" opacity="0.5" />
              <circle cx="700" cy="75" r="24" fill="#fff" opacity="0.5" />
              <circle cx="780" cy="90" r="18" fill="#fff" opacity="0.5" />
              <circle cx="860" cy="65" r="27" fill="#fff" opacity="0.5" />
              <circle cx="940" cy="80" r="22" fill="#fff" opacity="0.5" />
              <circle cx="1020" cy="70" r="25" fill="#fff" opacity="0.5" />
              <circle cx="1100" cy="85" r="20" fill="#fff" opacity="0.5" />
              <circle cx="1180" cy="75" r="23" fill="#fff" opacity="0.5" />
              <circle cx="1260" cy="90" r="19" fill="#fff" opacity="0.5" />
              <circle cx="1340" cy="70" r="26" fill="#fff" opacity="0.5" />
              <circle cx="1420" cy="85" r="21" fill="#fff" opacity="0.5" />
              <circle cx="1500" cy="65" r="28" fill="#fff" opacity="0.5" />
              <circle cx="1580" cy="80" r="22" fill="#fff" opacity="0.5" />
              <circle cx="1660" cy="70" r="20" fill="#fff" opacity="0.5" />

              {/* Small foam bubbles - front layer */}
              <circle cx="60" cy="70" r="10" fill="#fff" opacity="0.7" />
              <circle cx="110" cy="80" r="8" fill="#fff" opacity="0.7" />
              <circle cx="160" cy="65" r="12" fill="#fff" opacity="0.7" />
              <circle cx="240" cy="75" r="9" fill="#fff" opacity="0.7" />
              <circle cx="290" cy="60" r="11" fill="#fff" opacity="0.7" />
              <circle cx="350" cy="70" r="8" fill="#fff" opacity="0.7" />
              <circle cx="420" cy="65" r="13" fill="#fff" opacity="0.7" />
              <circle cx="490" cy="75" r="10" fill="#fff" opacity="0.7" />
              <circle cx="560" cy="60" r="9" fill="#fff" opacity="0.7" />
              <circle cx="630" cy="70" r="12" fill="#fff" opacity="0.7" />
              <circle cx="710" cy="55" r="11" fill="#fff" opacity="0.7" />
              <circle cx="790" cy="65" r="8" fill="#fff" opacity="0.7" />
              <circle cx="870" cy="55" r="14" fill="#fff" opacity="0.7" />
              <circle cx="950" cy="65" r="10" fill="#fff" opacity="0.7" />
              <circle cx="1030" cy="55" r="12" fill="#fff" opacity="0.7" />
              <circle cx="1110" cy="70" r="9" fill="#fff" opacity="0.7" />
              <circle cx="1190" cy="60" r="11" fill="#fff" opacity="0.7" />
              <circle cx="1270" cy="70" r="8" fill="#fff" opacity="0.7" />
              <circle cx="1350" cy="55" r="13" fill="#fff" opacity="0.7" />
              <circle cx="1430" cy="65" r="10" fill="#fff" opacity="0.7" />
              <circle cx="1510" cy="55" r="12" fill="#fff" opacity="0.7" />
              <circle cx="1590" cy="65" r="9" fill="#fff" opacity="0.7" />
              <circle cx="1670" cy="60" r="11" fill="#fff" opacity="0.7" />

              {/* Tiny bubbles - detail layer */}
              <circle cx="95" cy="95" r="5" fill="#fff" opacity="0.8" />
              <circle cx="175" cy="88" r="4" fill="#fff" opacity="0.8" />
              <circle cx="265" cy="82" r="6" fill="#fff" opacity="0.8" />
              <circle cx="335" cy="92" r="4" fill="#fff" opacity="0.8" />
              <circle cx="445" cy="85" r="5" fill="#fff" opacity="0.8" />
              <circle cx="515" cy="90" r="4" fill="#fff" opacity="0.8" />
              <circle cx="595" cy="78" r="6" fill="#fff" opacity="0.8" />
              <circle cx="675" cy="88" r="5" fill="#fff" opacity="0.8" />
              <circle cx="755" cy="80" r="4" fill="#fff" opacity="0.8" />
              <circle cx="835" cy="75" r="6" fill="#fff" opacity="0.8" />
              <circle cx="915" cy="88" r="5" fill="#fff" opacity="0.8" />
              <circle cx="995" cy="82" r="4" fill="#fff" opacity="0.8" />
              <circle cx="1075" cy="78" r="6" fill="#fff" opacity="0.8" />
              <circle cx="1155" cy="85" r="5" fill="#fff" opacity="0.8" />
              <circle cx="1235" cy="80" r="4" fill="#fff" opacity="0.8" />
              <circle cx="1315" cy="88" r="6" fill="#fff" opacity="0.8" />
              <circle cx="1395" cy="75" r="5" fill="#fff" opacity="0.8" />
              <circle cx="1475" cy="82" r="4" fill="#fff" opacity="0.8" />
              <circle cx="1555" cy="78" r="6" fill="#fff" opacity="0.8" />
              <circle cx="1635" cy="85" r="5" fill="#fff" opacity="0.8" />

            </svg>
          </div>

          {/* Background decorative elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
            <img src="/leaf-green.svg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 rotate-180 pointer-events-none">
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
              <div className="text-left mb-16 max-w-3xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-5xl text-latte-jade mb-4"
                  style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  your coffee's still jetlagged.
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-latte-jade rounded-full"
                  initial={{ width: 0 }}
                  animate={aboutInView ? { width: 96 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>

              {/* Main Content */}
              <div className="max-w-3xl mx-auto" style={{ fontFamily: 'Mezzogiorno', fontWeight: 600 }}>
                {/* Intro Text */}
                <motion.div
                  className="space-y-6 text-left mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    most coffee sits in warehouses for six months before it hits your cup.  we thought that was weird.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    we source coffee that's farm to cup in 10 days.  not because we're fancy.  because fresh coffee tastes better.  obviously.
                  </p>
                </motion.div>

                {/* Stats with Mascot */}
                <div className="relative mb-12">
                  <motion.div
                    className="grid grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="text-left">
                      <div className="text-6xl md:text-7xl text-latte-jade" style={{ fontWeight: 900 }}>10</div>
                      <div className="text-sm text-gray-600 mt-2">days, farm to cup</div>
                    </div>
                    <div className="text-left">
                      <div className="text-6xl md:text-7xl text-black" style={{ fontWeight: 900 }}>180</div>
                      <div className="text-sm text-gray-600 mt-2">days, industry average</div>
                    </div>
                  </motion.div>

                  </div>

                {/* The Short Version */}
                <motion.div
                  className="text-left space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <p className="text-lg text-gray-700">everything else? same story. high quality. fresh daily.</p>
                  <p className="text-lg text-gray-700">we don't cut corners.  we don't hoard beans in some warehouse in jersey.</p>
                  <p className="text-2xl text-latte-jade">just good stuff, made right.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Devocion Partnership Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'Mezzogiorno', fontWeight: 900 }}>
                  latte da & devoción
                </h2>
              </div>

              {/* Images Grid */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/devocion-black.png"
                    alt="Proudly Serving Devoción"
                    className="w-full h-[500px] md:h-[800px] object-contain"
                  />
                </motion.div>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/devocion-timeline.png"
                    alt="Devoción Green-to-Cup Timeline"
                    className="w-full h-[400px] md:h-[650px] object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section - Switchable menu from latte-da-opus */}
        <section id="menu" className="scroll-mt-24 py-20 relative overflow-visible" style={{ backgroundColor: '#FDF6E3' }} ref={menuRef}>
          {/* Cappuccino Foam Top Border */}
          <div className="absolute -top-24 md:-top-32 left-0 w-full overflow-visible leading-none z-50 pointer-events-none">
            <svg
              className="relative block w-full h-32 md:h-48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 0 1750 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="menuFoamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#f5f0e8" />
                  <stop offset="100%" stopColor="#FDF6E3" />
                </linearGradient>
              </defs>

              {/* Organic froth body */}
              <path
                d="M-50 150 C 40 30 230 90 360 65 C 520 40 700 120 860 55 C 1040 -10 1220 95 1380 55 C 1500 15 1650 90 1720 45 L 1720 260 L -50 260 Z"
                fill="url(#menuFoamGradient)"
              />

              {/* Extra large foam bubbles - back layer */}
              <circle cx="100" cy="140" r="50" fill="#fff" opacity="0.4" />
              <circle cx="300" cy="130" r="55" fill="#fff" opacity="0.35" />
              <circle cx="500" cy="125" r="52" fill="#fff" opacity="0.4" />
              <circle cx="750" cy="135" r="58" fill="#fff" opacity="0.35" />
              <circle cx="950" cy="120" r="54" fill="#fff" opacity="0.4" />
              <circle cx="1150" cy="130" r="50" fill="#fff" opacity="0.35" />
              <circle cx="1350" cy="125" r="56" fill="#fff" opacity="0.4" />
              <circle cx="1550" cy="130" r="52" fill="#fff" opacity="0.35" />

              {/* Large foam bubbles */}
              <circle cx="50" cy="110" r="40" fill="#fff" opacity="0.5" />
              <circle cx="180" cy="95" r="45" fill="#fff" opacity="0.5" />
              <circle cx="350" cy="100" r="42" fill="#fff" opacity="0.5" />
              <circle cx="520" cy="90" r="48" fill="#fff" opacity="0.5" />
              <circle cx="700" cy="95" r="44" fill="#fff" opacity="0.5" />
              <circle cx="880" cy="85" r="50" fill="#fff" opacity="0.5" />
              <circle cx="1050" cy="95" r="46" fill="#fff" opacity="0.5" />
              <circle cx="1220" cy="90" r="48" fill="#fff" opacity="0.5" />
              <circle cx="1400" cy="95" r="42" fill="#fff" opacity="0.5" />
              <circle cx="1580" cy="88" r="50" fill="#fff" opacity="0.5" />

              {/* Medium foam bubbles */}
              <circle cx="80" cy="75" r="28" fill="#fff" opacity="0.65" />
              <circle cx="140" cy="90" r="22" fill="#fff" opacity="0.6" />
              <circle cx="220" cy="70" r="30" fill="#fff" opacity="0.65" />
              <circle cx="300" cy="85" r="24" fill="#fff" opacity="0.6" />
              <circle cx="380" cy="72" r="28" fill="#fff" opacity="0.65" />
              <circle cx="460" cy="88" r="25" fill="#fff" opacity="0.6" />
              <circle cx="540" cy="65" r="32" fill="#fff" opacity="0.65" />
              <circle cx="620" cy="80" r="26" fill="#fff" opacity="0.6" />
              <circle cx="700" cy="68" r="30" fill="#fff" opacity="0.65" />
              <circle cx="780" cy="82" r="24" fill="#fff" opacity="0.6" />
              <circle cx="860" cy="60" r="34" fill="#fff" opacity="0.65" />
              <circle cx="940" cy="75" r="28" fill="#fff" opacity="0.6" />
              <circle cx="1020" cy="65" r="32" fill="#fff" opacity="0.65" />
              <circle cx="1100" cy="80" r="26" fill="#fff" opacity="0.6" />
              <circle cx="1180" cy="68" r="30" fill="#fff" opacity="0.65" />
              <circle cx="1260" cy="82" r="24" fill="#fff" opacity="0.6" />
              <circle cx="1340" cy="62" r="32" fill="#fff" opacity="0.65" />
              <circle cx="1420" cy="78" r="28" fill="#fff" opacity="0.6" />
              <circle cx="1500" cy="58" r="35" fill="#fff" opacity="0.65" />
              <circle cx="1580" cy="72" r="28" fill="#fff" opacity="0.6" />
              <circle cx="1660" cy="65" r="26" fill="#fff" opacity="0.65" />

              {/* Small foam bubbles */}
              <circle cx="60" cy="60" r="14" fill="#fff" opacity="0.8" />
              <circle cx="110" cy="70" r="11" fill="#fff" opacity="0.75" />
              <circle cx="160" cy="55" r="16" fill="#fff" opacity="0.8" />
              <circle cx="210" cy="65" r="12" fill="#fff" opacity="0.75" />
              <circle cx="270" cy="52" r="15" fill="#fff" opacity="0.8" />
              <circle cx="330" cy="62" r="13" fill="#fff" opacity="0.75" />
              <circle cx="390" cy="55" r="17" fill="#fff" opacity="0.8" />
              <circle cx="450" cy="65" r="12" fill="#fff" opacity="0.75" />
              <circle cx="510" cy="50" r="16" fill="#fff" opacity="0.8" />
              <circle cx="570" cy="60" r="14" fill="#fff" opacity="0.75" />
              <circle cx="630" cy="52" r="15" fill="#fff" opacity="0.8" />
              <circle cx="690" cy="58" r="13" fill="#fff" opacity="0.75" />
              <circle cx="750" cy="48" r="18" fill="#fff" opacity="0.8" />
              <circle cx="810" cy="58" r="14" fill="#fff" opacity="0.75" />
              <circle cx="870" cy="45" r="17" fill="#fff" opacity="0.8" />
              <circle cx="930" cy="55" r="15" fill="#fff" opacity="0.75" />
              <circle cx="990" cy="48" r="16" fill="#fff" opacity="0.8" />
              <circle cx="1050" cy="58" r="13" fill="#fff" opacity="0.75" />
              <circle cx="1110" cy="52" r="15" fill="#fff" opacity="0.8" />
              <circle cx="1170" cy="60" r="14" fill="#fff" opacity="0.75" />
              <circle cx="1230" cy="50" r="17" fill="#fff" opacity="0.8" />
              <circle cx="1290" cy="58" r="13" fill="#fff" opacity="0.75" />
              <circle cx="1350" cy="48" r="16" fill="#fff" opacity="0.8" />
              <circle cx="1410" cy="56" r="14" fill="#fff" opacity="0.75" />
              <circle cx="1470" cy="45" r="18" fill="#fff" opacity="0.8" />
              <circle cx="1530" cy="55" r="15" fill="#fff" opacity="0.75" />
              <circle cx="1590" cy="50" r="16" fill="#fff" opacity="0.8" />
              <circle cx="1650" cy="58" r="13" fill="#fff" opacity="0.75" />

              {/* Tiny bubbles - detail layer */}
              <circle cx="75" cy="50" r="7" fill="#fff" opacity="0.9" />
              <circle cx="135" cy="55" r="5" fill="#fff" opacity="0.85" />
              <circle cx="195" cy="48" r="8" fill="#fff" opacity="0.9" />
              <circle cx="255" cy="52" r="6" fill="#fff" opacity="0.85" />
              <circle cx="315" cy="45" r="7" fill="#fff" opacity="0.9" />
              <circle cx="375" cy="50" r="5" fill="#fff" opacity="0.85" />
              <circle cx="435" cy="48" r="8" fill="#fff" opacity="0.9" />
              <circle cx="495" cy="42" r="6" fill="#fff" opacity="0.85" />
              <circle cx="555" cy="45" r="7" fill="#fff" opacity="0.9" />
              <circle cx="615" cy="50" r="5" fill="#fff" opacity="0.85" />
              <circle cx="675" cy="42" r="8" fill="#fff" opacity="0.9" />
              <circle cx="735" cy="48" r="6" fill="#fff" opacity="0.85" />
              <circle cx="795" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="855" cy="45" r="5" fill="#fff" opacity="0.85" />
              <circle cx="915" cy="42" r="8" fill="#fff" opacity="0.9" />
              <circle cx="975" cy="48" r="6" fill="#fff" opacity="0.85" />
              <circle cx="1035" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="1095" cy="45" r="5" fill="#fff" opacity="0.85" />
              <circle cx="1155" cy="42" r="8" fill="#fff" opacity="0.9" />
              <circle cx="1215" cy="48" r="6" fill="#fff" opacity="0.85" />
              <circle cx="1275" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="1335" cy="45" r="5" fill="#fff" opacity="0.85" />
              <circle cx="1395" cy="38" r="8" fill="#fff" opacity="0.9" />
              <circle cx="1455" cy="44" r="6" fill="#fff" opacity="0.85" />
              <circle cx="1515" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="1575" cy="46" r="5" fill="#fff" opacity="0.85" />
              <circle cx="1635" cy="42" r="8" fill="#fff" opacity="0.9" />
            </svg>
          </div>

          {/* Background decoration */}
          <div className="absolute top-10 right-10 w-96 h-96 opacity-30 pointer-events-none">
            <img src="/coffee ring stain.svg" alt="" className="w-full h-full" />
          </div>
          {/* Coffee Splash - Desktop */}
          <div className="absolute top-1/3 left-10 w-[500px] h-[500px] pointer-events-none hidden lg:block">
            <motion.img
              src="/coffee-splash.png"
              alt=""
              className="w-full h-full object-contain"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          {/* Coffee Splash - Mobile */}
          <div className="lg:hidden flex justify-center mb-4 mt-8">
            <motion.img
              src="/coffee-splash.png"
              alt=""
              className="w-40 h-40 object-contain"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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
                  style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={menuInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  all the hits
                </motion.h2>
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
                        ? 'bg-latte-jade text-white'
                        : 'text-gray-700 hover:opacity-80'
                    }`}
                    style={{
                      fontFamily: 'Mezzogiorno',
                      fontWeight: 700,
                      backgroundColor: activeMenuCategory === cat.id ? undefined : '#FDF6E3'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </motion.div>

              {/* Menu Items */}
              <motion.div
                className="rounded-3xl shadow-xl p-6 md:p-10"
                style={{ backgroundColor: '#FDF6E3' }}
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
                      <h3 className="text-lg md:text-xl font-semibold text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                        {item.name}
                      </h3>
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
                  <p className="text-sm text-gray-600 text-center" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                    {activeMenuCategory === 'espresso' && 'your choice of milk and flavors. ask barista for selection!'}
                    {activeMenuCategory === 'coffee' && 'your choice of milk and flavors. ask barista for selection!'}
                    {activeMenuCategory === 'specialty' && 'your choice of milk and flavors. ask barista for selection!'}
                    {activeMenuCategory === 'notespresso' && 'your choice of milk and flavors. ask barista for selection!'}
                    {activeMenuCategory === 'nocaffeine' && 'your choice of tea, milk, and flavors. ask your barista for selections!'}
                    {activeMenuCategory === 'tea' && 'your choice of tea, milk, and flavors. ask your barista for selections!'}
                    {activeMenuCategory === 'food' && 'fresh daily. pastry happy hour at 3 pm on weekdays and 4pm on weekends'}
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
          className="scroll-mt-24 px-6 py-24 relative overflow-visible" style={{ backgroundColor: '#FDF6E3' }}
          ref={hiringRef}
          initial={{ opacity: 0, y: 60 }}
          animate={hiringInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cappuccino Foam Top Border */}
          <div className="absolute -top-24 md:-top-32 left-0 w-full overflow-visible leading-none z-50 pointer-events-none">
            <svg
              className="relative block w-full h-32 md:h-48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 0 1750 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="hiringFoamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#f5f0e8" />
                  <stop offset="100%" stopColor="#FDF6E3" />
                </linearGradient>
              </defs>

              {/* Organic froth body */}
              <path
                d="M-50 150 C 40 30 230 90 360 65 C 520 40 700 120 860 55 C 1040 -10 1220 95 1380 55 C 1500 15 1650 90 1720 45 L 1720 260 L -50 260 Z"
                fill="url(#hiringFoamGradient)"
              />

              {/* Large foam bubbles */}
              <circle cx="100" cy="140" r="50" fill="#fff" opacity="0.4" />
              <circle cx="300" cy="130" r="55" fill="#fff" opacity="0.35" />
              <circle cx="500" cy="125" r="52" fill="#fff" opacity="0.4" />
              <circle cx="750" cy="135" r="58" fill="#fff" opacity="0.35" />
              <circle cx="950" cy="120" r="54" fill="#fff" opacity="0.4" />
              <circle cx="1150" cy="130" r="50" fill="#fff" opacity="0.35" />
              <circle cx="1350" cy="125" r="56" fill="#fff" opacity="0.4" />
              <circle cx="1550" cy="130" r="52" fill="#fff" opacity="0.35" />

              {/* Medium foam bubbles */}
              <circle cx="80" cy="85" r="28" fill="#fff" opacity="0.6" />
              <circle cx="220" cy="75" r="30" fill="#fff" opacity="0.6" />
              <circle cx="380" cy="80" r="28" fill="#fff" opacity="0.6" />
              <circle cx="540" cy="70" r="32" fill="#fff" opacity="0.6" />
              <circle cx="700" cy="75" r="30" fill="#fff" opacity="0.6" />
              <circle cx="860" cy="65" r="34" fill="#fff" opacity="0.6" />
              <circle cx="1020" cy="70" r="32" fill="#fff" opacity="0.6" />
              <circle cx="1180" cy="75" r="30" fill="#fff" opacity="0.6" />
              <circle cx="1340" cy="70" r="32" fill="#fff" opacity="0.6" />
              <circle cx="1500" cy="65" r="35" fill="#fff" opacity="0.6" />

              {/* Small foam bubbles */}
              <circle cx="60" cy="65" r="14" fill="#fff" opacity="0.8" />
              <circle cx="160" cy="60" r="16" fill="#fff" opacity="0.8" />
              <circle cx="290" cy="55" r="15" fill="#fff" opacity="0.8" />
              <circle cx="420" cy="60" r="17" fill="#fff" opacity="0.8" />
              <circle cx="560" cy="55" r="16" fill="#fff" opacity="0.8" />
              <circle cx="710" cy="50" r="18" fill="#fff" opacity="0.8" />
              <circle cx="870" cy="50" r="17" fill="#fff" opacity="0.8" />
              <circle cx="1030" cy="55" r="16" fill="#fff" opacity="0.8" />
              <circle cx="1190" cy="55" r="15" fill="#fff" opacity="0.8" />
              <circle cx="1350" cy="50" r="17" fill="#fff" opacity="0.8" />
              <circle cx="1510" cy="50" r="16" fill="#fff" opacity="0.8" />

              {/* Tiny bubbles */}
              <circle cx="95" cy="50" r="7" fill="#fff" opacity="0.9" />
              <circle cx="195" cy="48" r="8" fill="#fff" opacity="0.9" />
              <circle cx="315" cy="45" r="7" fill="#fff" opacity="0.9" />
              <circle cx="435" cy="48" r="8" fill="#fff" opacity="0.9" />
              <circle cx="555" cy="45" r="7" fill="#fff" opacity="0.9" />
              <circle cx="675" cy="42" r="8" fill="#fff" opacity="0.9" />
              <circle cx="795" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="915" cy="42" r="8" fill="#fff" opacity="0.9" />
              <circle cx="1035" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="1155" cy="42" r="8" fill="#fff" opacity="0.9" />
              <circle cx="1275" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="1395" cy="38" r="8" fill="#fff" opacity="0.9" />
              <circle cx="1515" cy="40" r="7" fill="#fff" opacity="0.9" />
              <circle cx="1635" cy="42" r="8" fill="#fff" opacity="0.9" />
            </svg>
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {/* Section Header */}
              <div className="space-y-4">
                <p className="text-xs tracking-[0.45em] text-latte-blue/70" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>careers</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  we're hiring experienced baristas who love great coffee.
                </h2>
                <p className="text-base text-latte-blue max-w-3xl" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  if you're passionate about coffee craft and creating memorable experiences, we want to meet you.
                </p>
              </div>
              <ul className="space-y-3">
                {hiringBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                    <span className="h-2 w-2 rounded-full bg-latte-jade" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl border border-latte-blue/10 bg-white/80 p-5 text-sm text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                send questions to{' '}
                <a href="mailto:hello@lattedacafes.com" className="font-semibold text-latte-blue underline">
                  hello@lattedacafes.com
                </a>{' '}
                or drop your info below. we review applications weekly.
              </div>
            </div>
            <form
              className="rounded-[32px] border border-latte-blue/10 bg-white p-6 shadow-2xl shadow-latte-blue/10"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4">
                <label className="text-sm font-semibold text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  name
                  <input
                    type="text"
                    required
                    placeholder="full name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-latte-light px-4 py-3 text-sm focus:border-latte-blue focus:outline-none"
                    style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                  />
                </label>
                <label className="text-sm font-semibold text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  email
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-latte-light px-4 py-3 text-sm focus:border-latte-blue focus:outline-none"
                    style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                  />
                </label>
                <div className="text-sm">
                  <p className="font-semibold text-latte-blue mb-2" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>position</p>
                  <div className="rounded-2xl border border-latte-jade bg-latte-light/50 px-4 py-3">
                    <span className="text-latte-jade font-medium" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>barista position</span>
                  </div>
                </div>
                <label className="text-sm font-semibold text-latte-blue" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  message
                  <textarea
                    rows={4}
                    placeholder="tell us about your vibe, experience, and availability..."
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-latte-light px-4 py-3 text-sm focus:border-latte-blue focus:outline-none"
                    style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-latte-jade px-6 py-3 text-sm font-semibold tracking-[0.4em] text-white transition hover:-translate-y-0.5"
                  style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer - From latte-da-opus with black and white map */}
      <footer className="" style={{ backgroundColor: '#FDF6E3' }} ref={footerRef}>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo & About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <img
                src="/latte-da-new-logo.svg"
                alt="Latte Da"
                className="h-10 mb-4"
              />
              <p className="text-gray-700 text-sm" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>we'll make you something good.</p>
              <p className="text-gray-700 text-sm mt-4" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>bay ridge, brooklyn. off 3rd avenue. big windows. come say hi.</p>
            </motion.div>

            {/* Hours + Coffee Splash on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div>
                <h3 className="font-bold text-latte-blue mb-4 flex items-center gap-2" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  <Clock className="w-5 h-5" />
                  hours
                </h3>
                <div className="space-y-2">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="text-sm" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600 block">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
                          </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-latte-blue mb-4" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+13474920223"
                  className="flex items-center gap-2 text-gray-700 hover:text-latte-jade transition-colors"
                  style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(347) 492-0223</span>
                </a>
                <a
                  href="mailto:hello@lattedacafes.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-latte-jade transition-colors"
                  style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@lattedacafes.com</span>
                </a>
                <div className="flex items-center gap-2 text-gray-700" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">280 86th st, brooklyn</span>
                </div>
              </div>
            </motion.div>

            {/* Coffee Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center justify-start md:justify-center -mt-12 md:mt-0 lg:-mt-24 lg:-ml-20"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
              >
                <source src="/coffee-animation.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold text-latte-blue mb-4" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>connect</h3>
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
                  href="mailto:hello@lattedacafes.com"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-latte-jade hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                follow us for daily specials and coffee tips!
              </p>
            </motion.div>

            {/* Coffee Splash Image - Desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:flex items-center justify-center"
            >
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
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                © 2025 latte da. all rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-latte-jade transition-colors" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  privacy policy
                </a>
                <a href="#" className="text-gray-600 hover:text-latte-jade transition-colors" style={{ fontFamily: 'Mezzogiorno', fontWeight: 700 }}>
                  terms of service
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
