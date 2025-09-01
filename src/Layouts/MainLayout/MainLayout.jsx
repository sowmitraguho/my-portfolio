import Navbar from '@/components/Navbar/Navbar';
import Particles from '@/components/Particles/Particles';
import { ThemeContext } from '@/Contexts/ThemeContexts/ThemeContext';
import Footer from '@/Pages/Footer/Footer';
import WelcomeMessage from '@/Pages/Projects/WelcomeMessage';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';


const MainLayout = () => {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);
    const isLoading = navigation.state === "loading";
    const [showSplash, setShowSplash] = useState(true);
    const particleColors = theme === "dark"
        ? ["#ffffff", "#aaaaaa"] // light particles for dark mode
        : ["#1e40af", "#3b82f6"]; // blue-ish particles for light mode

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    if (isLoading) return <Loader />;
    return (
        <div>

            <AnimatePresence>
                {showSplash ? (
                    <motion.div
                        key="splash"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <WelcomeMessage />
                    </motion.div>
                ) : (
                    <motion.div
                        key="app"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Navbar />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: -10,
                                pointerEvents: 'none'
                            }}
                        >
                            <Particles
                                particleColors={particleColors}
                                particleCount={500}
                                particleSpread={10}
                                speed={0.1}
                                particleBaseSize={100}
                                moveParticlesOnHover={true}
                                alphaParticles={false}
                                disableRotation={false}
                            />

                        </div>
                        <Outlet />
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default MainLayout;