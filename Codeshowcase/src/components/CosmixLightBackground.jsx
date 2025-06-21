// CosmicLightBackground.jsx
import { useEffect, useState } from "react";

export const CosmicLightBackground = () => {
  const [sun, setSun] = useState(null);
  const [meteors, setMeteors] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setSun({
      id: 'main-sun',
      top: '15%',
      left: 'calc(100% - 120px - 3vw)',
      coreSize: 80,
      glowSize: 180,
      raySize: 280,
      colorCore: 'rgba(255, 255, 235, 0.9)',
      colorGlow: 'rgba(255, 215, 160, 0.7)',
      colorRay: 'rgba(255, 200, 120, 0.4)',
    });

    const generateMeteors = () => {
      const numberOfMeteors = 6;
      const newMeteors = [];
      for (let i = 0; i < numberOfMeteors; i++) {
        const meteorType = Math.random();
        const colors = [
          { main: 'rgba(255, 245, 157, 0.9)', trail: 'rgba(255, 215, 0, 0.6)' },   // Golden
        ];
        const colorSet = colors[Math.floor(Math.random() * colors.length)];
        
        newMeteors.push({
          id: i,
          size: Math.random() * 1.5 + 0.8, 
          x: Math.random() * 120 - 20, 
          y: Math.random() * 30,
          animationDuration: Math.random() * 2 + 2,
          colors: colorSet,
          sparkles: meteorType > 0.6, 
          glowIntensity: Math.random() * 0.5 + 0.5
        });
      }
      setMeteors(newMeteors);
    };

    generateMeteors();

    // 3. Generate More Visible Stars with random twinkling
    const numStars = Math.floor((window.innerWidth * window.innerHeight) / 4000);
    const newStars = Array.from({ length: Math.max(250, numStars) }, (_, i) => {
      const twinkleType = Math.random();
      return {
        id: `star-${Date.now()}-${i}`,
        size: Math.random() * 2.5 + 0.8,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.6 + 0.4,
        animationDelay: `${Math.random() * 10}s`, // Longer random delays
        animationDuration: `${Math.random() * 3 + 2}s`,
        twinkleType: twinkleType > 0.7 ? 'bright' : twinkleType > 0.4 ? 'subtle' : 'gentle',
        glowColor: Math.random() > 0.8 ? 
          ['rgba(135, 206, 250, 0.8)', 'rgba(255, 245, 157, 0.8)', 'rgba(255, 182, 193, 0.8)'][Math.floor(Math.random() * 3)] 
          : 'rgba(255, 255, 255, 0.9)'
      };
    });
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
         style={{ 
           background: "linear-gradient(180deg, #F5E6D3 0%, #E8D5B7 15%, #D4C4B0 30%, #C8B5A8 45%, #B8A89C 60%, #A89B8F 75%, #98877A 90%, #887865 100%)" 
         }}>

      {/* Subtle warm atmospheric layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(255,245,220,0.4)_0%,_transparent_60%)] opacity-70 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,235,200,0.3)_0%,transparent_50%)] opacity-60 blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,220,195,0.25)_0%,transparent_45%)] opacity-50 blur-xl" />

      {/* Enhanced Twinkling Stars with varied effects */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${
            star.twinkleType === 'bright' ? 'animate-star-twinkle-bright' :
            star.twinkleType === 'subtle' ? 'animate-star-twinkle-subtle' :
            'animate-star-twinkle'
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            '--star-base-opacity': star.opacity,
            '--star-glow-color': star.glowColor,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            background: star.glowColor,
            boxShadow: `
              0 0 ${star.size * 2}px ${star.glowColor},
              0 0 ${star.size * 4}px ${star.glowColor.replace('0.9)', '0.6)')},
              0 0 ${star.size * 8}px ${star.glowColor.replace('0.9)', '0.3)')}
            `,
          }}
        />
      ))}

      {/* Smaller Sun object */}
      {sun && (
        <div style={{
            '--sun-core-size': `${sun.coreSize}px`,
            '--sun-glow-size': `${sun.glowSize}px`,
            '--sun-ray-size': `${sun.raySize}px`
          }}>
          {/* Sun Ray Effect (Largest, most diffuse) */}
          <div
            className="absolute rounded-full"
            style={{
              width: 'var(--sun-ray-size)',
              height: 'var(--sun-ray-size)',
              top: `calc(${sun.top} - (var(--sun-ray-size) - var(--sun-core-size)) / 2 + var(--sun-core-size)/2 - var(--sun-ray-size)/2)`,
              left: `calc(${sun.left} - (var(--sun-ray-size) - var(--sun-core-size)) / 2 + var(--sun-core-size)/2 - var(--sun-ray-size)/2)`,
              background: `radial-gradient(ellipse at center, ${sun.colorRay} 0%, transparent 70%)`,
              filter: `blur(40px)`,
              opacity: 0.8,
            }}
          />
          {/* Sun Main Glow (Mid layer) */}
          <div
            className="absolute rounded-full"
            style={{
              width: 'var(--sun-glow-size)',
              height: 'var(--sun-glow-size)',
              top: `calc(${sun.top} - (var(--sun-glow-size) - var(--sun-core-size)) / 2 + var(--sun-core-size)/2 - var(--sun-glow-size)/2)`,
              left: `calc(${sun.left} - (var(--sun-glow-size) - var(--sun-core-size)) / 2 + var(--sun-core-size)/2 - var(--sun-glow-size)/2)`,
              background: `radial-gradient(ellipse at center, ${sun.colorGlow} 10%, transparent 60%)`,
              filter: `blur(20px)`,
              opacity: 0.9,
            }}
          />
          {/* Sun Bright Core (Smallest, brightest) */}
          <div
            className="absolute rounded-full"
            style={{
              width: 'var(--sun-core-size)',
              height: 'var(--sun-core-size)',
              top: sun.top,
              left: sun.left,
              background: sun.colorCore,
              boxShadow: `
                0 0 20px 6px ${sun.colorCore.replace('0.9)', '0.6)')}, 
                0 0 40px 12px ${sun.colorGlow.replace('0.7)', '0.4)')},
                0 0 60px 20px ${sun.colorRay.replace('0.4)', '0.2)')}
              `,
              opacity: 1,
            }}
          />
        </div>
      )}

      {/* Beautiful Enhanced Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute"
          style={{
            left: meteor.x + "%",
            top: meteor.y + "%",
          }}
        >
          {/* Main meteor body with enhanced gradient */}
          <div
            className="meteor-enhanced animate-meteor-beautiful"
            style={{
              width: meteor.size * 60 + "px",
              height: meteor.size * 2 + "px",
              background: `linear-gradient(90deg, 
                ${meteor.colors.main} 0%, 
                ${meteor.colors.main.replace('0.9)', '0.7)')} 40%,
                ${meteor.colors.trail} 70%,
                transparent 100%)`,
              animationDuration: meteor.animationDuration + "s",
              boxShadow: `
                0 0 ${meteor.size * 8}px ${meteor.colors.main},
                0 0 ${meteor.size * 16}px ${meteor.colors.trail},
                0 0 ${meteor.size * 24}px ${meteor.colors.trail.replace('0.6)', '0.3)')}
              `,
              filter: `blur(${meteor.size * 0.5}px)`,
              opacity: meteor.glowIntensity,
            }}
          />
          
          {/* Sparkle trail for special meteors */}
          {meteor.sparkles && (
            <>
              <div
                className="absolute animate-meteor-sparkle-1"
                style={{
                  width: '2px',
                  height: '2px',
                  background: 'white',
                  borderRadius: '50%',
                  left: '-20px',
                  top: '50%',
                  animationDuration: meteor.animationDuration + "s",
                  boxShadow: '0 0 6px white',
                }}
              />
              <div
                className="absolute animate-meteor-sparkle-2"
                style={{
                  width: '1.5px',
                  height: '1.5px',
                  background: meteor.colors.main,
                  borderRadius: '50%',
                  left: '-35px',
                  top: '30%',
                  animationDuration: meteor.animationDuration + "s",
                  boxShadow: `0 0 4px ${meteor.colors.main}`,
                }}
              />
              <div
                className="absolute animate-meteor-sparkle-3"
                style={{
                  width: '1px',
                  height: '1px',
                  background: meteor.colors.trail,
                  borderRadius: '50%',
                  left: '-15px',
                  top: '70%',
                  animationDuration: meteor.animationDuration + "s",
                  boxShadow: `0 0 3px ${meteor.colors.trail}`,
                }}
              />
            </>
          )}
        </div>
      ))}

      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 250 250\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};