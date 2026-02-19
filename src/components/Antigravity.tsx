"use client";

import { useEffect, useRef } from 'react';

/**
 * Particle interface for the physics engine
 */
interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    density: number;
}

/**
 * Mouse state interface
 */
interface MouseState {
    x: number | null;
    y: number | null;
    radius: number;
}

interface AntiGravityProps {
    className?: string;
    count?: number;
    magnetRadius?: number;
    color?: string;
    autoAnimate?: boolean;
    particleShape?: string;
}

const AntiGravityBackground: React.FC<AntiGravityProps> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Use a ref for mouse to avoid re-renders but keep values accessible
    const mouse = useRef<MouseState>({ x: null, y: null, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const handleMouseMove = (e: MouseEvent): void => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const init = (): void => {
            // Handling high-DPI displays for sharp edges
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;



            // Use CSS for display size
            canvas.style.width = '100%';
            canvas.style.height = '100%';

            ctx.scale(dpr, dpr);

            particles = [];
            const particleCount = window.innerWidth < 768 ? 300 : 600;

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                particles.push({
                    x: x,
                    y: y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 2 + 1,
                    density: (Math.random() * 20) + 1
                });
            }
        };

        const animate = (): void => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // Fixed color for dark theme assumption since context is unavailable
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Draw logic first to ensure visibility even if mouse is null
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                if (mouse.current.x !== null && mouse.current.y !== null) {
                    // Distance calculation
                    const dx = mouse.current.x - p.x;
                    const dy = mouse.current.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.current.radius) {
                        // Repulsion logic
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.current.radius - distance) / mouse.current.radius;

                        const moveX = forceDirectionX * force * p.density;
                        const moveY = forceDirectionY * force * p.density;

                        p.x -= moveX;
                        p.y -= moveY;
                    } else {
                        // Return to base position with easing
                        if (p.x !== p.baseX) {
                            p.x -= (p.x - p.baseX) * 0.05;
                        }
                        if (p.y !== p.baseY) {
                            p.y -= (p.y - p.baseY) * 0.05;
                        }
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', init);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-0 ${props.className || ''}`}
            aria-hidden="true"
        />
    );
};

export default AntiGravityBackground;