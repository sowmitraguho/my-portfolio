import Welcome from '@/components/BackgroundAnimation/Welcome';
import React from 'react';
import bike from '../../assets/Lottifiles/bike.json';
import Lottie from 'lottie-react';

const WelcomeMessage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen px-12'>
            <Lottie animationData={bike} loop autoplay style={{ width: 300, height: 300 }} />
            <div className='text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 '>
                <Welcome
                text={["Hi! I am Sowmitra! Welcome to My Portfolio!"]}
                typingSpeed={50}
                pauseDuration={5000}
                showCursor={true}
                cursorCharacter="|"
            />
            </div> 
            
        </div>
    );
};

export default WelcomeMessage;  
