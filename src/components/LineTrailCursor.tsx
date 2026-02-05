"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * LineTrailCursor Component
 * Creates a stretching line trail effect that follows the cursor
 */
export default function LineTrailCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trailPoints = useRef<Array<{ x: number; y: number; timestamp: number }>>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse movement - direct manipulation, no setState
        const handleMouseMove = (e: MouseEvent) => {
            // Add new point to trail
            trailPoints.current.push({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            });

            // Keep only recent points (last 500ms)
            const now = Date.now();
            trailPoints.current = trailPoints.current.filter(
                point => now - point.timestamp < 500
            );
        };

        // Use passive event listener for better scroll performance
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Animation loop - runs continuously
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw trail
            if (trailPoints.current.length > 1) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                for (let i = 0; i < trailPoints.current.length - 1; i++) {
                    const point = trailPoints.current[i];
                    const nextPoint = trailPoints.current[i + 1];

                    const opacity = (i / trailPoints.current.length) * 0.5;
                    ctx.strokeStyle = `rgba(145, 52, 41, ${opacity})`;

                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(nextPoint.x, nextPoint.y);
                    ctx.stroke();
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []); // ✅ FIXED: Empty dependency array - runs once!

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
            style={{ mixBlendMode: 'multiply' }}
        />
    );
}
