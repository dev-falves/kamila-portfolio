'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function BadgeCard() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Ajuste do caminho base para suportar o subdiretório do GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/kamila-portfolio' : '';
  const avatarTexture = useTexture(`${basePath}/foto-kamila.jpg`);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    const targetRotationY = (x * Math.PI) / 5;
    const targetRotationX = (-y * Math.PI) / 6;

    groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.08;
    groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.08;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef}>
        {/* Clipe Superior */}
        <mesh position={[0, 2.35, 0]}>
          <boxGeometry args={[0.6, 0.15, 0.08]} />
          <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 2.5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Corpo do Crachá */}
        <RoundedBox args={[2.7, 4.2, 0.12]} radius={0.15} smoothness={4}>
          <meshPhysicalMaterial
            color="#0f172a"
            metalness={0.3}
            roughness={0.2}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            reflectivity={0.9}
          />
        </RoundedBox>

        {/* Faixa de Destaque */}
        <mesh position={[0, 1.6, 0.07]}>
          <planeGeometry args={[2.5, 0.5]} />
          <meshStandardMaterial color="#10b981" emissive="#059669" emissiveIntensity={0.4} />
        </mesh>

        <Text
          position={[0, 1.6, 0.08]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          EVENT OPERATIONS VIP PASS
        </Text>

        {/* Foto de Perfil Aplicada com Textura 3D */}
        <mesh position={[0, 0.6, 0.07]}>
          <planeGeometry args={[1.2, 1.2]} />
          <meshStandardMaterial map={avatarTexture} />
        </mesh>

        {/* Textos do Crachá */}
        <Text
          position={[0, -0.2, 0.08]}
          fontSize={0.22}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          KAMILA ARAÚJO
        </Text>

        <Text
          position={[0, -0.45, 0.08]}
          fontSize={0.12}
          color="#38bdf8"
          anchorX="center"
          anchorY="middle"
        >
          PRODUÇÃO & OPERAÇÕES
        </Text>

        {/* Código de Barras */}
        <group position={[0, -1.3, 0.08]}>
          {[-0.8, -0.6, -0.4, -0.3, -0.1, 0.1, 0.3, 0.5, 0.7, 0.8].map((xPos, idx) => (
            <mesh key={idx} position={[xPos, 0, 0]}>
              <planeGeometry args={[idx % 2 === 0 ? 0.08 : 0.03, 0.5]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          ))}
        </group>

        <Text
          position={[0, -1.75, 0.08]}
          fontSize={0.08}
          color="#64748b"
          anchorX="center"
          anchorY="middle"
        >
          ID: KA-2026-SP-EVENT
        </Text>
      </group>
    </Float>
  );
}

export default function DigitalPass3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing relative">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-5, -5, -2]} intensity={1} color="#06b6d4" />
        <pointLight position={[0, 3, 2]} intensity={1.5} color="#10b981" />
        <Suspense fallback={null}>
          <BadgeCard />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-neutral-400 bg-neutral-900/80 px-3 py-1 rounded-full border border-neutral-800 pointer-events-none z-10">
        🖱️ Mova o mouse para interagir
      </div>
    </div>
  );
}
