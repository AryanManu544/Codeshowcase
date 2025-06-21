import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [moon, setMoon] = useState(null);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateMoon();

        const handleResize = () => {
            generateStars();
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            const twinkleType = Math.random();
            const colorType = Math.random();
            
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                twinkleDelay: Math.random() * 8, // Random delay for twinkling
                twinkleType: twinkleType > 0.7 ? 'bright' : twinkleType > 0.4 ? 'pulse' : 'gentle',
                glowColor: colorType > 0.85 ? 
                    ['#87CEEB', '#FFD700', '#FFB6C1', '#98FB98', '#DDA0DD'][Math.floor(Math.random() * 5)] 
                    : '#FFFFFF',
                hasRandomGlow: Math.random() > 0.6 // 40% chance for random glow effect
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 6; // Increased from 4
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            const meteorType = Math.random();
            const colors = [
                { main: '#FFFFFF', trail: '#87CEEB' }, // Blue-white
                { main: '#FFD700', trail: '#FFA500' }, // Golden
                { main: '#FFB6C1', trail: '#FF69B4' }, // Pink
                { main: '#98FB98', trail: '#00FF7F' }, // Green
                { main: '#DDA0DD', trail: '#9370DB' }, // Purple
                { main: '#FF6347', trail: '#FF4500' }  // Red-orange
            ];
            const colorSet = colors[Math.floor(Math.random() * colors.length)];
            
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 120 - 20, // Can start slightly off-screen
                y: Math.random() * 20,
                delay: Math.random() * 10, // Increased delay range
                animationDuration: Math.random() * 4 + 4, // Longer duration
                colors: colorSet,
                isSpecial: meteorType > 0.6, // 40% chance for special effects
                glowIntensity: Math.random() * 0.4 + 0.6
            });
        }
        setMeteors(newMeteors);
    };

    const generateMoon = () => {
        setMoon({
            id: 'main-moon',
            top: '15%',
            left: 'calc(100% - 100px - 3vw)',
            coreSize: 70,
            glowSize: 140,
            raySize: 150,
            colorCore: 'rgba(240, 248, 255, 0.95)',
            colorGlow: 'rgba(176, 196, 222, 0.8)',
            colorRay: 'rgba(147, 168, 211, 0.5)',
        });
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Enhanced Stars with varied twinkling */}
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className={`star ${
                        star.twinkleType === 'bright' ? 'animate-twinkle-bright' :
                        star.twinkleType === 'pulse' ? 'animate-pulse-glow' :
                        'animate-pulse-subtle'
                    }`}
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        animationDelay: star.twinkleDelay + "s",
                        background: star.glowColor,
                        boxShadow: star.hasRandomGlow ? 
                            `0 0 ${star.size * 4}px ${star.glowColor}, 0 0 ${star.size * 8}px ${star.glowColor}40` :
                            `0 0 ${star.size * 2}px ${star.glowColor}`,
                        '--star-glow-color': star.glowColor
                    }}
                />
            ))}

            {/* Moon object */}
            {moon && (
                <div style={{
                        '--moon-core-size': `${moon.coreSize}px`,
                        '--moon-glow-size': `${moon.glowSize}px`,
                        '--moon-ray-size': `${moon.raySize}px`
                    }}>
                    {/* Moon Ray Effect (Largest, most diffuse) */}
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: 'var(--moon-ray-size)',
                            height: 'var(--moon-ray-size)',
                            top: `calc(${moon.top} - (var(--moon-ray-size) - var(--moon-core-size)) / 2 + var(--moon-core-size)/2 - var(--moon-ray-size)/2)`,
                            left: `calc(${moon.left} - (var(--moon-ray-size) - var(--moon-core-size)) / 2 + var(--moon-core-size)/2 - var(--moon-ray-size)/2)`,
                            background: `radial-gradient(ellipse at center, ${moon.colorRay} 0%, transparent 70%)`,
                            filter: `blur(30px)`,
                            opacity: 0.6,
                        }}
                    />
                    {/* Moon Main Glow (Mid layer) */}
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: 'var(--moon-glow-size)',
                            height: 'var(--moon-glow-size)',
                            top: `calc(${moon.top} - (var(--moon-glow-size) - var(--moon-core-size)) / 2 + var(--moon-core-size)/2 - var(--moon-glow-size)/2)`,
                            left: `calc(${moon.left} - (var(--moon-glow-size) - var(--moon-core-size)) / 2 + var(--moon-core-size)/2 - var(--moon-glow-size)/2)`,
                            background: `radial-gradient(ellipse at center, ${moon.colorGlow} 10%, transparent 60%)`,
                            filter: `blur(15px)`,
                            opacity: 0.8,
                        }}
                    />
                    {/* Moon Bright Core (Smallest, brightest) */}
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: 'var(--moon-core-size)',
                            height: 'var(--moon-core-size)',
                            top: moon.top,
                            left: moon.left,
                            background: moon.colorCore,
                            boxShadow: `
                                0 0 15px 4px ${moon.colorCore.replace('0.95)', '0.7)')}, 
                                0 0 30px 8px ${moon.colorGlow.replace('0.8)', '0.5)')},
                                0 0 45px 15px ${moon.colorRay.replace('0.5)', '0.3)')}
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
                        animationDelay: meteor.delay + "s",
                    }}
                >
                    {/* Main meteor body */}
                    <div
                        className="meteor-enhanced animate-meteor-enhanced"
                        style={{
                            width: meteor.size * 50 + "px",
                            height: meteor.size * 2 + "px",
                            background: `linear-gradient(90deg, 
                                ${meteor.colors.main} 0%, 
                                ${meteor.colors.main}CC 30%,
                                ${meteor.colors.trail}99 60%,
                                ${meteor.colors.trail}66 80%,
                                transparent 100%)`,
                            animationDuration: meteor.animationDuration + "s",
                            boxShadow: `
                                0 0 ${meteor.size * 6}px ${meteor.colors.main},
                                0 0 ${meteor.size * 12}px ${meteor.colors.trail}80,
                                0 0 ${meteor.size * 20}px ${meteor.colors.trail}40
                            `,
                            filter: `blur(${meteor.size * 0.3}px)`,
                            opacity: meteor.glowIntensity,
                            borderRadius: `${meteor.size}px`,
                        }}
                    />

                    {/* Particle trail for special meteors */}
                    {meteor.isSpecial && (
                        <>
                            <div
                                className="absolute animate-meteor-particle-1"
                                style={{
                                    width: '3px',
                                    height: '3px',
                                    background: meteor.colors.main,
                                    borderRadius: '50%',
                                    left: '-25px',
                                    top: '40%',
                                    animationDuration: meteor.animationDuration + "s",
                                    animationDelay: meteor.delay + 0.1 + "s",
                                    boxShadow: `0 0 8px ${meteor.colors.main}`,
                                }}
                            />
                            <div
                                className="absolute animate-meteor-particle-2"
                                style={{
                                    width: '2px',
                                    height: '2px',
                                    background: meteor.colors.trail,
                                    borderRadius: '50%',
                                    left: '-40px',
                                    top: '60%',
                                    animationDuration: meteor.animationDuration + "s",
                                    animationDelay: meteor.delay + 0.2 + "s",
                                    boxShadow: `0 0 6px ${meteor.colors.trail}`,
                                }}
                            />
                            <div
                                className="absolute animate-meteor-particle-3"
                                style={{
                                    width: '1.5px',
                                    height: '1.5px',
                                    background: '#FFFFFF',
                                    borderRadius: '50%',
                                    left: '-15px',
                                    top: '20%',
                                    animationDuration: meteor.animationDuration + "s",
                                    animationDelay: meteor.delay + 0.15 + "s",
                                    boxShadow: '0 0 4px #FFFFFF',
                                }}
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};