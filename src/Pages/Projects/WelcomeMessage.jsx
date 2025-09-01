import Welcome from '@/components/BackgroundAnimation/Welcome';
import React from 'react';
import bike from '../../assets/Lottifiles/Bike.json';
import Lottie from 'lottie-react';

const WelcomeMessage = () => {
    return (
        <div className='flex flex-col items-center md:justify-center h-screen p-6 md:px-12 text-4xl font-bold md:py-12 text-center'>
            <div className="-mb-10">
                <Lottie animationData={bike} loop autoplay style={{ width: 300, height: 300 }} />
            </div>
            
                <Welcome
                text={["Hi! I am Sowmitra! Welcome to My Portfolio!"]}
                typingSpeed={50}
                pauseDuration={5000}
                showCursor={true}
                cursorCharacter="|"
                textColors={[ "#6336F5"]}
            /> 
            
        </div>
    );
};

export default WelcomeMessage;  
