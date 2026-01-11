import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

// Custom hook to handle window resize logic
const useResponsiveState = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  let modelScale = 0.9;
  if (windowWidth < 480) {
    modelScale = 0.5;
  } else if (windowWidth < 768) {
    modelScale = 0.7;
  } else if (windowWidth < 1024) {
    modelScale = 0.8;
  }

  return { isMobile, modelScale };
};

function BrainModel({ brainColor, scale }) {
  const { scene } = useGLTF('/models/neural_networks_of_the_brain.glb');
  const meshRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: brainColor,
          emissive: '#ffffff',
          emissiveIntensity: 0.1,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
          metalness: 0.8,
          roughness: 0.2,
          transmission: 0.1,
          reflectivity: 1.0,
          sheen: 1.0,
          sheenColor: '#ffffff',
          transparent: true,
          opacity: 0.8
        });
      }
    });
  }, [scene, brainColor]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      meshRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <Center>
      <primitive object={scene} ref={meshRef} />
    </Center>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();
  const particleCount = 30;

  useEffect(() => {
    if (particlesRef.current) {
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      }
      particlesRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      particlesRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry ref={particlesRef} />
      <pointsMaterial
        size={0.03}
        color="#888888"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function NeuralNetwork3D() {
  const { isMobile, modelScale } = useResponsiveState();

  return (
    <section
      id="brain-section"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)`,
        pointerEvents: 'none'
      }} />

      {/* Brain Visualization Side */}
      <div style={{
        flex: isMobile ? '1' : '1',
        height: isMobile ? '60vh' : '100vh',
        position: 'relative'
      }}>
        <Canvas
          shadows
          camera={{ position: [0, 0, isMobile ? 6 : 7], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <ambientLight intensity={0.4} color="#3b82f6" />
          <pointLight
            position={[8, 6, 6]}
            intensity={1.5}
            color="#3b82f6"
            castShadow
          />
          <pointLight
            position={[-6, -4, 8]}
            intensity={0.8}
            color="#60a5fa"
          />
          <Suspense fallback={null}>
            <BrainModel brainColor="#cccccc" scale={modelScale} />
            <FloatingParticles />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Content Side */}
      <div style={{
        flex: isMobile ? '1' : '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile ? '4rem 1.5rem' : '3rem 4rem',
        zIndex: 2,
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: isMobile ? '0' : '0 auto 0 0'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '4.5rem',
            fontWeight: '700',
            background: 'linear-gradient(to bottom, #fff, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem',
            lineHeight: '1.1'
          }}>
            Neural Complexity
          </h2>

          <div style={{
            color: 'var(--text-secondary)',
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            lineHeight: '1.8',
            marginBottom: '3rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The human brain—with its intricate network of 86 billion neurons—serves as my greatest source of inspiration in the world of artificial intelligence and machine learning.
            </p>

            <p>
              Just as synapses fire and create connections, neural networks process information through weighted paths, learning patterns that define the future of technology.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP'].map((tag, index) => (
              <span key={index} style={{
                padding: '0.6rem 1.2rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '100px',
                color: '#3b82f6',
                fontSize: '0.9rem',
                fontWeight: '600',
                backdropFilter: 'blur(10px)'
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: 'rgba(255, 107, 157, 0.1)',
            border: '1px solid rgba(255, 107, 157, 0.2)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              color: '#ff6b9d',
              fontStyle: 'italic',
              fontSize: '1rem',
              margin: 0,
              textAlign: 'center'
            }}>
              "The brain is the most complex structure in the universe, and understanding it drives my journey into artificial intelligence."
            </p>
          </div>
        </div>
      </div>

    </section >
  );
}