import React from 'react';
import Lottie from 'lottie-react';
import './LottieAnimation.css';

const LottieAnimation = ({ animationData, style, shadowColor }) => {
  const commonLottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      className="lottie-container"
      style={{
        background: `radial-gradient(circle, ${shadowColor} 0%, transparent 70%)`
      }}
    >
      <Lottie
        animationData={animationData}
        {...commonLottieOptions}
        style={style}
      />
    </div>
  );
};

export default LottieAnimation;
