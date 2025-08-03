'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x888888, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(0, 30, 20);
    scene.add(pointLight);

    // Particle system
    let particles: THREE.BufferGeometry;
    let particleSystem: THREE.Points;

    // Generate golden spiral pattern
    function generateGoldenSpiral(numPoints: number): [number[], number[]] {
      const positions = [];
      const colors = [];
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const maxRadius = 2;
      const numSpirals = 5;

      for (let i = 0; i < numPoints; i++) {
        const t = i / numPoints;

        // Golden spiral formula
        const theta = 2 * Math.PI * goldenRatio * i;
        const radius = maxRadius * Math.pow(t, 0.5); // Square root for more uniform distribution

        // Calculate 3D position
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta);
        const z = (t - 0.5) * 2; // Distribute along Z-axis

        positions.push(x, y, z);

        // Color gradient based on position in spiral
        const hue = t;
        const saturation = 0.8;
        const lightness = 0.5;
        const color = new THREE.Color().setHSL(hue, saturation, lightness);
        colors.push(color.r, color.g, color.b);
      }

      return [positions, colors];
    }

    // Initialize particles
    function initializeParticles() {
      const numParticles = 15000;
      const [initialPositions, colors] = generateGoldenSpiral(numParticles);
      const speedVariations = new Float32Array(numParticles);

      for (let i = 0; i < numParticles; i++) {
        speedVariations[i] = 0.8 + Math.random() * 0.2;
      }

      particles = new THREE.BufferGeometry();
      particles.setAttribute('position', new THREE.Float32BufferAttribute(initialPositions, 3));
      particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      particles.setAttribute(
        'speedVariation',
        new THREE.Float32BufferAttribute(speedVariations, 1),
      );

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.01,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);
    }

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      // Rotate particle system (reversed direction)
      particleSystem.rotation.y -= 0.001; // Changed from += to -=
      particleSystem.rotation.z -= 0.0005; // Changed from += to -=

      const positions = particles.attributes.position.array as Float32Array;
      const speedVariations = particles.attributes.speedVariation.array as Float32Array;
      const time = Date.now() * 0.0001;

      // Update particle positions
      for (let i = 0; i < positions.length; i += 3) {
        const index = i / 3;
        const theta = (2 * Math.PI * index) / (positions.length / 3);

        // Add subtle wave motion (reversed direction)
        positions[i] -= Math.sin(time + theta) * 0.001 * speedVariations[index]; // Changed from += to -=
        positions[i + 1] -= Math.cos(time + theta) * 0.001 * speedVariations[index]; // Changed from += to -=
        positions[i + 2] -= Math.sin(time * 2 + theta) * 0.001 * speedVariations[index]; // Changed from += to -=
      }

      particles.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    // Handle resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    // Initialize and start animation
    initializeParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.remove(particleSystem);
      particles.dispose();

      // material が配列の可能性を考慮
      if (Array.isArray(particleSystem.material)) {
        particleSystem.material.forEach((m) => m.dispose());
      } else {
        particleSystem.material.dispose();
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
