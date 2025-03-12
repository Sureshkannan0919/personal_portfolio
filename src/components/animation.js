import { useEffect, useRef, useState } from 'react';

const LottieAnimation = ({ animationData, width, height, loop = true }) => {
  const containerRef = useRef(null);
  const [lottie, setLottie] = useState(null);
  const [animationInstance, setAnimationInstance] = useState(null);

  useEffect(() => {
    // Only import and run Lottie on the client side
    import('lottie-web').then((Lottie) => {
      setLottie(Lottie.default);
    });
  }, []);

  useEffect(() => {
    // Only initialize animation when both lottie is loaded and the component is mounted
    if (lottie && containerRef.current) {
      // Clear previous animation if it exists
      if (animationInstance) {
        animationInstance.destroy();
      }

      const instance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: loop,
        autoplay: true,
        animationData: animationData,
      });

      setAnimationInstance(instance);

      // Cleanup on unmount
      return () => {
        instance.destroy();
      };
    }
  }, [lottie, animationData, loop]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: width || '100%', 
        height: height || '100%' 
      }}
    />
  );
};

export default LottieAnimation;