import React, { useEffect, useRef } from 'react';

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm Romantic Birthday Star Palette
    const starColors = ['#FFF8EC', '#FFE9B8', '#F4D58D', '#EFA7B5', '#D9829A', '#B9A7D9'];

    // 1. Tiny Golden & Pink Stars
    const starCount = Math.min(Math.floor((width * height) / 7500), 170);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.35,
        alpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.018 + 0.006,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        driftX: (Math.random() - 0.5) * 0.08,
        driftY: (Math.random() - 0.5) * 0.08,
      });
    }

    // 2. Soft Romantic Bokeh Lights
    const bokehCount = Math.min(Math.floor(width / 160), 12);
    const bokehs = [];
    for (let i = 0; i < bokehCount; i++) {
      bokehs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 60 + 35,
        color: ['rgba(244, 213, 141, 0.035)', 'rgba(239, 167, 181, 0.04)', 'rgba(185, 167, 217, 0.03)'][Math.floor(Math.random() * 3)],
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
      });
    }

    // 3. Occasional Tiny Floating Heart Particles
    const heartParticles = [];
    const spawnHeart = () => {
      if (heartParticles.length < 6 && Math.random() < 0.02) {
        heartParticles.push({
          x: Math.random() * width,
          y: height + 10,
          size: Math.random() * 5 + 4,
          speedY: Math.random() * 0.4 + 0.2,
          speedX: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.35 + 0.15,
          color: Math.random() > 0.5 ? '#EFA7B5' : '#F4D58D',
        });
      }
    };

    const drawHeart = (cx, cy, size, color, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(cx, cy + topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(cx, cy, cx - size / 2, cy, cx - size / 2, cy + topCurveHeight);
      // bottom left curve
      ctx.bezierCurveTo(cx - size / 2, cy + (size + topCurveHeight) / 2, cx, cy + (size + topCurveHeight) / 1.4, cx, cy + size);
      // bottom right curve
      ctx.bezierCurveTo(cx, cy + (size + topCurveHeight) / 1.4, cx + size / 2, cy + (size + topCurveHeight) / 2, cx + size / 2, cy + topCurveHeight);
      // top right curve
      ctx.bezierCurveTo(cx + size / 2, cy, cx, cy, cx, cy + topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // 4. Subtle Shooting Sparkles
    const shootingSparkles = [];
    const createShootingSparkle = () => {
      if (Math.random() < 0.008 && shootingSparkles.length < 2) {
        shootingSparkles.push({
          x: Math.random() * width * 0.8 + width * 0.1,
          y: Math.random() * height * 0.4,
          len: Math.random() * 80 + 40,
          speed: Math.random() * 6 + 4,
          size: Math.random() * 1.3 + 0.6,
          angle: (Math.PI / 4) + (Math.random() * 0.1 - 0.05),
          alpha: 0.85,
        });
      }
    };

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Candlelight Atmosphere Gradient (#080711 -> #100D1A -> #171120)
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        15,
        width * 0.5,
        height * 0.45,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, 'rgba(23, 17, 32, 0.6)');
      bgGrad.addColorStop(0.5, 'rgba(16, 13, 26, 0.85)');
      bgGrad.addColorStop(1, 'rgba(8, 7, 17, 0.98)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Bokeh lights
      bokehs.forEach((b) => {
        b.x += b.speedX;
        b.y += b.speedY;
        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = height + b.radius;
        if (b.y > height + b.radius) b.y = -b.radius;

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.restore();
      });

      // Render & update stars
      stars.forEach((star) => {
        star.y += star.driftY;
        star.x += star.driftX;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const currentAlpha = Math.abs(Math.sin(tick * star.twinkleSpeed)) * star.alpha + 0.15;

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        if (star.radius > 1.1) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = star.color;
        }
        ctx.fill();
        ctx.restore();
      });

      // Spawn & render tiny floating hearts
      spawnHeart();
      for (let i = heartParticles.length - 1; i >= 0; i--) {
        const hp = heartParticles[i];
        hp.y -= hp.speedY;
        hp.x += hp.speedX + Math.sin(tick * 0.02 + i) * 0.15;
        hp.alpha -= 0.0006;

        drawHeart(hp.x, hp.y, hp.size, hp.color, Math.max(hp.alpha, 0));

        if (hp.y < -20 || hp.alpha <= 0) {
          heartParticles.splice(i, 1);
        }
      }

      // Spawn & render shooting sparkles
      createShootingSparkle();
      for (let i = shootingSparkles.length - 1; i >= 0; i--) {
        const s = shootingSparkles[i];
        ctx.save();
        ctx.strokeStyle = `rgba(255, 233, 184, ${s.alpha})`;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#F4D58D';

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.016;

        if (s.alpha <= 0 || s.x > width || s.y > height) {
          shootingSparkles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.98 }}
    />
  );
}
