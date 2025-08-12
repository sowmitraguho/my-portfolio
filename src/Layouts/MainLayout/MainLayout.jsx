import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/Pages/Footer/Footer';
import WelcomeMessage from '@/Pages/Projects/WelcomeMessage';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';


const MainLayout = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";
    const [showSplash, setShowSplash] = useState(true);

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
                        <Outlet />
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default MainLayout;