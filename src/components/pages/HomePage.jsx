import React, { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import Navbar from '../organisms/Navbar';
import Hero from '../organisms/Hero';
import HowItWorks from '../organisms/HowItWorks';
import Marquee from '../organisms/Marquee';
import Services from '../organisms/Services';
import Pricelist from '../organisms/Pricelist';
import Membership from '../organisms/Membership';
import Location from '../organisms/Location';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import BookingModal from '../organisms/BookingModal';
import MenuOverlay from '../organisms/MenuOverlay';
import Footer from '../organisms/Footer';

const HomePage = () => {
    // State
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            if (window.scrollY < 100) setActiveSection('home');
        };

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['services', 'pricelist', 'membership', 'location'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };

    }, []);

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });

            setActiveSection(targetId);
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { title: "SERVICES", href: "#services" },
        { title: "PRICELIST", href: "#pricelist" },
        { title: "MEMBERSHIP", href: "#membership" },
        { title: "LOCATION", href: "#location" },
    ];

    return (
        <MainLayout>
             <Navbar 
                scrolled={scrolled} 
                activeSection={activeSection} 
                onNavigate={handleSmoothScroll} 
                onOpenBooking={() => setIsBookingOpen(true)}
                onOpenMenu={() => setIsMenuOpen(true)}
             />

             <MenuOverlay 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                navLinks={navLinks}
                onNavigate={handleSmoothScroll}
                onOpenBooking={() => setIsBookingOpen(true)}
             />

             <BookingModal 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
             />

             <Hero onOpenBooking={() => setIsBookingOpen(true)} />
             <HowItWorks />
             <Marquee />
             <Services onOpenBooking={() => setIsBookingOpen(true)} />
             <Pricelist onOpenBooking={() => setIsBookingOpen(true)} />
             <Membership />
             <Location />
             
             {/* --- FLOATING WHATSAPP --- */}
              <motion.button
                onClick={() => setIsBookingOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center"
              >
                <MessageCircle className="w-8 h-8" />
              </motion.button>

             <Footer />

        </MainLayout>
    );
};

export default HomePage;
